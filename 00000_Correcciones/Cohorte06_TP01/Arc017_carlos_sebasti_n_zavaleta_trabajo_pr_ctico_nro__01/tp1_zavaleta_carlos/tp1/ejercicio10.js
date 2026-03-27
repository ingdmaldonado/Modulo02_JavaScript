let formaPago = 0;
let monto = 0;
let descuento = 0;
let totalaPagar = 0;
monto = Number(prompt("Ingrese el monto"));
formaPago = Number(prompt("Ingrese la forma de pago: 1 - Efectivo | 2 - Debito | 3 - Crédito "))

switch(formaPago){
    case 1 : 
            console.log("Se aplica descuento del 10%");
            descuento = monto * 10 / 100;
            break;
    case 2 : 
            console.log("Se aplica descuento de 5%");
            descuento = monto * 5 / 100;
            break;
    default : 
            console.log("No se aplica ningún descuento")
            break;
}

totalaPagar = monto - descuento

console.log("El monto a pagar es " + totalaPagar);