{
console.log('Ejercicio 2 TPN2 - MODULO 2');

let nota = 0;
let continuar = "";

let cantaprobados = 0;
let cantdesaprobados = 0;
let cantmuybuenos = 0;
let cantexcelentes = 0;
let canterror = 0;

console.log('Sistema de carga de notas finales');

do {

    nota = Number(prompt(
        'Ingrese la nota del trabajo final\n' +
        'Recuerde que las notas válidas son del 0 al 10'
    ));

    if (nota >= 0 && nota <= 10) {

        if (nota <= 4) {
            console.log('Trabajo desaprobado');
            cantdesaprobados++;

        } else if (nota <= 7) {
            console.log('Trabajo aprobado');
            cantaprobados++;

        } else if (nota < 10) {
            console.log('Trabajo muy bueno');
            cantmuybuenos++;

        } else if (nota === 10) {
            console.log('Trabajo excelente');
            cantexcelentes++;
        }

    } else {
        console.log('Nota inválida');
        canterror++;
    }

    continuar = prompt('¿Desea cargar otra nota? (s/n)').toLowerCase();

} while (continuar === 's');



console.log('Cierre del sistema');

console.log(`Desaprobados: ${cantdesaprobados}`);
console.log(`Aprobados: ${cantaprobados}`);
console.log(`Muy buenos: ${cantmuybuenos}`);
console.log(`Excelentes: ${cantexcelentes}`);


}