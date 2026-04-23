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
while (interno) registrará los productos que lleva cada cliente.  */

let continuar=true;
let ventatotalClientes=0;
let descuentototal=0;
let importepagartotal=0;
let clientescondescuento=0;
let clientesSindescuento=0;
let cliente=1;

while (continuar) {
    let producto=0;
    let ingresarProducto= true;
    let ventaTotal=0;
    while (ingresarProducto){
        let precioProducto= prompt("Ingrese el precio del producto");
        producto++;
        precioProducto=Number(precioProducto);
        ventaTotal+=precioProducto;
        console.log("Cliente: "+ cliente + " - producto: " + producto + " - Precio: $" + precioProducto);
        ingresarProducto=prompt("¿Desea ingresar otro producto? (1: sí / 0: no)");
        ingresarProducto = ingresarProducto === "1" ? true : false;
        console.log("Venta Total: $" + ventaTotal);
    }
    let metodoPago= prompt("Ingrese el método de pago (1: Efectivo / 2: Tarjeta Visa BNA / 3: Tarjeta Master BNA / 4: Otras Tarjetas Medios)");
    let descuento=0;
    switch (metodoPago) {
        case "1": // Efectivo
            descuento=ventaTotal*0.10;
            clientescondescuento++;
            break;
        case "2": // Tarjeta Visa BNA
            descuento=ventaTotal*0.07;
            clientescondescuento++;
            break;
        case "3": // Tarjeta Master BNA
            descuento=ventaTotal*0.07;
            clientescondescuento++;
            break;
        case "4": // Otras Tarjetas o Medios de pago
            clientesSindescuento++;
            break;
        default:
            console.log("Método de pago no válido. No se aplicará descuento.");
            clientesSindescuento++;
            break;
    }
    descuentototal+=descuento;
    importepagartotal=ventaTotal-descuento;
    ventatotalClientes+=ventaTotal;
    console.log("Descuento aplicado: $" + descuento.toFixed(2));
    console.log("Importe a pagar: $" + importepagartotal.toFixed(2));
    continuar=prompt("¿Desea atender a otro cliente? (1: sí / 0: no)");
    if (continuar === "0"){
        console.log("Detalles de la jornada laboral:");
        console.log("Venta Total: $" + ventatotalClientes.toFixed(2));
        console.log("Descuento Total: $" + descuentototal.toFixed(2));
        console.log("Cantidad de clientes con descuento: " + clientescondescuento);
        console.log("Cantidad de clientes sin descuento: " + clientesSindescuento);
        continuar = false;
    }
    else{
        continuar = true;
        cliente++;
    }
    

}






