
/* determinar si un numero
ingresado por teclado es
par o es impar */

{
    let numeroIngresado = 0;
    numeroIngresado = Number(prompt(`Ingrese un numero`));

    // division concreta //
    let resultadoDivision = numeroIngresado / 2; // aqui divido y me quedo con el resultado

    // obtener modulo de una division //
    let moduloDivision = numeroIngresado % 2; // aqui divido y me quedo con el resto

    let numeroEsPar = numeroIngresado % 2 === 1 ? `numero es impar`:`numero es par`;

    console.log(`El numero ing ${numeroIngresado} la division por 2 es ${resultadoDivision} y el resto ó modulo es ${moduloDivision} el numero es ${numeroEsPar}`);

    /*
    
        4 / 2 = 2 => resto de la division (2 * 2)

        5 /2 = 2 => resto de la division = 1

            2 * 2 + 1 = 5

            resto de la division => 

        division entera 

            resto = 0 => numero es par
            resto !=0 => numero es impar

    */

}

/* 
    250.000 personas => atender personalmente (ANSES/AFIP)
    0,2,4,6,8 => LUNES, MIERCOLES, VIERNES
    1,3,7,9 => MARTES,JUEVES


*/

/* 

*/

/*
    En un comercio de barrio, el dueño
    establece la siguiente lógica de negocios.
    si paga con efectivo => tiene un descuento del 3%
    si paga con transferencia/QR => no tiene descuento
*/
    {
        let importeCompra = 0; // ingresar por teclado
        let formaDePago = 0; // ingresar por teclado

        importeCompra = Number(prompt(`Ing. compra`));
        formaDePago = Number(prompt(`Ingrese forma pago (1 = efectivo, 2= transferencia)`));

        let descuento = 0; // aqui voy a calcular el descuento

        descuento = formaDePago === 1 ? (importeCompra * 3)/100 : 0;

        let totalAPagar = 0; // siempre, siempre, siempre declaro e inicializo

        totalAPagar = importeCompra - descuento;

        console.log(`Compra: ${importeCompra} Descuento: ${descuento} y Total a pagar: ${totalAPagar}`);

        /* MAGIA PURA */    

    }

    /* HAY UNA DIFERENCIA ENORME
    Y MONUMENTAL ENTRE EL IF/ELSE
    Y EL OPERADOR TERNARIO 
    
    if()
    {

    }
    else
    {

    }

    operadorlogico === ? lado verdadero:ladofalso;
    
    */
