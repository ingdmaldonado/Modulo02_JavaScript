    /* Ejercicio 13: Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
    compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
    debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
    el precio de venta (sin impuestos). */

export const presioDeVenta = (precioCosto,margen) => 
    {
    // calculo de el % ganancia
    let calculo = (precioCosto * margen)/100;

    // calculo de precio final sumado el % de ganancia
    let precioFinal = precioCosto + calculo;

    // retornamos valor
    
    return precioFinal
    }

    /* Ejercicio 14: Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas */

export const calcularPromedio = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

/* Ejercicio 15: Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes. */

export const clasificarNota = (nota) => {
    if (nota <= 4) {
        return "Desaprobado";
    } else if (nota > 4 && nota <= 7) {
        return "Aprobado";
    } else if (nota > 7 && nota <= 9) {
        return "Muy Bueno";
    } else if (nota === 10) {
        return "Excelente";
    } else {
        return "Nota inválida (debe estar entre 0 y 10)";
    }
};

/* Ejercicio Nro. 16: El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número */

export const calcularSobretasa = (tipoBebida, importeBase) => {
    let tasa = 0;

    switch (tipoBebida) {
        case 1: // Agua en envases plásticos
            tasa = 5;
            break;
        case 2: // Agua en envases retornables
            tasa = 1;
            break;
        case 3: // Gaseosas azucaradas plásticas
            tasa = 7;
            break;
        case 4: // Gaseosas azucaradas retornables
            tasa = 2;
            break;
        case 5: // Energéticas
            tasa = 15;
            break;
        default: // Cualquier otra bebida
            tasa = 1;
            break;
    }
    const resultado4 = (importeBase * tasa) / 1000;

    return resultado4;
};

/* Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el
consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para
ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros
cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20
metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20
pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.

Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes
descripto.

Consumo (m3) Cálculo aplicado Importe final ($)
30 50 × 350,00 17.500,00
55 (50 × 350,00) + (5 × 555,20) 20.276,00
85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00*/

export const calcularImporteAgua = (m3) => {

    
    let consumo = m3;

    
    const TARIFA1 = 350.00;
    const TARIFA2 = 555.20;
    const TARIFA3 = 1552.20;

    if (consumo < 50) {
        consumo = 50;
    }

    let total = 0;

    /* hasta 50 m3 */
    if (consumo <= 50) {
        total = consumo * TARIFA1;
    }

    /* hasta 70 m3 */
    
    else if (consumo <= 70) {
        total = (50 * TARIFA1) + ((consumo - 50) * TARIFA2);
    }

    /*más de 70 m3 */

    else {
        total = (50 * TARIFA1) + (20 * TARIFA2) + ((consumo - 70) * TARIFA3);
    }

    return total;
};

/* 
Ejercicio Nro. 18

Realizar una arrow function que reciba como parámetro el Importe Base 
de una factura de “Servicios Públicos de Aguas de Catamarca” y a partir 
de ese importe base calcule y devuelva la Tasa de Subsuelo, que corresponde 
al 3% del importe Base ingresado.
*/

export const calcularTasaSubsuelo = (importeBase) => {
    
    const base = importeBase;

    const tasa = (base * 3) / 100;

    return tasa;
};

/* 
Ejercicio Nro. 19

Realizar una arrow function que reciba como parámetro el Importe Base 
de una factura de “Servicios Públicos de Aguas de Catamarca” y a partir 
de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE, 
que corresponde al 1.2% del importe Base ingresado.

*/

export const calcularTasaENRE = (importeBase) => {
    
    const base = importeBase;

    const tasa = (base * 1.2) / 100;

    return tasa;
};

/* 
Ejercicio Nro. 20

Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.

1) Nivel de glucosa en sangre
2) Peso corporal (kg)
3) Tipo de diabetes (1 ó 2)

Cálculos según el tipo:

Para Tipo 1:
    Dosis = 50% del peso corporal
    + 50% de la glucosa (solo si la glucosa es mayor a 180)

Para Tipo 2:
    Dosis = 20% del peso corporal
    + 50% de la glucosa (solo si la glucosa es mayor a 180)

La función debe retornar la dosis de insulina recomendada.

Nota: Debe devolver un número.
*/

export const calcularInsulina = (glucosa, peso, tipo) => {

    const nivelGlucosa = glucosa;
    const pesoCorporal = peso;
    const tipoDiabetes = tipo;

    let dosis = 0;

    if (tipoDiabetes === 1) {
        // Tipo 1
        dosis = (pesoCorporal * 50) / 100;

        if (nivelGlucosa > 180) {
            // 50% de la glucosa
            dosis = dosis + ((nivelGlucosa * 50) / 100);
        }

    } else if (tipoDiabetes === 2) {
        // Tipo 2
        dosis = (pesoCorporal * 20) / 100;  // 20% del peso

        if (nivelGlucosa > 180) {
            dosis = dosis + ((nivelGlucosa * 50) / 100);
        }
    }

    return dosis;
};

/* 
Ejercicio Nro. 21

Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarVocales = (cadena) => {

    
    const texto = cadena;

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        let caracter = texto[i];

        let letra = caracter.toLowerCase();

        if (
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
        ) {
            contador = contador + 1;
        }
    }

    return contador;
};

/* 
Ejercicio Nro. 22

Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarConsonantes = (cadena) => {

    const texto = cadena;

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i].toLowerCase();

        if (letra >= "a" && letra <= "z") {

            if (
                letra !== "a" &&
                letra !== "e" &&
                letra !== "i" &&
                letra !== "o" &&
                letra !== "u"
            ) {
                contador = contador + 1;
            }
        }
    }

    return contador;
};

/* 
Ejercicio Nro. 23

Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneDosS = (palabra) => {

    
    const texto = palabra;

    let contador = 0;
    
    
    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i].toLowerCase();

        if (letra === "s") {
            contador = contador + 1;
        }

        if (contador === 2) {
            return true;
        }
    }

    return false;
};

/* 
Ejercicio Nro. 24

Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneTresEspacios = (cadena) => {

    const texto = cadena;

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] === " ") {
            contador = contador + 1;
        }

        if (contador === 3) {
            break;
        }
    }

    if (contador === 3) {
        return true;
    } 
    else {
        return false;
    }
};

/* 
Ejercicio Nro. 25

Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).
*/

export const noContieneNumeros = (cadena) => {

    const texto = cadena;

    let contieneNumero = false;

    for (let i = 0; i < texto.length; i++) {

        let caracter = texto[i];

        if (caracter >= "0" && caracter <= "9") {
            contieneNumero = true;
            break; 
        }
    }

    if (contieneNumero === true) {
        return false; 
    } else {
        return true; 
    }
};

