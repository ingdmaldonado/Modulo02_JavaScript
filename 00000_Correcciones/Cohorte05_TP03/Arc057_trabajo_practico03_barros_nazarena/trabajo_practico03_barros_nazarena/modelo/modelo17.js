/*Ejercicio Nro. 17:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el
consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para
ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros
cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20
metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20
pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes
descripto.
Consumo (m3) Cálculo aplicado Importe final ($)
30 50 × 350,00 17.500,00
55 (50 × 350,00) + (5 × 555,20) 20.276,00
85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00 */

// Función que calcula el importe base del agua según el bloque de consumo
const calcularImporteAgua = (metrosCubicos) => {

    let consumo = metrosCubicos;

    // Si consume menos de 50, igual paga 50
    if (consumo < 50) consumo = 50;

    let importe = 0;

    // Primer bloque: hasta 50 m³ → $350 c/u
    if (consumo <= 50) {
        importe = consumo * 350;
    }
    // Segundo bloque: entre 51 y 70 m³
    else if (consumo <= 70) {
        let bloque1 = 50 * 350;
        let bloque2 = (consumo - 50) * 555.20;
        importe = bloque1 + bloque2;
    }
    // Tercer bloque: más de 70 m³
    else {
        let bloque1 = 50 * 350;
        let bloque2 = 20 * 555.20;
        let bloque3 = (consumo - 70) * 1552.20;
        importe = bloque1 + bloque2 + bloque3;
    }

    return importe;
};