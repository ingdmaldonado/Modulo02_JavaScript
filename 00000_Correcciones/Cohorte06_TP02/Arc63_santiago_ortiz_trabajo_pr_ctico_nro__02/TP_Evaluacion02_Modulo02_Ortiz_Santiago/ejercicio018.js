/* Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los 
clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones. - 
Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 
5 clientes.  
Nota: debería resolverse aplicando un ciclo while de clientes
- - - 
Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 
10, 15, 20, 50 productos.  
Nota: debería resolverse aplicando un ciclo while de productos. 
Al finalizar la atención del cliente, debería preguntar si paga con: 
o 1 – Efectivo – aplicar descuento 10% 
o 2 – Tarjeta Visa BNA – aplicar descuento 7% 
o 3 – Tarjeta Master BNA – aplicar descuento 7% 
o 4 – Otras Tarjetas Medios – sin descuentos. 
Al finalizar la atención del cliente deberá ir registrando los siguientes puntos 
o Venta Total = Acumular la venta de todos los clientes 
o Descuento Total = Acumular los descuentos realizados a cada cliente 
o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente 
o Contar la cantidad de clientes que Tuvieron descuentos 
o Contar la cantidad de clientes que No Tuvieron descuentos. */


// Variables 

let ventaTotal = 0;
let descuentoTotal = 0;
let importePagarTotal = 0;

let clientesConDescuento = 0;
let clientesSinDescuento = 0;
let clientes;

// Control del ciclo de Cliente


let continuarClientes = "si";

// Estructura WHILE de Cliente

while (continuarClientes === "si") {

    console.log("NUEVO CLIENTE");

    let subtotalCliente = 0;


    let continuarProductos = "si";


// Estructura WHILE de Producto

 while (continuarProductos === "si") {

        let precioProducto = parseFloat(
            prompt("Ingrese precio del producto:")
        );

        subtotalCliente += precioProducto;

        continuarProductos = prompt(
            "¿Desea agregar otro producto? SI/NO"
        ).toLowerCase();

    }

// Forma de pago 

    let descuento = 0;

    let opcionPagar = parseInt(
        prompt(
            "Forma de pago: " +
            "   1 - Efectivo" +
            "   2 - Visa BNA" +
            "   3 - Master BNA" +
            "   4 - Otras tarjetas"
        )
    );


    // Descuentos

    if (opcionPagar === 1) {

        descuento = subtotalCliente * 0.10;
        clientesConDescuento++;

    } else if (
        opcionPagar === 2 ||
        opcionPagar === 3
    ) {

        descuento = subtotalCliente * 0.07;
        clientesConDescuento++;

    } else if (opcionPagar === 4) {

        descuento = 0;
        clientesSinDescuento++;

    } else {

        console.log("Opción inválida.");

    }
}

// Calculos

let importeFinal = subtotalCliente - descuento;

// Acumuladores

ventaTotal += subtotalCliente;
descuentoTotal += descuento;
importePagarTotal += importeFinal;

// Resultados Cliente

    console.log("Subtotal: $" + subtotalCliente);

    console.log("Descuento: $" + descuento);

    console.log("Importe Final: $" + importeFinal);

// Continuacion Cliente

    continuarClientes = prompt("¿Desea atender otro cliente? SI/NO").toLowerCase();

// Resultado Total

console.log("VENTA TOTAL: $" + ventaTotal);

console.log("DESCUENTO TOTAL: $" + descuentoTotal);

console.log("IMPORTE A PAGAR TOTAL: $" + importePagarTotal);

console.log("CLIENTES CON DESCUENTO: " + clientesConDescuento);

console.log("CLIENTES SIN DESCUENTO: " + clientesSinDescuento);