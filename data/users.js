const fs = require('fs');
var path = require('path');

// Lee el archivo Json y devuelve objeto literal
function readJSONfile() {
   let archivo = fs.readFileSync(path.join(__dirname, '..') + '/data/users.json');
   let usuarioss = JSON.parse(archivo);
   return usuarioss;
}
// Guarda el json de usuarios
function saveJSONfile(objetos) {
   fs.writeFileSync(path.join(__dirname, '..') + '/data/users.json', JSON.stringify(objetos, null, ' '));
}
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
   console.log(nuevoUsuario);
   let usuarios = readJSONfile();
   console.log(usuarios);
   usuarios.push(nuevoUsuario);
   saveJSONfile(usuarios);
}

//Consulta de usuario
function buscarPorEmail(email) {
   let usuarios = readJSONfile();
   let user = undefined;
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
