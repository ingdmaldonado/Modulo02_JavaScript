{

    let rubro = 0;
    rubro = Number(prompt(`Ingrese Rubro: 1-Vestimenta, 2-Perfumeria, 3-Librería, 4-Electrodomésticos 5-Calzado`));
    let montoCompra = 0;
    montoCompra = Number(prompt("Ingrese el monto de la compra: "));

    let cantDescuento = 0;
    let reintegroTope = 0;
    let rubroValido = true;

    switch(rubro){
        case 1:{ //Vestimenta
            console.log(`--- Vestimenta ---`);
            cantDescuento = 20/100;
            reintegroTope = 80000;
            break;
            }
        case 2:{ //Perfumería
            console.log(`--- Perfumería ---`);
            cantDescuento = 20/100;
            reintegroTope = 80000;
            break;
        }
        case 3:{ //Librería
            console.log(`--- Librería ---`);
            cantDescuento = 30/100;
            reintegroTope = 90000;
            break;
        }
        case 4:{ //Electrodomésticos
            console.log(`--- Electrodomésticos ---`);
            cantDescuento = 15/100;
            reintegroTope = 70000;
            break;
        }
        case 5:{ //Calzado
            console.log(`--- Calzado ---`);
            cantDescuento = 20/100;
            reintegroTope = 80000;
            break;
        }
        default:{
            console.log(`Rubro Inválido`);
            rubroValido = false;
            break;
        }
    }

    let descuento = 0;
    let descuentoTotal = 0;

    if (rubroValido){
        console.log(`Importe de compra: $${montoCompra}`);
        descuento = montoCompra * cantDescuento;
        descuentoTotal = descuento > reintegroTope ? reintegroTope : descuento;
        console.log (`Descuento final: ${descuentoTotal}`);
    }else{
        console.log(`Rubro ingresado incorrecto`);
    }

    let totalPagar = 0;
    totalPagar = montoCompra - descuentoTotal;
    console.log(`Importe compra: $${montoCompra} | Descuento: $${descuento}\nTotal a pagar: $${totalPagar}`);
}