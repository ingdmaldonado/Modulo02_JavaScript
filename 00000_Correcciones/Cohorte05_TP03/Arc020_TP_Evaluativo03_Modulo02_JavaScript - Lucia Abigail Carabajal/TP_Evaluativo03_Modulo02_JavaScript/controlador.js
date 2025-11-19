/*Ejercicio Nro. 13*/
import {precioDeVenta} from "./modelo.js";

/*Ejercicio Nro. 14*/
import {promedioDeTres} from "./modelo.js";

/*Ejercicio Nro. 15*/
import {evaluaPromedio} from "./modelo.js";

/*Ejercicio Nro. 16*/
import {calcularSobreTasa} from "./modelo.js";

/*Ejercicio Nro. 17*/
import {calcularImporteBaseAgua} from "./modelo.js";

/*Ejercicio Nro. 18*/
import {calcularTasaSubsuelo} from "./modelo.js";

/*Ejercicio Nro. 19*/
import {calcularTasaENRE} from "./modelo.js";

/*Ejercicio Nro. 20*/
import {calcularDosisInsulina} from "./modelo.js";

/*Ejercicio Nro. 21*/
import {contarVocales} from "./modelo.js";

/*Ejercicio Nro. 22*/
import {contarConsonantes} from "./modelo.js";

/*Ejercicio Nro. 23*/
import {tieneDosS} from "./modelo.js";

/*Ejercicio Nro. 24*/
import {tieneTresEspacios} from "./modelo.js";

/*Ejercicio Nro. 24*/
import {noContieneNumeros} from "./modelo.js";
 
window.onload = ()=>
{
    console.log("la pagina esta cargada");

    console.log("---------Invocacion del Ejercicio 13-------");
    console.log(precioDeVenta(1000,20));
    console.log(precioDeVenta(2500,35));
    console.log(precioDeVenta(80,10));
   

    console.log("----------Invocacion del Ejercicio 14-------");
    console.log(promedioDeTres(8,9,10));
    console.log(promedioDeTres(5,6,7));
    console.log(promedioDeTres(3,2,4));
    
    console.log("----------Invocacion del Ejercicio 15--------");
    console.log(evaluaPromedio(3));
    console.log(evaluaPromedio(6));
    console.log(evaluaPromedio(9));
    console.log(evaluaPromedio(10));

    
    console.log("----------Invocacion del Ejercicio 16--------");
    console.log(calcularSobreTasa(3,7200000));
    

    console.log("Invocacion del Ejercicio 17");
    let resultado1 = calcularImporteBaseAgua(20);
    console.log(`Para 20 mts cubicos ${resultado1}`);
    let resultado2 = calcularImporteBaseAgua(49);
    console.log(`Para 49 mts cubicos ${resultado2}`);
    let resultado3 = calcularImporteBaseAgua(68);
    console.log(`Para 68 mts cubicos ${resultado3}`);
    let resultado4 = calcularImporteBaseAgua(99);
    console.log(`Para 99 mts cubicos ${resultado4}`);

    console.log("----------Invocacion del Ejercicio 18---------");
    console.log(calcularTasaSubsuelo(1000));
    console.log(calcularTasaSubsuelo(50000));
    console.log(calcularTasaSubsuelo(8500));

    console.log("----------Invocacion del Ejercicio 19---------");
    console.log(calcularTasaENRE(10000));
    console.log(calcularTasaENRE(50000));
    console.log(calcularTasaENRE(8500));


    console.log("----------Invocacion del Ejercicio 20---------");
    console.log(calcularDosisInsulina(200,70,1));
    console.log(calcularDosisInsulina(160,70,1));
    console.log(calcularDosisInsulina(200,80,2));

    console.log("----------Invocacion del Ejercicio 21---------");
    console.log(contarVocales("Hola Mundo"));
    console.log(contarVocales("Programacion Web"));
    console.log(contarVocales("BCDFG"));

    console.log("----------Invocacion del Ejercicio 22---------"); 
    console.log(contarConsonantes("Hola Mundo"));
    console.log(contarConsonantes("Programacion Web"));
    console.log(contarConsonantes("Aeiou"));

    console.log("----------Invocacion del Ejercicio 23---------"); 
    console.log(tieneDosS("salsa"));
    console.log(tieneDosS("sol"));
    console.log(tieneDosS("mississipi"));

    console.log("----------Invocacion del Ejercicio 24---------");
    console.log(tieneTresEspacios("uno dos tres cuatro"));
    console.log(tieneTresEspacios("Hola Mundo feliz"));
    console.log(tieneTresEspacios("Hola Mundo"));

    console.log("----------Invocacion del Ejercicio 25---------");
    console.log(noContieneNumeros("HolaMundo"));
    console.log(noContieneNumeros("Hola 123"));
    console.log(noContieneNumeros("Viaje2025"));
};