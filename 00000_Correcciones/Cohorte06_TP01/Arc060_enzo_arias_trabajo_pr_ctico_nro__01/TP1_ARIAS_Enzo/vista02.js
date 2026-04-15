{ //Ejercicio 1
    let A = 0;
    A = Number(prompt("Ingrese Valor de A: "));


    let B = 0;
    B = Number(prompt("Ingrese Valor de B: "));


    let suma = (A+B);
    console.log("La suma de A + B es:" + suma);

    let resta = (A-B);
    console.log("La resta de A - B es:" + resta);

    let producto = (A*B);
    console.log("El producto de A * B es:" + producto);

    let division = (A/B);

    if(B === 0)
    {
        console.log("Esta Operación no es posible");
    }
    else{
        console.log("La división de A / B es:" + division)

    }

}

{//Ejercicio 2

    /*Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.*/

    let importeCompra = 0;
    importeCompra = Number(prompt("Ingrese importe de compra:"));
    let descuento = importeCompra * 0.15;
    let importeTotal = importeCompra - descuento;



console.log ("Importe de la compra con descuento del 15% es:" + importeTotal );

}

{//Ejercicio 3

/* Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar */

    let luzElectrica = 0;
    luzElectrica = Number(prompt("Ingrese Valor de luz eletrectica."));
    let internet = 0;
    internet = Number(prompt("Ingrese Valor de internet."));
    let agua = 0;
    agua = Number(prompt("Ingrese Valor de agua."));
    let gastosDelMes = luzElectrica + internet + agua;

    let aumentoLuz = luzElectrica * 1.125;
    let aumentoInternet = internet * 1.07;
    let aumentoAgua = agua * 1.03;

    let totalDeGastoFuturo = aumentoLuz + aumentoInternet + aumentoAgua;

    console.log (`El importe a pagar de Electricidad es: ${luzElectrica} y tendrá un incremento del 12,5% el próximo mes.`);
    console.log (`El importe a pagar de Internet es: ${internet} y tendrá un incremento del 7% el próximo mes.`);
    console.log (`El importe a pagar de Agua es: ${agua} y tendrá un incremento del 3% el próximo mes.`);

    console.log(`El gasto total de servicios en el mes es de: ${gastosDelMes}`)

    console.log ("El importe total a pagar del siguiente mes junto a sus incrementos es:" + totalDeGastoFuturo);


}

{//Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
// también resuelva el mismo problema utilizando un operador ternario.

let numero = 0;
numero = Number(prompt("Ingrese un número:"));

if(numero >= 0){
    console.log(`El número ${numero} es positivo.`);
}
else{
    console.log(`El número ${numero} es negativo.`);
}


}

{//Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.

        let introducirNumero = 0;
        introducirNumero = Number(prompt("Ingrese un número."));

        if(introducirNumero % 2 === 0){
            console.log(`El número ${introducirNumero} es par.`);
        }
        else{
            console.log(`El número ${introducirNumero} es impar.`);
        }

}

{/*Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.*/

let valorDeLaCompra = 0;
let descuento = 0;
let totalAPagar = 0;

valorDeLaCompra = Number(prompt("Ingrese el valor total de la compra."));

descuento = (valorDeLaCompra * 50) / 100 >= 80000 ? 80000:(valorDeLaCompra * 50) / 100;

totalAPagar = (valorDeLaCompra - descuento);

console.log(`El importe de la compra es: ${valorDeLaCompra} su descuento es: ${descuento}
    total a pagar: ${totalAPagar}`); 
}

{/* Un comercio que vende bolsas de alimentos para mascotas, trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.
*/

    
let codigo = 0;
codigo = Number(prompt("Ingrese el código del producto (1 - Dogui, 2 - Tiernitos, 3 - Dogpro):"));
let cantidad = 0;
cantidad = Number(prompt("Ingrese la cantidad de bolsas a comprar:"));
let precioUnitario = 0;
let totalPagar = 0;
     
    if (codigo === 1) { 
        if (cantidad >= 11) {
            precioUnitario = 34000;
        } else if (cantidad >= 5) {
            precioUnitario = 36000;
        } else if(cantidad < 5){
            precioUnitario = 38000;
        }
    };
    if (codigo === 2) { 
        if (cantidad >= 11) {
            precioUnitario = 27000;
        } else if (cantidad >= 5) {
            precioUnitario = 29000;
        } else if(cantidad < 5) {
            precioUnitario = 31000;
        }
    } ;
    if (codigo === 3) {
        if (cantidad >= 11) {
            precioUnitario = 42000;
        } else if (cantidad >= 5) {
            precioUnitario = 44000;
        } else if (cantidad < 5 ){
            precioUnitario = 46000;
        }
    }
    if (precioUnitario > 0) {
        totalPagar = precioUnitario * cantidad;
        
        console.log(`Producto elegido (código ${codigo}): ${precioUnitario} por unidad`);
        console.log(`Cantidad comprada: ${cantidad} bolsas`);
        console.log(`Total a pagar: ${totalPagar}`);}
    
    
}

{/* Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).*/

let edad = 0;
edad = Number(prompt("Ingrese Edad: "));

if(edad > 0 && edad <=12){
    console.log(`Esta persona de ${edad} años es un niño.`);
}
    else if(edad > 13 && edad <= 17){
    console.log(`Esta persona de ${edad} años es un adolescente.`);
}
    else if(edad >= 18 && edad <= 64){
    console.log(`Esta persona de ${edad} años es un adulto.`);
}
    else if(edad >= 64){
        console.log(`Esta persona de ${edad} años es un adulto mayor.`)
    }
}

{ /*Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
    permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
    de promover las ventas.
     Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
    se aplicará un descuento del 11% sobre el total de la compra.
     Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
    se aplicará un descuento del 15% sobre el total de la compra.*/
    
    
    let cantidadDePasajes = 0;
    let importeDePasajes = 0;
    let descuento = 0;
    let totalCompra = 0;
    let totalConDescuento = 0;
    

    importeDePasajes = Number(prompt("Ingrese importe de pasaje: "))
    cantidadDePasajes = Number(prompt("Ingrese cantidad de pasajes que desea comprar: "));

    totalCompra = importeDePasajes * cantidadDePasajes;
    totalConDescuento = totalCompra - descuento;

    if(cantidadDePasajes > 3 && totalCompra > 250000 && totalCompra <= 499999){
        descuento = (totalCompra * 11) / 100;
        console.log(`Su total de compra es: ${totalCompra} y obtuvo un descuento del 11% ${descuento} Total a pagar ${totalConDescuento}`);
    }
    else if (cantidadDePasajes > 3 && totalCompra >= 500000){
        descuento = (totalCompra * 15) / 100;
        console.log(`Su total de compra es: ${totalCompra} y obtuvo un descuento del 15% ${descuento} Total a pagar ${totalConDescuento}`);
    }
    else{
        console.log(`Su total de compra es ${totalCompra}`);
    }

}

{ /*Un comercio aplica descuentos sobre el importe de compra según forma de pago:
    1) Efectivo → 10% descuento
    2) Débito → 5% descuento
    3) Crédito → Sin descuento
    Calcular el descuento y Mostrar total final. Utilizar estructura switch */

    let formaDePago = 0;
    let descuento = 0;
    let  totalCompra = 0;
    let totalConDescuento = 0;
    
    totalCompra = Number(prompt("Ingrese el total de su compra: "));
    formaDePago = Number(prompt("Ingrese la forma de Pago: 1 Efectivo, 2 Débito, 3 Crédito."))



    switch (formaDePago) {
        case 1:
            descuento = (totalCompra * 10) / 100;
            totalConDescuento = totalCompra - descuento;
            console.log(`El total de su compra es: ${totalCompra} y recibe un descuento de: ${descuento}
                El total a pagar será de: ${totalConDescuento}`);

            break;

        case 2:
            descuento = (totalCompra * 5) / 100;
            totalConDescuento = totalCompra - descuento;
            console.log(`El total de su compra es: ${totalCompra} y recibe un descuento de: ${descuento}
                El total a pagar será de: ${totalConDescuento}`);

        break;

        case 3:
            console.log(`El total de su compra es: ${totalCompra}`);

            break;
    
        default:
            console.log("Ingrese un valor válido.");
            break;
    }

}

{/* Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma
y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el
cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian,
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.*/

let totalDeCompra = 0;
let zona = 0;
let totalAPagar = 0;
let costoEnvio = 0;

totalDeCompra = Number(prompt("Ingrese el total de su compra: "));
zona = Number(prompt("Ingrese su zona: 1 Zona Centro, 2 Zona Oeste, 3 Zona Norte, 4 Zona Sur, 5 Zona Este."));

switch (zona) {
    case 1:
        costoEnvio = 2500;
        totalAPagar = totalDeCompra + costoEnvio;
        console.log(`El total de la compra es ${totalDeCompra} y el envío para su zona tiene un valor de ${costoEnvio}
            Total a pagar: ${totalAPagar}`);
        
        break;

    case 2: 
    costoEnvio = 3750;
    totalAPagar = totalDeCompra + costoEnvio;
    console.log(`El total de la compra es ${totalDeCompra} y el envío para su zona tiene un valor de ${costoEnvio}
        Total a pagar: ${totalAPagar}`);
        break;

    case 3: 
    costoEnvio = 4225;
    totalAPagar = totalDeCompra + costoEnvio;
    console.log(`El total de la compra es ${totalDeCompra} y el envío para su zona tiene un valor de ${costoEnvio}
        Total a pagar: ${totalAPagar}`);
        break;

    case 4: 
        costoEnvio = 5222.50;
        totalAPagar = totalDeCompra + costoEnvio;
        console.log(`El total de la compra es ${totalDeCompra} y el envío para su zona tiene un valor de ${costoEnvio}
            Total a pagar: ${totalAPagar}`);
            break;

    case 5: 
        costoEnvio = 4288.50;
        totalAPagar = totalDeCompra + costoEnvio;
        console.log(`El total de la compra es ${totalDeCompra} y el envío para su zona tiene un valor de ${costoEnvio}
                Total a pagar: ${totalAPagar}`);
                break;

            
    default:
        console.log("Por favor ingrese un valor válido (1 al 5).")
        break;
}
}

{/*El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
 50% de reintegro sobre el monto de la compra
 tope máximo de reintegro: $80.000
 válido para compras realizadas los días viernes, sábado y domingo
El programa debe:
1. Solicitar al usuario:
 el día de la compra
 el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
 Si no fue uno de esos días, no se aplica el beneficio.
3. Si corresponde el beneficio:
 calcular el 50% del importe de la compra
 verificar si el reintegro supera el tope de $80.000
 si lo supera, aplicar solamente el tope
4. Mostrar:
 día de la compra
 importe de la compra
 reintegro obtenido
 importe final pagado por el cliente.*/

let dia = 0;
let totalDeCompra = Number(prompt("Ingrese el valor total de la compra: "));
let descuento = 0;
let descuentoCompra

dia = Number(prompt("Ingrese el día de la compra: 1 Lunes, Martes, Miercoles, Jueves, 2 Viernes, 3 Sabado, 4 Domingo."));
descuento = totalDeCompra * 0.5;





if(dia === 2 || dia === 3 || dia === 4)
    if(descuento > 80000){
        descuento = 80000;
    console.log(`Su compra total es de ${totalDeCompra} con un reintegro de ${descuento} su total a pagar es de: ${totalDeCompra - descuento}`);
}
    else if(descuento < 80000){
        let descuentoCompra = totalDeCompra - descuento;
        console.log(`Su total de compra es de: ${totalDeCompra} su reintegro es de: ${descuento} total a pagar es: ${descuentoCompra}`);
    }
    if(dia === 1){
        console.log(`Su total de compra es de ${totalDeCompra} Recuerde que nuestros descuentos aplican los fines de semana.`)
    }

}

{/*El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
rubros comerciales.
Tabla de descuentos:
Rubro Descuento Tope máximo
Vestimenta 20% $80.000
Perfumería 20% $80.000
Librería 30% $90.000
Electrodomésticos 15% $70.000
Calzado 20% $80.000
El programa debe:
1. Solicitar el rubro del comercio.
2. Solicitar el importe de la compra.
3. Calcular el descuento correspondiente.
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope.
5. Mostrar:
 - rubro
 - importe de la compra
 - descuento aplicado
 - importe final a pagar*/

    
let rubroDeComercio = prompt("Ingrese el rubro: Vestimenta, Perfumeria, Liberia, Electrodomesticos, Calzado").toLowerCase().trim();
let importeDeCompra = Number(prompt("Ingrese el importe de la compra: $"));
let descuento = 0;
let topeDescuento = 0;
let totalAPagar = 0;
     
    switch (true) {
        case (rubroDeComercio === "vestimenta" || rubroDeComercio === "1"):
            descuento = 20;
            topeDescuento = 80000;
            break;
     
        case (rubroDeComercio === "perfumeria" || rubroDeComercio === "perfumería" || rubroDeComercio === "2"):
            descuento = 20;
            topeDescuento = 80000;
            break;
     
        case (rubroDeComercio === "libreria" || rubroDeComercio === "librería" || rubroDeComercio === "3"):
            descuento = 30;
            topeDescuento = 90000;
            break;
     
        case (rubroDeComercio === "electrodomesticos" || rubroDeComercio === "electrodomésticos" || rubroDeComercio === "4"):
            descuento = 15;
            topeDescuento = 70000;
            break;
     
        case (rubroDeComercio === "calzado" || rubroDeComercio === "5"):
            descuento = 20;
            topeDescuento = 80000;
            break;
     
        default:
            console.log("Seleccione una opción válida.");
}
     
    if (descuento > 0) {
        let descuentoCalculado = (importeDeCompra * descuento) / 100;
         
        if (descuentoCalculado > topeDescuento) {
            descuentoCalculado = topeDescuento;
}
         
        totalAPagar = importeDeCompra - descuentoCalculado;
 
        console.log(`El importe total de la compra es ${importeDeCompra}`)
        console.log(`Descuento del: ${descuento}% Total: ${descuentoCalculado}`);
        console.log(`Total a pagar: ${totalAPagar}`);
    }
 
 
 
 
 }
 