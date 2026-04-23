/* Si la nota >= 0 y <= 4 serán trabajos desaprobados 
   Si la nota > 4 y <= 7 serán trabajos aprobados 
   Si la nota > 7 y <10 serán trabajos muy buenos 
   Si la nota = 10 serán trabajos excelentes  */

console.log(`Notas de finales: 
Alumnos de la diplomatura en “Desarrollo Web Full Stack con JavaScript” `);

let error = 0;
let alumno = 1;
let continuar = 1;

while (continuar === 1) {
    let nota = Number(prompt(`Ingrese la nota`));
     while (nota < 0 || nota > 10) {
        nota = Number(prompt(`Nota inválida, ingrese nuevamente:`));
        error ++;
    }
    if(nota >=0 && nota <= 4){
        console.log(`Alumno n°${alumno}:Desaprobado`);
    }else if(nota > 4 && nota <= 7){
        console.log(`Alumno n°${alumno}:Aprobado`);
    }else if(nota > 7 && nota < 10){
        console.log(`Alumno n°${alumno}:Muy bueno`);
    }else if(nota === 10){
        console.log(`Alumno n°${alumno}:Excelente`);
    }

    continuar = Number(prompt(`¿Continuar corrigiendo? 1-Si || 0-No`));
    alumno ++;
}
console.log(`
    Cantidad de errores al ingresar las notas: ${error}`);