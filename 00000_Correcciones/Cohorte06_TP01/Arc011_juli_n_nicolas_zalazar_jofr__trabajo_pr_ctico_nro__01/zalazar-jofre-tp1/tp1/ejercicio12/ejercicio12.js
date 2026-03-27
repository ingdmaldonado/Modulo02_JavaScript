//ejercicio12

let dia = prompt("Ingrese el dia para verificar si hay descuento (lunes, martes, miércoles, jueves, viernes, sábado, domingo)");
let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra: "));
let descuento = importeCompra * 0.5;
if (dia === 'viernes' || dia === 'sabado' || dia === 'domingo'){
    
    if (descuento > 80000) {
        descuento = 80000;
    }
    
}
else{
    descuento = 0;
}

console.log("El día de la compra es: ", dia);
console.log("El total de la compra es: ", importeCompra);
console.log("El descuento aplicado es: ", descuento); 
console.log("El total a pagar es: ", (importeCompra - descuento));