/* Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
 */

{
    let importeDeCompra= 0;
    importeDeCompra= Number(prompt(`Ingrese su importe de compra`));
    
    let tipoDePago= 0;/* porque la persona va a responder 1,2,3 */
    tipoDePago= Number(prompt(`Indique Tipo de Pago 1- Efectivo 2- Debito 3- Credito`));

    let operacionCorrecta = false;
    switch(tipoDePago)
    {
        case 1://esto es contado 10%
            {
                console.log(`Ud. eligio contado`);
                operacionCorrecta= true;
                descuento= (importeDeCompra * 10)/100;
                break;
            }
        case 2:// esto es debito 5%
            {
                console.log(`Ud. eligió débito`);
                operacionCorrecta= true;
                descuento= (importeDeCompra * 5)/100;
                break;
            }
        case 3://esto es credito sin descuento
            {
                console.log(`Ud. eligió crèdito`);
                operacionCorrecta= true;
                descuento= 0;
                break;
            }
        default://un valor no definido, sin descuento
            {
                console.log(`Ingrese una opcion correcta`);
                operacionCorrecta= false;
                break;
            } 
    }
    let totalAPagar= 0;

    if(operacionCorrecta)
    {
        totalAPagar= importeDeCompra - descuento;
        console.log(`Importe de la compra es $ ${importeDeCompra}. Descuento $ ${descuento} Total a Pagar $${totalAPagar}`);
        
    }
    else
    {
        console.log(`Sr. Ud. eligio una opcion incorrecta. Intente nuevamente`);
    }

    
}