
let ventaTotal = 0;
let descuentoTotal = 0;
let importePagarTotal = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let continuar = true;

while (continuar) 
{
    let cantidadProductos = Number(prompt('Ingrese la cantidad de productos que lleva el cliente (o 0 para salir):'));
    if (cantidadProductos === 0 || cantidadProductos !== cantidadProductos) 
        {
        continuar = false;
        } 
    else 
    {
        let precioTotal = 0;
        let i = 0;
        while (i < cantidadProductos) 
            {
            let precioProducto = Number(prompt(`Ingrese el precio del producto ${i + 1}:`));
            precioTotal = precioTotal + precioProducto;
            i = i + 1;
            }
        
        let metodoPago = prompt('Seleccione el método de pago (1: Efectivo, 2: Tarjeta Visa BNA, 3: Tarjeta Master BNA, 4: Otras Tarjetas Medios):');
        let descuento = 0;
        
        
       while (metodoPago) 
        {
            if(metodoPago === '1') 
                {
                descuento = (precioTotal * 10)/100;
                clientesConDescuento = clientesConDescuento + 1;
                break;
                } 
            else 
                if(metodoPago === '2' || metodoPago === '3') 
                {
                descuento = (precioTotal * 7)/100;
                clientesConDescuento = clientesConDescuento + 1;
                break;
                } 
            else 
                if(metodoPago === '4') 
                {
                clientesSinDescuento = clientesSinDescuento + 1;
                break;
                } 
            else 
                {
                console.log('Opción de pago no válida. Por favor seleccione un método de pago válido.');
                metodoPago = prompt('Seleccione el método de pago (1: Efectivo, 2: Tarjeta Visa BNA, 3: Tarjeta Master BNA, 4: Otras Tarjetas Medios):');
                }
        }
        let importePagar = precioTotal - descuento; 
        ventaTotal = ventaTotal + precioTotal; 
        descuentoTotal = descuentoTotal + descuento; 
        importePagarTotal = importePagarTotal + importePagar;
    }
}

console.log(`Venta Total: $${ventaTotal}`);
console.log(`Descuento Total: $${descuentoTotal}`);
console.log(`Importe a Pagar Total: $${importePagarTotal}`);
console.log(`Cantidad de clientes con descuento: ${clientesConDescuento}`);
console.log(`Cantidad de clientes sin descuento: ${clientesSinDescuento}`);


