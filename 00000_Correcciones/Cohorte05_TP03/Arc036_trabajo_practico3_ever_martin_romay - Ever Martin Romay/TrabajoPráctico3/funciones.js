/* Ejercicio Nro. 13:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo
será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a 
aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número
*/


/* Aqui se va a crear una función que reciba dos parametros
y retorne un valor para poder calcular el precio de venta de un producto */

export const calculoPrecioDeVenta = (importeDeCompra, margenDeGanancia)=>
    {
        // Declarar una variable para el precio de venta //

        let precioDeVenta = 0;

        // Aqui se realiza el calculo para aplicar el margen de ganancia //

        precioDeVenta = importeDeCompra + (importeDeCompra * margenDeGanancia)/100;

        return precioDeVenta;
    }

/*
Ejercicio Nro. 14:
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos 
trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número
*/

export const promedioDeTres = (nota1, nota2, nota3)=>
    {
        // Aqui declaro la variable suma para el promedio //

        let suma = 0;

        suma = nota1 + nota2 + nota3;

        // Aqui realizo el calculo de promedio //

        let promedio = 0;

        promedio = suma / 3;

        // Aqui se retorna el promedio de las tres notas //

        return promedio;
    }

/*
Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro 
devuelva un texto que diga los siguientes mensajes.
•
Si la nota <= 4 debe devolver “Desaprobado”
•
Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
•
Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
•
Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto
*/

export const determinarCalificacion = (notaPromedio)=>
    {
        /* En esta función se va a determinar si la nota recibida determina
        lo siguiente 
        
            - Si la nota <= 4 debe devolver “Desaprobado”
            - Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
            - Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
            - Si la nota = 10 debe devolver “Excelente”
        */

        // Aqui voy a declarar una variable para el mensaje resultante //

        let mensaje;

        if(notaPromedio <= 4)
        {
            mensaje = "Desaprobado";
        }
        else
        {
            if((notaPromedio > 4) && (notaPromedio <= 7))
            {
                mensaje = "Aprobado";
            }
            else
            {
                if((notaPromedio > 7) && (notaPromedio <= 9))
                {
                    mensaje = "Muy bueno";
                }
                else
                {
                    if(notaPromedio === 10)
                    {
                        mensaje = "Excelente";
                    }
                }
            }
        }

        if((notaPromedio < 0) || (notaPromedio > 10))
        {
            /* Aqui se va a contemplar si el usuario ingresa una nota negativa
            o mayor a 10*/
            mensaje = "La nota ingresada no es válida";
        }

        return mensaje;
    }

/*
Ejercicio Nro. 16:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número
*/

export const calcularSobreTasa = (tipoBebida, importeBase)=>
    {

        let calculoSobreTasa = 0;

        switch(tipoBebida)
        {
            case 1:
                {
                    calculoSobreTasa = (importeBase * 5)/1000;
                    break;
                }

            case 2:
                {
                    calculoSobreTasa = (importeBase * 1)/1000;
                    break;
                }

            case 3:
                {
                    calculoSobreTasa = (importeBase * 7)/1000;
                    break;
                }

            case 4:
                {
                    calculoSobreTasa = (importeBase * 2)/1000;
                    break;
                }

            case 5:
                {
                    calculoSobreTasa = (importeBase * 15)/1000;
                    break;
                }

            default:
                {
                    calculoSobreTasa = (importeBase * 1)/1000;
                    break;
                }
        }

        return calculoSobreTasa;
    }

/*
Ejercicio Nro. 17:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de facturación por bloques de consumo,
donde el precio por metro cúbico aumenta a medida que el usuario consume más. Este tipo de sistema se aplica con el objetivo de promover
el uso responsable del recurso y penalizar el consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa
define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos
por metro cúbico. El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70,
los cuales se facturan a un valor de 555,20 pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se 
considera dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan un mínimo de 50 metros cúbicos,
de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro el total de metros cúbicos leídos
y devuelva el importe base a pagar por el cliente según el esquema tarifario antes descripto.
Consumo (m³)
Cálculo aplicado
Importe final ($)
30
50 × 350,00
17.500,00
55
(50 × 350,00) + (5 × 555,20)
20.276,00
85
(50 × 350,00) + (20 × 555,20) + (15 × 1.552,20)
57.214,00
Nota: Debe devolver un número
*/

export const calcularImporteAgua = (mtsCubicos)=>
    {
        // Aqui voy a definir las variables para los importes de los bloques //

        let importeBloque1 = 0;
        let importeBloque2 = 0;
        let importeBloque3 = 0;

        // Aqui voy a definir la variable para el importe base //

        let importeBase = 0;

        if(mtsCubicos <= 50) // Bloque 1 //
        {
            importeBloque1 = 50 * 350.00;
        }
        
        if((mtsCubicos > 50) && (mtsCubicos <= 70))
        {
            importeBloque1 = 50 * 350.00;

            importeBloque2 = (mtsCubicos - 50) * 555.20;
        }

        if((mtsCubicos > 70))
        {
            importeBloque1 = 50 * 350.00;

            importeBloque2 = 20 * 555.20;

            importeBloque3 = (mtsCubicos - 70) * 1552.20;

        }

        importeBase = importeBloque1 + importeBloque2 + importeBloque3;

        return importeBase;
    }

/*
Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca” 
y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es un importe que corresponde al 3% del importe Base 
ingresado como parámetro de la arrow function.
Nota: Debe devolver un número
*/

export const calcularTasaSubsuelo = (importeBase)=>
    {
        // Aqui voy a declarar la variable para el calculo de la tasa de subsuelo //

        let calculoTasaSubsuelo = 0;

        // Aqui hago el calculo de la tasa de subsuelo //

        calculoTasaSubsuelo = (importeBase * 3)/100;

        return calculoTasaSubsuelo;
        
    }

/*
Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca”
y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos) que corresponde
al 1,2 % del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número
*/

export const calcularTasaFiscalizacion = (importeBase)=>
    {
        // Aqui voy a declarar la variable para el calculo de la tasa de fiscalizacion //

        let calculoTasaFiscalizacion = 0;

        // Aqui hago el calculo //

        calculoTasaFiscalizacion = (importeBase * 1.2)/100;

        return calculoTasaFiscalizacion;
    }

/*
Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un paciente diabético;
Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa,
peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.
*/

export const calcularDosisDeInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes)=>
    {
        /* Para poder realizar los calculos de la dosis de insulina se deben tener
        en cuenta las siguientes condiciones 
        
            - Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
            este último término solamente si la glucosa es mayor a 180.
            - Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
            este último término solamente si la glucosa es mayor a 180.
        */

        let dosisInsulina = 0;

        switch(tipoDiabetes)
        {
            case 1: // Tipo de diabetes 1
                {
                    if(nivelGlucosa > 180)
                    {
                        dosisInsulina = (pesoCorporal * 50)/100 + (nivelGlucosa * 50)/100;
                    }
                    else
                    {
                        dosisInsulina = (pesoCorporal * 50)/100;
                    }
                    
                    break;
                }
            
            case 2: // Tipo de diabetes 2
                {
                    if(nivelGlucosa > 180)
                    {
                        dosisInsulina = (pesoCorporal * 20)/100 + (nivelGlucosa * 20)/100;
                    }
                    else
                    {
                        dosisInsulina = (pesoCorporal * 20)/100;
                    }
                    
                    break;
                }

            default:
                {
                    dosisInsulina = -1;
                    break;
                }
        }

        return dosisInsulina;
    }

/*
Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarCantidadVocales = (texto)=>
    {
        // Aqui voy a declarar una variable que cuente la cantidad de vocales //

        let contadorVocales = 0;

        for(let i = 0; i < texto.length; i = i + 1)
        {
            // Aqui declaro una variable para guardar letra por letra segun indice //
            let vocal = texto[i];

            // Aqui pregunto por las vocales //
            if((vocal === 'A') || (vocal === 'a') || (vocal === 'E') || (vocal === 'e') || (vocal === 'I') || (vocal === 'i') || (vocal === 'O') || (vocal === 'o') || (vocal === 'U') || (vocal === 'u'))
            {
                contadorVocales = contadorVocales + 1; // Aqui se van a ir contando las vocales
            }
            
        }

        return contadorVocales;
    }

/* Ejercicio 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarCantidadConsonantes = (cadenaTexto)=>
    {
        // Aqui voy a declarar una variable que cuente la cantidad de consonantes //
        let contadorConsonantes = 0;

        for(let i = 0; i < cadenaTexto.length; i = i + 1)
        {
            // Aqui declaro una variable para guardar letra por letra segun indice //
            let consonante = cadenaTexto[i];

            // Aqui pregunto por las consonantes //
            if((consonante === 'A') && (consonante === 'a') && (consonante === 'E') && (consonante === 'e') && (consonante === 'I') &&(consonante === 'i') && (consonante === 'O') && (consonante === 'o') && (consonante === 'U') && (consonante === 'u'))
            {
                contadorConsonantes = 0;
            }
            else
            {
                contadorConsonantes = contadorConsonantes + 1;
                
            }
        }

        return contadorConsonantes;
    }

/*
Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
*/

export const determinarCantidadLetrasS = (palabra)=>
    {
        // Aqui declaro una variable para guardar true o false de las letras S //
        let letrasS;

        // Aqui declaro una variable para controlar la cantidad de letras S //
        let cantidadLetrasS = 0;

        for(let i = 0; i < palabra.length; i = i + 1)
        {
            let caracter = palabra[i]; // Aqui se va a ir mostrando caracter por caracter

            if((caracter === 'S') || (caracter === 's')) // Aqui va a preguntar si hay letras 'S' o 's' en la palabra
            {
                cantidadLetrasS = cantidadLetrasS + 1;
                if(cantidadLetrasS >= 2)
                {
                    letrasS = true;
                }
                
            }
            else
            {
                letrasS = false;
            }
            
        }

        return letrasS;
    }

/*
Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante 
la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/

export const determinarCantidadEspaciosEnBlanco = (cadenaTexto2)=>
    {
        // Aqui declaro una variable para contar los espacios en blanco //
        let contadorEspaciosEnBlanco = 0;

        // Aqui declaro una variable para guardar true o false de los espacios en blanco //
        let espaciosEnBlanco;

        for(let i = 0; i < cadenaTexto2.length; i = i + 1)
        {
            let caracter = cadenaTexto2[i];

            if(caracter === ' ')
            {
                contadorEspaciosEnBlanco = contadorEspaciosEnBlanco + 1; // Aqui se van a contar los espacios en blanco
                if(contadorEspaciosEnBlanco === 3)
                {
                    espaciosEnBlanco = true;
                    break;
                }

            }
            else
            {
                espaciosEnBlanco = false;
            }
        }

        return espaciosEnBlanco;
    }

/*
Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no contiene ningún dígito numérico
(del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y
comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor lógico false, ya que la cadena deja 
de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).
*/

export const determinarSiNoTieneNumeros = (texto2)=>
    {
        // Aqui declaro una variable para determinar si la cadena contiene numeros o no //

        let contieneNumeros;

        for(let i = 0; i < texto2.length; i = i + 1)
        {
            let caracter = texto2[i];

            if((caracter >= '0') && (caracter <= '9'))
            {
                contieneNumeros = false;
                break;

            }
            else
            {
                contieneNumeros = true;
            }
        }

        return contieneNumeros;
    }