
const redex={
    user_l:/[a-zA-Z]/,
    user_n:/[0-9]/,
    correo:/hotmail\.com/,
}
var array =[];
function agregarRegistro(){
    array.push()
}
function obtenerUsername(arreglo){
    var retorno=[];

    for (i=0;i<arreglo.length;i++){
        if (redex.user_l.test(arreglo[i]) && redex.user_n.test(arreglo[i])){
            retorno.push(arreglo[i]);
        }
    }
    console.log(retorno);
    return retorno;

}
function filtrarCorreo(arreglo){
    var retorno=[];

    for (i=0;i<arreglo.length;i++){
        if (redex.correo.test(arreglo[i])){
            retorno.push(arreglo[i]);
        }
    }
    console.log(retorno);
    return retorno;
}
//module.exports={filtrarCorreo,obtenerUsername,agregarRegistro}