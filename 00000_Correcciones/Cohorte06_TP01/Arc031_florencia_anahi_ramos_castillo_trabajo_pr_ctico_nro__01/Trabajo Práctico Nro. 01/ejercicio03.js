/* Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/


function calcularGastos() {

    // Ingreso los gastos actuales
    let luz = Number(prompt("Ingrese el gasto de luz"));
    let internet = Number(prompt("Ingrese el gasto de internet"));
    let agua = Number(prompt("Ingrese el gasto de agua"));

    // Calculo los aumentos usando porcentajes
    let aumentoLuz = luz * (12.5 / 100);
    let aumentoInternet = internet * (7 / 100);
    let aumentoAgua = agua * (3 / 100);

    // Calculo los gastos futuros
    let luzFuturo = luz + aumentoLuz;
    let internetFuturo = internet + aumentoInternet;
    let aguaFuturo = agua + aumentoAgua;

    // Calculo el total a pagar
    let totalFuturo = luzFuturo + internetFuturo + aguaFuturo;

    // Muestro los resultados
    console.log(`Gasto futuro en luz: ${luzFuturo}`);
    console.log(`Gasto futuro en internet: ${internetFuturo}`);
    console.log(`Gasto futuro en agua: ${aguaFuturo}`);
    console.log(`Total a pagar el próximo mes: ${totalFuturo}`);
}