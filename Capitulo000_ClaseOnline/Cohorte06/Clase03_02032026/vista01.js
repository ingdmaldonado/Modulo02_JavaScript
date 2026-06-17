/* 
    ESTRUCTURAS CONDICIONALES

        - if/else => estructuras condicionales complejas
            variables continuas. variables que dentro
            de un rango pueden asumir infinitos valores.

            if(importeCompra > 200000)
            {
                - las variables nacen y mueren en el bloque
                - permite tener mas de una sentencia
            }

        - switch: Estructura condicional mas simple,
        que me permite evaluar variables que asumen
        valores discretos.

        - tambien cada opción tiene su bloque de codigos.

        - operador ternario

*/

/* 
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1)	Efectivo → 10% descuento
2)	Débito → 5% descuento
3)	Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

/*
    importe de la compra: variable continua - asumir infinitos valores.

    tipo de pago (1 - Efectivo, 2 - Debito, 3 - Credito) => Variable Continua

*/

{
    let importeDeCompra = 0; // declaro e inicializo la variable.

    let tipoDePago = 0; // declaro e inicializo

    importeDeCompra = Number(prompt(`Sr. Indique el Importe de Compra`));

    tipoDePago = Number(prompt(`Indique Tipo e Pago 1 - Efectivo, 2 - Debito, 3 - Credito`));

    let operacionCorrecta = false;

    let descuento = 0; // declarar e inicializar la variable 

    switch(tipoDePago)
    {
        case 1:// esto es contado 10%
            {
                console.log(`Ud. eligio contado`);

                operacionCorrecta = true;

                descuento = (importeDeCompra * 10)/100;

                break;
            }

        case 2:// esto es débito 5%
            {
                console.log(`Ud. eligió débito`);

                operacionCorrecta = true;

                descuento = (importeDeCompra * 5)/100;

                break;
            }

        case 3:// esto es crédito sin descuento
            {
                console.log(`Ud. eligió Tarjeta`);

                operacionCorrecta = true;

                descuento = 0;

                break;
            }

        default: // un valor no definido sin descuento
            {
                console.log(`Ingrese una opción correcta`);

                operacionCorrecta = false;

                descuento = 0;
                
                break;
            }  
    }

    let totalAPagar = 0;

    if(operacionCorrecta)
    {

        totalAPagar = importeDeCompra - descuento;

    /* ALT + 96 */

        console.log(`Importe Compra: ${importeDeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);

       // console.log(importeDeCompra,tipoDePago,descuento);
    }
    else
    {
        console.log(`Sr. Ud. eligió una opción incorrecta. intente nuevamente`);
    }
}


{
    let total1 = 10; // variable numerica
    let total2 = "10"; // variable string

    /* 
        = asignación de valores
        == comparación de valores (independientes del tipo)
        === comparación estricta (tienen que tener el mismo valor y ser del mismo tipo)
    
    */

    if(total1 == total2)
    {

    }

}

/* ESTRUCTURAS CONDICIONALES 

    - if/else => variables continuas y estructuras complejas 

    - switch => variables discretas 

    - operador ternario

*/