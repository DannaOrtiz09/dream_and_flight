var registros = [];

function agregarRegistro() {

    var reg = []

    var username;
    var correo;
    var contrasena; 

    user = document.getElementById('username');
    if (user!=null){
        username = user.value;
    }
    else{
        username = '';
    }

    email = document.getElementById('correo');
    if (email !=null){
        correo = email.value;
    }
    else{
        correo = '';
    }

    password = document.getElementById('contrasena');
    if (password !=null){
        contrasena = password.value;
    }
    else{
        contrasena = '';
    }

    reg.push(user);
    reg.push(email);
    reg.push(password);
    registros.push(reg);

    console.log(registros);
}


function obtenerUsername(registros) {
    var usuario = [];
    if (registros != null) {
        for (var i=0; i<registros.length; i++) {
            if (/^[a-zA-Z0-9]/.test(registros[i][0])) {
                usuario.push(registros[i]);
            }
        } 
    }
    console.log(usuario);
    return usuario;
}

function filtrarCorreo(registros) {
    var correo_electronico = [];
    if (registros != null) {
        for (i=0; i<registros.length; i++) {
            if (/hotmail.com/.test(registros[i][1])) {
                correo_electronico.push(registros[i]);
            }
        } 
    }
    console.log(correo_electronico);
    return correo_electronico;
}

/*const form = document.getElementById('form-registro');
form.addEventListener('submit', function (e) {      
    e.preventDefault();
    agregarRegistro();
    obtenerUsername(dataBase);
    filtrarCorreo(dataBase);
});*/

module.exports = {registros, agregarRegistro, obtenerUsername, filtrarCorreo}
