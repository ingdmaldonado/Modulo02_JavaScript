/*

Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.

*/

{
    let importeEnergia = 0;
    let importeInternet = 0;
    let importeAgua = 0;

    importeEnergia = Number(prompt(`Ingrese el importe de Energia`));
    importeInternet = Number(prompt(`Ingrese el importe de Internet`));
    importeAgua = Number(prompt(`Ingrese el importe de Agua`));

    let incrementoEnergia = (importeEnergia * 12.5)/100;
    let incrementoInternet = (importeInternet * 7)/100;
    let incrementoAgua = (importeAgua * 3)/100;

    let finalEnergia= (importeEnergia+incrementoEnergia)
    let finalInternet= (importeInternet+incrementoInternet)
    let finalAgua= (importeAgua+incrementoAgua)

    console.log(`El importe de Energia sera: ${finalEnergia}`);
    console.log(`El importe de Internet sera: ${finalInternet}`);
    console.log(`El importe de Agua sera: ${finalAgua}`);
}