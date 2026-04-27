/*
Ejercicio Nro. 18:
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes
Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.
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
Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/
{

let ventaTotal = 0;
let descuentoTotal = 0;
let importeAPagarTotal = 0;
let clientesConDescuent = 0;
let clientesSinDescuent = 0;

let contadorClientes = 0;

let hayCliente= prompt(`Hay un cliente para atender? (si/no)`);

    while(hayCliente === "s" || hayCliente=="S")
    {
        contadorClientes++;

        let contadorProductos = 0;
        let totalCompra = 0;
        let precioProducto = 0;

        let hayProducto = prompt(`Hay un producto para registrar?`);

        while(hayProducto ==="S" || hayProducto == "s")
        {
            contadorProductos= contadorProductos +1;
            precioProducto= Number(prompt(`Ingrese el precio del producto ${contadorProductos}`));

            while(precioProducto < 0  || isNaN(precioProducto))
            {
                console.log(`Ingrese un precio valido`);
                precioProducto = Number(prompt(`Ingrese el precio del producto ${contadorProductos}`));
            }

            totalCompra = totalCompra + precioProducto;

            hayProducto = prompt(`Hay otro producto que registrar? (si/no)`);
        }
    let medioPago = 0;
    let descuento = 0;
    let textoMedio = "";
    let totalPago = 0;

    medioPago = Number(prompt(`Ingrese la forma de pago: 1-Efectivo (10%desc) 2-visa BNA (7% desc) 3-Master BNA (7%) 4-otras?`));

    switch(medioPago)
    {
        case 1:
            {
                textoMedio = "Efectivo (10%desc)";
                descuento = (totalCompra *10)/100;
                break;
            }
        case 2:
            {
                textoMedio = "visa BNA (7% desc)";
                descuento= (totalCompra *7)/100;
                break;
            }
        case 3: 
        {
            textoMedio = "Master BNA (7%)";
            descuento = (totalCompra *7)/100;
            break;
        }
        default:
        {
            textoMedio = "Otras";
            descuento = 0;
        }
    }
    
    importeAPagar = totalCompra - descuento;
    
    ventaTotal = ventaTotal + totalCompra;
    descuentoTotal= descuentoTotal + descuento;
    importeAPagarTotal= importeAPagarTotal +importeAPagar;
    
    if(descuento > 0)
    {
        clientesConDescuent= clientesConDescuent +1;
    }
    else
    {
        clientesSinDescuent = clientesSinDescuent +1;
    }

    console.log(`ticket del cliente N: ${contadorClientes}`);
    console.log(`El total de la compra es $: ${totalCompra} Paga con ${textoMedio}`);
    console.log(`Descuento $: ${descuento}`);
    console.log(`El total a pagar $: ${importeAPagar}`);


        
    
    hayCliente = prompt(`Hay algun otro cliente? (si/no)`); 
    }

    console.log(`Resumen de la jornada`);
    console.log(`Vental total ${ventaTotal}`);
    console.log(`Descuento total ${descuentoTotal}`);
    console.log(`Importe cobrado total ${importeAPagarTotal}`);
    console.log(`Clientes con descuentos ${clientesConDescuent} `);
    console.log(`Clientes sin descuentos ${clientesSinDescuent}`);
    
}
