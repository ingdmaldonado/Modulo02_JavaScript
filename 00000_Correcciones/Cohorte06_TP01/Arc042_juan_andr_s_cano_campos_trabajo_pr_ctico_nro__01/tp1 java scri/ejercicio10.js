{
   
// Ejercicio 10

    let importeDeCompra = 0; // declaro e inicializo la variable.

    let tipoDePago = 0; // declaro e inicializo

    importeDeCompra = Number(prompt(`Sr. Indique el Importe de Compra`));

    tipoDePago = Number(prompt(`Indique Tipo e Pago 1 - Efectivo, 2 - Debito, 3 - Credito`));

    let operacionCorrecta = false;

    let descuento = 0; // declarar e inicializar la variable 

    switch(tipoDePago)
    {
        case 1:
            {
                console.log(`Ud. eligio contado`);

                operacionCorrecta = true;

                descuento = (importeDeCompra * 10)/100;

                break;
            }

        case 2:
            {
                console.log(`Ud. eligió débito`);

                operacionCorrecta = true;

                descuento = (importeDeCompra * 5)/100;

                break;
            }

        case 3:
            {
                console.log(`Ud. eligió Tarjeta`);

                operacionCorrecta = true;

                descuento = 0;

                break;
            }

        default: 
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



        console.log(`Importe Compra: ${importeDeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);

       // console.log(importeDeCompra,tipoDePago,descuento);
    }
    else
    {
        console.log(`Sr. Ud. eligió una opción incorrecta. intente nuevamente`);
    } 
}