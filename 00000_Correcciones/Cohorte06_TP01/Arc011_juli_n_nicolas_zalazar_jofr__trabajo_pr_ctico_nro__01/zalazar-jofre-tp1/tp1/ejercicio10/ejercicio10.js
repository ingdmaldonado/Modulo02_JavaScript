//ejercicio10

let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra:"));
let metodoPago = Number(prompt("Ingrese el método de pago (1-efectivo, 2-debito, 3-credito): "));
let descuento = 0;
switch (metodoPago) {
    case 1:{
        descuento = importeCompra * 0.10;
        break
    }
    case 2:{
        descuento = importeCompra * 0.05;
        break
    }
    case 3:{
        descuento = 0;
        break
    }
    default:{
        console.log("Método de pago no válido");
        break
    }
}

if (metodoPago === 1){
    console.log("El importe total de la compra es: ", importeCompra);
    console.log("El método de pago seleccionado es: Efectivo");
    console.log("El descuento aplicado es: ", descuento);
    console.log("El total a pagar es: ", (importeCompra - descuento));
}

else if (metodoPago === 2){
    console.log("El importe total de la compra es: ", importeCompra);
    console.log("El método de pago seleccionado es: Débito");
    console.log("El descuento aplicado es: ", descuento);
    console.log("El total a pagar es: ", (importeCompra - descuento));
}
else if (metodoPago === 3){

    console.log("El importe total de la compra es: ", importeCompra);
    console.log("El método de pago seleccionado es: Tarjeta de crédito");
    console.log("El descuento aplicado es: ", descuento);
    console.log("El total a pagar es: ", (importeCompra - descuento));
}
