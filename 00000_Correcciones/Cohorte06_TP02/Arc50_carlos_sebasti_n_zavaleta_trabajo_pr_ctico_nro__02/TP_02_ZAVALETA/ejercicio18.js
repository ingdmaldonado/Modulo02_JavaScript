



let seguirAtendiendo = `S`;
let cantClientes = 0;
let cantClientesDescuento = 0;
let cantClientesSinDescuento = 0;

let totalVenta = 0;
let totalDescuentos = 0;
let totalImportePagar = 0;


while (seguirAtendiendo.toUpperCase() === `S`){

    cantClientes ++;

    console.log(`ingreso Cliente`);

    let nuevoProducto = `S`;
    let cantProductos = 0;
    let totalCompraCliente = 0;
    let precioProducto = 0;
    let opcionPago = 0; 
    let aplicaDescuento = false;
    let descuento = 0;
    let totalAPagarCliente = 0;
    /*
    1 - Efectivo 10% Descuento
    2 - Tarjeta Visa BNA 7% Descuento
    3 - Tarjeta Master BNA 7% Descuento
    4 - Otras tarjetas Medios - Sin descuento
    
    */


    while (nuevoProducto.toUpperCase() === `S`){



        cantProductos++;

        precioProducto = Number(prompt(`Ingrese precio Producto`));

        totalCompraCliente = totalCompraCliente + precioProducto;
        console.log(`Producto N° ${cantProductos} Precio: ${precioProducto}`);
        nuevoProducto = prompt(`Ingresa un nuevo producto? S/N`);



    }

    opcionPago = Number(prompt(`Ingrese opción de Pago: 1- Efectivo 2- Visa BNA 3-Master BNA 4-Otros medios `));
    switch (opcionPago){
        case 1: {
            descuento = totalCompraCliente * 0.1;
            totalAPagarCliente = totalCompraCliente - descuento;
            aplicaDescuento = true;
            console.log (`
                La compra total es: ${totalCompraCliente}
                El descuento es: ${descuento}
                y el total a pagar es: ${totalAPagarCliente}
                `)
                cantClientesDescuento++;
                console.log(`Aplica Descuento : ${aplicaDescuento}`);
                break;
        }
        case 2: {
            descuento = totalCompraCliente * 0.07;
            totalAPagarCliente = totalCompraCliente - descuento;
            aplicaDescuento = true;
            console.log (`
                La compra total es: ${totalCompraCliente}
                El descuento es: ${descuento}
                y el total a pagar es: ${totalAPagarCliente}
                `)
                cantClientesDescuento++;
                console.log(`Cant clientes con descuento: ${cantClientesDescuento}`)
                console.log(`Aplica Descuento : ${aplicaDescuento}`);
                break;
        }
        case 3:{
            descuento = totalCompraCliente * 0.07;
            totalAPagarCliente = totalCompraCliente - descuento;
            aplicaDescuento = true;
            console.log (`
                La compra total es: ${totalCompraCliente}
                El descuento es: ${descuento}
                y el total a pagar es: ${totalAPagarCliente}
                `)
                cantClientesDescuento++;
                console.log(`cant Clientes con descuento: ${cantClientesDescuento}`)
                console.log(`Aplica Descuento : ${aplicaDescuento}`);
                break;
        }
        case 4:{
            totalAPagarCliente = totalCompraCliente;
            aplicaDescuento = false;
            console.log (`
                La compra total es: ${totalCompraCliente}
                El descuento es: ${descuento}
                y el total a pagar es: ${totalAPagarCliente}
                `)
                cantClientesSinDescuento++;
                console.log(`cant Clientes sin descuento: ${cantClientesSinDescuento}`)
                console.log(`Aplica Descuento : ${aplicaDescuento}`);
                break;
        }

        
    }

    totalVenta = totalVenta + totalCompraCliente;
        totalDescuentos = totalDescuentos + descuento;
        totalImportePagar = totalImportePagar + totalAPagarCliente;

    console.log(`###########################################`)
    seguirAtendiendo = prompt(`Sigue con otro cliente? S/N`);
}

console.log(` &&&&&&&&&& *************** &&&&&&&&&&&&`)
console.log(`
    Total de Ventas: ${totalVenta}
    Total Descuentos: ${totalDescuentos}
    total a Pagar: ${totalImportePagar}
    cantidad de Clientes:  ${cantClientes}
    cant Clientes con descuento: ${cantClientesDescuento}
    cant Clientes sin descuento: ${cantClientesSinDescuento}
    `)