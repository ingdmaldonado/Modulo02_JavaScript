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
    1 – Efectivo – aplicar descuento 10% 
    2 – Tarjeta Visa BNA – aplicar descuento 7% 
    3 – Tarjeta Master BNA – aplicar descuento 7% 
    4 – Otras Tarjetas Medios – sin descuentos. 

- Al finalizar la atención del cliente deberá ir registrando los siguientes puntos 
   Venta Total = Acumular la venta de todos los clientes 
   Descuento Total = Acumular los descuentos realizados a cada cliente 
   Importe a Pagar Total = Acumular los Importes a pagar por cada cliente 
   Contar la cantidad de clientes que Tuvieron descuentos 
   Contar la cantidad de clientes que No Tuvieron descuentos. 


Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo 
while (interno) registrará los productos que lleva cada cliente.


*/


{
    // inicializacion

    let continua = `S`;
    let precioProducto = 0;
    let medioDePago = 0;
    
    let precioFinalAPagar = 0;
    let ventaTotal = 0;
    let descuentoTotal = 0;
    let importeAPagarTotal = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    // parte 1 - atender a los clientes

    while (continua === 'S' || continua === `s`) { // Ciclo Clientes
    
        let continua2 = 'S'; 
        let sumarPrecioProducto = 0;
        let descuento = 0;

        while (continua2 === 'S' || continua2 === `s`) { // Ciclo Productos
            
            precioProducto = Number(prompt(`Ingrese el precio del producto:`));
        
            sumarPrecioProducto = sumarPrecioProducto + precioProducto; // va sumando los precios de los productos

            continua2 = prompt("¿Desea agregar otro producto? (S/N)");
        }

        medioDePago = Number(prompt(`Seleccione el medio de pago: 1 - Efectivo ; 2 - Tarjeta Visa BNA ; 3 - Tarjeta Master BNA ; 4 - Otras Tarjetas Medios`));
    
        if(medioDePago === 1){
            descuento = sumarPrecioProducto * 0.1;

            clientesConDescuento = clientesConDescuento + 1;
        }
        else if(medioDePago === 2){
            descuento = sumarPrecioProducto * 0.07;

            clientesConDescuento = clientesConDescuento + 1;
        }
        else if (medioDePago === 3){
            descuento = sumarPrecioProducto * 0.07;

            clientesConDescuento = clientesConDescuento + 1;
        }
        else if(medioDePago === 4){
            descuento = 0;

            clientesSinDescuento = clientesSinDescuento + 1;
        }
        else{
            console.log(`Obcion de pago incorrecto.`)
        }

        precioFinalAPagar = sumarPrecioProducto - descuento;
        
        ventaTotal = ventaTotal + sumarPrecioProducto; // Acumula la venta de todos los clientes 

        descuentoTotal = descuentoTotal + descuento; //  Acumula los descuentos realizados a cada cliente 

        importeAPagarTotal = importeAPagarTotal + precioFinalAPagar; // Acumula los Importes a pagar por cada cliente 

        continua = prompt("¿Atendera a otro cliente? (S/N)");
    } 

    console.log(`Venta Total del dia: ${ventaTotal}`);
    console.log(`Descuento Total del dia: ${descuentoTotal}`);
    console.log(`Importe a pagar Total del dia: ${importeAPagarTotal}`);
    console.log(`Clientes en Total con Descuentos: ${clientesConDescuento}`);
    console.log(`Clientes en Total sin Descuentos: ${clientesSinDescuento}`);

}