
/*
    esas indiciaciones => reglas de negocio

    Necesito un programador que me permita
    calcular el interes (PRESTAMISTA)
    por prestamos que otorga a sus clientes.
    que la tasa interes que aplica 
    es el 40% sobre el capital prestado
*/
{

        let importeAPrestar = 0;

        importeAPrestar = Number(prompt("Ingrese el $"));

        let interes1 = 0;
        if(importeAPrestar > 0)
        {
            interes1 = (importeAPrestar * 40/100);
        }
        console.log(interes1);

        let interes2 = importeAPrestar > 0 ? (importeAPrestar * 40/100):0;
        console.log(interes2);
        
}

// determinar si un numero es par o impar
{
    let numeroIngresado = 0; // declaro e inicializo en cero

    numeroIngresado = Number(prompt("Ingrese un numero"));

    let resultadoDivision = numeroIngresado / 2; // guardando el resultado de la division

    let resto = numeroIngresado % 2; // guardando el resto

    console.log(resultadoDivision,resto);

    let numeroEsParOImpar = (numeroIngresado % 2 === 1) ? "impar":"par";

    console.log(numeroEsParOImpar);

    // numero es par resto => 0
    // numero es impar resto => 1

    /* 

        4 / 2 => resultado 2, resto = 0

        9 / 2 => resultado 

    */


}

{
    let numero = -25;

    let raizCuadrada = numero > 0 ? Math.sqrt(numero):0;
    
    console.log(raizCuadrada);



}