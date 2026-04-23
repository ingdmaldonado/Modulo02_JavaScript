// Programa que procesa ventas de múltiples clientes y aplica descuentos según forma de pago
{
    // Variables para cálculo de ventas y descuentos
    let ventaTotal = 0;
    let subTotal = 0;
    let descuentoTotal = 0;
    let importeAPagarTotal = 0;   // Nueva variable para acumular el importe pagado
    let descuentoCliente = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;
    let precioProducto = 0;
    let formPago = '';
    
    let atenderCliente = 's';
    let finProducto = 's';

    let numeroCliente = 1;

    // Bucle para procesar múltiples clientes
    while (atenderCliente === 's') {

        alert('Atendiendo al cliente número: ' + numeroCliente);
        subTotal = 0;  // Reiniciar subtotal para cada cliente

        // Ingresa los productos del cliente
        while (finProducto === 's') {
            precioProducto = parseFloat(prompt('Ingrese el precio del producto cliente : ' + numeroCliente));
            if (!isNaN(precioProducto) && precioProducto > 0) {
                subTotal = subTotal + precioProducto;
            } else {
                alert("Precio no válido, no se agrega el producto.");
            }
            finProducto = prompt('¿Desea ingresar otro producto? (s/n)');
        }
        finProducto = 's';  // Reset para próximo cliente
        
        if (subTotal === 0) {
            alert("El cliente no llevó productos válidos. No se registra.");
            atenderCliente = prompt('¿Desea atender otro cliente? (s/n)');
            if (atenderCliente === 's') numeroCliente++;
            continue;
        }
        
        ventaTotal = ventaTotal + subTotal;
        
        // Selecciona forma de pago y aplica descuentos
        formPago = prompt('Ingrese la forma de pago (1->efectivo, 2-> Visa BNA, 3-> Master BNA, 4-> Otro Medio)');
        let importeCliente = subTotal;  // Por defecto sin descuento
        
        switch (formPago) {
            case '1':
                importeCliente = subTotal * 0.90;  // 10% descuento
                descuentoCliente = subTotal - importeCliente;
                clientesConDescuento++;
                break;
            case '2':                
            case '3':
                importeCliente = subTotal * 0.93;  // 7% descuento
                descuentoCliente = subTotal - importeCliente;
                clientesConDescuento++;
                break;
            case '4':
                importeCliente = subTotal;
                descuentoCliente = 0;
                clientesSinDescuento++;
                break;
            default:
                alert('Forma de pago no válida. Se aplica sin descuento.');
                importeCliente = subTotal;
                clientesSinDescuento++;
        }

        descuentoTotal = descuentoTotal + descuentoCliente;
        importeAPagarTotal = importeAPagarTotal + importeCliente;

        alert('El total a pagar cliente número ' + numeroCliente + ' es: $' + importeCliente.toFixed(2));
        
        atenderCliente = prompt('¿Desea atender otro cliente? (s/n)');
        if (atenderCliente === 's') {
            numeroCliente++;
        }
    }
    
    // Mostramos los resultados del día
    console.log('Venta total del día (suma de precios sin descuento): $' + ventaTotal.toFixed(2));
    console.log('Descuento total otorgado: $' + descuentoTotal.toFixed(2));
    console.log('Importe a pagar total: $' + importeAPagarTotal.toFixed(2));
    console.log('Cantidad de clientes con descuento: ' + clientesConDescuento);
    console.log('Cantidad de clientes sin descuento: ' + clientesSinDescuento);
}