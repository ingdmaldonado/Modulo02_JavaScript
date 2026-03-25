
{

    console.log("funcionando");

    /* declaracion de variables */

    let importeTotal = 0; // declaro e inicializo variables

    const TOTAL = 200; // declaro e inicializo constantes

    /* operaciones con variables */

    let a = 200;
    let b = 300;

    let resultadoSuma = a + b;
    
    /* mostrar resultados por consola
    haciendo interpolación de strings */

    console.log(`La suma entre ${a} y ${b} es igual a ${resultadoSuma}`);

    /* estructuras condicionales */

    /* if/else => se usa para condicionales
    múltiples. o para analizar rangos
    de variables discretas */

    /* es utilizando camel Case.
    porque las primeras letras
    de las palabras van en mayusculas.
    exceptuando la primera */

    let sueldoBrutoTrabajador = 0; 

    sueldoBrutoTrabajador = 225433.20;

    if(sueldoBrutoTrabajador >= 300000)
    { // lado true o lado verdadero
        console.log("USTED. cobra mas de 300 mil pesos");
    }
    else
    { // lado false o falso
        console.log("USTED no cobra mas de 300 mil pesos");
    }


    /* OPERADORES TERNARIOS 
    es una estructura condicional simple. que permite
    en función de una expresión lógica, inicializar
    una variable dependiendo de una condición. 
    que si se cumple la condición, por el lado
    verdadero pone un valor, por el lado falso otro valor
    */



    /* habrá descuento, si el importe total
    de la compra es mayor a 200 mil pesos, y 
    ese descuento será del 35% */

    
    let importeTotalCompra = 0;
    importeTotalCompra = 225000;
    let descuento = 0;

    if(importeTotalCompra >= 200000)
    {
        descuento = (importeTotalCompra * 35)/100;
    }
    else
    {
        descuento = 0;
    }
    console.log(`El descuento es igual a ${descuento}`);

    let descuento2 = importeTotalCompra > 200000 ? (importeTotalCompra * 35)/100 : 0;
    console.log(`El descuento es igual a ${descuento2}`);

    /* variables continuas, son aquellas
    que pueden asumir valores infinitos
    dentro un rango */

    let pesoDePersona = 78.88

    if((pesoDePersona >= 150) && (pesoDePersona <= 200))
    {
        console.log("persona grande");
    }
    else
    {
        console.log("persona NO grande");
    }

    /* valores discretos son los que se pueden
    facilmente enumerar. es decir, la variable
    asume un conjunto de valores finitos y claramente
    identificables 
    
    1 - FME
    2 - CAPITAL
    3 - ANDALGALA
    4 - BELEN
    */

    let departamentoDeNacimiento = 0;
    departamentoDeNacimiento = Number(prompt("ingrese el departamento donde nacio ?"));
    console.log(departamentoDeNacimiento);

    switch(departamentoDeNacimiento)
    {
        case 1:
            {
                console.log("UD. NACIO EN EL MEJOR DEPARTAMENTO DEL UNIVERSO, a excepcion de la gente de SAN ANTONIO");
                break;
            }

        case 2:
            {
                console.log("UD. NACIO EN CAPITAL");
                break;
            }

        case 3:
            {
                console.log("UD. NACIO EN ANDALGALA");
                break;
            }

        case 4:
            {
                console.log("UD. NACIO EN BELEN");
                break;
            }

        default:
            {
                console.log("VALOR NO IDENTIFICADO");
                break;
            }
    }






}