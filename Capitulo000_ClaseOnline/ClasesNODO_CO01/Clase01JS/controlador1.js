

    // creamos una variable y le asignamos un valor de compra */
    let totalCompraEfectuada = 0; 

    /* 
        aqui estariamos en problemas. si el operador
        ingresa un valor que no es un numero.
        el resultado me dice NaN

        Not a Number => no es un numero

    */
    

    totalCompraEfectuada = prompt("Por favor ingrese el valor de la Compra");

    // creamos una variable descuento y le asignamos el valor de 0*/
    let descuento = 0;  // declarar e inicializar las variables //

    // aqui calculamos el descuento
    descuento = totalCompraEfectuada * 25/100;

    // aqui creo una variable y la inicializo en cero para calcular el total a pagar //
    let totalAPagar = 0;

    // calculo la diferencia. que seria el total de la compra menos el descuento
    totalAPagar = totalCompraEfectuada - descuento;

    // muestro por consola los resultados 
    console.log(totalCompraEfectuada,descuento,totalAPagar);

    console.log("El Total de la Operacion ",totalCompraEfectuada);
    console.log("El descuento correspondiente ",descuento);
    console.log("El total a Pagar es ",totalAPagar);