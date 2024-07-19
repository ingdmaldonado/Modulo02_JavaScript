

/*

Ejercicio propuesto Nro. 01: 

Realizar un programa para una Empresa de Transportes “La Catamarqueñita” 
que realiza envíos de mercaderías a todo el País. Esta empresa realiza 
los envíos a todo el país y cobra además del servicio de traslado un seguro 
de protección de los bienes que equivale al 5% del valor Declarado. 
Realizar un programa en JavaScript que permita determinar el costo del 
seguro en función del valor declarado de la mercadería.

*/




window.onload = function()
{
    /***********************************************/
    /* OPERACIONES BÁSICAS CON VARIABLES NUMÉRICAS */
    /************************************************/

        /* declaramos e inicializamos una variable
        que se llamará valorDeclarado */

        let valorDeclarado = 0;

        valorDeclarado = Number(prompt("Ingrese el Valor Declarado"));

        console.log("El valor Ingresado es: ",valorDeclarado);

        /* declaramos una variable que contendrá y
        donde declararemos el seguro de transporte */

        let seguroTransporte = valorDeclarado * 3 /100;

        /* mostraremos el costo final del envío del transporte */

        console.log("el costo que debe abonar por seguro de Mercaderia ",seguroTransporte);


}