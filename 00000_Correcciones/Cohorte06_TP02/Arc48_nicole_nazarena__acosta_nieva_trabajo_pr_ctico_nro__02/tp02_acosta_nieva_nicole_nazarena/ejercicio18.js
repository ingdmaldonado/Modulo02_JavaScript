/*Ejercicio Nro. 18:
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
while (interno) registrará los productos que lleva cada cliente*/

{
   let contadorDeCliente = 0;
   let continuarAtendiendo = `S`;
   let contadorConDescuento = 0;
   let contadorSinDescuento = 0;
   let ventaTotal = 0;
   let descuentoTotal = 0;
   let totalAPagar = 0;

   while (continuarAtendiendo === `S` || continuarAtendiendo === `s`) {

      contadorDeCliente = contadorDeCliente + 1;

      let ingresarOtroProducto = `S`;
      let contadorDeProductos = 0;
      let precioProducto = 0;
      let medioDePago = 0;
      let descuento = 0;
      let totalComprasCliente = 0;
      let totalAPagarCliente = 0;


      console.log(`Atendiendo al cliente Nro. ${contadorDeCliente}`);

      while (ingresarOtroProducto === `S` || ingresarOtroProducto === `s`) {

         precioProducto = Number(prompt(`ingrese el monto del producto `));

         contadorDeProductos = contadorDeProductos + 1;
         totalComprasCliente = totalComprasCliente + precioProducto;

         ingresarOtroProducto = prompt(`desea seguir ingresando productos ? S/N`);
         
         console.log(`contador de productos ${contadorDeProductos}`);
         console.log(`total compras cliente ${totalComprasCliente}`);
      }

      medioDePago = Number(prompt(`ingrese el medio de pago 1- Efectivo, 2- Tarjeta Visa BNA, 3- Tarjeta Master BNA, 4- Otras Tarjetas`));
      switch (medioDePago) {
         case 1:
            descuento = (totalComprasCliente * 10 / 100);
            totalAPagarCliente = totalComprasCliente - descuento;

            break;
         case 2:
            descuento = (totalComprasCliente * 7 / 100);
            totalAPagarCliente = totalComprasCliente - descuento;

            break;
         case 3:
            descuento = (totalComprasCliente * 7 / 100);
            totalAPagarCliente = totalComprasCliente - descuento;
            break;
         case 4: descuento = 0;
            totalAPagarCliente = totalComprasCliente - descuento;
            break;
         default: (console.log(`medio de pago no valido`));
            break;
      }


      continuarAtendiendo = prompt(`desea seguir atendiendo clientes? S/N? `);
      if (descuento > 0) {
         contadorConDescuento = contadorConDescuento + 1;
      }
      else {
         contadorSinDescuento = contadorSinDescuento + 1;
      }
      ventaTotal = ventaTotal + totalComprasCliente;
      descuentoTotal = descuentoTotal + descuento;
      totalAPagar = totalAPagar + totalAPagarCliente;
      console.log(`total de ventas: ${ventaTotal}`);
      console.log(`total de descuentos: ${descuentoTotal}`);
      console.log(`total a pagar por los clientes: ${totalAPagar}`);
      console.log(`cantidad de clientes con descuento: ${contadorConDescuento}`);
      console.log(`cantidad de clientes sin descuento: ${contadorSinDescuento}`);

   }
}