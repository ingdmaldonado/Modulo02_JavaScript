/*

El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en conjunto con el Banco Nación para incentivar el consumo en comercios locales.

El beneficio consistía en:

-50% de reintegro sobre el monto de la compra
-tope máximo de reintegro: $80.000
-válido para compras realizadas los días viernes, sábado y domingo

El programa debe:

1. Solicitar al usuario:
-el día de la compra
-el importe de la compra


2. Verificar si la compra fue realizada un viernes, sábado o domingo.
-Si no fue uno de esos días, no se aplica el beneficio.

3. Si corresponde el beneficio:
-calcular el 50% del importe de la compra
-verificar si el reintegro supera el tope de $80.000
-si lo supera, aplicar solamente el tope

4. Mostrar:
-día de la compra
-importe de la compra
-reintegro obtenido
-importe final pagado por el cliente.

*/

{
    let valorDeLaCompra = 0;
    let diaDeCompra = 0;
    let descuento = 0;

    valorDeLaCompra = Number(prompt(`Ingrese el valor de la compra`));
    diaDeCompra = Number(prompt(`Ingrese el dia: 1 Lunes, 2 Martes, 3 Miercoles, 4 Jueves, 5 Viernes, 6 Sabado, 7 Domingo`));

    switch(diaDeCompra)
    {
        case 1: {
                    console.log(`El dia de la compra es: ${diaDeCompra}`);
                    console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                    console.log(`El reintegro obtenido es: ${descuento}`);
                    console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    break;
                }

        case 2: {
                    console.log(`El dia de la compra es: ${diaDeCompra}`);
                    console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                    console.log(`El reintegro obtenido es: ${descuento}`);
                    console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    break;
                }

        case 3: {
                    console.log(`El dia de la compra es: ${diaDeCompra}`);
                    console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                    console.log(`El reintegro obtenido es: ${descuento}`);
                    console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    break;
                }

        case 4: {
                    console.log(`El dia de la compra es: ${diaDeCompra}`);
                    console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                    console.log(`El reintegro obtenido es: ${descuento}`);
                    console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    break;
                }

        case 5: {
                    let descuento = (valorDeLaCompra * 50)/100;
                    
                    if(descuento <= 80000)
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${80000}`);
                        console.log(`El importe total es: ${valorDeLaCompra-80000}`);
                    }
                    break;
                }

        case 6: {
                    let descuento = (valorDeLaCompra * 50)/100;
                    
                    if(descuento <= 80000)
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${80000}`);
                        console.log(`El importe total es: ${valorDeLaCompra-80000}`);
                    }
                    break;
                }

        case 7: {
                    let descuento = (valorDeLaCompra * 50)/100;

                    if(descuento <= 80000)
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${valorDeLaCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El dia de la compra es: ${diaDeCompra}`);
                        console.log(`El importe de la compra es: ${valorDeLaCompra}`);
                        console.log(`El reintegro obtenido es: ${80000}`);
                        console.log(`El importe total es: ${valorDeLaCompra-80000}`);
                    }
                    break;
                }
        
        default: {console.log(`La opcion es incorrecta`);}
    }
}