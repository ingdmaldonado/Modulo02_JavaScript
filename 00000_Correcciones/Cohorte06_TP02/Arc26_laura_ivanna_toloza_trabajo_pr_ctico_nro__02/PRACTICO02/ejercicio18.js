/* Ejercicio Nro. 18:
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los
clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2,
5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes
- Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar
10, 15, 20, 50 productos.
Nota: debería resolverse aplicando un ciclo while de productos.
- Al finalizar la atención del cliente, debería preguntar si paga con:
o 1 – Efectivo – aplicar descuento 10%
o 2 – Tarjeta Visa BNA – aplicar descuento 7%
o 3 – Tarjeta Master BNA – aplicar descuento 7%
o 4 – Otras Tarjetas Medios – sin descuentos.
- Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
o Venta Total = Acumular la venta de todos los clientes
o Descuento Total = Acumular los descuentos realizados a cada cliente
o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o Contar la cantidad de clientes que Tuvieron descuentos
o Contar la cantidad de clientes que No Tuvieron descuentos. 
Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo
while (interno) registrará los productos que lleva cada cliente.*/

let clientes = 1;
let ventaTotal = 0;
let descuentoTotal = 0;
let importePagarTotal = 0;
let clientesConDescuento = 0;
let clientesSinDescuento = 0;

let continuar = "1";

while (continuar === "1") {
    let productos = 0;
    let agregarProductos = "1";
    let ventaTotalCliente = 0;
    while (agregarProductos === "1") {
        agregarProductos = prompt(`¿Desea agregar un producto? (1 - Sí, 2 - No)`);
        if (agregarProductos === "1") {
            productos ++;
            agregarPrecio = Number(prompt(`Ingrese el precio del producto:`));
            ventaTotalCliente = ventaTotalCliente + agregarPrecio;
            console.log(`cliente: ${clientes}`);
            console.log(`precio del producto: ${agregarPrecio}`);
            console.log(`venta total del cliente: ${ventaTotalCliente}`);
    }
    }
    switch (prompt(`Cómo desea pagar? (1 - efectivo, 2 - tarjeta visa BNA, 3 - tarjeta master BNA, 4 - Otros medios)`)) {
        case "1":
            descuentoTotal = descuentoTotal + (ventaTotalCliente * 10) / 100;
            importePagarTotal = importePagarTotal + (ventaTotalCliente - (ventaTotalCliente * 10) / 100);
            clientesConDescuento++;
            console.log(`descuento del cliente: ${(ventaTotalCliente * 10) / 100}`);
            break;
        case "2":
            descuentoTotal = descuentoTotal + (ventaTotalCliente * 7) / 100;
            importePagarTotal = importePagarTotal + (ventaTotalCliente - (ventaTotalCliente * 7) / 100);
            clientesConDescuento++;
            console.log(`descuento del cliente: ${(ventaTotalCliente * 7) / 100}`);
            break;
        case "3":
            descuentoTotal = descuentoTotal + (ventaTotalCliente * 7) / 100;
            importePagarTotal = importePagarTotal + (ventaTotalCliente - (ventaTotalCliente * 7) / 100);
            clientesConDescuento++;
            console.log(`descuento del cliente: ${(ventaTotalCliente * 7) / 100}`);
            break;
        case "4":
            importePagarTotal = importePagarTotal + ventaTotalCliente;
            clientesSinDescuento++;
            break;
    }
    ventaTotal = ventaTotal + ventaTotalCliente;

    continuar = prompt(`¿Desea atender a otro cliente? (1 - Sí, 2 - No)`);
    if (continuar === "1") {
        clientes++;
    }
}
console.log(`Venta Total de la jornada: ${ventaTotal}`);
console.log(`Descuento Total de la jornada: ${descuentoTotal}`);
console.log(`Cantidad de clientes con descuento: ${clientesConDescuento}`);
console.log(`Cantidad de clientes sin descuento: ${clientesSinDescuento}`);