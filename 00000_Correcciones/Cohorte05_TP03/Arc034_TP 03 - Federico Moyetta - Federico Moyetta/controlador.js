
import {precioDeVenta, promedioDeTres, resultadoAprueba, sobreTasa, calcularImporteAgua, calculoTasaSubsuelo, calculoFiscalizacionEnre, calculoDosisInsulina, contarVocales, contarConsonantes, buscaS, buscaEspacios, buscaNumeros} from "./modulo.js"


window.onload =()=>{

    console.log(`La aplicación está corriendo`);

    let resultado1 = precioDeVenta (700,300);
    console.log(`La salida del ejercicio 13 es: ${resultado1}`);

    let resultadoDePromedio = promedioDeTres (7,9,8.5);
    console.log (`La salida del Ejercicio 14 es: ${resultadoDePromedio}`);

    let aprueba = resultadoAprueba (6.9);
    console.log (`La salida del Ejercicio 15 es: ${aprueba}`);

    let importeBase = sobreTasa (3, 3500);
    console.log(`La salida del Ejercicio 16 es: ${importeBase}`);

    let importePagar = calcularImporteAgua (78);
    console.log(`La salida del Ejercicio 17 es: ${importePagar}`);

    let tasaSubsueloAgua = calculoTasaSubsuelo (17824);
    console.log(`La salida del Ejercicio 18 es: ${tasaSubsueloAgua}`);

    let tasaAguaEnre = calculoFiscalizacionEnre (36400.55);
    console.log(`La salida del Ejercicio 19 es: ${tasaAguaEnre}`);

    let dosisAplicar = calculoDosisInsulina (254,103,2);
    console.log(`La salida del Ejercicio 20 es: ${dosisAplicar}`);

    let vocales = contarVocales (`Hola soy FEDERICO y a pesar de todo soy hincha de RIVER`);
    console.log(`La salida del Ejercicio 21, la cantidad de Vocales es: ${vocales}`);

    let consonantes = contarConsonantes (`Hola mi nombre es FEDERICO y estoy cursando el modulo 2`);
    console.log(`La salida del Ejercicio 22, la cantidad de Consonantes es: ${consonantes}`);

    let buquemosS = buscaS (`Soy hincha del más grande y sssss`);
    console.log(`La salida del Ejercicio 23 es: ${buquemosS}`);

    let busquemosEspacios = buscaEspacios (`Se me está quemando la cabeza de tanto código`);
    console.log(`La salida del Ejercicio 24 es: ${busquemosEspacios}`);

    let numerosSN = buscaNumeros (`Buscando Buscando vamos a terminar encontrando algo`);
    console.log(`La salida del Ejercicio 25 es: ${numerosSN}`);
    
    let numerosSN2 = buscaNumeros (`Hola 1234`);
    console.log(`La salida del Ejercicio 25 es: ${numerosSN2}`);
    
}

