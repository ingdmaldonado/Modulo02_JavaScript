{

    let diaSemana = 0;
    diaSemana = Number(prompt(`Ingrese dia de compra: 1-Lunes, 2-Martes, 3-Miercoles, 4-Jueves ...`));
    let montoCompra = 0;
    montoCompra = Number(prompt("Ingrese el valor de la compra: "));

    let cantDescuento = 50/100;
    let reintegroTope = 80000;
    console.log(diaSemana);
    console.log(montoCompra)

    let descuento = 0;
    let esDiaValido = true;
    

    switch(diaSemana){
        case 1:{ //Lunes
            console.log(`Día Lunes`);
            descuento = 0;
            break;
            }
        case 2:{ //Martes
            console.log(`Día Martes`);
            descuento = 0;
            break;
        }
        case 3:{ //Miercoles
            console.log(`Día Miercoles`);
            descuento = 0;
            break;
        }
        case 4:{ //Jueves
            console.log(`Día Jueves`);
            descuento = 0;
            break;
        }
        case 5:{ //Viernes
            console.log(`Día Viernes`);
            descuento = montoCompra * cantDescuento;
            break;
        }
        case 6:{ //Sábado
            console.log(`Día Sábado`);
            descuento = montoCompra * cantDescuento;
            break;
        }
        case 7:{ //Domingo
            console.log(`Día Domingo`);
            descuento = montoCompra * cantDescuento;
            break;
        }
        default:{
            console.log(`Día Inválido`);
            esDiaValido = false;
            break;
        }
    }

    if (esDiaValido){
        descuento = descuento > reintegroTope ? reintegroTope : descuento;
        console.log (`Descuento final: ${descuento}`);
    }else{
        console.log(`Día ingresado incorrecto`);
    }
    
    let totalPagar = 0;
    totalPagar = montoCompra - descuento;
    console.log(`Importe compra: $${montoCompra} | Descuento: $${descuento}\nTotal a pagar: $${totalPagar}`);
}