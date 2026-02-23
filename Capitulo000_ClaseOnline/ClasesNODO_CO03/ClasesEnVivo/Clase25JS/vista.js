
/* ASINCRONISMO

    codigo SINCRONO: se
    ejecuta linea x linea y hay una secuencia
    lógica y ordenada de instrucciones.

        - declaración de variables, constantes
        - estructuras condicionales (switch, opeador ternario, if)
        - estructuras repetitivas clasicas
        - vectores, el recorrido de vectores,
            - map
            - reduce
            - filter
            - forEach

        - manejo del DOM, renderizado dinamico del DOM

    codigo ASINCRONO:

        - puedo tener código que no se ejecute línea x linea.

        - hilo principal de ejecución
            * setTimeOut
            * setInterval
            
        - ASINCRONISMO
            => funciones callBack
            => promesas
            => async & await      

*/


/* es una función de orden superior. porque
porque esta pensada en recibir como parametro
una función a dentro, invocarla y pasarle como
parametro otro valor */


/* 
    primer parametro => es una función
    segundo parametro => es el valor que le voy a pasar a la función llamada a dentro    
*/


const fnLlamadora = (fnCualqueira,valor) =>
{
    let resultado = fnCualqueira(valor);
    return resultado;
}

// aqui hice una función callBack que será llamada por la de nivel superior
const fnCuadrado = numero => numero * numero;

// podria hacerme otra funcion callBack //
const fnCubo = numero => numero * numero * numero;


/* que tienen en comun  ? 

    reciben como parametro un numero
    realizan un calculo y lo devuelven con return

        fnCuadrado => definidas y tienen nombre
        fnCubo 
        devuelveIVA => se esta definiendo en el momento, es una
            función anónima.

*/

window.addEventListener("load",()=>{})

window.addEventListener("load",()=>
    {
        console.log("running");

        // el tipico ejemplo de una función callback //
        const resultado = fnLlamadora(fnCuadrado,4);
        console.log(resultado);

        // el tipico ejemplo de una función callback //
        const resultado2 = fnLlamadora(fnCubo,4);
        console.log(resultado2);

        const resultado3 = fnLlamadora((x)=>{

            let iva = x * 21/100;
            return iva;

        },25000);

        console.log(resultado3);

        /* */

        const sueldosDeAbril = [1200000,30000000];

        sueldosDeAbril.forEach((element,indice)=>{

            console.log(element,indice);
        })






    })