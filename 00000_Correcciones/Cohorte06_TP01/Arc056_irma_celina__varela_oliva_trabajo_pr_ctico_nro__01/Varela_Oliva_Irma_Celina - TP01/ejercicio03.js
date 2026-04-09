/* Ejercicio Nro. 03: 

    Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
    El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.

*/

{
    let primerValorEnergia = 0;
    primerValorEnergia = Number(prompt(`Ingrese el total que pago por los gastos de energia (luz electrica):`));
    console.log(`Total luz electrica:`, primerValorEnergia);

    let segundoValorComunicacion = 0;
    segundoValorComunicacion = Number(prompt(`Ingrese el total que pago por los gastos en comunicacion (conectividad a internet):`));
    console.log(`Total comunicacion:`, segundoValorComunicacion);

    let tercerValorAgua = 0;
    tercerValorAgua = Number(prompt(`Ingrese el total que pago por los gastos ocasionados por el servicio de agua potable:`));
    console.log(`Total Servicio de agua:`, tercerValorAgua);

    let incrementarPrimerValor = 0;
    incrementarPrimerValor = (primerValorEnergia * 12.5) / 100;
    let totalFuturoEnergia = 0;
    totalFuturoEnergia = primerValorEnergia + incrementarPrimerValor;
    console.log(`El gasto futuro a pagar de energia (luz electrica) es de: `, totalFuturoEnergia);

    let incrementarSegundoValor = 0;
    incrementarSegundoValor = (segundoValorComunicacion * 7) / 100;
    let totalFuturoComunicacion = 0;
    totalFuturoComunicacion = segundoValorComunicacion + incrementarSegundoValor;
    console.log(` El gasto futuro a pagar de Comunicacion (conectividad a internet) es de:`, totalFuturoComunicacion);
    
    let incrementarTercerValor = 0;
    incrementarTercerValor = (tercerValorAgua * 3) / 100;
    let totalFuturoAgua = 0;
    totalFuturoAgua = tercerValorAgua + incrementarTercerValor;
    console.log(`El gasto futuro a pagar del servicio de agua potable es de:`, totalFuturoAgua);

}