/*Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.*/

{

    let ingresarValorDeLaCompra = 0 ;

    ingresarValorDeLaCompra = Number(prompt(`ingresar el valo de la compra`));

    console.log (ingresarValorDeLaCompra);

    let descuento = 0;

    let tope = 80000;

     descuento = (ingresarValorDeLaCompra*50)/100;



    if(descuento < 80000)
        {
            
           console.log('El descuento es de 50%: ',descuento);

           console.log(`total a pagar con descuento de 50% `,ingresarValorDeLaCompra-descuento);

        }
        else
        {   
            
            console.log(`El descuento es de el tope `, tope);

            console.log(`total a pagar con descuento de el TOPE `,ingresarValorDeLaCompra-tope);
        }


}