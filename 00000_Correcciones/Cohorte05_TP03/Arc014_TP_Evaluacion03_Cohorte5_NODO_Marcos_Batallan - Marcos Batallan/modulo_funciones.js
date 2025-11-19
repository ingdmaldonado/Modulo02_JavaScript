

/****************************
FUNCIÓN PARA EJERCICIO N° 13
*****************************/

//Aquí creo la función estableciendo 2 parámetros de entrada: precio de compra y margen de ganancia
export const precioVenta = (importeCompra,margenGanancia) => {  

    //aquí declaco la variable en donde se va a calcular mi ganancia de venta
    let miGanacia = (importeCompra * margenGanancia)/100;

    //aquí declaco la variable en donde se va calcular el precio final que pagará el cliente
    let importeFinal = importeCompra + miGanacia;

    //aquí regreso el precio final
    return importeFinal;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 14
*****************************/

//Aquí creo la función estableciendo 3 parámetros de entrada: las notas obtenidas por el alumno
export const notasObtenidas = (nota1,nota2,nota3) =>{

    //aquí declaro variable donde realizo el cálculo del promedio
    let promedioNotas = (nota1 + nota2 + nota3)/3

    //regreso el promedio de las 3 notas obtenidas
    return promedioNotas;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 15
*****************************/

//Aquí creo la función estableciendo el parámetro de entrada: la nota promedio
export const notaPromedio = (promedio) => {

    //aquí creo la variable estableciendo que la nota final es el pormedio
    let notaFinal = promedio;

    //aquí inicio la estructura condicional para determinar el estado del alumno

    if ((notaFinal < 0) || (notaFinal > 10)) {
        notaFinal = "NULL - Valor nulo"; // Si la nota es inválida
    }
    else {
        if (notaFinal <= 4) {
            notaFinal = "Desaprobado"; // Si está desaprobado
        }
        else {
            if ((notaFinal > 4) && (notaFinal <= 7)) {
                notaFinal = "Aprobado"; // Si está aprobado
            }
            else {
                if ((notaFinal > 7) && (notaFinal <= 9)) {
                    notaFinal = "Muy Bueno"; // Si su promedio es muy bueno
                }
                else {
                    if (notaFinal === 10) {
                        notaFinal = "Excelente"; // Si es un alumno excelente
                    }
                }
            }
        }
    }
    
    // regreso el estado del alumno
    return notaFinal;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 16
*****************************/

export const impuestoSobreTasa = (tipoBebida,precioBase) => {

    //declaro e inicializo la variable para la sobre tasa
    let sobreTasa = 0;

    switch (tipoBebida){
        case 1: { //Agua en envases plásticos = 5 ‰ (cinco por mil)
            sobreTasa = precioBase * 0.005;
            break;
        }
        case 2: { //Agua en envases retornables = 1 ‰ (uno por mil)
            sobreTasa = precioBase * 0.001;
            break;
        }
        case 3: { //Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
            sobreTasa = precioBase * 0.007;
            break;
        }
        case 4: { //Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
            sobreTasa = precioBase * 0.002;
            break;
        }
        case 5: { //Bebidas Energéticas = 15 ‰ (quince por mil)
            sobreTasa = precioBase * 0.015;
            break;
        }
        default: { //Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
            sobreTasa = precioBase * 0.001
            break;
        }
    }

    //regreso el impuesto sobre tasa
    return sobreTasa;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 17
*****************************/

export const calcularImporteAgua = (mtsCubicosConsumidos) => {

    //declaro e inicializo la variable para determinar el importe a pagar
    let importeAPagar = 0;

    //declaro esta constante que determina la cantidad BASE de mts3 por bloque
    const consumoBaseMts3 = 50;
    const exedenteBloque2 = 20;

    //aquí declaro e inicializo las constantes teniendo en cuenta el dato concreto del precio * mts3
    const precioBloque1 = 350;
    const precioBloque2 = 555.20;
    const precioBloque3 = 1552.20;

    /* aquí inicio el proceso condicional para determinar en qué bloque de pago ingresa el usuario según su consumo */
    
    if(mtsCubicosConsumidos <= 50) { //Si el consumo no supera los 50 mts3 =>

        //el importe a pagar es igual a la tarifa base
        importeAPagar = consumoBaseMts3 * precioBloque1; //es importe a pagar es la tarifa base
    }
    
    //
    if((mtsCubicosConsumidos > 50) && (mtsCubicosConsumidos <= 70)) { //Si el consumo no supera los 70 mts3 =>
            
        //el importe a pagar es igual a la tarifa base + los mts3 extra consumidos * el precio del bloque 2
        importeAPagar = (consumoBaseMts3 * precioBloque1) + (mtsCubicosConsumidos - consumoBaseMts3) * precioBloque2;
    }
    
    if(mtsCubicosConsumidos > 70) { //Si el consumo supera los 70 mts3 =>

        //el importe a pagar es igual a la tarifa base + el exedente del bloque 2 + los mts3 extra consumidos * el precio del bloque 3 
        importeAPagar = (consumoBaseMts3 * precioBloque1) + (exedenteBloque2 * precioBloque2) + ((mtsCubicosConsumidos - consumoBaseMts3 - exedenteBloque2) * precioBloque3);
    }
    
    /*** ME COSTO BASTANTE HACER ESTE EJERCICIO HASTA QUE LO DESARROLLAMOS EN LA CLASE DE CONSULTA,
    SOBRE TODO PORQUE NO LOGRABA ENTENDER EL PROCESO DE FACTURACIÓN. ESTOY SEGURO QUE HAY UNA FORMA
    MÁS SENCILLA DE REALIZAR LOS CÁLCULOS, PERO LO HICE DE LA MANERA EN LA QUE A MÍ ME FUNCIONÓ */

    return importeAPagar;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 18
*****************************/

export const tasaDeSubsuelo = (importeBaseFactura) => {

    //declaro e inicializo la variable que representa el importe de la tasa
    let montoTasa = 0;

    //aquí realizo el cálculo correspondiente al 3% del importe base de una factura
    montoTasa = (importeBaseFactura * 3) / 100;

    //regreso el importe de la Tasa de Subsuelo
    return montoTasa;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 19
*****************************/

export const tasaDeFiscalizacion = (montoBaseFactura) => {

    //declaro e inicializo la variable que representa el importe de la tasa
    let importeTasa = 0;

    //aquí realizo el cálculo correspondiente al 3% del importe base de una factura
    importeTasa = (montoBaseFactura * 1.2) / 100;

    //regreso el importe de la Tasa de Subsuelo
    return importeTasa;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 20
****************************/

export const dosisDeInsulina = (tipoDiabetes,nivelGlucosa,pesoCorporal) => {

    //declaro e inicializo la variable donde se guandará el valor de la dosis de insulina
    let dosisRecomendada = 0;

    switch (tipoDiabetes) {

        case 1: { //diabetes tipo 1

            if (nivelGlucosa <= 180) { //si no supera los 180, la dosis es el 50% del peso
                dosisRecomendada = (pesoCorporal * 50)/100;
            }
            else { //si supera los 180, la dosis es el 50% del peso más el 50% de la glucosa
                dosisRecomendada = ((pesoCorporal * 50)/100 + (nivelGlucosa * 50)/100);
            }
            break;
        }
        default: { //diabetes tipo 2

            if (nivelGlucosa <= 180) { //si no supera los 180, la dosis es el 20% del peso
                dosisRecomendada = (pesoCorporal * 20)/100;
            }
            else { //si supera los 180, la dosis es el 20% del peso más el 50% de la glucosa
                dosisRecomendada = ((pesoCorporal * 20)/100 + (nivelGlucosa * 50)/100);
            }
            break;
        }
    }

    //regreso el valor de la dosis en función a los parámetros ingresados
    return dosisRecomendada;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 21
*****************************/

export const cantidadDeVocales = (texto) => {

    //declaro e inicializo la variable que contará las vocales
    let contadorVocales = 0;

    //aquí inicio el ciclo repetitivo y se inicia el recorrido a lo largo del texto
    for(let i = 0; i < texto.length; i++) {
        
        //aquí extrigo el caracter que está en la posición "i"
        let caracter = texto[i].toUpperCase();

        //aquí inicio el proceso condicional para que el recorrido sólo capture las vocales del texto
        if((caracter >= 'A' && caracter <= 'Z') && (caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U'))
        {
            contadorVocales++; //una vez detectadas las vocales, se van sumando
        }
    }

    //regreso la cantidad de vocales que hay en el texto
    return contadorVocales;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 22
*****************************/

/*
Para este ejercico realicé el mismo procedimiento
del ejercicio anterior.
*/
export const cantidadDeConsonantes = (texto) => {

    let contadorConsonantes = 0;

    for(let i = 0; i < texto.length; i++) {

        let caracter = texto[i].toUpperCase();

        if((caracter >= 'A' && caracter <= 'Z') && (caracter != 'A') && (caracter != 'E') && (caracter != 'I') && (caracter != 'O') && (caracter != 'U'))
        {
            contadorConsonantes++;
        }
    }

    return contadorConsonantes;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 23
*****************************/

export const palabraConS = (texto) => {

    //declaro e inicializo la variable para contar las "S" de la palabra a ingresar
    let contadorS = 0;

    //declaro la variable boolean y la inicializo en FALSE
    let tiene2S = false;

    //inicio el ciclo para realizar el recorrido de la palabra
    for(let i = 0; i < texto.length; i++) {

        let caracter = texto[i].toUpperCase();

        //aquí inicio un consicional anidado. 
        if(caracter === "S") { //Primero para determinar si el caracter leído es la letra "S"
            contadorS++;

            if(contadorS === 2) { //Luego para determinar si la palabra contiene 2 "S"

                //Una vez que detecta 2 "S" en la palabra, el ciclo se interrumpe
                tiene2S = true;
                break;
            }
        }
    }

    //regreso la variable boolean con el dato TRUE o FALSE dependiendo si la palabra contiene o no las 2 "S"
    return tiene2S;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 24
*****************************/

/*
Para este ejercico realicé el mismo procedimiento
del ejercicio anterior.
*/

export const espaciosEnBlanco = (texto) => {

    let cantidadEspacios = 0;

    let tiene3Espacios = false;

    for(let i = 0; i < texto.length; i++) {

        let caracter = texto[i].toUpperCase();

        if(caracter === " ") {

            cantidadEspacios++;

            if(cantidadEspacios === 3) {

                tiene3Espacios = true;

                break;
            }
        }
    }

    return tiene3Espacios;
}


/****************************
FUNCIÓN PARA EJERCICIO N° 25
*****************************/

export const contieneNumeros = (texto) => {

    //aquí creo la variable boolean y la declaro en verdadero
    let noTieneNumero = true;

    //aquí inicio el recorrido a lo largo del texto
    for(let i = 0; i < texto.length; i++) {

        //aquí extrigo el caracter que está en la posición "i"
        let caracter = texto[i].toUpperCase();

        //aquí inicio el proceso condicional para que el recorrido identifique y capture los dígitos del texto
        if((caracter === "0") || (caracter === "1") || (caracter === "2") || (caracter === "3") || (caracter === "4") || (caracter === "5") || (caracter === "6") || (caracter === "7") || (caracter === "8") || (caracter === "9")) {

            //Una vez que se detecta un dígito numérico, el ciclo se interrumpe
            noTieneNumero = false;
            break;
        }     
    }

    //regreso el resultado verdadero o falso
    return noTieneNumero;
}