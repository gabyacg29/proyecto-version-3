var modelProducts = require('../data/products');

// para borrar luego
function prueba (res, req){
    res.send('corriendo');
};
// fin borrado

function Individualizar (arrProductos, id) {
    for(let i=0; i<(arrProductos.length); i++){
        let row = arrProductos[i];
        if(row.id == id){
            return row;
        }
    }
};
// funcion de consulta de todos los productos
let consulta = (req, res) => {
    let productos = modelProducts.Consulta();
    let data = {
        Formulario: 'GrillaProductos',
        Productos: productos,
    };
    res.render('index',{ data: data });
};

let formularioAlta = (req, res) => {
    let data = {
        Formulario: 'NuevoProducto',
    };
    res.render('formProducto', { data: data });
};
let detalleProducto = (req, res) => {
    let id = req.params.id;
    let productos = modelProducts.Consulta();
    let productoIndividual = Individualizar(productos, id);
    // res.send({producto: productoIndividual});
    res.render('detalleProducto', {title: 'Detalle de Producto Individual'});
};
let crearProducto = (req, res) => {
    let {nombre,descripcion,categoria,color,precio} = req.body;
    let imagen = req.file.filename;
    console.log(req.body);
    console.log(imagen);
    modelProducts.Alta(nombre,descripcion,imagen,categoria,color,precio);
    console.log('pasa la funcion');
    res.redirect('/products');
};
let formularioEdicion = (req, res) => {
    let id = req.params.id;
    let productos = modelProducts.Consulta();
    let productoIndividual = Individualizar(productos, id);
    res.send({producto: productoIndividual});
};
let editandoProducto = (req, res) => {
    let id = req.params.id;
    let {nombreProducto,descripcion,imagen,categoria,color,precio} = req.body;
    modelProducts.Modificacion(id,nombreProducto,descripcion,imagen,categoria,color,precio);
    res.redirect('/products/'+id);
};
let eliminandoProducto = (res, req) => {
    let id = req.params.id;
    modelProducts.Baja(id);
    res.redirect('/products');
};

module.exports = {
    Todos: consulta,
    FormAlta: formularioAlta,
    Detalle: detalleProducto,
    Creando: crearProducto,
    FormEdicion: formularioEdicion,
    Editando: editandoProducto,
    Eliminando: eliminandoProducto,
};