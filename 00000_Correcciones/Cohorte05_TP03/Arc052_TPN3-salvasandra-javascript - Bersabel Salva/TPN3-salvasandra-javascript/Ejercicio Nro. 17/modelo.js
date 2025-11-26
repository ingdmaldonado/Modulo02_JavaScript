/* Ejercicio Nro. 17:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes descripto.
Consumo (m³)          Cálculo aplicado                     Importe final ($)
30                       50 × 350,00                          17.500,00
55                (50 × 350,00) + (5 × 555,20)                20.276,00
85         (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20)    57.214,00
Nota: Debe devolver un número

*/

export const calcularImporteAgua = (metrosCubicos) => {
    let importeBase; // variable sin valor inicial
    let consumoTotal = metrosCubicos; // valor recibido como parámetro
  
    // Bloques de facturación
    let bloque1 = 50;     // hasta 50 m³
    let bloque2 = 20;     // de 51 a 70 m³
    let precioBloque1 = 350;
    let precioBloque2 = 555.20;
    let precioBloque3 = 1552.20;
  
    if (consumoTotal <= 50) {
      // mínimo 50 m³ aunque consuma menos
      importeBase = bloque1 * precioBloque1;
    } else if (consumoTotal <= 70) {
      let excesoBloque2 = consumoTotal - 50;
      importeBase = (bloque1 * precioBloque1) + (excesoBloque2 * precioBloque2);
    } else {
      let excesoBloque3 = consumoTotal - 70;
      importeBase = (bloque1 * precioBloque1) + (bloque2 * precioBloque2) + (excesoBloque3 * precioBloque3);
    }
  
    return importeBase;
  };
  