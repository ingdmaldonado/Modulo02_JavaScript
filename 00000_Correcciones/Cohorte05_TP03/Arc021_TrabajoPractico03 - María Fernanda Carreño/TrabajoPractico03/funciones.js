

/*
Ejercicio Nro. 13:
Realizar una arrow function que reciba 
dos parámetros de entrada. 
El parámetro 1 será el importe de compra de un producto,
el segundo será el margen de ganancia que
 se aplicará sobre ese producto, 
 la función debe retornar el precio de venta
 que será igual a aplicarle el % de margen de ganancia.
 La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número
*/

export const precioDeVenta = (precioCosto, margen) => {
    // aqui calculo el % de ganancia
    let calculo = (precioCosto * margen) / 100;

    // aqui al precio final le sumo el % de ganancia
    let precioFinal = precioCosto + calculo;

    // retornamos el valor //

    return precioFinal;

}

/* 
Ejercicio Nro. 14:
Realizar una arrow function que reciba 
como parámetro las 3 notas que obtuvo un alumno 
en los distintos trabajos prácticos de una materia
y que a partir de esas notas obtenga el promedio 
de las mismas
Nota: Debe devolver un número
*/

export const promedioDeTres = (nota1, nota2, nota3) => {

    return (nota1 + nota2 + nota3) / 3;

}
/*
Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro 
una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto
*/

export const evaluarNota = (nota) => {

    let resultado = "";

    nota < 0 || nota > 10 ? resultado = "Error en la carga!" :
        nota >= 0 && nota <= 4 ? resultado = "Desaprobado" :
            nota > 4 && nota <= 7 ? resultado = "Aprobado" :
                nota > 7 && nota <= 9 ? resultado = "Muy Bueno" :
                    nota = 10 ? resultado = "Excelente" : resultado = "";
    return resultado;

}

/*
Ejercicio Nro. 16: 
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente 
clasificación y tipo. 
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la 
recaudación de ese impuesto tendrá destino a la protección del medio ambiente. 
Nota: Debe devolver un número
*/

export const calcularSobreTasa = (tipoBebida, importeBase) => {
    let calculoSobreTasa = 0;

    switch (tipoBebida) {
        case 1: //Agua en envases plásticos
            calculoSobreTasa = importeBase * (5 / 1000);
            break;

        case 2://Agua en envases retornables
            calculoSobreTasa = importeBase * (1 / 1000);
            break;

        case 3://Bebidas Gaseosas Azucaradas en envases plásticos
            calculoSobreTasa = importeBase * (7 / 1000);
            break;

        case 4://Bebidas Gaseosas Azucaradas en envases retornables
            calculoSobreTasa = importeBase * (2 / 1000);
            break;

        case 5://Bebidas Energéticas
            calculoSobreTasa = importeBase * (15 / 1000);
            break;

        default://Cualquier otra bebida no clasificada
            calculoSobreTasa = importeBase * (1 / 1000);
            break;
    }

    return calculoSobreTasa;

};

/*
Ejercicio Nro. 17:

Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de 
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume 
más. 
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para 
ello, la empresa define tres bloques de facturación. 

50 (El 0 al 50)  × 350,00
70 (Del 51 al 70) x 555,20  
>70  (71 en adelante) x 1552,20

La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro 
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes 
descripto. 
Consumo (m³) Cálculo aplicado 
Nota: Debe devolver un número 
*/

export const calcularImporteBaseAgua = (mtsCubicos) => {
    let importeBase = 0;
    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    if (mtsCubicos <= 50)//bloque 1
    {
        importeBase = 50 * 350;
        console.log(`El importe base es: ${importeBase}`);               
    }
    if (mtsCubicos <= 70) {//bloque 2
        importeBloque1 = 50 * 350;
        importeBloque2 = (mtsCubicos - 50) * 555.20;
        importeBase = importeBloque1 + importeBloque2;        
    }
    if (mtsCubicos > 70) {//bloque 3
        importeBloque1 = 50 * 350;
        importeBloque2 = 20 * 555.20;
        importeBloque3 = (mtsCubicos - 70) * 1552.20;     
        importeBase = importeBloque1 + importeBloque2 + importeBloque3;
    }
    return importeBase;
}

/*export const calcularImporteBase = (consumoMetrosCubicos) => {
    let importeBase = 0;

    if (consumoMetrosCubicos >= 0 && consumoMetrosCubicos <= 50) {
        importeBase = consumoMetrosCubicos * 350.00;
    }
    else if (consumoMetrosCubicos > 50 && consumoMetrosCubicos <= 70) {
        importeBase = (50 * 350.00) + ((consumoMetrosCubicos - 50) * 555.20);

    }
    else if (consumoMetrosCubicos > 70) {
        importeBase = (50 * 350.00) + (20 * 555.20) + ((consumoMetrosCubicos - 70) * 1552.20);

    }
    return importeBase;

}*/

/*
Ejercicio Nro. 18: 
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
*/
export const calcularTasaDeSubsuelo=(importeBase)=>{
    let tasaSubsuelo=0;
    tasaSubsuelo=importeBase*(3/100);
    return tasaSubsuelo;
}

/*
Ejercicio Nro. 19: 
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de 
la arrow function. 
Nota: Debe devolver un número */

export const calcularTasaFiscalizacion=(importeBase)=>{
    let tasaFiscalizacion=0;
    tasaFiscalizacion=importeBase*(1.2/100);
    return TasaFiscalizacion; 
}

/*
Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
    a. Tipo 1
    b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.

Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.

La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.
*/

export const calcularDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDeDiabetes) => {

    let calculoInsulina = 0;

    switch (tipoDeDiabetes) {
        case 1: // tipo de diabetes 1
            {
                if (nivelGlucosa > 180) {
                    calculoInsulina = (pesoCorporal * 50) / 100 + (nivelGlucosa * 50) / 100;
                }

                else {
                    calculoInsulina = (pesoCorporal * 50) / 100;
                }

                break;
            }
        case 2: // tipo de diabetes 2
            {
                if (nivelGlucosa > 180) {
                    calculoInsulina = (pesoCorporal * 20) / 100 + (nivelGlucosa * 50) / 100;
                }

                else {
                    calculoInsulina = (pesoCorporal * 20) / 100;
                }

                break;
            }
        default:
            {
                calculoInsulina = -1;
                break;
            }
    }
    //console.log(`Nivel de Glucosa: ${nivelGlucosa}- Peso Corporal: ${pesoCorporal}- Tipo de Diabetes: ${tipoDeDiabetes}`)

    return calculoInsulina;

}
/*
Ejercicio Nro. 21: 
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 
Nota: Debe devolver un número.
*/
export const calcularCantidadVocales = (texto) => {
    let cantidadVocales = 0;
    for (let i = 0; i < texto.length; i++) {
        // extraigo el caracter que está en la posición "i" //
        let caracter = texto[i];
        //console.log(caracter.toUpperCase());
        if ((caracter.toUpperCase() === 'A') || (caracter.toUpperCase() === 'E') || (caracter.toUpperCase() === 'I') || (caracter.toUpperCase() === 'O') || (caracter.toUpperCase() === 'U')) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

/*
Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/
export const calcularCantidadConsonantes = (cadena) => {
    let cantidadConsonantes = 0;

    // Convertir la cadena a mayúsculas 
    const upperCadena = cadena.toUpperCase();

    // Definir constante de todas las vocales inclúidas las acentuadas 
    const vocales = 'AEIOUÁÉÍÓÚÜ';

    // Defino la ñ para poder contarla como consonante
    const letraEnie = 'Ñ';

    // Iterar sobre la cadena en mayúsculas
    for (let i = 0; i < upperCadena.length; i++) {
        const caracter = upperCadena[i];

        // 1. Verificar si el caracter es la 'Ñ'
        if (caracter === letraEnie) {
            cantidadConsonantes++;
        }
        // 2. Verificar si el caracter es una letra del alfabeto (A-Z)
        //    Y que NO esté incluida en el conjunto de vocales.
        else if (
            caracter >= 'A' && caracter <= 'Z' &&
            !vocales.includes(caracter)
        ) {
            cantidadConsonantes++;
        }
    }
    return cantidadConsonantes;
}
/* Primera versión del Ejercicio Nro. 22:
export const calcularCantidadConsonantes = (cadena) => {
    let cantidadConsonantes = 0;
    for (let i = 0; i < cadena.length; i++) {
        // extraigo el caracter que está en la posición "i" //
        let caracter = cadena[i];
        //console.log(caracter.toUpperCase());
        if ((caracter.toUpperCase() !== 'A') && (caracter.toUpperCase() !== 'E') && (caracter.toUpperCase() !== 'I') && (caracter.toUpperCase() !== 'O') && (caracter.toUpperCase() !== 'U')) {
            cantidadConsonantes++;
        }
    }
    return cantidadConsonantes;
}
    */

/*
Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario
Nota: Debe devolver un boolean (true ó false).
*/
export const contieneDosLetrasS = (palabra) => {
    //defino un contador de letras 's' y una bandera booleana
    let contadorS = 0;
    let contieneDosS = false;

    //iterar sobre cada caracter de la palabra ingresada
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
        // Pregunto si el caracter es una 's' mayúscula o minúscula    
        if (caracter.toUpperCase() === 'S') {
            contadorS++;
            if (contadorS === 2) {
                contieneDosS = true;
                break; // Salir del bucle una vez que se encuentran dos 's'
            }
        }
    }
    return contieneDosS;
}

/*
Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false)
*/
export const contieneTresEspacios = (cadena) => {
    //defino un contador de espacios y una bandera booleana
    let contadorEspacios = 0;
    let contieneTresEspacios = false;
    //iterar sobre cada caracter de la cadena ingresada
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        // Pregunto si el caracter es un espacio en blanco    
        if (caracter === ' ') {
            contadorEspacios++;
            if (contadorEspacios === 3) {
                contieneTresEspacios = true;
                break; // Salir del bucle una vez que se encuentran tres espacios
            }
        }
    }
    return contieneTresEspacios;
}

/**
Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false)
 */
export const noContieneNumeros = (cadena) => {
    //defino una bandera booleana
    let noContieneNumeros = true;
    //iterar sobre cada caracter de la cadena ingresada
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        // Pregunto si el caracter es un dígito numérico entre '0' y '9'    
        if (caracter >= '0' && caracter <= '9') {
            noContieneNumeros = false;
            break; // Salir del bucle una vez que se encuentra un número
        }
    }
    return noContieneNumeros;
}










