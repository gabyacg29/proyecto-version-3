// var modelProducts = require('../data/products.js');
// habilitar una vez Santiago haya armado los manipuladores de json

// para borrar luego
var modelProducts = {
    Consulta: () => {return 0},
    Alta: (datos) => {return 0},
    Baja: (ID) => {return 0},
    Modificacion: (ID, datos) => {return 0}
};
// Fin borrado
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

let consulta = (req, res) => {
    let productos = modelProducts.Consulta();
    // res.render({productos: productos});
    res.render('products', {title: 'Consulta de productos'});
};
let formularioAlta = (req, res) => {
    // res.send('Formulario para Alta');
    res.render('index', {title: 'Formulario de Alta de Producto'});
};
let detalleProducto = (req, res) => {
    let id = req.params.id;
    let productos = modelProducts.Consulta();
    let productoIndividual = Individualizar(productos, id);
    // res.send({producto: productoIndividual});
    res.render('detalleProducto', {title: 'Detalle de Producto Individual'});
};
let crearProducto = (req, res) => {
    let {nombreProducto,descripcion,imagen,categoria,color,precio} = req.body;
    modelProducts.Alta(nombreProducto,descripcion,imagen,categoria,color,precio);
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