const dia = 0;
const horaActual = 10;

let horaApertura ;
let mensaje;
/*
if([0,6].includes(dia)){
    console.log("Fin de semana");
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}
if(horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{   
    //mensaje = 'ESta cerrado hoy abrimos a las ' + horaApertura;
    mensaje = `Esta cerrado hoy abrimos a las ${ horaApertura }`;
}*/

horaApertura = ([0,6].includes( dia )) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${ horaApertura }`;
console.log({horaApertura, mensaje});