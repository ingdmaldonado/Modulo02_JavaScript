/* Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de 
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

Consumo|    (m³) Cálculo aplicado                |  Importe final($) 
30      50 × 350,00                                  17.500,00 
55      (50 × 350,00)+(5 × 555,20)                   20.276,00 
85      (50 × 350,00)+(20 × 555,20)+(15 × 1.552,20)  57.214,00 

Nota: Debe devolver un número */

/*                                 Ejemplos
 Bloque 1   0-50  $350     |  50 a $17.500,00
 Bloque 2  50-70  $555,2   |  20 a $11.104,00
 Bloque 3  70-=>  $1552,2  |  29 a $45.013,00 Suponiendo 99mtsC. Ingresados   

*/

export const calcularImporteBaseAgua = (mtsCubicos) => {
    
    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    let importeBase = 0;


    if(mtsCubicos > 0 && mtsCubicos <= 50)//bloque 1
    {
        importeBloque1 = 50 * 350.00; //Aqui es independiente la cantidad consumida, siempre cobrara 50mts de base a $350
    }

    if(mtsCubicos > 50 && mtsCubicos <= 70)
    {
        importeBloque1 = 50 * 350.00; // debemos agregar el importe uno a este if ya que al no cumplir la condicion 1 salta a la 2 omitiendo el primer monto

        importeBloque2 = (mtsCubicos - 50) * 555.20; //(mtsCubicos - 50) se refiere a que si se ingresan 68mts Cubicos tiene 50mts del bloque 1 (a $350) y 10mts del bloque 2 que esos 10mts Cubicos se cobran en otro precio ($555.2).
    }

    if(mtsCubicos > 70)
    {
        importeBloque1 = 50 * 350.00;
        importeBloque2 = 20 * 555.2;//ahora ingresamos bloque 1 y 2 con bloque 2 en 20mts y 50mts Cubicos y esto se sumaria al bloque 3

        importeBloque3 = (mtsCubicos - 70) * 1552.20;//(mtsCubicos - 70)se refiere a que si se ingresan 99mts Cubicos -70 quedarian 29mts * 1552.2 y esto se sumaria a los anteriores 2
    };

    importeBase = importeBloque1 + importeBloque2 + importeBloque3;

    return importeBase;
};