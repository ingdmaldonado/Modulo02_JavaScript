
/*
    Ejercicio Nro. 03:
    Realizar un programa que permita ingresar una cantidad
    determinada de días y en función de ello convierta los 
    días en segundos.

*/

/* el programa comienza aqui */
{

    // aqui estoy declarando e inicializando una variable para la cantidad de dias*/
    let cantidadDias = 0; 

    cantidadDias = Number(prompt("Por favor ingrese la cantidad de dias"));

    console.log(cantidadDias);

    if(cantidadDias > 0)
    {
        console.log("por aqui debería hacer el calculo");

        // debería tener una carga semantica fuerte //
        let segundosTotales = cantidadDias * 24 * 60 * 60;

        console.log(segundosTotales);

        console.log("La Cantidad de segundos que tienen esos días ",cantidadDias," es igual a ",segundosTotales);

        let mensajeParaUsuario = "";

        /* interpolación de string */
        mensajeParaUsuario = `La cantidad de dias ${cantidadDias} es igual a ${segundosTotales}`;
        
        /* bacticks  */

        console.log(mensajeParaUsuario);

    }

    else
    {
        console.log("por favor ingrese un valor valido");
    }


}
/* el programa termina aqui */