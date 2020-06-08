const fs = require('fs');
var path = require('path');

// Lee el archivo Json y devuelve objeto literal
function readJSONfile() {
   let archivo = fs.readFileSync(path.join(__dirname, '..') + '/data/users.json');
   let usuarioss = JSON.parse(archivo);
   return usuarioss;
};
// Guarda el json de usuarios
function saveJSONfile(objetos) {
   fs.writeFileSync(path.join(__dirname, '..') + '/data/users.json', JSON.stringify(objetos, null, ' '));
};
// Ordenar Arreglo de Mayor a Menor
function ordenar (arreglo) {
   let arregloOrdenado = arreglo.sort( function (x, y) {
       if (x.id > y.id) { return -1; }
       else if (x.id < y.id) { return 1; }
       else { return 0; }
   });
   return arregloOrdenado;
};
//-----------------------------------------//
// Alta de usuario
function agregarUsuario(nombre, apellido, email, contrasenia, categoria, upload) {
   let nuevoUsuario = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
      Contrasenia: contrasenia,
      Categoria: categoria,
      Imagen: upload,
   };
   let usuarios = readJSONfile();
   let ordenado = ordenar(usuarios);
   let nuevoid = ordenado[0].id + 1;
   nuevoUsuario.id = nuevoid;
   usuarios.push(nuevoUsuario);
   saveJSONfile(usuarios);
}

//Consulta de usuario
function buscarPorEmail(email) {
   let usuarios = readJSONfile();
   let user = null;
   for (var i = 0; i < (usuarios.length); i++) {
      let cursor = usuarios[i];
      if (email == cursor.Email) {
         user = cursor;
      }
   }
   return user;
};
// Baja de usuario
function eliminarUsuario(email) {
   let usuarios = readJSONfile();
   for (var i = 0; i < (usuarios.length); i++) {
      let cursor = usuarios[i];
      if (email === cursor.Email) {
         arr.splice(i, 1);
      }
   }
}
// Exportar
module.exports = {
   Alta: agregarUsuario,
   Consulta: buscarPorEmail,
   Baja: eliminarUsuario,

}
