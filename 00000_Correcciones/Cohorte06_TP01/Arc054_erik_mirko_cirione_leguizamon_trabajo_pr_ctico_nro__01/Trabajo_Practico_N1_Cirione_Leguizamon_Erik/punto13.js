/*
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales. 

Tabla de descuentos: 

Rubro                       Descuento               Tope máximo   
Vestimenta                      20%                     $80.000 
Perfumería                      20%                     $80.000 
Librería                        30%                     $90.000
Electrodomésticos               15%                     $70.000
Calzado                         20%                     $80.000

El programa debe:

    1. Solicitar el rubro del comercio. 
    2. Solicitar el importe de la compra. 
    3. Calcular el descuento correspondiente. 
    4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
                                                  
5. Mostrar: 
    - rubro 
    - importe de la compra 
    - descuento aplicado 
    - importe final a pagar. 

*/

let rubro = 0;
let totalCompra = 0;
let descuento = 0;
let importeFinal = 0;
let topeElegido = 0;
let descuentoElegido = 0;
let descripcionRubro = ``;
let descuentoMensaje = ``;

let vestimentaTope = 80000;              /*variables con los valores de los topes*/
let perfumeriaTope = 80000;
let libreriaTope = 90000;
let electrodomesticosTope = 70000;
let calzadoTope = 80000;

let vestimentaDescuento = 20;         /*variables con los valores de los descuentos*/
let perfumeriaDescuento = 20;
let libreriaDescuento = 30;
let electrodomesticosDescuento = 15;
let calzadoDescuento = 20;




totalCompra = Number(prompt(`Ingrese el el monto total de la compra:`));

rubro = Number(prompt(`Ingrese el rubro del comercio: 1(vestimenta), 2(perfumeria), 3(libreria), 4electrodomesticos), 5(calzado)`));

if (totalCompra < 0) {              /*alerta por si ingresan un numero negativo*/
    alert (`El monto de la compra no puede ser menor a 0`);
    process.exit ();
}

switch (rubro) {                             /*divicion de operaciones por rubro*/

    case 1:
        descuentoElegido = vestimentaDescuento;
        descuento = (totalCompra * descuentoElegido) / 100;
        topeElegido = vestimentaTope;
        descripcionRubro = `Vestimenta`;
        break;

    case 2:
        descuentoElegido = perfumeriaDescuento;
        descuento = (totalCompra * descuentoElegido) / 100;
        topeElegido = perfumeriaTope;
        descripcionRubro = `Perfumeria`;
        break;

    case 3:
        descuentoElegido = libreriaDescuento;
        descuento = (totalCompra * descuentoElegido) / 100;
        topeElegido = libreriaTope;
        descripcionRubro = `Libreria`;
        break;

    case 4:
        descuentoElegido = electrodomesticosDescuento;
        descuento = (totalCompra * descuentoElegido) / 100;
        topeElegido = electrodomesticosTope;
        descripcionRubro = `Electrodomesticos`;
        break;

    case 5:
        descuentoElegido = calzadoDescuento;
        descuento = (totalCompra * descuentoElegido) / 100;
        topeElegido = calzadoTope;
        descripcionRubro = `Calzado`;
        break;

    default:                /*alerta en el caso de rubro inalido y finalizacion del programa*/
        alert("¡¡¡ El rubro que ha ingresado NO EXISTE en el sistema !!!")
        process.exit();
        break;

}

if (descuento >= topeElegido) {                          /*verifico que los descuentos no se pasen del tope y
                                                         preparo los mensajes de los descuentos*/
    importeFinal = totalCompra - topeElegido;
    descuentoMensaje = `El descuento aplicado es correspondiente a un monto de $${topeElegido}`;
    
    
} else {
    importeFinal = totalCompra - descuento;
    descuentoMensaje = `El descuento aplicado es del ${descuentoElegido}%, resultante en un monto de $${descuento}`;
    
}


console.log(`El rubor que usted a elegido es: ${descripcionRubro}`);
console.log(`El importe total de la compra es de: $${totalCompra}`);
console.log (`${descuentoMensaje}`);
console.log(`El importe Final a abonar es de: $${importeFinal}`);
