const fs = require("fs");
var path = require("path");

// Lee el archivo Json
function readJSONfile() {
  let archivo = fs.readFileSync(
    path.join(__dirname, "..") + "/data/products.json"
  );
  let productos = JSON.parse(archivo);
  return productos;
}
// Guarda el json de productos
function saveJSONfile(objetos) {
  fs.writeFileSync(
    path.join(__dirname, "..") + "/data/products.json",
    JSON.stringify(objetos, null, " ")
  );
}
// Ordenar Arreglo de Mayor a Menor
function ordenar(arreglo) {
  let arregloOrdenado = arreglo.sort(function (x, y) {
    if (x.id > y.id) {
      return -1;
    } else if (x.id < y.id) {
      return 1;
    } else {
      return 0;
    }
  });
  return arregloOrdenado;
}
// Agrega un nuevo producto a la lista de productos
function addProductToList(
  nombre,descripcion,imagen,categoria,color,precio
) {
  console.log('entra a la funcion');
  let nuevoProducto = {
    Nombre: nombre,
    Descripcion: descripcion,
    Imagen: imagen,
    Categoria: categoria,
    Color: color,
    Precio: precio,
  };
  console.log(nuevoProducto);
  let productos = readJSONfile();
  if (productos.length > 0) {
    let ordenado = ordenar(productos);
    let nuevoid = ordenado[0].id + 1;
    nuevoProducto.id = nuevoid;
  } else{
    nuevoProducto.id = 1;
  }
  productos.push(nuevoProducto);
  saveJSONfile(productos);
}
// Busca un producto por su id
function buscarTodos() {
  let productos = readJSONfile();
  return productos; // si no lo encuentra devuelve null
}
//Modificar producto
function modificar(
  id,
  nombre,
  descripcion,
  categoria,
  color,
  precio
) {
  let productos = readJSONfile();
  let guardar = 0;
  for (var i = 0; i < productos.length; i++) {
    let cursor = productos[i];
    if (id == cursor.id) {
      let producto = {
        id: id,
        Nombre: nombre,
        Descripcion: descripcion,
        Imagen: cursor.Imagen,
        Categoria: categoria,
        Color: color,
        Precio: precio,
      };
      productos.splice(i, 1);
      productos.push(producto);
      guardar = 1;
    }
  }
  if (guardar == 1) {
    saveJSONfile(productos);
  }
}

// Eliminar producto
function eliminarProducto(idDeProducto) {
  let productos = readJSONfile();
  for (var i = 0; i < productos.length; i++) {
    let cursor = productos[i];
    if (idDeProducto === cursor.idDeProducto) {
      productos.splice(i, 1);
    }
  }
}
// Exportar
module.exports = {
  Alta: addProductToList,
  Consulta: buscarTodos,
  Modificacion: modificar,
  Baja: eliminarProducto,
};
