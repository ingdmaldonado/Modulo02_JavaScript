/*

Ejercicio Nro. 18: 
 
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
while (interno) registrará los productos que lleva cada cliente.

*/

{
    
    let contadorClientes = 0;
    let ventaTotalAcumulada = 0;
    let descuentoTotalAcumulado = 0;
    let importePagarTotalAcumulado = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    // el enunciado especifica que podemos atender 0 clientes, por eso agregue al inicio el prompt
    continuaAtendiendo = prompt(`Continuar con otro cliente ? (S/N)`);

    // este while es para ir atendiendo a los cliente
    while (continuaAtendiendo === 'S' || continuaAtendiendo === 's') {
        contadorClientes++;
        console.log(`Atendiendo el Cliente Nro. ${contadorClientes}`);

        // variables que se declaran e inicializan por cliente
        let ingresaOtroProducto = 'S';
        let contadorProductos = 0;
        let totalCompraCliente = 0;

        // Ciclo interno de productos
        while (ingresaOtroProducto === 'S' || ingresaOtroProducto === 's') {
            contadorProductos++;
            let precioProducto = Number(prompt(`Ing. precio Producto ${contadorProductos}`));
            
            totalCompraCliente += precioProducto;
            console.log(`Registrando producto Nro. ${contadorProductos}`);
            
            // preguntamos si quiere ingresar otro producto
            ingresaOtroProducto = prompt(`¿Ingresa otro producto? (S/N)`);
        }


        /*        
        o	1 – Efectivo – aplicar descuento 10%
        o	2 – Tarjeta Visa BNA – aplicar descuento 7%
        o	3 – Tarjeta Master BNA – aplicar descuento 7%
        o	4 – Otras Tarjetas Medios – sin descuentos.
        */

        // // preguntamos el tipo de pago
        let tipoDePago = Number(prompt(`Pago: 1-Efectivo (10%), 2-Visa BNA (7%), 3-Master BNA (7%), 4-Otros (0%)`));
        let descuento = 0;

        switch(tipoDePago)
        {
            case 1:
                {
                    descuento = (totalCompraCliente * 10)/100;
                    break;
                }

            case 2:
                {
                    descuento = (totalCompraCliente * 7)/100;
                    break;
                }

            case 3:
                {
                    descuento = (totalCompraCliente * 7)/100;
                    break;
                }

            default:
                {
                    descuento = 0;
                    break;
                }
        }

        let importeAPagar = totalCompraCliente - descuento;

        // Registramos la venta total acumulada, descuento total acumulado y importe a pagar total acumulado
        ventaTotalAcumulada = ventaTotalAcumulada + totalCompraCliente;
        descuentoTotalAcumulado = descuentoTotalAcumulado + descuento;
        importePagarTotalAcumulado = importePagarTotalAcumulado + importeAPagar;

        if (descuento > 0) {
            clientesConDescuento++;
        } else {
            clientesSinDescuento++;
        }

        console.log(`Cliente ${contadorClientes}: Bruto: $${totalCompraCliente}, Desc: $${descuento}, Neto: $${importeAPagar}`);

        // preguntamos si quiere atender otro cliente
        continuaAtendiendo = prompt(`¿Continuar con otro cliente? (S/N)`);
    }



    /*
    Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
    o Venta Total = Acumular la venta de todos los clientes 
    o Descuento Total = Acumular los descuentos realizados a cada cliente 
    o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente 
    o Contar la cantidad de clientes que Tuvieron descuentos 
    o Contar la cantidad de clientes que No Tuvieron descuentos. 
    */

    // información al finalizar la jornada
    console.log(`-------------------`);
    console.log(`CIERRE DE JORNADA`);
    console.log(`Venta Total: $${ventaTotalAcumulada}`);
    console.log(`Descuento Total: $${descuentoTotalAcumulado}`);
    console.log(`Importe a Pagar Total: $${importePagarTotalAcumulado}`);
    console.log(`Clientes con descuento: ${clientesConDescuento}`);
    console.log(`Clientes sin descuento: ${clientesSinDescuento}`);

}