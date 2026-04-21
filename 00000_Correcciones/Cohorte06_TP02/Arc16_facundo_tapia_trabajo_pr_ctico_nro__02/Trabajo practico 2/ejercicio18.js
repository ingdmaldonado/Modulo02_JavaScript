let continuaAtendiendo = "S";

let ventaTotal = 0;
let descuentoTotal = 0;
let importeFinalTotal = 0;

let clientesConDescuento = 0;
let clientesSinDescuento = 0;

while (continuaAtendiendo === "S" || continuaAtendiendo === "s")
{
    let ingresaOtroProducto = "S";
    let totalCliente = 0;

    
    while (ingresaOtroProducto === "S" || ingresaOtroProducto === "s")
    {
        let precio = Number(prompt("Ingrese el precio del producto"));
        totalCliente += precio;

        ingresaOtroProducto = prompt("¿Ingresa otro producto? (S/N)");
    }

    
    let formaPago = Number(prompt(`Seleccione forma de pago:
1 - Efectivo (10%)
2 - Visa BNA (7%)
3 - Master BNA (7%)
4 - Otros (sin descuento)`));

    let descuento = 0;

    switch (formaPago)
    {
        case 1:
            {
            descuento = totalCliente * 0.10;
            clientesConDescuento++;
            break;
        }
        case 2:
            {
                descuento = totalCliente * 0.07;
                clientesConDescuento++;
                break;
            }
        case 3:
            {
            descuento = totalCliente * 0.07;
            clientesConDescuento++;
            break;
            }
        case 4:
            {
            descuento = 0;
            clientesSinDescuento++;
            break;
            }
        default:
            {
            console.log("Forma de pago inválida");
            clientesSinDescuento++;
            }
    }

    let totalPagar = totalCliente - descuento;

    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    importeFinalTotal += totalPagar;

    console.log("Total cliente:", totalCliente);
    console.log("Descuento:", descuento);
    console.log("Total a pagar:", totalPagar);

    continuaAtendiendo = prompt("¿Atender otro cliente? (S/N)");
}


console.log("Venta total:", ventaTotal);
console.log("Descuento total:", descuentoTotal);
console.log("Importe final total:", importeFinalTotal);
console.log("Clientes con descuento:", clientesConDescuento);
console.log("Clientes sin descuento:", clientesSinDescuento);