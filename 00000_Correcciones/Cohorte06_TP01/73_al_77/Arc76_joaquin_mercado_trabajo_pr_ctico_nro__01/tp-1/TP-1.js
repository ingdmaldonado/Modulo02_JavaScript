
/*    EJERCICIO-1    */ 
{

    let a = 0
    let b = 0

/**/

console.log("Solicito el ingreso de dos numeros A y B");

a = Number(prompt("ingrese un numero"))
b = Number(prompt("ingrese un numero"))  

sumar = a + b
resta = a - b
multiplicacion = a * b
division = a / b

divisionEntreCero = a / 0 


console.log("el resultado es: ", sumar)
console.log("el resultado es: ", resta)
console.log("el resultado es: ", multiplicacion)
console.log("el resultado es: ", division)
console.log("el resultado de B igual a Cero es: ", divisionEntreCero)
}


//    EJERCICIO-2 

/*Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final. */

{
    let importeTotalCompra = 0;
    let descuento = 15

    console.log("solicito el ingreso del importe de compra del cliente ");

   importeTotalCompra = prompt("ingrese el importe total de una compra del cliente")

  // console.log("importe de compra del cliente: ", importeTotalCompra)

   let importeFinal = importeTotalCompra * (1 -descuento/100)

   console.log("importe de compra: ",importeTotalCompra)
   console.log("con descuento aplicado del: ",descuento,"%")
    console.log("Importe Final de la compra: ",importeFinal)

}

//   EJERCICIO 3

/* Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.  */

{
    let luzElectrica = 0
    let internet = 0
    let agua = 0
    des1 = 12.5
    des2 = 7
    des3 = 3

    console.log("ingrese los gastos totales de los servicios de la casa")

    luzElectrica = prompt("ingrese el total de las luz electrica")
    internet = prompt("ingrese el total del servicio de internet")
    agua = prompt("ingrese el total del servicio del agua potable")

    console.log("para el siguiente mes esos tres gastos aumentaran")
    console.log("Luz Electrica en un ",des1)
    console.log("El internet en un ",des2)
    console.log("El agua potable en un ",des3)

    console.log("Total a pagar el siguiente mes con el aumento aplicado")

    let totalLuz = luzElectrica * (1 + des1 / 100)
    let totalInternet = internet * (1 + des2 / 100)
    let totalAgua = agua * (1 + des3 / 100)

    console.log("Luz Electrica :",totalLuz,
                 "El internet: ",totalInternet,
                 " El agua potable: ",totalAgua
    )

}


//     EJRCICIO 4

/* Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.  */

{
    let n1 = 0

    console.log("solicito un numero")
    n1 = prompt("ingrese un numero")

    if (n1 >= 0){
        console.log(" es positivo");
    } 
    else {
        console.log(" es negativo ");
    }

}


//    EJERCICIO 5

/* Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.  */

{
    let numero = 0

    console.log("solicito un valor ")
    nunmero = prompt("ingrese un valor")

    if (numero %2 === 0 ){
        console.log("es par ")
    }
    else {
        console.log("es impar")
    }
}


//     EJERCICIO 6

/* Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos). 
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido. 
 */

{
    let descuentoOneShot = 50
    let valorCompra = 0

    console.log(" ingrese valor de compra del cliente")
    valorCompra = Number(prompt("ingrese valor "))

    if (valorCompra < 80.000) {
        let valorfinal = valorCompra * (1 - descuentoOneShot / 100)
        console.log(" valor final: ",valorfinal," con el descuento aplicado del ",descuentoOneShot,"%")
    }
    else {
        console.log(" el valor supero el descuento maximo que se puede aplicar ( 80.000 ) ")
    } 

}


//     EJERCICIO 7

/* Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son las siguientes . 

Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar. 
 */ 

{
    let codigoDelProducto = 0
    let cantidadDeBolsas = 0
    let precioAlimentoXbolsa;

    console.log(" solicito el codigo del producto y la cantidad de bolsas ")

    codigoDelProducto = prompt(" solicto el codigo del producto  (1 , 2 o 3)")
    cantidadDeBolsas = prompt("solicito la cantidad de bolsas")

    if (codigoDelProducto === 1) {

    if (cantidadDeBolsas >= 11) {
        precioAlimentoXbolsa = 34000;

    } else if (cantidadDeBolsas >= 5) {
        precioAlimentoXbolsa = 36000;

    } else {
        precioAlimentoXbolsa = 38000;
    }

} else if (codigoDelProducto === 2) {

    if (cantidadDeBolsas >= 11) {
        precioAlimentoXbolsa = 27000;
    } else if (cantidadDeBolsas >= 5) {
        precioAlimentoXbolsa = 29000;
    } else {
        precioAlimentoXbolsa = 31000;
    }

} else if (codigoDelProducto === 3) {

    if (cantidadDeBolsas >= 11) {
        precioAlimentoXbolsa = 42000;
    } else if (cantidadDeBolsas >= 5) {
        precioAlimentoXbolsa = 44000;
    } else {
        precioAlimentoXbolsa = 46000;
    }

} else {
    console.log("Código inválido");
}

    let TT = cantidadDeBolsas * precioAlimentoXbolsa

    console.log("importe total: $" + TT)
}


//   EJERCICIO 8

/* Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).  */

{
    let edad = 0
    
    console.log(" solicita la edad de la persona ")

    edad = Number(prompt(" ingresar la edad "))

    if (edad >= 0 && edad <= 12) {
        console.log("es un niño/a")
    }
    else if ( edad >= 13 && edad <= 17) {
        console.log("es un adolescente")
    }
    else if (edad >= 18 && edad <= 64) {
        console.log(" es un adulto/a ")
    }
    else if ( edad >= 65 )
    {
        console.log(" es una adulto/a mayor ")
    }
    else {
        console.log(" NA ")
    }
}



//   EJERCICIO 9

/* Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que 
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando 
de promover las ventas. 
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, 
se aplicará un descuento del 11% sobre el total de la compra. 
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, 
se aplicará un descuento del 15% sobre el total de la compra. 
El Sistema debe registrar mínimamente estas variables: 
 cantidad de pasajes 
 importe pasaje 
 total compra = cantidad de pasajes * importe pasaje 
 */

{
    let cantidadPasaje = 0 
    let importePasaje = 0

    let totalCompra = cantidadPasaje * importePasaje

    console.log(" solicitar la cantidad de pasasjes y el importe de pasajes ")

    cantidadPasaje = prompt("ingrese la cantidad de pasajes")
    importePasaje = prompt("ingrese el importe de los pasasjes")

    if (cantidadPasaje >= 3 && importePasaje >= 250000){
        descuento = totalCompra * (1- 11 / 100)
    }
    else if (cantidadPasajes > 3 && totalCompra > 500000){
        descuento = totalCompra * 0.11
    }

    let totalPagar = totalCompra - descuento;

    console.log("Total compra: $" , totalCompra);
    console.log("Descuento: $" , descuento);
    console.log("Total a pagar: $" , totalPagar);
}


//    EJERCICIO 10 

/* Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch */

{
    let metodo = 0
    let pago = 0
    let descuentoEfectivo = 10
    let descuentoDebito = 5
    let descuentoCredito = 0
    let totalFinal = 0

    console.log("Eliga el metodo de pago \n EFECTIVO 1 \n DEBITO 2 \n CREDITO 3")

    metodo = Number(prompt("ingrese metodo de pago \n1 / 2 / 3"))

    switch(metodo){
        case 1:
            totalFinal = pago * ( 1 - descuentoEfectivo / 100);
            console.log(" Pago en Efectivo: ",pago,"$ se aplica un descuento del  %" + descuentoEfectivo, 
                "\n Total final es de  $" + totalFinal);
        break;

        case 2:
            totalFinal = pago * ( 1 - descuentoDebito / 100);
            console.log(" Pago en Debito: ",pago,"$ se aplica un descuento del  %" + descuentoDebito, 
                "\n Total final es de  $" + totalFinal);
        break;

        case 3 :
            totalFinal = pago
            console.log(" Pago en Credito: ",pago,"$ no hay ningun descuento: NA % \n Total final es de  $" + totalFinal);
        break;

        default:
            console.log(" no se detecto ningun metodo de pago");
    }
}



//   EJERCICIO  11

/* Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma 
y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el 
cliente. 

1) Zona Centro = $ 2500,00 
2) Zona Oeste = $ 3750,00 
3) Zona Norte = $ 4225,00 
4) Zona Sur = $ 5222,50 
5) Zona Este = $ 4288,50 
 
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.  
 
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, 
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.  */

{
    let importeCompra = 0
    let envioZonaCentro = 2500.00
    let envioZonaOeste = 3750.00
    let envioZonaNorte = 4225.00
    let envioZonaSur = 5222.50
    let envioZonaEste = 4288.50
    let zona = 0
    let tF = 0

    console.log(" Solicito en ingreso del importe de la compra y la zona en la que va ser enviado en pedido ")

    importeCompra = Number(prompt("ingrese el importe de la compra"))
    zona = Number(prompt("ingrese la zona de envio \n1-Zona Centro = $ 2500,00 \n2-Zona Oeste = $ 3750,00 \n3-Zona Norte = $ 4225,00 \n4-Zona Sur = $ 5222,50 \n5-Zona Este = $ 4288,50 "))

    switch(zona){
        case 1:
            tF = importeCompra + envioZonaCentro;
            console.log("sub total $" + importeCompra," el envio a zona centro es de: $ " + envioZonaCentro,"\n el total es:  $" + tF)
        break;

        case 2:
            tF = importeCompra + envioZonaOeste;
            console.log("sub total $" + importeCompra," el envio a zona oeste es de: $ " + envioZonaOeste,"\n el total es:  $" + tF)
        break;

        case 3:
            tF = importeCompra + envioZonaNorte;
            console.log("sub total $" + importeCompra," el envio a zona norte es de: $ " + envioZonaNorte,"\n el total es:  $" + tF)
        break;

        case 4:
            tF = importeCompra + envioZonaSur;
            console.log("sub total $" + importeCompra," el envio a zona sur es de: $ " + envioZonaSur,"\n el total es:  $" + tF)
        break;

        case 5:
            tF = importeCompra + envioZonaEste;
            console.log("sub total $" + importeCompra," el envio a zona este es de: $ " + envioZonaEste,"\n el total es:  $" + tF)
        break;

        default:
            console.log("no se solicito ningun envio")
    }
}



//   EJERCICIO 12

/* El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en 
conjunto con el Banco Nación para incentivar el consumo en comercios locales. 
El beneficio consistía en: 

 50% de reintegro sobre el monto de la compra 
 tope máximo de reintegro: $80.000 
 válido para compras realizadas los días viernes, sábado y domingo 

El programa debe: 
1. Solicitar al usuario: 
 el día de la compra 
 el importe de la compra

2. Verificar si la compra fue realizada un viernes, sábado o domingo. 
 Si no fue uno de esos días, no se aplica el beneficio. 

3. Si corresponde el beneficio: 
 calcular el 50% del importe de la compra 
 verificar si el reintegro supera el tope de $80.000 
 si lo supera, aplicar solamente el tope 

4. Mostrar: 
 día de la compra 
 importe de la compra 
 reintegro obtenido 
 importe final pagado por el cliente. 

*/

{
    let opcionDia = 0
    let monto = 0
    let descuentoEjer12 = 50
    let reintegro = 0
    let dia = ""

    console.log("solicitar el ingreso del pago y el dia en el que comprado")

    monto = Number(prompt("ingresar pago"))

    opcionDia = Number(prompt("ingrese opcion \n1-Viernes \n2-Sabado \n3-Domingo \n4-Otro"))

    if (opcionDia == 1){
        dia = "Viernes"
    }
    else if (opcionDia == 2 ){
        dia = "Sabado"
    }
    else if (opcionDia == 3 ){
        dia = "Domingo"
    }
    else if (opcionDia == 4 ){
        dia = "Otro"
    }
    else{
        console.log("fuera de rango")
    }
    
    
    
    switch(opcionDia){
        case 1:
            if (monto > 80000){
                reintegro = 80000;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro," ya que supero el tope maximo");
            }
            else{
                reintegro = monto * 0.50;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro);
            }
        break;

        case 2:
            if (monto > 80000){
                reintegro = 80000;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro," ya que supero el tope maximo");
            }
            else{
                reintegro = monto * 0.50;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro);
            }
        break;

        case 3:
            if (monto > 80000){
                reintegro = 80000;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro," ya que supero el tope maximo");
            }
            else{
                reintegro = monto * 0.50;
                console.log("comprado el dia "+ dia,"el monto es: $"+monto,"y se le reintergra :  $"+ reintegro);
            }
        break;

        case 4:
            console.log("comprado el dia "+ dia," el monto es:  $"+ monto, "no se aplica ningun beneficio");
        break;

        default:
            console.log("fuera de rango")
    }

    
}




//     EJERCICIO 13

/* El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 

Tabla de descuentos: 
Rubro                
Vestimenta           
Perfumería           
Librería                
Electrodomésticos   
Calzado               

El programa debe: 
Descuento      Tope máximo 
20%            $80.000
20%            $80.000 
30%            $90.000 
15%            $70.000
20%            $80.000

1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
5. Mostrar: - rubro - importe de la compra - descuento aplicado - importe final a pagar. */

{
    let codigoRubro = 0;
    let rubro = "";
    let compra = 0;
    let desVesti = 20;
    let desPerfu = 20;
    let desLibre = 30;
    let desElectro = 12;
    let desCalzado = 20;
    let factordescuento;
    let topeMaximoSuperado = "NA: supero el tope maximo";
    let comprafinal;

    console.log("Banco Nación ofrece descuentos en distintos rubros comerciales");

    console.log("RUBRO   DESCUENTO   TOPE MAXIMO\n1-Vestimenta    ",desVesti,"     $80.000\n 2-Perfumería    ",desPerfu,"     $80.000\n 3-Librería    ",desLibre,"     $90.000\n 4-Electrodomésticos    ",desElectro,"     $70.000\n5-Calzado     ",desCalzado,"     $80.000");

    codigoRubro = Number(prompt("ingrese codigo del rubro"));
    compra = Number(prompt("ingrese importe de compra"));

    if (codigoRubro == 1){
        rubro = "Vestimenta";
        factordescuento = desVesti;
    }
    else if (codigoRubro == 2 ){
        rubro = "Perfumeria";
        factordescuento = desPerfu;
    }
    else if (codigoRubro == 3 ){
        rubro = "Libreria";
        factordescuento = desLibre;
    }
    else if (codigoRubro == 4 ){
        rubro = "Electrodomesticos";
        factordescuento = desElectro;
    }
    else if (codigoRubro == 5){
        rubro = "Calzado";
        factordescuento = desCalzado;
    }
    else{
        console.log("fuera de rango")
    }

    switch(codigoRubro){
        case 1:
            if(compra < 80000){
                
              console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + compra,
                        "\nDescuento Aplicado: %",topeMaximoSuperado,
                        "\nImporte final a pagar: $" + comprafinal)  
            }
            else{

                comprafinal = compra * (1 - factordescuento / 100)

                console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + comprafinal,
                        "\nDescuento Aplicado: %" + factordescuento,
                        "\nImporte final a pagar: $" + comprafinal)
            }
        break;

        case 2:
            if(compra < 80000){
                
                

              console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + compra,
                        "\nDescuento Aplicado: %",topeMaximoSuperado,
                        "\nImporte final a pagar: $" + comprafinal)  
            }
            else{

                comprafinal = compra * (1 - factordescuento / 100)

                console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + comprafinal,
                        "\nDescuento Aplicado: %" + factordescuento,
                        "\nImporte final a pagar: $" + comprafinal)
            }
        break;


        case 3:
            if(compra < 90000){
                
                

              console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + compra,
                        "\nDescuento Aplicado: %",topeMaximoSuperado,
                        "\nImporte final a pagar: $" + comprafinal)  
            }
            else{

                comprafinal = compra * (1 - factordescuento / 100)

                console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + comprafinal,
                        "\nDescuento Aplicado: %" + factordescuento,
                        "\nImporte final a pagar: $" + comprafinal)
            }
        break;

        case 4:
            if(compra < 70000){
                
                

              console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + compra,
                        "\nDescuento Aplicado: %",topeMaximoSuperado,
                        "\nImporte final a pagar: $" + comprafinal)  
            }
            else{

                comprafinal = compra * (1 - factordescuento / 100)

                console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + comprafinal,
                        "\nDescuento Aplicado: %" + factordescuento,
                        "\nImporte final a pagar: $" + comprafinal)
            }
        break;

        case 5:
            if(compra < 80000){
                
                

              console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + compra,
                        "\nDescuento Aplicado: %",topeMaximoSuperado,
                        "\nImporte final a pagar: $" + comprafinal)  
            }
            else{

                comprafinal = compra * (1 - factordescuento / 100)

                console.log("Rubro: " + rubro,
                        "\nImporte de compra:  $" + comprafinal,
                        "\nDescuento Aplicado: %" + factordescuento,
                        "\nImporte final a pagar: $" + comprafinal)
            }
        break;
    }
    
}