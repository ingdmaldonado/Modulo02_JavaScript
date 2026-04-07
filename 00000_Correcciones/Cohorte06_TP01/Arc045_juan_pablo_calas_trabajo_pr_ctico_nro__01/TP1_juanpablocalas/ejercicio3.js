/*

Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.

*/
{

    let MontoPagadoLuz = 0;
    let MontoPagadoComunicacion = 0;
    let MontoPagadoAgua = 0;

    let PorcIncremLuz = 12.5;
    let PorcIncremInternet = 7;
    let PorcIncremAgua = 3;

    let MontoAPagarLuz = 0;
    let MontoAPagarComunicacion = 0;
    let MontoAPagarAgua = 0;

    let MontoTotalActual = 0;
    let MontoTotalFuturo = 0;


    MontoPagadoLuz = Number(prompt(`Ingrese Monto Factura de LUZ`))
    console.log(`El Monto de la Factura de LUZ actual ingresado es: ${MontoPagadoLuz} `)

    MontoAPagarLuz = MontoPagadoLuz + (MontoPagadoLuz * PorcIncremLuz) / 100
    console.log(`El % de Incremento de Luz Estimado es: ${PorcIncremLuz} `)
    console.log(`El Monto de LUZ Estimado a PAGAR es: ${MontoAPagarLuz} `)


    
    MontoPagadoComunicacion = Number(prompt(`Ingrese Monto Factura de INTERNET`))
    console.log(`El Monto de la Factura de INTERNET actual ingresado es: ${MontoPagadoComunicacion} `)

    MontoAPagarComunicacion = MontoPagadoComunicacion + (MontoPagadoComunicacion * PorcIncremInternet) / 100
    console.log(`El % de Incremento de Internet/Comunucacion Estimado es: ${PorcIncremInternet} `)
    console.log(`El Monto de COMUNICACION Estimado a PAGAR es: ${MontoAPagarComunicacion} `)



    MontoPagadoAgua = Number(prompt(`Ingrese Monto Factura de AGUA`))
    console.log(`El Monto de la Factura de AGUA actual ingresado es: ${MontoPagadoAgua} `)

    MontoAPagarAgua = MontoPagadoAgua + (MontoPagadoAgua * PorcIncremAgua) / 100
    console.log(`El % de Incremento de Agua Estimado es: ${PorcIncremAgua} `)
    console.log(`El Monto de AGUA Estimado a PAGAR es: ${MontoAPagarAgua} `)

    MontoTotalActual = MontoPagadoLuz + MontoPagadoComunicacion + MontoPagadoAgua
    MontoTotalFuturo = MontoAPagarLuz + MontoAPagarComunicacion + MontoAPagarAgua


    console.log(`Monto total ACTUAL pagaso es: ${MontoTotalActual} `)
    console.log(`Monto total A PAGAR el siguiente Periodo es : ${MontoTotalFuturo} `)


}