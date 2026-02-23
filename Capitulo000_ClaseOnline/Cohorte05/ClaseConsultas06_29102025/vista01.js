
/* A partir del 2015. se incorporaron 
una enorme cantidad de cambios 

    => antes del 2015
        - funciones clasicas

        MILLONES DE SISTEMAS Y APLICACIONES CORRIENDO CON CODIGO VIEJO

    => desde el 2015 en adelante
        - arrow function

*/

/* MOMENTO1 => MOMENTO DE LA DEFINICIÓN */

    /*
        tiene la palabra reservada function
        tiene un nombre
        () los parametros de entrada
        {} el cuerpo de la función
        la palabra "return"
    */

function sumaDeDos(numero1,numero2)
{
    let suma = numero1 + numero2;

    return suma; // significa que la función devuelve algo a quien la invoque

}

/* 
    el nombre de la función es el que tiene la constante
    () lleva los parametros de entrada
    => si o si lleva la flecha
    {} aqui esta el cuerpo de la función
     la palabra return que es lo que se devuelve al programa principal

*/

const sumaDeDos_V2 = (numero1,numero2)=>
    {
        return (numero1 + numero2);
    }

/* Definimos una función. que recibe como parametro
una cadena de texto. que la recorre caracter x caracter
y va iterando, encontrando las letras "e" minuscula
o mayusculas. contandolas. y devolviendo 
al final la cantidad */

const contarCantidadE = (mensajeDeTexto)=>
    {
        let contadorE = 0;
        for(let i = 0; i < mensajeDeTexto.length;i=i+1)
        {
            // aqui extraigo el caracter i de la cadena
            let caracter = mensajeDeTexto[i];

            if((caracter === 'e') || (caracter === 'E'))
            {
                contadorE = contadorE + 1;
            }
        }

        return contadorE;

    }


/* Bloque principal */
{
    console.log(`running`);

    /* EJEMPLO 01 - MOMENTO 2 => MOMENTO DE LA INVOCACIÓN */

    let resultado1 = sumaDeDos(10,20);
    
    console.log(resultado1);

    /* EJEMPLO 02 */

    let a = 15;
    let b = 11;

    let resultado2 = sumaDeDos(a,b);
    
    console.log(resultado2);

    /* EJEMPLO 03 - */

    let numero2 = 15;
    let numero1 = 20;
    let numero3 = -5;

    let resultado3 = sumaDeDos(numero2,numero3);

    console.log(resultado3);

    /* EJEMPLO 04 - HACEMOS ALGO CON CADENAS */

    let mensajeDeTexto = `Hola Fede aqui te paso el enunciado del TP. NRO. 03`;

    /* Recorrer significa iterar sobre
    una estructura de datos lineal */

    let contadorE = 0;

    for(let i = 0; i < mensajeDeTexto.length;i=i+1)
    {
        // cada pasito que haga el ciclo for lo llamamos iteración

        let caracter = mensajeDeTexto.charAt(i);

        if((caracter === 'E') || (caracter === 'e'))
        {
            contadorE = contadorE + 1;
        }

        console.log(caracter);
    }

    console.log(`El Contador de E es igual a ${contadorE}`);

    /* EJEMPLO 05 - VAMOS A INVOCAR LA FUNCIÓN 
    QUE SE ENCARGA DE CONTAR LAS LETRAS E
    DE UNA CADENA */

    let resultado4 = contarCantidadE("hola fede, soy daniel");
    console.log(`cantidad e: ${resultado4}`);

    let resultado5 = contarCantidadE("hola Jorge chocobar. esto es un ejemplo");
    console.log(`cantidad e: ${resultado5}`);

    let cadena10 = `Esto es una cadena de ejemplo para mis alumnos`;
    let resultado6 = contarCantidadE(cadena10);
    console.log(`cantidad e: ${resultado6}`);

}


/* 
    WEB PASADO => HTML, MAQUETACION. 

    WEB ACTUAL => EXISTE UNA VNCULACION DE APLICACIONES

        ARQ. DE INTERCONECTIVIDAD DE APLICACIONES.

        INTERCONECTIVIDAD DE APLICACIONES
        EL LENGUAJE DE PROGRAMACIÓN. 

*/

