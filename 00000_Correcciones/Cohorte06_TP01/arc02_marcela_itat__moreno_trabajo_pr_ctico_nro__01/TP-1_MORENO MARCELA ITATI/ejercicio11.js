{
let importeDeCompra = 0;
let totalAPagar = 0;

let zonaCliente = 0;
let zonaCentro = 2500;
let zonaOeste = 3750;
let zonaNorte = 4225;
let zonaSur = 5222.50;
let zonaEste = 4288.50;

let zonaValida = true;




importeDeCompra = Number(prompt(`Ingresar importe de la compra`));
console.log(`Importe de compra:`, importeDeCompra);

zonaCliente = Number(prompt(`Ingrese Zona donde vive: 1 - Zona Centro --- 2 - Zona Oeste --- 3 - Zona Norte --- 4 - Zona Sur --- 5 - Zona Este`));
console.log(zonaCliente);

switch(zonaCliente){
    case 1 : {
        totalAPagar = importeDeCompra + zonaCentro;
        console.log(`Importe total a pagar, incluido costo de envío, es de `, totalAPagar);
        break;
    }

    case 2 : {
        totalAPagar = importeDeCompra + zonaOeste;
        console.log(`Importe total a pagar, incluido costo de envío, es de `, totalAPagar);
        break;
    }

    case 3 : {
        totalAPagar = importeDeCompra + zonaNorte;
        console.log(`Importe total a pagar, incluido costo de envío, es de `, totalAPagar);
        break;
    }

    case 4 : {
        totalAPagar = importeDeCompra + zonaSur;
        console.log(`Importe total a pagar, incluido costo de envío, es de `, totalAPagar);
        break;
    }

    case 5 : {
        totalAPagar = importeDeCompra + zonaEste;
        console.log(`Importe total a pagar, incluido costo de envío, es de `, totalAPagar);
        break;
    }

    default : {
        console.log(`Datos invalidos, intentelo nuevamente`);
        zonaValida = false;
        break;
    }
}

}