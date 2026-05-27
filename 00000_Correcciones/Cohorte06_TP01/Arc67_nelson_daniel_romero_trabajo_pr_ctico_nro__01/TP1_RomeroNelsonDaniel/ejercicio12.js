let diaCompra = Number(prompt("Seleccione día: 1-Lunes, 2-Martes, 3-Miercoles, 4-Jueves, 5-Viernes, 6-Sábado, 7-Domingo"));
let importeCompra = Number(prompt("Ingrese importe de compra"));
let montoDescuento = 0;
let correspondeDescuento = false;

if(diaCompra >= 1 && diaCompra <= 7)
{
    if (importeCompra > 0)
    {
        switch(diaCompra)
        {
            case 1:
                diaCompra = "Lunes";
                break;
            case 2:
                diaCompra = "Martes";
                break;
            case 3:
                diaCompra = "Miercoles";
                break;
            case 4:
                diaCompra = "Jueves";
                break;
            case 5:
                diaCompra = "Viernes";
                correspondeDescuento = true;
                break;
            case 6:
                diaCompra = "Sabado";
                correspondeDescuento = true;
                break;
            case 7:
                diaCompra = "Domingo";
                correspondeDescuento = true;
                break;
        }

        console.log("Día de la compra:", diaCompra);
        console.log("Importe de la compra:", importeCompra);

        if (correspondeDescuento)
        {
            montoDescuento = importeCompra * 0.5;
            montoDescuento = montoDescuento > 80000 ? 80000 : montoDescuento;
            console.log("Reintegro obtenido:", montoDescuento);
            console.log("Importe final:", importeCompra - montoDescuento);
        }
        else
        {
            console.log("Reintegro obtenido: no corresponde");
        }
    }
    else
    {
        console.log("Ingrese un monto de compra válido")
    }
}
else
{
    console.log("Ingrese un día válido");
}

