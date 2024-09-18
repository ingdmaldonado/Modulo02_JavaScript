
/* 
    VARIANTE PAOLA:
*/

{

    
    // aqui voy a realizar el programa //

    let A = 0; // declaro e inicilizo la variable en 0
    let B = 0; // declaro e inicializo la variable en 0

    A = Number(prompt("Por favor ingrese el valor de A"));
    B = Number(prompt("Por favor ingrese el valor de B"));

    console.log(A);
    console.log(B);

    let Producto = 0;
    Producto = A * B;

    let PorcentajeAPracticar = 0;

    if(Producto > 100)
    {
        PorcentajeAPracticar = 10;
    }
    else
    {
        PorcentajeAPracticar = 5;
    }

    let Resultado = 0;

    Resultado = (Producto * PorcentajeAPracticar)/100;

    console.log(`El valor de A es igual ${A}, el valor de B es igual ${B} y el porcentaje es ${Resultado}`);

}
