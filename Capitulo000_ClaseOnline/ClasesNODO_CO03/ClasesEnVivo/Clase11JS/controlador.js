

import {DevolverImporteFinal,DevolverIMC} from "./modelo.js";


/* Programa Principal */
{

    // ejemplo de invocación 1 - devuelve el 21% //
    let importeFactura1 = DevolverImporteFinal(1000,1);

    // tipo 2
    let importeFactura2 = DevolverImporteFinal(1000,2);

    // tipo 3
    let importeFactura3 = DevolverImporteFinal(1000,3);

    // tipo 4
    let importeFactura4 = DevolverImporteFinal(1000,4);

    // tipo 5
    let importeFactura5 = DevolverImporteFinal(1000,5);

    // tipo que no esta definido
    let importeFactura6 = DevolverImporteFinal(1000,77);

    console.log(importeFactura1);
    console.log(importeFactura2);
    console.log(importeFactura3);
    console.log(importeFactura4);
    console.log(importeFactura5);
    console.log(importeFactura6);

    /***************************************/

    // aqui vamos a probar las funciones del IMC


    // ejemplo 01: realice la invocación de la función que calcula el IMC //

    let imc1 = DevolverIMC(1.70,80);
    console.log(imc1);

    // ejemplo 2:

    let altura = 1.65;
    let peso = 58;

    let imc2 = DevolverIMC(altura,peso);
    console.log(imc2);

    let imc3 = DevolverIMC(-1.50,-100);
    console.log(imc3);

}