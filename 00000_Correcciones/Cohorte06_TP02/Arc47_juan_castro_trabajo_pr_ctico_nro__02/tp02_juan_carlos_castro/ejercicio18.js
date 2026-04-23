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
while (interno) registrará los productos que lleva cada cliente

*/

{
    let = contadorCliente = 0;

    let atenderClinte = `S`
    let totalVentas = 0;
    let totalDescuentos = 0;
    let cantidadDescuentos = 0;
    let cantidadSinDescuento = 0;

    while (atenderClinte === `S` || atenderClinte === `s`) {

        contadorCliente = contadorCliente + 1;

        let continuar = `S`
        let producto = 0;
        let totalProductos = 0;
        let totalAPagar = 0;
        let modoPago = 0;
        let descuento = 0;

        console.log(`Cliente N° ${contadorCliente}`);

        while (continuar === `S` || continuar === `s`) {

            producto = Number(prompt(`Ingrese el precio del producto`));

            totalProductos = totalProductos + producto;

            continuar = prompt(`Seguir cobrando? S/N`);
        }

        modoPago = Number(prompt(`Elija el modo de pago: 1-Efectivo 2-Tarjeta Visa BNA 3-Tarjeta Master BNA 4-Otras Tarjetas Medios.`));

        if (modoPago === 1 || modoPago === 2 || modoPago === 3) {
            cantidadDescuentos = cantidadDescuentos + 1;
        } else {
            cantidadSinDescuento = cantidadSinDescuento + 1;
        }

        switch (modoPago) {
            case 1:
                descuento = totalProductos * 10 / 100;
                totalAPagar = totalProductos - descuento;
                break;
            case 2:
                descuento = totalProductos * 7 / 100;
                totalAPagar = totalProductos - descuento;
                break;
            case 3:
                descuento = totalProductos * 7 / 100;
                totalAPagar = totalProductos - descuento;
                break;
            case 4:
                totalAPagar = totalProductos;
                break;
            default:
                console.log(`Ingrese una opcion correcta.`);
                break;
        }

        totalVentas = totalVentas + totalAPagar;
        totalDescuentos = totalDescuentos + descuento;

        atenderClinte = prompt(`Seguir atenciendo clients? S/N`);

        console.log(`El total de ventas es: ${totalVentas}`);
        console.log(`El total de descuentos es: ${totalDescuentos}`);
        console.log(`La cantidad de clientes con descuento es: ${cantidadDescuentos}`);
        console.log(`La cantidad de clients sin descuento es: ${cantidadSinDescuento}`);
    }


}


