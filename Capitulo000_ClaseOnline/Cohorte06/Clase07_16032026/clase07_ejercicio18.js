/* 

Ejercicio Nro. 18:

	Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.
-	Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes. 
Nota: debería resolverse aplicando un ciclo while de clientes
-	Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos. 
Nota: debería resolverse aplicando un ciclo while de productos.

-	Al finalizar la atención del cliente, debería preguntar si paga con:
o	1 – Efectivo – aplicar descuento 10%
o	2 – Tarjeta Visa BNA – aplicar descuento 7%
o	3 – Tarjeta Master BNA – aplicar descuento 7%
o	4 – Otras Tarjetas Medios – sin descuentos.
-	Al finalizar la atención del cliente deberá ir registrando los siguientes puntos
o	Venta Total = Acumular la venta de todos los clientes
o	Descuento Total = Acumular los descuentos realizados a cada cliente
o	Importe a Pagar Total = Acumular los Importes a pagar por cada cliente
o	Contar la cantidad de clientes que Tuvieron descuentos
o	Contar la cantidad de clientes que No Tuvieron descuentos.

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente.
*/

{
    // voy a atender "n" clientes
    // voy a atender "m" productos de cada cliente

    let continuaAtendiendo = `S`;

    while (continuaAtendiendo === `S` || continuaAtendiendo === `s`)
    {
        // dentro de este ciclo, voy haciendo la atención del cliente

        let ingresaOtroProducto = `S`;

        while(ingresaOtroProducto === `S` || ingresaOtroProducto === `s`)
        {
            // dentro de este ciclo. voy registrando los productos

            ingresaOtroProducto = prompt(`ingresa otro producto ?.`);

        }

        continuaAtendiendo = prompt(`atiende otro cliente ?`);

    }

}