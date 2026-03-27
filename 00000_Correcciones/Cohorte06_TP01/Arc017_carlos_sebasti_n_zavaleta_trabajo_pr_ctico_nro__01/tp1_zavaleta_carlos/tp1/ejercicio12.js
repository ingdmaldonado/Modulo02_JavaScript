importeCompra = 0;
diaSemana = 0;
descuento = 0;
totalaPagar = 0;
nombreDia = "";
importeCompra = Number(prompt("Ingrese el importe de Compra"));
diaSemana = Number(prompt("Ingrese el día de la semana: 1-Lunes | 2-Martes | 3-Miércoles | 4-Jueves | 5-Viernes | 6-Sábado | 7-Domingo"));

if (diaSemana > 4){
    descuento = importeCompra / 2;
    if (descuento > 80000){
        descuento = 80000;
    }
}
totalaPagar = importeCompra - descuento;

switch (diaSemana){
    case 1: nombreDia = "Lunes";
    break;
    case 2: nombreDia = "Martes";
    break;
    case 3: nombreDia = "Miércoles";
    break;
    case 4: nombreDia = "Jueves";
    break;
    case 5: nombreDia = "Viernes";
    break;
    case 6: nombreDia = "Sábado";
    break;
    case 7: nombreDia = "Domingo";
    break;
}


console.log("El día de la compra es: " + nombreDia);
console.log("El importe de la compra es: " + importeCompra);
console.log("El reintegro obtenido es: " + descuento);
console.log("El importe final a pagar es: " + totalaPagar);