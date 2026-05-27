// Ejercicio N12

let diaCompra = Number(prompt("Ingrese el dia de su compra."));

let importeCompra = Number(prompt("Ingrese el monto de su compra"));

let diavalido = true;

let topeDescuento = 80000;

switch (diaCompra) {
    case 1:
        console.log("Usted eligió el dia Lunes, no se aplica descuento.");
        descuento = 0;

        break;
    case 2:
        console.log("Usted eligió el dia Martes, no se aplica descuento.");
        descuento = 0;
        
        break;        
    case 3:
        console.log("Usted eligió el dia Miercoles, no se aplica descuento.");
        descuento = 0;

        break;        
    case 4:
        console.log("Usted eligió el dia Jueves, no se aplica descuento.");
        descuento = 0;

        break;        
    case 5:
        console.log("Al comprar el dia Viernes, se le aplicará un descuento del 50% sobre el monto de su compra.");
        descuento = importeCompra * 0.5

        break;
     
    case 6:
        console.log("Al comprar el dia Sabado, se le aplicará un descuento del 50% sobre el monto de su compra.");
        descuento = importeCompra * 0.5

        break;
    case 7:
        console.log("Al comprar el dia Domingo, se le aplicará un descuento del 50% sobre el monto de su compra.");
        descuento = importeCompra * 0.5
        break;

    default: 
        console.log("Numero invalido")
        diavalido = false;
        break;
}

if (diavalido) {
    
    let descuentotope = descuento > topeDescuento ? Math.min(descuento, topeDescuento) : descuento;

    console.log("El importe de su compra es: " + importeCompra);
    console.log("El reintegro es: " + descuentotope);
    console.log("El importe final a pagar es: " + (importeCompra - descuentotope));


} else {
    console.log("No se pudo calcular el descuento debido a un día no válido.");
} 