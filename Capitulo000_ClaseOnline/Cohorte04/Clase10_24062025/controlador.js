
/* funciones. son como subprogramas 
*/

/* realizaremos una función que reciba
como parametro dos numeros. los sume
y los devuelva al programa principal */

function sumaDeDosNumeros(numero1,numero2)
{
    let auxiliar = 0;
    auxiliar = numero1 + numero2; // aqui los estoy sumando
    return auxiliar;
}

// momento 1 => definición de la función
function promedioDeTresNotas(nota1,nota2,nota3)
{
    let auxiliar = 0;
    auxiliar = (nota1 + nota2 + nota3)/3;
    return auxiliar;
}

/* una función. que recibe como parametro los
metros cúbicos que consumio un hogar en un 
determinado periodo. 

    lectura anterior => 18450
    lectura actual => 18490

    diferencia = 40 mts. cubicos

    tarifa minima son 50 mts cubicos => 


    50 mts cubicos => precio 75.50 pesos

        => 125.70 metro cubico
*/


/* 
    momento 1 => en el que creo la función y la defino
    momento 2 => cuando invoco esa función desde alguna parte del programa
*/


/* Aqui estoy definiendo una función que recibe
como parametro los metros cubicos leidos anteriormente
y los metros cubicos leidos actualmente */

function facturarConsumoDeAgua(lecturaAnterior,lecturaActual)
{
    // 1ro) calculo la diferencia
    let mtsCubicosConsumidos = lecturaActual - lecturaAnterior;

    // me creo una variable para calcular el importe facturado
    let totalFactura = 0;

    // pregunto. si la persona consumio menos del importe minimo
    if(mtsCubicosConsumidos <= 50)
    {
        totalFactura = 50 * 75.50; // todo el mundo paga por 50mts. cubicos
       
    }
    else // por aqui. entra la persona que consumio mas de 50 mts. cubicos
    {
        let mtsCubicosExcedente = 0;
        mtsCubicosExcedente = mtsCubicosConsumidos - 50;        
        totalFactura = 50 * 75.50 + mtsCubicosExcedente * 125.50;
      
    }

    // esto es mala palabra. mala praxis, //
    //console.log(`mts consumidos: ${mtsCubicosConsumidos} y facturado: ${totalFactura}`);

    return totalFactura;

}


{
    console.log(`aplicación corriendo`);

    // ejemplo invocacion 1: puedo invocarla sin asignarla a una variable //

    sumaDeDosNumeros(10,15);

    // ejemplo invocación 2: puedo invocarla dentro de un console log //

    console.log(sumaDeDosNumeros(10,15));

    // ejemplo invocación 3: puedo llamarla y guardar el resultado en una variable //

    let resultado3 = sumaDeDosNumeros(7,21);
    console.log(resultado3);

    // ejemplo invocacion 4: paso de parametros de entrada con variables //

    let numero1 = 20;
    let numero2 = -5;

    let resultado4 = sumaDeDosNumeros(numero2,numero1);
    console.log(resultado4);

    // invocar la función del promedio de tres //

    let promedio1 = promedioDeTresNotas(7,9,10);
    console.log(`El Promedio1 es: ${promedio1}`);

    let promedio2 = promedioDeTresNotas(2,6,10);
    console.log(`El Promedio2 es: ${promedio2}`);

    // invocar la función que calcula el importe facturado //

    let factura1 = facturarConsumoDeAgua(0,40);
    console.log(`Factura de Antonella: ${factura1}`);

    let factura2 = facturarConsumoDeAgua(50,65);
    console.log(`Factura de Guillermo: ${factura2}`);

    let factura3 = facturarConsumoDeAgua(100,145);
    console.log(`Factura de Claudia: ${factura3}`);

    let factura4 = facturarConsumoDeAgua(125890,125960);
    console.log(`Factura de Daniel: ${factura4}`);

}