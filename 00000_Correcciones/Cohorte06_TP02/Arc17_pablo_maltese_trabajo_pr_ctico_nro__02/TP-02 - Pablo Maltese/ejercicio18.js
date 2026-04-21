/*
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que 
atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.

    - Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
            Nota: debería resolverse aplicando un ciclo while de clientes

    - Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 
      50 productos.
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
    let antiendeCliente = `S`;
    let agregaProducto = `S`;

    let numeroCliente = 0;
    let totalCobradoJornada = 0;
    let totalDescuentosJornada = 0;
    let numeroClienteConDescuentos = 0;
    let numeroClienteSinDescuentos = 0;

    //Primer ciclo por cada cliente
    while(antiendeCliente === 'S' || antiendeCliente === 's')
    {
        //Cuento y enumero y visualizo cada cliente
        numeroCliente = numeroCliente + 1;
        console.log(`Antención Cliente Nro: ${numeroCliente}`);

        let precioProducto = 0;
        let totalCompraCliente = 0;
        let contadorProductos = 0;
        let formaPago = 0;
        let descuento = 0;
        let totalPagoCliente = 0;
        
        //Segundo ciclo por cada producto, numero de productos que lleva el cliente n
        while(agregaProducto === 'S' || agregaProducto === 's')
        {
            contadorProductos = contadorProductos + 1;

            //Ingresamos producto manual
            precioProducto = Number(prompt(`Ingrese el precio del producto ${contadorProductos}`));

            //Acumulamos el monto total de la compra de producto por cada cliente
            totalCompraCliente = totalCompraCliente + precioProducto;

            // aqui muestro por consola el producto ingresado
            console.log(`Registrando el producto Nro. ${contadorProductos}, monto $${precioProducto} del Cliente Nro ${numeroCliente}`);

            agregaProducto = prompt(`Desea agregar mas producto?: S/N`);
        }

        //Preguntamos la forma de pago
        formaPago = Number(prompt(`Seleccione la forma de pago: 1- Efectivo; 2- Tarjeta Visa BNA; 3- Tarjeta Master BNA; 4- Otras Tarjetas Medios`));
        
        switch(formaPago)
        {
            case 1:{
                console.log(`Pago en efectivo, tiene un descuento del 10%`);
                descuento = (totalCompraCliente * 10)/100;
                numeroClienteConDescuentos++;
                break;
            }

            case 2:{
                console.log(`Pago con Tarjeta Visa BNA, tiene un descuento del 7%`);
                descuento = (totalCompraCliente * 7)/100;
                numeroClienteConDescuentos++;
                break;
            }

            case 3:{
                console.log(`Pago con Tarjeta Master BNA, tiene un descuento del 7%`);
                descuento = (totalCompraCliente * 7)/100;
                numeroClienteConDescuentos++;
                break;
            }

            case 4:{
                console.log(`Pago con otras Tarjetas, tiene un descuento del 0%`);
                descuento = 0;
                numeroClienteSinDescuentos++;
                break;
            }
        }

        totalPagoCliente = totalCompraCliente - descuento;
        totalCobradoJornada = totalCobradoJornada + totalPagoCliente;
        totalDescuentosJornada = totalDescuentosJornada + descuento;

        //Compra total del cliente sin descuento
        console.log(`Total compra del cliente Nro ${numeroCliente}: $${totalCompraCliente}`);

        //Total pago del cliente
        console.log(`Total a pagar del cliente ${numeroCliente}: $${totalPagoCliente}`);

        //Preguntamos si sigue atendiendo a otro cliente
        antiendeCliente = prompt(`Contínua con otro cliente? S/N`);

        //Si atiende otro cliente ponemos la bandera de carga de producto en 'S'
        agregaProducto = (antiendeCliente === 'S' || antiendeCliente === 's')? 'S': 'N';
    }

    //Total cobrado de la jornada
    console.log(`==============================================================================================`);
    console.log(`Total cobrado en la jornada: $${totalCobradoJornada}`);

    //Total de descuento de todos los clientes
    console.log(`Total acumulado de descuentos de todos los clientes de la jornada: $${totalDescuentosJornada}`);

    //Total de clientes que recibieron descuentos
    console.log(`Cantidad de clientes que tuvieron descuentos: ${numeroClienteConDescuentos}`);

    //Total de clientes que no recibieron descuentos
    console.log(`Cantidad de clientes que no tuvieron descuentos: ${numeroClienteSinDescuentos}`);

}