var modelUsers = require("../data/users.js");

// funcion para devolver el formulario de ingreso de usuario ya registrado
let formularioIngreso = (req, res) => {
  let data = {
    Formulario: "UsuarioRegistrado",
  };
  res.render("usuarios", { data: data });
};

let validacionUsuario = (req, res) => {
  let { mail, contrasenia } = req.body;
  let usuarioExiste = modelUsers.Consulta(mail);
  if (usuarioExiste != undefined && usuarioExiste.Contrasenia == contrasenia) {
    res.redirect("/home");
  } else {
    res.redirect("/users/login");
  }
};

// funcion para devolver el formulario de registro de nuevo usuario
let formularioRegistro = (req, res) => {
  let data = {
    Formulario: "FormularioRegistro",
  };
  res.render("usuarios", { data: data });
};
let registrandoUsuario = (req, res) => {
  let {
    nombre,
    apellido,
    email,
    contrasenia,
    contrasenia2,
    categoria,
    imagen,
  } = req.body;
  if (contrasenia == contrasenia2) {
    modelUsers.Alta(nombre, apellido, email, contrasenia, categoria, 'linkavatar');
    res.redirect("/users/login");
  } else{
    res.redirect("/users/register");
  }
};
let formularioEdicion = (req, res) => {
  res.render("index", { title: "Formulario de Edicion" });
  // momentaneamente sin utilizar.
};
let detalleUsuario = (req, res) => {
  let { email } = req.session.user;
  let usuarioExiste = modelUsers.Consulta(mail);
  if (usuarioExiste != undefined) {
    res.render("index", { usuario: usuarioExiste });
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
