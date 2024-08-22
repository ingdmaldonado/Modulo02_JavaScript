

/*

    var => esto NO SE USA MAS, o se intenta no usar mas




*/




/* forma tradicional */


// lo que esta entre parentesis son los parametros, y puede tener
// no recibir ningún parametro, o recibir "n" parametros.


/*******************************************/
/* Declaración de la Función ó Sub proceso */
/*******************************************/


/*
    - permite encapusular lógica de programación en una rutina mas pequeña y especifica

    - permite una mayor organización del código

    - existe o permite dentro de un equipo de desarrollo la especialización.
        calcular por ejemplo la dosis de insulina de un paciente diabetico

    - permite una mejor organización del proyecto.

*/

function Cuadrado(numero)
{
    let resultado = (numero * numero);

    return resultado;
}



/* Arrow Function ó Funciones Flecha */

const CuadradoNuevo = (numero) =>
    {
        let resultado = (numero * numero);

        return resultado;
    }


/* Crear una funcion flecha, que reciba tres parametros
y que obtenga el promedio de esos valores */

const promedioDeTres = (numero1,numero2,numero3)=>
{
    return(numero1 + numero2 + numero3)/3;
}

const esCorreoValido = (correoElectronico)=>
{
    console.log(correoElectronico);

    let contadorDeArrobas = 0;

    for(let i = 0; i < correoElectronico.length; i++)
    {
        let caracter = correoElectronico.charAt(i);
       // console.log(caracter);

        if(caracter === '@')
        {
            contadorDeArrobas++;
        }
    }

    if(contadorDeArrobas === 1)
    {
        return true;
    }
    else
    {
        return false;
    }

}


{

    /* Ejemplo 01 -  Invocación ó llamado de la función, call */

    let a = Cuadrado(2); // le pase un valor fijo, un valor constante 
    console.log(a);

    /* Ejemplo 02 - Invocar la función */

    let X = 5;
    let resultadoX = Cuadrado(X);
    console.log(resultadoX);

    /* Ejemplo 03 - Invocar la función */
    let resultado = -3;
    let numero = Cuadrado(resultado);
    console.log(numero);

    /* Ejemplo 04 - Invocar la función */

    let resultado2 = Cuadrado(Cuadrado(2));
    console.log(resultado2);


    /* Ejemplo 05 - Invocar la función */

    let resultado3 = 2 * Cuadrado(3) - 3 * Cuadrado(-2) + Cuadrado(Cuadrado(3));
    console.log(resultado3);


    /* Ejemplo 06 - Invocar la arrow function */

    let resultado4 = CuadradoNuevo(2);
    console.log(resultado4);

    /* Ejemplo 07 - Invocación de la función promedio de 3*/

    let tercerValor = 16;

    let resultado5 = promedioDeTres(12,14,tercerValor);

    console.log(resultado5);

    /* deberiamos hacer un proceso que recorra la cadena
        y que cuente la cantidad de arrobas que tiene
        si tiene 1 sola vamos a dar por supuesto que es valido
        si tiene 0 o tiene mas de 1 es invalido

    */ 

    /*

    let correoElectronico = '@ingdma@ldo@nado@gmail.com@';

  
    */

    let resultadoCorreo1 = esCorreoValido("blabla@@@.com.ar.@");
    console.log(resultadoCorreo1);

    let resultadoCorreo2 = esCorreoValido("ingdmaldonado@gmail.com");
    console.log(resultadoCorreo2);

    let resultadoCorreo3 = esCorreoValido("blablabla@@.com.ar.ar.ar.");
    console.log(resultadoCorreo3);


}


