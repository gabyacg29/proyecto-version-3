const fs = require('fs');

// Lee el archivo Json
function readJSONfile() {
let archivo = fs.readFileSync(path.join(__dirname, '..') + '/data/products.json');
let productos = JSON.parse(archivo);
}
// Guarda el json de productos
function saveJSONfile(objetos) {
    fs.writeFileSync(path.join(__dirname, '..') + '/data/products.json', JSON.stringify(objetos, null, ' '));
}
// Ordenar Arreglo de Mayor a Menor
function ordenar (arreglo) {
    let arregloOrdenado = arreglo.sort( function (x, y) {
        if (x.id > y.id) { return -1; }
        else if (x.id < y.id) { return 1; }
        else { return 0; }
    });
    return arregloOrdenado;
// Agrega un nuevo producto a la lista de productos
function addProductToList(nombreProducto, descripcion, imagen, categoria, color, precio); {
    let nuevoProducto = {
        Nombre: nombreProducto,
        Descripcion: descripcion,
        Imagen: imagen,
        Categoria: categoria,
        Color: color,
        Precio: precio,
    };
    let productos = readJSONfile();
    let ordenado = ordenar(productos);
    let nuevoid = ordenado[0].id + 1;
    nuevoProducto.id = nuevoid;
    console.log(nuevoProducto);
    productos.push(nuevoProducto);
    saveJSONfile(productos);
}
// Busca un producto por su id
function buscarTodos() {
    let productos = readJSONfile();
    return productos; // si no lo encuentra devuelve null
}
//Modificar producto
function modificar(id, nombreProducto, descripcion, imagen, categoria, color, precio) {
    let productos = readJSONfile();
    for (var i = 0; i < (productos.length); i++) {
        let cursor = productos[i];
        if (id == cursor.id) {
            let producto = {
                Id: id,
                Nombre: nombreProducto,
                Descripcion: descripcion,
                Imagen: imagen,
                Categoria: categoria,
                Color: color,
                Precio: precio,
            }
            productos.splice(i, 1);
            productos.push(producto);
        }

    saveJSONfile(nuevoArrayProductos);
    let mensaje = "¡Success!: el producto se eliminó de la lista.";
    return res.redirect("/productos");
 }
    }
    saveJSONfile(productos);

// Eliminar producto
function eliminarProducto(idDeProducto) {
    let productos = readJSONfile();
    for (var i = 0; i < (productos.length); i++) {
        let cursor = productos[i];
        if (idDeProducto === cursor.idDeProducto) {
            productos.splice(i, 1);
        }
    }
}
// Exportar
module.exports = {
    Alta: addProductToList,
    Consulta: buscarPorId,
    Modificacion: modificar,
    Baja: eliminarProducto,
}
