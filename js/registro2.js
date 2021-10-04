
var registros =[];
function agregarRegistro(){
    var retorno=[];
    var username;
    var correo;
    var contrasena;
    user=document.getElementById('username');
    

    if (user==null){
        user='';
    }
    else{
        usuario=user.value
    }
    email=document.getElementById('correo');
   
    
    if(email==null){
        email='';
    }
    else{
        correo=email.value
    }
    password=document.getElementById('contrasena');
    if(password==null){
        password='';
    }
    else{
        contrasena=password.value
    }
    retorno.push(usuario);
    retorno.push(correo);
    retorno.push(contrasena);
    console.log(retorno);
    registros.push(retorno);
}

function obtenerUsername(arreglo){
    var retorno=[];

    for (i=0;i<arreglo.length;i++){
        if (/[a-zA-Z]/.test(arreglo[i]) && /[0-9]/.test(arreglo[i])){
            if (!(/hotmail\.com/.test(arreglo[i]))){
            retorno.push(arreglo[i]);
            }   
        }
    }
    console.log(retorno);
    return retorno;

}
function filtrarCorreo(arreglo){
    var retorno=[];

    for (i=0;i<arreglo.length;i++){
        if (/hotmail\.com/.test(arreglo[i])){
            retorno.push(arreglo[i]);
        }
    }
    console.log(retorno);
    return retorno;
}
module.exports={registros,filtrarCorreo,obtenerUsername,agregarRegistro}