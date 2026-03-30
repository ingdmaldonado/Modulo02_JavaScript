//*Ejercicio N1 */
{
    let valor1 = Number(prompt("Ingrese el primer valor para realizar la operacion"));
    let valor2 = Number(prompt("Ingrese el segundo valor para realizar la operacion"));
    let suma = valor1 + valor2;
    let resta = valor1 - valor2;
    let multiplicacion = valor1 * valor2;
    let division = 0;

    if (valor2 > 0) {
        division = valor1 / valor2;
    }
    else {
        division = "La operacion no es posible";
    }

    console.log(`suma: ${suma} resta: ${resta} multiplicacion: ${multiplicacion} divison: ${division}`);
}

//*Ejercicio N2 */
{
    let importeAPagar = Number(prompt("Ingrese el importe de la compra"));
    let descuento = (importeAPagar * 15) / 100;
    let totalAPagar = importeAPagar - descuento;

    console.log(`El importe a pagar es: ${importeAPagar}, el descuento es: ${descuento}, total a pagar: ${totalAPagar}`);
}

//*Ejercicio N3*/
{
    let gastosDeEnergia = Number(prompt("Ingrese los gastos en Energia"));
    let gastosDeComunicacion = Number(prompt("Incgre los gastos en Comunicacion"));
    let gastosDelAgua = Number(prompt("Ingrese los gastos en Agua"));

    let totalApagar = gastosDeEnergia + gastosDeComunicacion + gastosDelAgua;

    let aumento1 = totalApagar * (1 + 12 / 100);
    let aumento2 = totalApagar * (1 + 7 / 100);
    let aumento3 = totalApagar * (1 + 3 / 100);

    console.log(`total a pagar: ${totalApagar} Posibles aumentos: 1:${aumento1} 2:${aumento2} 3:${aumento3}`);
}

//*Ejercicio N4*/
{
    let valorARevisar = Number(prompt("Ingrese un valor para ver si es positivo o negativo"));

    if (valorARevisar > 0) {
        console.log("El valor que ingresaste es positivo");
    }
    else {
        console.log("El valor que ingresaste es negativo");
    }
}

//* Ejercicio N4 con operador ternario */
{
    let valorARevisar = Number(prompt("Ingrese un valor para ver si es positivo o negativo"));
    let resultado = (valorARevisar > 0) ? "El valor que ingresaste es positivo" : "El valor es negativo";

    console.log(resultado);
}

//*Ejercicio N5*/
{
    let numero = Number(prompt("Ingrese un valor para saber si es par o impar"));

    if (numero % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

//*Ejercicio N6*/
{
    let valorDeLaCompra = Number(prompt("Ingrese el valor de la compra"));
    let descuento = (valorDeLaCompra * 50) / 100;
    let totalAPagar = valorDeLaCompra - descuento;

    if (descuento <= 80000) {
        descuento = descuento;
    }
    else {
        descuento = 80000;
    }

    console.log(`Valor de la compra: ${valorDeLaCompra} Descuento: ${descuento} total a pagar: ${totalAPagar}`);
}

//*Ejercicio N7*/
{
    let comidaDePerros = Number(prompt("Eliga un producto: 1-Dogui x 21 kil 2_Tiernitos x 21 kill 3_Dogpro x 21 kil"));
    let cantidadDeBolsas = Number(prompt("Ingrese la cantidad que desea comprar"));
    let precio = 0;
    let totalAPagar = 0;

    switch (comidaDePerros) {
        case 1:
            if (cantidadDeBolsas >= 11) {
                precio = 34000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
                precio = 36000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else {
                precio = 38000;
                totalAPagar = precio * cantidadDeBolsas;
            }

            console.log(`Su total a pagar es: ${totalAPagar}`);
            break;

        case 2:
            if (cantidadDeBolsas >= 11) {
                precio = 27000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
                precio = 29000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else {
                precio = 31000;
                totalAPagar = precio * cantidadDeBolsas;
            }

            console.log(`Su total a pagar es: ${totalAPagar}`);
            break;

        case 3:
            if (cantidadDeBolsas >= 11) {
                precio = 42000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else if (cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10) {
                precio = 44000;
                totalAPagar = precio * cantidadDeBolsas;
            }
            else {
                precio = 46000;
                totalAPagar = precio * cantidadDeBolsas;
            }

            console.log(`Su total a pagar es: ${totalAPagar}`);
            break;

        default:
            console.log("Usted no selecciono ningun producto");
    }
}

//*Ejercicio N8*/
{
    let edadDelUsuario = Number(prompt("Ingrese su edad"));

    if (edadDelUsuario >= 64) {
        console.log("El usuario es un adulto mayor");
    }
    else if (edadDelUsuario >= 18 && edadDelUsuario <= 64) {
        console.log("El usuario es un adulto");
    }
    else if (edadDelUsuario >= 13 && edadDelUsuario <= 17) {
        console.log("El usuario es un adolecente");
    }
    else {
        console.log("El usuario es un niño");
    }
}

//*Ejercicio N9*/
{
    let cantidadDePasajes = Number(prompt("Ingrese la cantidad de pasajes que desea comprar"));
    let pasajes = 50000;
    let subTotalCompra = pasajes * cantidadDePasajes;
    let descuento = 0;

    if (cantidadDePasajes > 3 && subTotalCompra > 500000) {
        descuento = (subTotalCompra * 15) / 100;
    }
    else if (cantidadDePasajes > 3 && subTotalCompra > 250000) {
        descuento = (subTotalCompra * 11) / 100;
    }
    else {
        descuento = 0;
    }

    let totalAPagar = subTotalCompra - descuento;

    console.log(`Cantidad de pasajes: ${cantidadDePasajes} Descuento: ${descuento} Total a pagar: ${totalAPagar}`);
}

//*Ejercicio N10 */
{
    let importeDeCompra = Number(prompt("Ingrese el importe de compra"));
    let formaDePago = Number(prompt("Eliga su metodo de pago: 1_Efectivo 2_Debito 3_Credito"));
    let descuento = 0;

    switch (formaDePago) {
        case 1:
            descuento = (importeDeCompra * 10) / 100;
            break;
        case 2:
            descuento = (importeDeCompra * 5) / 100;
            break;
        case 3:
            descuento = 0;
            break;
        default:
            console.log("Usted no ingreso un metodo de pago");
    }

    let totalAPagar = importeDeCompra - descuento;

    console.log(`Descuento: ${descuento}  Total a pagar: ${totalAPagar}`);
}


{
    let importeDeCompra = Number(prompt("Ingrese el valor de compra"));
    let dondeVive = prompt("Ingrese donde vive: (Centro/Oeste/Norte/Sur/Este)");

    let zonaCentro = 2500;
    let zonaOeste = 3750;
    let zonaNorte = 4225;
    let zonaSur = 5222;
    let zonaEste = 4288;

    let costeDeEnvio = 0;
    let totalAPagar = 0;

    if (dondeVive === "Centro" || dondeVive === "centro") {
        costeDeEnvio = 2500;
        totalAPagar = importeDeCompra + zonaCentro;
    }
    else if (dondeVive === "Oeste" || dondeVive === "oeste") {
        costeDeEnvio = 3750;
        totalAPagar = importeDeCompra + zonaOeste;
    }
    else if (dondeVive === "Norte" || dondeVive === "norte") {
        costeDeEnvio = 4225;
        totalAPagar = importeDeCompra + zonaNorte;
    }
    else if (dondeVive === "Sur" || dondeVive === "sur") {
        costeDeEnvio = 5222;
        totalAPagar = importeDeCompra + zonaSur;
    }
    else if (dondeVive === "Este" || dondeVive === "este") {
        costeDeEnvio = 4288;
        totalAPagar = importeDeCompra + zonaEste;
    }

    console.log(`Costes de envio: ${costeDeEnvio}  El total a pagar es: ${totalAPagar}`);
}

//*Ejercicio N12*/
{
    let diaDeLaCompra = prompt("Ingrese el dia de la compra: (Lunes/Martes/Miercoles/Jueves/Viernes/Sabado/Domingo)");
    let importeDeCompra = Number(prompt("Ingrese el importe de la compra"));

    let reintegro = 0;

    if (diaDeLaCompra === "Lunes" || diaDeLaCompra === "lunes") {
        reintegro = 0;
    }
    else if (diaDeLaCompra === "Martes" || diaDeLaCompra === "martes") {
        reintegro = 0;
    }
    else if (diaDeLaCompra === "Miercoles" || diaDeLaCompra === "miercoles") {
        reintegro = 0;
    }
    else if (diaDeLaCompra === "Jueves" || diaDeLaCompra === "jueves") {
        reintegro = 0;
    }
    else if (diaDeLaCompra === "Viernes" || diaDeLaCompra === "viernes") {
        reintegro = (importeDeCompra * 50) / 100;

        if (reintegro > 80000) {
            reintegro = 80000;
        }
    }
    else if (diaDeLaCompra === "Sabado" || diaDeLaCompra === "sabado") {
        reintegro = (importeDeCompra * 50) / 100;

        if (reintegro > 80000) {
            reintegro = 80000;
        }
    }
    else if (diaDeLaCompra === "Domingo" || diaDeLaCompra === "domingo") {
        reintegro = (importeDeCompra * 50) / 100;

        if (reintegro > 80000) {
            reintegro = 80000;
        }
    }
    else {
        console.log("Ingrese un dia valido");
    }

    let totalAPagar = importeDeCompra - reintegro;

    console.log(`Dia de la compra: ${diaDeLaCompra} Importe de la compra: ${importeDeCompra} Reintegro obtenido: ${reintegro} Importe final a pagar: ${totalAPagar}`);
}

//*Ejercicio N13*/
{
    let rubroDelComercio = prompt("Ingrese su rubro: (Vestimenta/Perfumería/Librería/Electrodomésticos/Calzado)");
    let importeDeCompra = Number(prompt("Ingrese el importe de la compra"));

    let descuento = 0;

    if (rubroDelComercio === "Vestimenta" || rubroDelComercio === "vestimenta") {
        descuento = (importeDeCompra * 20) / 100;

        if (descuento > 80000) {
            descuento = 80000;
        }
    }
    else if (rubroDelComercio === "Perfumeria" || rubroDelComercio === "perfumeria") {
        descuento = (importeDeCompra * 20) / 100;

        if (descuento > 80000) {
            descuento = 80000;
        }
    }
    else if (rubroDelComercio === "Libreria" || rubroDelComercio === "libreria") {
        descuento = (importeDeCompra * 30) / 100;

        if (descuento > 90000) {
            descuento = 90000;
        }
    }
    else if (rubroDelComercio === "Electrodomesticos" || rubroDelComercio === "electrodomesticos") {
        descuento = (importeDeCompra * 15) / 100;

        if (descuento > 70000) {
            descuento = 70000;
        }
    }
    else if (rubroDelComercio === "Calzado" || rubroDelComercio === "calzado") {
        descuento = (importeDeCompra * 20) / 100;

        if (descuento > 80000) {
            descuento = 80000;
        }
    }
    else {
        console.log("El rubro que eligio no existe");
    }

    let totalAPagar = importeDeCompra - descuento;

    console.log(`Rubro: ${rubroDelComercio} Importe de la compra: ${importeDeCompra} Descuento: ${descuento} Importe final a pagar: ${totalAPagar}`);
}