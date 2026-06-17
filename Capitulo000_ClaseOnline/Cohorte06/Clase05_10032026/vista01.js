
{
    /* Estructuras Repetitivas - FOR 
    
        - repetir una cantidad "n" de veces un fragmento de código {}
        - repetir una cantidad indeterminada de veces un fragmento de código {}
     
    */

    /* Estamos en un mercadito de Barrio, 
    y la cajera del mercadito necesita
    una aplicación que le permita ingresar, 
    cobrar y totalizar los productos que los clientes llevan

    caja rapida hasta 5 productos.

        - si paga con tarjeta de banco nación cualquier dia 
        aplicamos descuento con marcatón, por ende hace un descuento del 35% con tope
        de devolución de 45.000,00


    */

    /*
        parte 1 = variable que me permite iterar y en que valor se inicializa

        parte 2 = condición de permanencia dentro del ciclo for

        parte 3 = la forma en la que se incrementará el iterador

    */

    let totalCompra = 0; // aqui voy a ir "acumulando los valores"
    let precioProducto = 0; // aqui voy a ir ingresando el precio individual de cada producto

    for(let iterador = 1;iterador <= 5;iterador = iterador+1)
    {
        precioProducto = Number(prompt(`Sr. Ingrese el Precio del Producto ${iterador}`));

        console.log(`Precio Registrado ${iterador} : ${precioProducto}`);

        // acumulador. voy sumarizando valores //
        totalCompra = totalCompra + precioProducto;

        console.log(`SubTotal: ${totalCompra}`);

        //console.log(`Ejemplo 1 - Iterador: = ${iterador}`);
    }

     /* continua ?. discreta ?. 

        continuas => asumir infinitos valores
        discretas => asumir valores finitos, enumerados

       1 - TARJETA DE CREDITO BANCO NACIÓN - 35% - TOPE 45.000,00
       2 - EFECTIVO
    */

    let medioDePago = 0;
    medioDePago = Number(prompt(`Indique medio de Pago (1 - TBNA, 2 - Efetivo)`));
    let descuento = 0;

    switch(medioDePago)
    {
        case 1: // TBNA
            {
                descuento = (totalCompra * 35)/100 >= 45000 ? 45000: (totalCompra * 35)/100;
                console.log(descuento);
                break;
            }
        case 2: // EFECTIVO
            {
                descuento = 0;
                console.log(descuento);
                break;
            }
        default: // EFECTIVO
            {
                descuento = 0;
                console.log(descuento);
                break;

            }
    }  
    
    let totalAPagar = totalCompra - descuento;



    // ANTES 3
    // DURANTES
    // FINAL

    console.log(`Total Compra: ${totalCompra} Descuento: ${descuento} A Pagar: ${totalAPagar}`);
   


}

 /*
    for(let iterador = 1;iterador <= 5;iterador = iterador+2)
    {
        console.log(`Ejemplo 2 - Iterador: = ${iterador}`);
    }
*/