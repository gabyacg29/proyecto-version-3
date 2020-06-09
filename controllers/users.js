var modelUsers = require("../data/users.js");

// funcion para devolver el formulario de ingreso de usuario ya registrado
let formularioIngreso = (req, res) => {
  let data = {
    Formulario: "UsuarioRegistrado",
  };
  res.render("usuarios", { data: data });
};
// funcion para la validacion de ususario registrado
let validacionUsuario = (req, res) => {
  let { email, contrasenia } = req.body; // se toman los datos del formulario
  let usuarioExistente = modelUsers.Consulta(email);
  if (usuarioExistente != null && usuarioExistente.Contrasenia == contrasenia) {
    let user = {
      id: usuarioExistente.id,
      Nombre: usuarioExistente.Nombre,
      Apellido: usuarioExistente.Apellido,
      Email: usuarioExistente.Email,
      Categoria: usuarioExistente.Categoria,
      Imagen: usuarioExistente.Imagen,
    };
    req.session.user = user;
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
  res.render("usuarios", { data: data });
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
  let imagen = req.file.filename; // se toma el nombre del archivo
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
  console.log(req.session.user);
  if (req.session.user) {
    let { Email } = req.session.user;
    let usuarioExiste = modelUsers.Consulta(Email);
    if (usuarioExiste != null) {
      let data = {
        Formulario: "MisDatos",
        usuario: usuarioExiste,
      };
      res.render("usuarios", { data: data });
    } else {
      res.redirect("/users/login");
    }
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
