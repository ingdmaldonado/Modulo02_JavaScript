{
    let dia = 0;
    dia = Number(prompt(`ingrese dia de compra`));
    let importeDeLaCompra = 0;
    importeDeLaCompra = Number(prompt(`ingrese el importe de la compra`))

    console.log(dia);
    console.log(importeDeLaCompra);

    descuento = 0;
    let esDiaValido = true;

    switch(dia)
    {
        case 1:
            {
                 console.log(`dia lunes`);
                 descuento = 0;
                 break;
            }
        case 2:
            {
                console.log(`dia martes`);
                descuento = 0;
                break;
            }
        case 3:
            {
                console.log(`dia miercoles`);
                descuento = 0;
                break;
            }
        case 4:
            {
                console.log(`dia jueves`);
                descuento = 0;
                break;
            }
        case 5:
            {
                console.log(`dia viernes`);
                descuento = (importeDeLaCompra * 50)/100;
                break;
            }
        case 6:
            {
                console.log(`dia sabado`);
                descuento = (importeDeLaCompra * 50)/100;
                break;
            }
        case 7:
            {
                console.log(`dia domingo`);
                descuento = (importeDeLaCompra * 50)/100;
                break;
            }
        default: 
        {
            console.log(`dia invalido, ingrese valido`);
            esDiaValido = false;
            break;
        }
    } 
    
    if(esDiaValido)
    {
        console.log(`dia seleccionado correcto`)

        descuento = descuento > 80000 ? 80000:descuento;

        console.log(`descuento final:`,descuento)
    }

    else
    {
        console.log(`dia seleccionado incorrecto`)
    }

    let totalAPAgar = 0;
    totalAPAgar = importeDeLaCompra - descuento;

    console.log(`importe de la compra: ${importeDeLaCompra} Descuento: ${descuento} Total a pagar: ${totalAPAgar}`)
    console.log(descuento);

}
