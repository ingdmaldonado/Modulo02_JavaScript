/*  
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
while (interno) registrará los productos que lleva cada cliente.*/ 
 

{
    let continua = `s`;
    continua =  prompt('desea atender un cliente (s/n');
    let clientesAtendidos = 0;
      
         
    let precioProducto=0; 
    let totalAPagar =0;
    let totalPorJornada =0;
    let cantidadDeProductos = 0;  
    while (continua === `s` || continua ===`S`)
    {   clientesAtendidos = clientesAtendidos+1;
            
            let ingresaOtroProducto = `s`;
            
            
            
            while (ingresaOtroProducto === `s` || ingresaOtroProducto ===`S`)
            {
                precioProducto = Number(prompt(`ingrese el valor del producto`));
                cantidadDeProductos = cantidadDeProductos + 1;
                totalAPagar = totalAPagar + precioProducto;
                ingresaOtroProducto = prompt(`ingresa otro producto S/N`)

            }
            
            
            totalPorJornada = totalPorJornada + totalAPagar;
           
        continua = prompt(`sigue atendiendo clientes? (S/N)`);
    }
    
    console.log(`ud atendio ${clientesAtendidos}clientes`);
    console.log(`total a pagar ${totalAPagar}`);
    console.log(`cantidad de productos ${cantidadDeProductos}`);
        //formas de pag
    if(totalAPagar >0){
        let formaDePago=0;
        formaDePago = Number(prompt(`1-efectivo 2-tarjeta visa bna 3-master bna 4 otro medio de pago`));
        let descuento =0;
        switch(formaDePago)
        {   //efectivo
            case 1:
                {descuento = (totalAPagar *10)/100;
                
                break;}

            case 2:
                {descuento = (totalAPagar *7)/100;
                    break;}

            case 3:
                {descuento = (totalAPagar *7)/100;
                    break;}

            case 4:{descuento = 0;

                break;}

            default:console.log(`ingreso un dato incorrecto`);



        }
        
        totalAPagar =totalAPagar-descuento;
        console.log(`el total a pagar es ${totalAPagar} su descuento es ${descuento}`);
    }
        else console.log(`ud ingreso un codigo incorrecto`);

        



}