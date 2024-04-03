const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log('******************')
//No se ejecuta el regresaTrue() ya que el regresaFalse() es false
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('******************')
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.warn('Or');

console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//toma el ultimo valor
const a1 = true && 'Hola mundo' && 150;
const a_1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso'||true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso'||true;
console.log({a1,a_1,a2,a3, a4,a5});
