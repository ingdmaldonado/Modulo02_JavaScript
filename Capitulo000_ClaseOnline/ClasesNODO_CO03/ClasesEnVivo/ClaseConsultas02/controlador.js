
/* 

Ejercicio propuesto Nro. 13:
	Realizar una función que pueda calcular y determinar 
    la dosis de insulina recomendada para un paciente 
    diabético. Basada en tres datos importantes para el cálculo.
1)	Nivel de glucosa en sangre
2)	Peso Corporal (en kilogramos)
3)	Tipo de diabetes
a.	Tipo 1
b.	Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último termino solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último termino solamente si la glucosa es mayor a  180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Nota: expresar las funciones de forma tradicional y como arrow functions
Ejercicio propuesto Nro. 14:
	Realizar una función que pueda obtener y calcular el IMC – índice de masa corporal sabiendo que la fórmula es la siguiente IMC = peso (kg) / altura (metros) al cuadrado
 
*/

/* Momento 1:  Estoy haciendo la definición de la función */

import {dosisDeInsulina} from "./modelo.js";


// ESTO ES EL PROGRAMA PRINCIPAL
{
    console.log("funcionando");

    /* Momento 2: El uso o definición o Invocación de la función */

    let resultado1 = dosisDeInsulina(105,95,1);

    /* 
        tipo1 y nivel de glucosa menor a 180
        en esta prueba devería devolverme el 50% del peso corporal
    */

    console.log(`El resultado 1 es:= ${resultado1}`);

    
    /* 
        tipo1 y nivel de glucosa es mayor a 180
        50% 220 = 110 + 55 = 165 
    */

    let resultado2 = dosisDeInsulina(220,110,1);
    console.log(`El resultado 2 es:= ${resultado2}`);

    /* tipo 2 y nivel de glucosa es menor que 180 */

    let resultado3 = dosisDeInsulina(100,80,2);
    console.log(`El resultado 3 es:= ${resultado3}`);

    /* tipo 2 y nivel de glucosa mayor a 180 */

    let resultado4 = dosisDeInsulina(220,100,2);
    console.log(`El resultado 4 es:= ${resultado4}`);

    /* 
    
        20% de los 100 kilos => 20
        50% del nivel de glucosa = 110

        total a 130

    */

}