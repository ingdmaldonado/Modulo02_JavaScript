/*Un supermercado desea realizar una aplicación WEB que le permita a sus cajeros realizar los cobros a los 
clientes que atenderán en su jornada laboral. La aplicación debe tener las siguientes consideraciones. - 
Un cajero podrá atender a “n” clientes, siendo n el número que no está definido, puede atender a 0, 2, 
5 clientes.  
Nota: debería resolverse aplicando un ciclo while de clientes
- - - 
Cada cliente atendido llevará “m” productos, siendo m el número que no está definido. Puede llevar 
10, 15, 20, 50 productos.  
Nota: debería resolverse aplicando un ciclo while de productos. 
Al finalizar la atención del cliente, debería preguntar si paga con: 
o 1 – Efectivo – aplicar descuento 10% 
o 2 – Tarjeta Visa BNA – aplicar descuento 7% 
o 3 – Tarjeta Master BNA – aplicar descuento 7% 
o 4 – Otras Tarjetas Medios – sin descuentos. 
Al finalizar la atención del cliente deberá ir registrando los siguientes puntos 
o Venta Total = Acumular la venta de todos los clientes 
o Descuento Total = Acumular los descuentos realizados a cada cliente 
o Importe a Pagar Total = Acumular los Importes a pagar por cada cliente 
o Contar la cantidad de clientes que Tuvieron descuentos 
o Contar la cantidad de clientes que No Tuvieron descuentos. 
Nota: Este proceso debe confeccionarse con dos ciclos while, un ciclo while atenderá a los clientes y el otro ciclo 
while (interno) registrará los productos que lleva cada cliente.*/
{
    
    

   let continuaCliente = "s";
   let ventaTotal = 0;
   let descuentoTotal = 0;
   let importeTotal = 0;
   let cantCliente=0;
   let clientesConDescuento = 0;
   let clientesSinDescuento = 0;
   
   while (continuaCliente === "s") {
     
    cantCliente++;

    let totalCliente = 0;
   
    let continuarProducto = "s";

    
    while (continuarProducto === "s") {

        let precio = Number(prompt("Ingrese el precio del producto"));
        totalCliente += precio;

        continuarProducto = prompt("¿Desea ingresar otro producto? s/n");
    }

    
    let metodo = Number(prompt(`Seleccione método de pago: 1. Efectivo (10%) 2. Visa BNA (7%) 3. Master BNA (7%) 4. Otros (sin descuento)`));

    let descuento = 0;

    switch(metodo ) {
       case 1: {
        descuento = totalCliente * 0.10;
        break;
    }  
       case 2:{ descuento = totalCliente * 0.07;
        break;
    }
      case 3:{descuento = totalCliente * 0.07;
        break;

    }
      default:
        descuento=0;
        break;

      }


    let importeFinal = totalCliente - descuento;

    
    ventaTotal += totalCliente;
    descuentoTotal += descuento;
    importeTotal += importeFinal;

     if (descuento > 0) {
        clientesConDescuento++;
    } else {
        clientesSinDescuento++;
    }

    console.log(`Cliente ${cantCliente}`);
    console.log(`Total compra: ${totalCliente}`);
    console.log(`Descuento: ${descuento}`);
    console.log(`Importe a pagar: ${importeFinal}`);
  

    continuaCliente = prompt("¿Desea ingresar otro cliente? s/n: ");




    
}



console.log(`Venta total: ${ventaTotal}`);
console.log(`Total Clientes ${cantCliente}`)
console.log(`Descuentos totales: ${descuentoTotal}`);
console.log(`Importe total a pagar: ${importeTotal}`);
}
