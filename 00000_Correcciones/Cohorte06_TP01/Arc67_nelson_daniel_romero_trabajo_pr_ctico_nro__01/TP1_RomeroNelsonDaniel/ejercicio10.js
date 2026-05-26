let importe = Number(prompt("Ingrese importe"));
let metodoPago = Number(prompt("Seleccione método de pago: 1 - Efectivo, 2 - Débito, 3 - Crédito"));
let descuento = 0;
let montoDescuento = 0;

if (metodoPago > 0 && metodoPago < 4)
{
    switch(metodoPago)
    {
        case 1:
            descuento = 10;
            metodoPago = "efectivo";
            break;
        case 2:
            descuento = 5;
            metodoPago = "débito";
            break;
        case 3:
            descuento = 1;
            metodoPago = "crédito";
            break;
    }

    if (descuento > 1)
    {
        montoDescuento = (descuento * importe) / 100;
    }

    console.log(`Importe: ${importe}`);
    console.log(`Método de pago: ${metodoPago}`);
    console.log(`Descuento: ${descuento > 1 ? descuento+"%" : "sin descuento"} (${montoDescuento})`);
    console.log(`Importe final: ${importe - montoDescuento}`);
}
else
{
    console.log("Ingrese un método de pago válido");
}