var modelUsers = require("../data/users.js");
var multer  =   require('multer');

// funcion para devolver el formulario de ingreso de usuario ya registrado
let formularioIngreso = (req, res) => {
  let data = {
    Formulario: "UsuarioRegistrado",
  };
  res.render("usuarios", data);
};

let validacionUsuario = (req, res) => {
  let { mail, contrasenia } = req.body;
  let usuarioExiste = modelUsers.Consulta(mail);
  if ((usuarioExiste != null) && (usuarioExiste.Contrasenia == contrasenia)) {
    res.redirect("/");
  } else {
    res.redirect("/users/login");
  }
};

// funcion para devolver el formulario de registro de nuevo usuario
let formularioRegistro = (req, res) => {
  let data = {
    Formulario: "FormularioRegistro",
  };
  res.render("usuarios", data);
};
// funcion para realizar el registro de nuevo ususario
let registrandoUsuario = (req, res) => {
  let {
    nombre,
    apellido,
    email,
    contrasenia,
    contrasenia2,
    categoria,
  } = req.body;
  let imagen = req.file.filename
  console.log(req.file);
  if (contrasenia == contrasenia2) {
    modelUsers.Alta(nombre, apellido, email, contrasenia, categoria, imagen);
    res.redirect("/users/login");
  } else {
    res.redirect("/users/register");
  }
};
// 
let formularioEdicion = (req, res) => {
  res.render("index", { title: "Formulario de Edicion" });
  // momentaneamente sin utilizar.
};
let detalleUsuario = (req, res) => {
  let { email } = req.session.user;
  let usuarioExiste = modelUsers.Consulta(email);
  if (usuarioExiste != null) {
    let data = {
      Formulario: 'MisDatos',
      usuario: usuarioExiste,
    };
    res.render("usuarios", data);
  } else {
    res.redirect("/users/login");
  }
};

// funcion borrador hasta que se completa cada controlador.
function prueba(res, req) {
  res.send("corriendo");
}

module.exports = {
  FormIngreso: formularioIngreso,
  Ingreso: validacionUsuario,
  FormRegistro: formularioRegistro,
  Registrando: registrandoUsuario,
  FormEdicion: prueba,
  Editando: prueba,
  Detalle: detalleUsuario,
};
