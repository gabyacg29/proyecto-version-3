const fs = require('fs');

// Lee el archivo Json y devuelve objeto literal
function readJSONfile() {
   return JSON.parse(fs.readFileSync(users.JSON, 'utf-8'));
}
// Guarda el json de usuarios
function saveJSONfile(objetos) {
   fs.writeFileSync(users.file, JSON.stringify(objetos, null, ''));
}
//-----------------------------------------//
// Alta de usuario
function agregarUsuario(nombre, apellido, email, contrasenia, categoria, imagen) {
   let nuevoUsuario = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
      Contrasenia: contrasenia,
      Categoria: categoria,
      Imagen: imagen,
   };
   let usuarios = readJSONfile();
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
