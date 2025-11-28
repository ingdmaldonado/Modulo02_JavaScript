 import { precioVenta } from "./modelo.js"
{
   console.log (`----- ejercicio 13 -----`)
    /* 
        Ejercicio 13 
        empezamos importando la funcion que creamos en el modelo.js
        despues pedimos al usuario que ingrese el importe del producto y el margen de ganancia que desea obtener
        luego llamamos a la funcion precioVenta pasandole como argumentos los valores que el usuario ingreso
        y guardamos el resultado en una variable.
        para al final mostramos el resultado en la consola
    */

    let importe = Number(prompt(`ingrese el valor del producto`));

    let ganancia = Number(prompt(`ingrese el porcetaje de ganancia que desea obtener`));

    let precioFinal = precioVenta(importe, ganancia);

    console.log(`el precio de venta del producto es: ${precioFinal} `)

}


import { calcularPromedio } from "./modelo.js"
{

    console.log (`----- ejercicio 14 -----`)    

    /*
        ejercicio 14
        empezamos importando la funcion que creamos en el modelo.js 
    */
   
    let nota1 = Number(prompt(`la primera nota es:`));
    let nota2 = Number(prompt(`la segunda nota es:`));
    let nota3 = Number(prompt(`la tercera nota es:`));
    
    let promedioFinal = calcularPromedio(nota1, nota2, nota3);

    console.log(`el promedio final es: ${promedioFinal}`);

}



import { notaPromedio } from "./modelo.js";

{
    console.log (`----- ejercicio 15 -----`)


    let entrada = Number(prompt(`ingrese su nota`))
    let resultado = notaPromedio(entrada);

    console.log(resultado);
}



import { impuestoBebidas } from "./modelo.js";

{
    console.log (`----- ejercicio 16 -----`)

    let tipo = Number(prompt(`ingrese el tipo de bebida (1-agua envase de plastico, 2-agua envase retorable, 3-gaseosa envase de plastico, 4-gaseosa envase retorable, 5-bebidas energeticas, 6-bebidas no clasificadas)`))

    let precio = Number(prompt(`ingrese el precio de la bebida`));

    let total = impuestoBebidas(precio,tipo);

    console.log(`el impuesto a aplicar es de: ${total}`);
}



import { calcularImporteAgua } from "./modelo.js";

{

    console.log (`----- ejercicio 17 -----`)

    let m3 = Number(prompt(`ingrese los metros cubicos de agua consumidos`));
    
    let importe = calcularImporteAgua(m3);

    console.log(`el importe a pagar por el consumo de agua es de: ${importe}`);

}



import { calcularTasaSubsuelo } from "./modelo.js";

{
    console.log (`----- ejercicio 18 -----`)

    let valorBoleta = Number(prompt(`ingrese el valor de la boleta de agua`))

    let tasa = calcularTasaSubsuelo(valorBoleta);

    console.log(`el valor de la tasa de subsuelo es de: ${tasa}`);

    console.log(`el valor total de la boleta de agua es de: ${valorBoleta + tasa}`);
}



import { calcularENRE } from "./modelo.js";

{
    console.log (`----- ejercicio 19 -----`)    

    let valorBoleta = Number(prompt(`ingrese el valor de la boleta de agua`));

    let enre = calcularENRE(valorBoleta);

    console.log(`el valor del ENRE es de: ${enre}`);

    console.log(`el valor total de la boleta de agua es de : ${valorBoleta + enre}`);
}




import { calcularDosisInsulina } from "./modelo.js";

{
    console.log (`----- ejercicio 20 -----`)

    let glucosa = Number(prompt(`ingrese el nivel de glucosa en sangre`))

    let peso = Number(prompt(`ingrese su peso en kg :`))

    let tipo = Number(prompt(`ingrese el tipo de diabetes (diabetes tipo 1 o diabetes tipo 2)`))

    let dosis = calcularDosisInsulina(glucosa, peso, tipo);

    console.log(`la dosis de insulina es de ${dosis} unidades`);

}




import { cantidadVocales } from "./modelo.js";

{
    console.log (`----- ejercicio 21 -----`)

    let texto = prompt(`ingrese un texto:`);

    let vocales = cantidadVocales(texto);

    console.log(`la cantidad de vocales que tiene el texto es de: ${vocales}`);
}





import {cantidadConsonantes} from "./modelo.js";

{
    console.log (`----- ejercicio 22 -----`)

    let texto = prompt(`ingrese el texto del el cual quiere saber la cnatidad de consonantes:`);

    let consonantes = cantidadConsonantes(texto);

    console.log(`la cantidad de consonantes que tiene el texto es de ${consonantes}`);

}



import { contadorS } from "./modelo.js";

{
    console.log (`----- ejercicio 23 -----`)

    let palabra = prompt(`ingrese una palabra`)

    let cantidad = contadorS(palabra);
    
    console.log(`${cantidad}`);
}




import { contadorEspacios } from "./modelo.js";

{
    console.log (`----- ejercicio 24 -----`)

    let texto = prompt(`ingrese un texto:`)

    let espacios = contadorEspacios(texto);

    console.log(`${espacios}`);
}




import { detectorNumeros } from "./modelo.js";

{
    console.log (`----- ejercicio 25 -----`)

    let texto = prompt(`ingres un texto para detectar contiene algun numero:`);

    let contieneNumero = detectorNumeros(texto);

    console.log(`${contieneNumero}`);
}