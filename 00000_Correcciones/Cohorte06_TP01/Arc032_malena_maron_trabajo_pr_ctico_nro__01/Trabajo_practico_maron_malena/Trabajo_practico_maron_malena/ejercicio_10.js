/*Ejercicio Nro. 10: Estructuras Condicionales (if/else) 
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch */

{
    let importeDeCompra=0;
    let pago=0;
    let descuento=0;
    let final=0;
    descuento= importeDeCompra * pago;
    importeDeCompra = Number(prompt `Ingrese importe de compra`);
    pago= Number(prompt`Elegir una forma de pago (1.Efectivo )(2.Débito)(3.Crédito)`);
    

    switch(pago){
        case 1: 
       
        {
            descuento=(importeDeCompra * 10)/100;
        }
        break;
        case 2: 
        {
            descuento=(importeDeCompra * 5)/100;

        }
        break;
        case 3:
        {
            descuento= 0;
            console.log(`No se aplica descuento`)
        }
        break;
        default:
        {
            console.log(`Forma de pago incorrecta`)
        }
    }
    final=importeDeCompra-descuento;
    console.log(`Importe ingresado ${importeDeCompra}`);
    console.log(`Se aplico el descuento ${descuento}`);
    console.log(`Total a pagar ${final}`)
}