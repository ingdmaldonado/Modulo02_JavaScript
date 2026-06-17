

/* 
    Funciones son bloques de codigo aislado, 
    que tienen nombre, que tienen el objetivo
    de ejecutar un conjunto de instrucciones
    y devolver un resultado.

    VENTAJAS:
        - Encapsular lógica de programación
        que puede ser reutilizada en diferentes
        puntos, lugares y con diferentes valores.

*/

/* Vamos a hacer un programa que 
capture un importe base de una factura
y le calcule su IVA y lo muestre por consola */

/* Declaro una función 
    *utilizo la palabra reservada function
    *Asigno un nombre
    *entre (...) van los parametros de entrada
    *defino el cuerpo de la función {}
    *una instrucción return que indica que
    la ejecución de esa función terminó y 
    que es ese valor el que se devuelve.
*/

/* 
    - separación lógica en sub-procesos pequeños,
    aislados y con su propia lógica "cerrada".

    - una función está comprendida en un {} bloque
    de codigos.

    - tiene un esquema de caja negra



*/

/* 
    - utilizar prompt para leer datos dentro de una 
    función es MALA PALABRA. 

*/


function calcularImporteFinal(importeB,tipoP)
{   
    let salida = 0;

    let IVA = 0;
    
    switch(tipoP)
    {
        case 1: // 21%
        {
            IVA = (importeB * 21)/100;
            break;
        }
        case 2: // 10.5%
        {
            IVA = (importeB * 10.5)/100;
            break;
        }
        case 3: // 27.5%
        {
            IVA = (importeB * 27.5)/100;
            break;

        }
        case 4: // 5%
        {
            IVA = (importeB * 5)/100;
            break;

        }
        case 5: // 0%
        {
            IVA = 0;
            break;
        }
        default:
        {
            IVA = 0;
            break;
        }

    }

    salida = importeB + IVA;

    return salida;

}

// SEPARACIÓN DE FUNCIONES //

/* 

    - uno que recibe los pedidos

    - uno o varios que elaboran la comida

    - uno o varios que transportan la comida => DELIVERY !!!.

    
*/


// PROGRAMA PRINCIPAL => 
{

    /* ENTRADAS */
    let importeBase = 0;
    importeBase = Number(prompt(`Ing. Importe Base`));

    /* PROCESO */
    let importeTotal = calcularImporteFinal(importeBase,5);

    /* EJEMPLO AISLADO */

        let importeBase1 = 100000.00; // Mercadería y cosas en general (21%) - tipo 1
        let importeBase2 = 600000.00; // Televisor - 10.5% - tipo 2
        let importeBase3 = 20000.00 // Nueces - 5% - tipo 4

        let importeToalAPagar = calcularImporteFinal(importeBase1,1) + calcularImporteFinal(importeBase2,2) + calcularImporteFinal(importeBase3,4)

        console.log(importeToalAPagar);

    /* EJEMPLO AISLADO */

    /* SALIDA */
    console.log(importeTotal);

}

/* 
    1) 21% CONSUMO DE BIENES EN GENERAL
    2) 10,5% TECNOLOGÍA => COMPUTADORAS, TELEFONOS, ...
    3) 27,5% SERVICIOS PUBLICOS
    4) 5% PRODUCTOS AGRICOLAS
    5) 0% EXENTOS
*/