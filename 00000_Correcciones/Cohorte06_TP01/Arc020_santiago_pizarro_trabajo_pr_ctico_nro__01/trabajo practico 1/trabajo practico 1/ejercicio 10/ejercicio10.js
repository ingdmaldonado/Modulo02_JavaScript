{
    let importe = Number(prompt("Ingrese el importe de la compra"));

    let medioDePago = Number(prompt("Seleccione el medio de pago que desea realizar: 1 - Efectivo, 2 - Débito ó 3 - Crédito"));

    let descuento = 0;

    switch (medioDePago){
        case 1: descuento = importe * 0.10;
        console.log("Forma de pago: Efectivo");
        break;

        case 2: descuento = importe * 0.05;
        console.log("Forma de pago: Débito");
        break;

        case 3: descuento = 0;
        console.log("Forma de pago: Crédito");
        break;

        default: 
        console.log("Por favor, ingrese un valor correcto");
        descuento = 0;
        break;
    }

    let importeFinal = importe - descuento;

    console.log(`El importe de la compra es de: $${importe}`);
    console.log(`El descuento que se aplica es de: $${descuento}`),
    console.log(`El costo final es de: $${importeFinal}`);
}