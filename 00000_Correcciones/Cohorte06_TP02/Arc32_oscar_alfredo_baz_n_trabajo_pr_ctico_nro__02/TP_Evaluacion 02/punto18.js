/*Ejercicio Nro. 18:
Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones.

- Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 5 clientes.
Nota: debería resolverse aplicando un ciclo while de clientes



- Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 10, 15, 20, 50 productos.
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

Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo while (interno) registrará los productos que lleva cada cliente. */

{

let cliente=0;
let producto=0;

let contadorCliente=0;
let atencionClientes=`S`;
let contadorProducto=0;
let totalPorCliente=0;
totalCaja=0;

atencionClientes=prompt(`Desea atender un cliente: S/N`);


while (atencionClientes===`S` || atencionClientes===`s`)
{

    contadorCliente=contadorCliente+1;

    let cargaProducto=`S`;

    while(cargaProducto===`S` || cargaProducto===`s`)
    {

        producto=Number(prompt(`Ingrse precio del producto:`));

        contadorProducto=contadorProducto+1;

        totalPorCliente=totalPorCliente+producto;
        
        console.log(`Cliente N°:${contadorCliente}---Porducto N°: ${contadorProducto}`)

        cargaProducto=prompt(`Ingresa otro producto? S/N`);


    }

        instrumentoDePago=0;
        descuento=0;

        instrumentoDePago=Number(prompt(`Indique la forma de pago:
            1 – Efectivo-descuento 10%, 
            2 - Tarjeta Visa BNA-descuento 7%, 
            3 - Tarjeta Master BNA-descuento 7%, 
            4 - Otras Tarjetas-sin descuentos.`));

            switch (instrumentoDePago)
            {
                case 1:
                    {
                        console.log(`Usted eligio pagar con efectivo, su descuento es del 10%.`)
                        descuento=(totalPorCliente*10)/100;
                        break;
                    }
                case 2:
                    {
                        console.log(`Usted eligio pagar con Visa, su descuento es del 7%.`)
                        descuento=(totalPorCliente*7)/100;
                        break;
                    }    
                case 3:
                    {
                        console.log(`Usted eligio pagar con Master, su descuento es del 7%.`)
                        descuento=(totalPorCliente*7)/100;
                        break;
                    }    

                case 4:
                    {
                        console.log(`Usted eligio pagar con otros medios de pago, su descuento es del 0%.`)
                        descuento=0;
                        break;
                    }
                default :
                    {
                        descuento=0;
                        break;
                    }    



            }

            totalPorCliente=totalPorCliente-descuento;

            console.log(`Cliente ${contadorCliente}, lo que debe pagar es: $${totalPorCliente}`);

            totalCaja=totalCaja+totalPorCliente;

            totalPorCliente=0;
            contadorProducto=0;


            atencionClientes=prompt(`Desea atender un cliente: S/N`);








}

console.log(`Fin de la atencion. Recaudacion de la jornada:$${totalCaja} , total de clientes atendidos: ${contadorCliente}`);



}