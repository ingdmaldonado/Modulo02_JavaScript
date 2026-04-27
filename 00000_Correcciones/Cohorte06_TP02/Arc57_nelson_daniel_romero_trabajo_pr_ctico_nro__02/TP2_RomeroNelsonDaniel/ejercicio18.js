let clientes = 0;

let productos = 0;
let precioProducto = 0;

let importeCliente = 0;
let importeFinalCliente = 0;

let metodoPago = 0;
let porcentajeDescuento = 0;
let montoDescuento = 0;

let ventaTotal = 0;
let montoDescuentoTotal = 0;
let importeTotalPagado = 0;
let clientesSinDescuento = 0;
let clientesConDescuento = 0;

let errorIngreso = true;

clientes = Number(prompt ("Ingrese la cantidad de clientes a atender: 0, 2 o 5"));

//cicla hasta que ingrese un valor válido
while (errorIngreso)
{
    switch(clientes)
    {
        case 0:
        case 2:
        case 5:
            errorIngreso = false;
            break;
        default:
            clientes = Number(prompt ("Cantidad de clientes inválida, ingrese la cantidad de clientes a atender: 0, 2 o 5"));
    }
}

//cicla mientras la cantidad e clientes sea mayor a 0
while (clientes) {
    clientes--;
    importeCliente = 0;
    productos = Number(prompt ("Ingrese la cantidad de productos que lleva el cliente: 10, 15, 20, 50"));
    errorIngreso = true;

    //cicla hasta que se ingrese un valor válido
    while (errorIngreso)
    {
        switch (productos)
        {
            case 10:
            case 15:
            case 20:
            case 50:
                errorIngreso = false;
                break;
            default:
                productos = Number(prompt ("Cantidad de productos inválida. Ingrese la cantidad de productos que lleva el cliente: 10, 15, 20, 50"));
        }
    }

    //cicla mientras la cantidad de productos sea mayor a 0
    while (productos) {
        precioProducto = Number(prompt (`Ingrese el precio del producto Nro. ${productos}:`));
        
        //cicla mientras hasta que se ingresa un precio válido
        while (precioProducto <= 0 || isNaN(precioProducto)) {
            precioProducto = Number(prompt (`Precio inválido, ingrese el precio del producto Nro. ${productos}:`));
        }
        importeCliente += precioProducto;
        productos--;
    }

    metodoPago = Number(prompt("Seleccione método de pago: 1-Efectivo, 2-Visa BNA, 3-Master BNA, 4-Otras tarjetas"));
    errorIngreso = true;

    while (errorIngreso) {
        switch (metodoPago) {
            case 1: //efectivo
                porcentajeDescuento = 10;
                clientesConDescuento++;
                errorIngreso = false;
                break;
            case 2: //Visa BNA
            case 3: // Master BNA
                porcentajeDescuento = 7;
                clientesConDescuento++;
                errorIngreso = false;
                break;
            case 4: //Otras tarjetas
                porcentajeDescuento = 0;
                clientesSinDescuento++;
                errorIngreso = false;
                break;
            default:
                metodoPago = Number(prompt("Opción inválida. Seleccione método de pago: 1-Efectivo, 2-Visa BNA, 3-Master BNA, 4-Otras tarjetas"));
        }
    }

    montoDescuento = (porcentajeDescuento * importeCliente) / 100;
    importeFinalCliente = importeCliente - montoDescuento;

    ventaTotal += importeCliente;
    montoDescuentoTotal += montoDescuento;
    importeTotalPagado += importeFinalCliente;
}

if (!clientes && importeTotalPagado > 0) {
    console.log("Descuento total realizado en la jornada:", montoDescuentoTotal);
    console.log("Importe total pagado en la jornada:", importeTotalPagado);
    console.log("Clientes con descuento:", clientesConDescuento);
    console.log("Clientes sin descuento:", clientesSinDescuento);
}
else
{
    console.log("No se atendieron clientes");
}