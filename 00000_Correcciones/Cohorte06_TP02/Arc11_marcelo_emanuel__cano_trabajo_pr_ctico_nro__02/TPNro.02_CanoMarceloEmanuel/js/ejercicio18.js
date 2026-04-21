{
    let ventaTotal = 0;
    let subTotal = 0;
    let descuentoTotal = 0;
    let descuentoCliente = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;
    let precioProducto = 0;
    let formPago = '';
    
    let atenderCliente = 's';
    let finProducto = 's';

    let numeroCliente = 1;

    while (atenderCliente === 's') {


        alert('Atendiendo al cliente número: ' + numeroCliente);

        while (finProducto === 's') {
            precioProducto = parseFloat(prompt('Ingrese el precio del producto cliente : ' + numeroCliente));
            subTotal = subTotal +  precioProducto;
            finProducto = prompt('¿Desea ingresar otro producto? (s/n)');
        }
        finProducto = 's';
        ventaTotal = ventaTotal +  subTotal;
        formPago = prompt('Ingrese la forma de pago (1->efectivo, 2-> Visa BNA, 3-> Master BNA, 4-> Otro Medio)');
        switch (formPago) {
            case '1':
                descuentoCliente = subTotal - (subTotal * 0.10);
                clientesConDescuento++;
                break;
            case '2':                
            case '3':
                descuentoCliente = subTotal - (subTotal * 0.07);
                clientesConDescuento++;
                break;
            case '4':
                clientesSinDescuento++;
                break;
            default:
                alert('Forma de pago no válida');
                break;
        }

        descuentoTotal = descuentoTotal + descuentoCliente;

        alert('El total a pagar cliente número ' + numeroCliente + ' es: $' + descuentoCliente);
        subTotal = 0;
        atenderCliente = prompt('¿Desea atender otro cliente? (s/n)');
        if (atenderCliente === 's') {
            numeroCliente++;
        }
    }

    console.log('Venta total del día: $' + ventaTotal);
    console.log('Descuento total otorgado: $' + descuentoTotal);
    console.log('Cantidad de clientes con descuento: ' + clientesConDescuento);
    console.log('Cantidad de clientes sin descuento: ' + clientesSinDescuento);
}