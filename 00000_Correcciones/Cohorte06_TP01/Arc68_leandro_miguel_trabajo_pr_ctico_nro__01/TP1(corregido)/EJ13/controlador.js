// Ejercicio N13

let importeCompra = Number(prompt("Ingrese el importe de su compra: "));

let rubroProducto = Number(prompt("Ingrese el rubro del producto: 1 para vestimenta, 2 para Perfumeria, 3 para Libreria, 4 para Electrodomesticos, 5 para Calzado: "));


switch (rubroProducto) {
    case 1:
        console.log("Usted eligió el rubro de vestimenta, se le aplicará un descuento del 20% sobre el monto de su compra.");
        descuento = importeCompra * 0.20;
        topedescuento = 80000;
        break;
    case 2:
        console.log("Usted eligió el rubro de perfumeria, se le aplicará un descuento del 20% sobre el monto de su compra.");
        descuento = importeCompra * 0.20;
        topedescuento = 80000;
        break;
    case 3:
        console.log("Usted eligió el rubro de libreria, se le aplicará un descuento del 30% sobre el monto de su compra.");
        descuento = importeCompra * 0.30;
        topedescuento = 90000;
        break;
    case 4:
        console.log("Usted eligió el rubro de electrodomesticos, se le aplicará un descuento del 15% sobre el monto de su compra.");
        descuento = importeCompra * 0.15;
        topedescuento = 70000;
        break;
    case 5:
        console.log("Usted eligió el rubro de calzado, se le aplicará un descuento del 20% sobre el monto de su compra.");
        descuento = importeCompra * 0.20;
        topedescuento = 80000;
        break;

    default:
        console.log("Rubro no válido, no se aplicará ningún descuento.");
        descuento = 0;
        break;
}

let descuentotope = descuento > topedescuento ? Math.min(descuento, topedescuento) : descuento;

console.log("El importe de su compra es: " + importeCompra);
console.log("El descuento aplicado es: " + descuentotope);
console.log("El importe final a pagar es: " + (importeCompra - descuentotope)); 