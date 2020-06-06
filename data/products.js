const fs = require('fs');

// Lee el archivo Json
function readJSONfile() {
    return JSON.parse(fs.readFileSync(productoController.archivo, 'utf-8'));
}
// Guarda el json de productos
function saveJSONfile(productos) {
    fs.writeFileSync(productoController.archivo, JSON.stringify(productos, null, ' '));
}
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
    productos.push(nuevoProducto);
    saveJSONfile(productos);
}
// Busca un producto por su id
<<<<<<< HEAD
   searchByCode: function(codigo){
    let archivoJson = readJSONfile();
    let producto = null;
    archivoJson.forEach((prod, i) => {
      if (prod["codigo"] == codigo) {
         producto = prod;
      }
    });
    return producto; // si no lo encuentra devuelve null
}
// Eliminar producto
delete_deleteProduct: function(req, res){
    let producto = productoController.searchByCode(req.params.codigo);
=======
function buscarTodos() {
    let productos = readJSONfile();
    return productos; // si no lo encuentra devuelve null
}
//Modificar producto
function modificar(id, nombreProducto, descripcion, imagen, categoria, color, precio) {
>>>>>>> f7a72f39378e7535524777dae6c2287f03e0fdfb
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
}
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
