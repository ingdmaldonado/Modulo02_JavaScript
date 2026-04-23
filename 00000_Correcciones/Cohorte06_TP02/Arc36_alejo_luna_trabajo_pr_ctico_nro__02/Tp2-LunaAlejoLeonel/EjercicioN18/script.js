console.log(`Sistema de caja`);

let ventaTotal = 0;
let descuentoTotal = 0;
let totalPagar = 0;
let clientesConDesc = 0;
let clientesSinDesc = 0;

let continuarCliente = 1;

while (continuarCliente === 1) {

    let totalCliente = 0;
    let continuarProducto = 1;

    while (continuarProducto === 1) {
        let precio = Number(prompt(`Ingrese precio del producto:`));
        totalCliente += precio;

        continuarProducto = Number(prompt(`¿Agregar otro producto? (1=SI / 0=NO)`));
    }

    
    let formaPago = Number(prompt(`
        Formas de pago: 
        1- Efectivo (10%)
        2- Visa BNA (7%)
        3- Master BNA (7%)
        4- Otros (sin descuento)`
    ));

    // descuento
    let descuento = 0;

    if (formaPago === 1) {
        descuento = totalCliente * 0.10;
    } else if (formaPago === 2 || formaPago === 3) {
        descuento = totalCliente * 0.07;
    }

    // aquí pude los contadores de clientes
    if (descuento > 0) {
        clientesConDesc++;
    } else {
        clientesSinDesc++;
    }

    // cáculo final para el cliente
    let paga = totalCliente - descuento;

    // acumuladores
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    totalPagar += paga;

    continuarCliente = Number(prompt(`¿Atender otro cliente? (1=SI / 0=NO)`));
}

// resultados finales
console.log(`Venta Total:`, ventaTotal);
console.log(`Descuento Total:`, descuentoTotal);
console.log(`Total a Cobrar:`, totalPagar);
console.log(`Clientes con descuento:`, clientesConDesc);
console.log(`Clientes sin descuento:`, clientesSinDesc);