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
    let user = {
        Categoria: 'null',
    };
    if(req.session.user){
        user = req.session.user;
    }
    let productos = modelProducts.Consulta();
    let data = {
        Formulario: 'GrillaProductos',
        Productos: productos,
        User: user
    };
    res.render('index',{ data: data });
};
// funcion que renderiza el formulario para cargar producto nuevo
let formularioAlta = (req, res) => {
    let data = {
        Formulario: 'NuevoProducto',
    };
    res.render('formProducto', { data: data });
};
// funcion que renderiza el formulario de detalle de producto
let detalleProducto = (req, res) => {
    let id = req.params.id;
    let productos = modelProducts.Consulta();
    let productoIndividual = Individualizar(productos, id);
    let data = {
        Formulario: 'DetalleProducto',
        Productos: productoIndividual,
    };
    res.render('formProducto',{ data: data });
};
// funcion con la que se crea nuevo producto a partir de post
let crearProducto = (req, res) => {
    let {nombre,descripcion,categoria,color,precio} = req.body;
    let imagen = req.file.filename;
    modelProducts.Alta(nombre,descripcion,imagen,categoria,color,precio);
    res.redirect('/products');
};
// funcion para renderizar la vista de edicion de producto
let formularioEdicion = (req, res) => {
    let id = req.params.id;
    let productos = modelProducts.Consulta();
    let productoIndividual = Individualizar(productos, id);
    let data = {
        Formulario: 'EdicionProducto',
        Productos: productoIndividual,
    };
    res.render('formProducto',{ data: data });
};
// funcion para cargar edicion del producto
let editandoProducto = (req, res) => {
    let id = req.params.id;
    let {nombre,descripcion,categoria,color,precio} = req.body;
    modelProducts.Modificacion(id,nombre,descripcion,categoria,color,precio);
    res.redirect('/products');
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