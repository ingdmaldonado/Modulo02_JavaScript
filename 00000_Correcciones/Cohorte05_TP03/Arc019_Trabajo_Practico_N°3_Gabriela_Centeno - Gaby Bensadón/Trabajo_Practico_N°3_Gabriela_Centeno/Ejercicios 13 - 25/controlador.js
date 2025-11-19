/** 
    PROGRAMA PRINCIPAL
*/

import {
    calculoSobreTasa, precioVenta, promedioNotas, promedioFinal,
    calcularImporteAgua, calculoTasaDeSubsuelo, calculoENRE,
    dosisDeInsulina, cantidadVocales, cantidadNoVocales, letra_S,
    espacioEnBlanco, digitoNumerico
} from "./modelo.js";


{
    console.log(`Ejercicio N°13`);

    // Invocacion
    let precioFinal1 = precioVenta(2000, 10);
    console.log(`Importe: ${2000} 
Margen de Gnancia: ${10}
Precio Final: ${precioFinal1}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°14`);

    // Invocacion 
    let notaPromedio = promedioNotas(7, 8, 9);
    console.log(`Nota 1: 7, 
Nota 2: 8,
Nota 3: 9, 
Promedio: ${notaPromedio}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°15`);

    // ERRORES
    let nota1 = promedioFinal(-1);
    console.log(`Nota final: (-1) => ${nota1}`);

    let nota2 = promedioFinal(11);
    console.log(`Nota final: (11) => ${nota2}`);

    // DESAPROBADO
    let nota3 = promedioFinal(3);
    console.log(`Nota final: (3) => ${nota3}`);

    // APROBADO
    let nota4 = promedioFinal(4.1);
    console.log(`Nota final: (4.1) => ${nota4}`);

    // MUY BUENO
    let nota5 = promedioFinal(7.1);
    console.log(`Nota final: (7.1) => ${nota5}`);

    // DISTINGUIDO
    let nota6 = promedioFinal(9.1);
    console.log(`Nota final: (9) => ${nota6}`);

    // EXCELENTE
    let nota7 = promedioFinal(10);
    console.log(`Nota final: (10) => ${nota7}`);


    console.log(`_____________________`);
    console.log(`Ejercicio N°16`);

    //let importeBase = Number(prompt(`Ingrese el importe base`)); 
    //let tipo = Number(prompt(`Ingrese el tipo de bebida (1-6)`)); 
    //let recaudación = calculoSobreTasa(importeBase, tipo); 

    // TIPO 1: Bebidas Agua en envases plásticos
    let recaudacion1 = calculoSobreTasa(2000, 1);
    console.log(`Importe base: 2000, 
Tipo bebida: Bebidas Agua en envases plásticos, 
Recargo: 5‰
Importe Final: ${recaudacion1}
-------------------------------`);

    // TIPO 2
    let recaudacion2 = calculoSobreTasa(2000, 2);
    console.log(`Importe base: 2000, 
Tipo bebida: Bebidas Agua en envases retornables, 
Recargo: 1‰
Importe Final: ${recaudacion2}
-------------------------------`);

    // TIPO 3
    let recaudacion3 = calculoSobreTasa(2000, 3);
    console.log(`Importe base: 2000, 
Tipo bebida: Bebidas Gaseosas Azucaradas en envases plásticos, 
Recargo: 7‰
Importe Final: ${recaudacion3}
-------------------------------`);

    // TIPO 4
    let recaudacion4 = calculoSobreTasa(2000, 4);
    console.log(`Importe base: 2000, 
Tipo bebida: Bebidas Gaseosas Azucaradas en envases retornables, 
Recargo: 2‰
Importe Final: ${recaudacion4}
-------------------------------`);

    // TIPO 5
    let recaudacion5 = calculoSobreTasa(2000, 5);
    console.log(`Importe base: 2000, 
Tipo bebida: Bebidas Energéticas, 
Recargo: 15‰
Importe Final: ${recaudacion5}
-------------------------------`);

    // TIPO 6
    let recaudacion6 = calculoSobreTasa(2000, 3);
    console.log(`Importe base: 2000, 
Tipo bebida: Cualquier otra bebida no clasificada, 
Recargo: 1‰
Importe Final: ${recaudacion6}
-------------------------------`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°17`);

    // SEGUNDO BLOQUE
    let importeAgua = calcularImporteAgua(55);
    console.log(`Importe final: ${importeAgua}`);

    // PRIMER BLOQUE
    let importeAgua1 = calcularImporteAgua(30);
    console.log(`Importe final: ${importeAgua1}`);

    // TERCER BLOQUE
    let importeAgua2 = calcularImporteAgua(70.1);
    console.log(`Importe final: ${importeAgua2.toFixed(2)}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°18`);

    let tasaSubsuelo = calculoTasaDeSubsuelo(2000);
    console.log(`Importe base: 2000,
Recargo: 3%, 
Tasa del Subsuelo: ${tasaSubsuelo}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°19`);

    let resultadoTasaENRE = calculoENRE(2000);
    console.log(`Importe base: 2000,
Recargo: 1.2%, 
Tasa de Fiscalización ENRE: ${resultadoTasaENRE}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°20`);

    // DIABETES TIPO 1 -  glucosa > 180
    let resultado1 = dosisDeInsulina(190, 95, 1);
    console.log(`Paciente 1 - Dosis de insulina recomendada: ${resultado1}`);

    // DIABETES TIPO 1 -  glucosa < 180
    let resultado2 = dosisDeInsulina(100, 95, 1);
    console.log(`Paciente 2 - Dosis de insulina recomendada: ${resultado2}`);

    // DIABETES TIPO 2 -  glucosa > 180
    let resultado3 = dosisDeInsulina(220, 95, 2);
    console.log(`Paciente 3 - Dosis de insulina recomendada: ${resultado3}`);

    // DIABETES TIPO 2 -  glucosa < 180
    let resultado4 = dosisDeInsulina(90, 95, 2);
    console.log(`Paciente 4 - Dosis de insulina recomendada: ${resultado4}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°21`);

    let resultadoVocales = cantidadVocales(`Hola, como estas?`);
    console.log(`La cantidad de vocales de la frase: "Hola, como estas?" es: ${resultadoVocales}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°22`);

    let consonantes = cantidadNoVocales(`Hola, como estas?`);
    console.log(`La cantidad de consonantes de la frase: "Hola, como estas?" es: ${consonantes}`);


    console.log(`_____________________`);
    console.log(`Ejercicio N°23`);

    // CADENA CON "S"
    let letra1 = letra_S(`muchas gracias`);
    console.log(`Cadena con "s": ${letra1}`);

    // CADENA SIN "S"
    let letra2 = letra_S(`river`);
    console.log(`Cadena con "s": ${letra2}`);


    console.log(`_____________________`);
    console.log(`Ejercicio N°24`);

    // CADENA CON MENOS DE 3 ESPACIOS EN BLANCO
    let resultado5 = espacioEnBlanco(`Hola como estas?`);
    console.log(`La frase: "Hola, como estas?" ¿posee, al menos, 3  espacios en blanco (" ")?: ${resultado5}`);

    // CADENA CON AL MENOS 3 ESPACIOS EN BLANCO 
    let resultado6 = espacioEnBlanco(`Hola como estas ?`);
    console.log(`La frase: "Hola, como estas ?" ¿posee, al menos, 3 espacios en blanco (" ")?: ${resultado6}`);



    console.log(`_____________________`);
    console.log(`Ejercicio N°25`);

    // CADENA SIN NUMERO
    let cadenaSinNro = digitoNumerico(`Hola como estas?`);
    console.log(`La cadena "Hola como estas?" no contiene números: ${cadenaSinNro}`);

    // CADENA CON NUMERO
    let cadenaConNro = digitoNumerico(`Hola como estas 2?`);
    console.log(`La cadena "Hola como estas 2?" no contiene números: ${cadenaConNro}`);


}
