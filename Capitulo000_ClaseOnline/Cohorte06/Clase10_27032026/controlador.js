
// importació nombrada //
import {Cuadrado,Cuadrado2,Cuadrado3,retornarIVA,retornarIngBrutos,retornarTotal} from "./funciones.js";

// importación por defecto //
import cubo from "./cubo.js";

/* Bloque de código Principal */
{
    /*
    let resultado1 = Cuadrado(5);
    console.log(`El resultado es: ${resultado1}`);

    let resultado2 = Cuadrado2(5);
    console.log(`El resultado es: ${resultado2}`);

    let resultado3 = Cuadrado3(5);
    console.log(`El resultado es: ${resultado3}`);
    */

    let baseFactura1 = 100000;

    console.log(retornarIVA(baseFactura1,2026));

    console.log(retornarIngBrutos(baseFactura1));
    
    console.log(retornarTotal(baseFactura1,2026));

    /* 
        2020 => 100.000,00 + 10.000 + 3.000 = 113.000,00

        2025 => 100.000,00 + 21.000 + 3.000 = 124.000,00

        2026 => 100.000,00 + 16.000 + 3.000 = 119.000,00
    
    */

    console.log(cubo(5));


}

/* 
Lo ideal sería tener las funciones por un lado,
y el programa principal por otro 
*/