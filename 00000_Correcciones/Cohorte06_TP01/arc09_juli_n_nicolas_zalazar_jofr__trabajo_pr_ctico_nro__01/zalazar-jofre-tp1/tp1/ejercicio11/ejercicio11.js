//ejercicio11

let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra: "));
let zona = Number(prompt("Ingrese la zona de entrega (1-centro, 2-oeste, 3-norte, 4-sur, 5-este): "));
let zonaCentro = 2500.00;
let zonaNorte = 4225.00;  
let zonaSur = 5222.50;
let zonaOeste = 3750.00;
let zonaEste = 4288.50;

switch (zona) {
    case 1:{   
        console.log("El importe total de la compra es: ", importeCompra);
        console.log("La zona de entrega seleccionada es: ", zona);
        console.log("El costo de envío para la zona centro es: ", zonaCentro);
        console.log("El total a pagar es: ", (importeCompra + zonaCentro));
        break
    }
    case 2:{
        console.log("El importe total de la compra es: ", importeCompra);
        console.log("La zona de entrega seleccionada es: ", zona);
        console.log("El costo de envío para la zona oeste es: ", zonaOeste);
        console.log("El total a pagar es: ", (importeCompra + zonaOeste));
        break
    }    
    case 3:{
        console.log("El importe total de la compra es: ", importeCompra);
        console.log("La zona de entrega seleccionada es: ", zona);
        console.log("El costo de envío para la zona norte es: ", zonaNorte);
        console.log("El total a pagar es: ", (importeCompra + zonaNorte));
        break
    }
    case 4:{
        console.log("El importe total de la compra es: ", importeCompra);
        console.log("La zona de entrega seleccionada es: ", zona);
        console.log("El costo de envío para la zona sur es: ", zonaSur);
        console.log("El total a pagar es: ", (importeCompra + zonaSur));
        break
    }
    case 5:{
        console.log("El importe total de la compra es: ", importeCompra);
        console.log("La zona de entrega seleccionada es: ", zona);
        console.log("El costo de envío para la zona este es: ", zonaEste);
        console.log("El total a pagar es: ", (importeCompra + zonaEste));
        break
    }
    default:{
        console.log("Zona de entrega no válida");
        break
    }
}