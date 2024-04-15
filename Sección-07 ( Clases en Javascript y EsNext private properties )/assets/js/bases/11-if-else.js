let a = 10;

if(a >= 10){
    console.log("A es mayor o igual a 10");
}else{
    console.log('A es menor a 10');
}
//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

/*
= : asignacion
== : confirmar
== : igualdad
*/
if(dia === 0){
    console.log('Domingo');
}else{
    console.log('Hoy no es domingo');
}

//TAREA

const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
};
console.log(diaLetras[dia] || 'Dia no definido');

const dialetras2 = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
console.log(dialetras2[dia]);