var modelUsers = require('../data/users.js');

let formularioIngreso = (req, res) => {
    res.render('index', {title: 'Formulario de Login'});
    // a la espera de formulario de Mariela.
};
let validacionUsuario = (req, res) => {
    let {mail,contrasenia} = req.body;
    let usuarioExiste = modelUsers.Consulta(mail);
    if((usuarioExiste != undefined)&&(usuarioExiste.Contrasenia == contrasenia)){
        res.redirect('/home');
    } else{
        res.redirect('/users/login');
    }
};
let formularioRegistro = (req, res) => {
    res.render('registro', {title: 'Formulario de Registro'});
    // a la espera de formulario de registro de Mariela.
};
let registrandoUsuario = (req, res) => {
    let {nombre,apellido,email,contrasenia,categoria,imagen} = req.body;
    modelUsers.Alta(nombre,apellido,email,contrasenia,categoria,imagen);
    res.redirect('/users/login');
};
let formularioEdicion = (req, res) => {
    res.render('index', {title: 'Formulario de Edicion'});
    // momentaneamente sin utilizar.
};
let detalleUsuario = (req, res) => {
    let {email} = req.session.user;
    let usuarioExiste = modelUsers.Consulta(mail);
    if(usuarioExiste != undefined){
        res.render('index', {usuario: usuarioExiste});
    }  else{
        res.redirect('/users/login');
    }
};

// funcion borrador hasta que se completa cada controlador.
function prueba (res, req){
    res.send('corriendo');
};

module.exports = {
    FormIngreso: formularioIngreso,
    Ingreso: validacionUsuario,
    FormRegistro: formularioRegistro,
    Registrando: registrandoUsuario,
    FormEdicion: prueba,
    Editando: prueba,
    Detalle: detalleUsuario,
};