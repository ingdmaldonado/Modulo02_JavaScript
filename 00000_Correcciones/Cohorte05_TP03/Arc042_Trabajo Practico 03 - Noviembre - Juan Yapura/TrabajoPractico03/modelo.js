

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

export const precioDeVenta = (precioCosto,margen) =>
    {
        // aqui calculo el % de ganancia
        let calculo = (precioCosto * margen)/100;

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

export const promedioDeTres = (nota1,nota2,nota3)=>{

    return (nota1 + nota2 + nota3)/3;

}


/*
Ejercicio Nro. 15:
Realizar una arrow function que reciba como
párametro una nota promedio y que según la nota
recibida como parámetro devuelva un texto que diga
los siguientes mensajes.
    
    * Si la nota <= 4 debe devolver "Desaprobado"
    * Si la nota > 4 y nota <= 7 debe devolver "Aprobado"
    * Si la nota > 7 y nota <= 9 debe devolver "Muy Bueno"
    * Si la nota = 10 debe devolver "Excelente"
    
    NOTA: Debe devolver un texto
*/

 export const clasificacion = (promedio)=>
 {
    switch(true)
        {
            case (promedio>=0 && promedio<= 4):
                {
                    console.log(`El trabajo esta desaprobado`);
                    break;
                }

            case (promedio>4 && promedio <= 7):
                {
                    console.log(`El trabajo esta aprobado`);
                    break;
                }
            case (promedio>7 && promedio <10):
                {
                    console.log(`muy bien! aprobado`);
                    break;
                }
            case (promedio===10):
                {
                    console.log(`trabajo excelente`);
                    break;
                }
                default:
                    {
                        console.log(`no se registra una nota valida`);
                
                    }
        }
 }


/*
Ejercicio Nro. 16:
El gobierno Nacional desea aplicar un impuesto
(sobre tasa) a las bebidas en función de la siguiente
clasificación y tipo.

1-Bebidas en Agua en envases plásticos = 5%0 (cinco por mil)
2-Bebidas Agua en envases retornables = 1%0 (uno por mil)
3-Bebidas Gaseosas Azucaradas en envases plasticos = 7%0 (siete por mil)
4-Bebidas Gaseosas Azucaradas en envases retornables = 2%0 (dos por mil)
5-Bebidas Energétivas = 15%0 (quince por mil)
6-Cualquier otra bebidas no clasificada = 1%0 (uno por mil)

La función debe recibir el importe Base de la Bebida, debe
calcular y retornarla sobre Tasa, recaudacion de ese impuesto
tendrá destino a la protección del medio ambiente.

NOTA: Debe devolver un número

*/

export const calcularSobreTasa = (tipoBebida, importeBase)=>{

    let calculoSobreTasa = 0;

    switch(tipoBebida)
    {
        case 1:
            {

                calculoSobreTasa = (importeBase * 5) / 1000;
                break;
            }

        case 2:
            {

                calculoSobreTasa = (importeBase * 1) / 1000;
                break;
            }

        case 3:
            {

                calculoSobreTasa = (importeBase * 7) / 1000;
                break;
            }

        case 4:
            {

                calculoSobreTasa = (importeBase * 2) / 1000;
                break;
            }

        case 5:
            {

                calculoSobreTasa = (importeBase * 15) / 1000;
                break;
            }

        default:
            {

                calculoSobreTasa = (importeBase * 1) / 1000;
                break;
            }
    }



    return calculoSobreTasa;

}


/* Ejercicio Nro. 17 
Una empresa de distribucion de agua potable "Aguas de 
Catamarca ECSAPEM" utiliza un esquiema de facturación
por bloques de consumo, donde el precio por metro cúbico
aumenta a medida que el usuario consume más. Este tipo
de sistema se aplica con el objetivo de promover el uso
responsable del recurso y penalizar el consumo excesivo.

El cálculo del importe base wse realiza a partir de los
metros cúbicos leídos en el medidor del cliente. Para
ello, la empresa define tres bloques de facturación.
El primer bloque corresponde a los primeros 50 metros
cúbicos, que se facturan a razón de 350 pesos por metro
cúbico. El segundo bloque corresponde los siguientes 20
metros cúbicos, es decir desde el cúbico número 51 hasta
70, los cuales se facturan a un valor de 555,20 pesos
por metro cúbico. Finalmente, todo consumo que supere
70 metros cúbicos se considera dentro del bloque
excedente o de castigo, y se factura a razón de 1552.20
pesos por metro cúbico.

Cabe aclarar que los clientes cuyo consumo mensual sea
inferior a 50 metros, cúbicos igualmente abonan un mínimo
50 metros cúbicos, de modo que ese sea el valor base
de cálculo.

La tarea consiste en definir una arrow function llamada
calcularImporteAgua que reciba como parámetro el total
de metros cúbicos leídos y devuelva el importe base a
pagar por el cliente según el esquema tarifario antes
descripto.

Consumo(m3)     Cálculo aplicado        Importe Final($)

30              50 x 350.00                             17500.00
55              (50 x 350.00)+(5x555.20)                20276.00
85              (50x350.00)+(20x555.20)+(15x1552.20)    57214.00

NOTA: Debe devolver un número
*/



export const calcularImporteBaseAgua = (mtsCubicos)=>{

    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    let importeBase = 0;

    if (mtsCubicos <= 50) // bloque 1
    {
        console.log(`estoy entrando por el bloque 1`);

        importeBloque1 = 50 * 350.00
        
        console.log(importeBloque1)
    }
    
    if(mtsCubicos <= 70) // bloque 1 y bloque 2
    {
        console.log(`estoy entrando por el bloque 2`);

        importeBloque1 = 50 * 350.00;

        /* si un tipo consume 68 mts. cubicos.

            mtsSegundoBloque = (mtsCubicos - 50)

            60 => consumio

                50 mts bloque 1
                10 mts bloque 2 => 68 - 50 => 18

        */

        importeBloque2 = (mtsCubicos - 50) * 555.20;

        console.log(importeBloque1);
        console.log(importeBloque2);

    }

    if (mtsCubicos > 70)
    {
        console.log(`Estoy entrando por el bloque 3`);

        importeBloque1 = 50 * 350.00;
        importeBloque2 = 20 * 555.20;

        importeBloque3 = (mtsCubicos - 70) * 1552.20;

        console.log(importeBloque1);
        console.log(importeBloque2);
        console.log(importeBloque3);

    }

    importeBase = importeBloque1 + importeBloque2 + importeBloque3  

    return importeBase;

};


/* Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el
Importe Base de una factura de "Servicios Públicos de
Aguas de Catamarca" y a partir de ese importe base
calcule y devuelva la Tasa de Subsuelo, que es un importe
que corresponde al 3% del importe Base ingresado como
parámetro de la arrow function.

    NOTA: Debe devolver un numero
*/

export const tasaSubsuelo = (importeBase)=>{
    let tasaSubsuelo = (importeBase * 3) / 100;

    return tasaSubsuelo;
}

/* Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el
Importe Base de una factura de "Servicios Públicos de 
Aguas de Catamarca" y a partir de ese importe base calcule
y devuelva la Tasa de Fiscalizacion ENRE (Ente Regulador
de Servicios Públicos) que corresponde al 1.2% del importe
Base ingresado como parámetro de la arrow function.

NOTA: Debe devolver un número.
*/

export const tasaFiscalizacionENRE = (importeBase)=>{
    let tasaFiscalizacion = (importeBase * 1.2) / 100;

    return tasaFiscalizacion;
}

/* Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y
determiar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para
el cálculo.

1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
        a) Tipo 1
        b) Tipo 2

Para Tipo 1: El cálculo es el 50% del Peso corporal del
paciente + el 50% del nivel de glucosa en sangre, este
último termino solamente si la glucosa es mayor a 180.

Para Tipo 2: El cálculo es el 20% del Peso corporal del
paciente + el 50% del nivel de glucosa en sangre, este
último término solamente si la glucosa es mayor a 180.

La función debe retornar la dosis de insulina recomendada
y recibir como parámetros de entrada (argumentos) nivel
de glucosa, peso corporal y tipo de diabetes.

Salidas de la aplicación: la aplicación debe indicar la
insulina recomendada para el paciente.
*/

export const dosisInsulinaRecomendada = (glucosaSangre, pesoCorporal, tipo)=>{

    let dosisInsulinaRecomendada = 0;

    // elegimos el tipo para poder continuar con las operaciones correspondientes en cada caso //
    switch(tipo)
    {
        case 1:
            {
                if (glucosaSangre > 180){
                    dosisInsulinaRecomendada = (pesoCorporal / 2) + (glucosaSangre / 2);
                } else {
                    dosisInsulinaRecomendada = (pesoCorporal / 2) + glucosaSangre; 
                }

                break;
            }
        
        case 2:
            {
                if (glucosaSangre > 180){
                    dosisInsulinaRecomendada = ((pesoCorporal * 20) / 100) + (glucosaSangre / 2);
                } else {
                    dosisInsulinaRecomendada = ((pesoCorporal * 20) / 100) + glucosaSangre;
                    break;
                }
            }
    }

    return dosisInsulinaRecomendada;

}

/* Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una
cadena de texto y que devuelva la cantidad de vocales
"mayúsculas y/o minúsculas" que tiene la misma.

Debe recorrer la cadena con un ciclo for, desde el primer
carácter hasta el último, analizar cada uno de los 
caracteres y determinar si es una vocal o no. No debe
utulizar métodos strings como replace(), split() ó
expresiones regulares.

NOTA: Debe devolver un número.
*/

export const contadorVocales = (texto)=>{
        {

            let cantidadVocales = 0;
            for(let i = 0; i < texto.length;i++)
            {
                // recorrido se produce aqui dentro //
        
                // extraigo el caracter que está en la posicion "i" //
                let caracter = texto[i];
                
                // con el if agrego la condicion para que cuente las vocales //
                if((caracter.toUpperCase() === 'A')||(caracter.toUpperCase() === 'E')||(caracter.toUpperCase() === 'I')||(caracter.toUpperCase() === 'O')||(caracter.toUpperCase() === 'U'))
        
                    //un error que se tuvo con el if de arriba y que se trato de resolver por un buen tiempo aprox 30 min, en el cual contabilizaba cada letra en lugar de cada vocal, resulto que solo habia que evitar poner ; al final del if. Esto aplica para todos los if
                
                {
                    cantidadVocales = cantidadVocales + 1;
                }
        
            }
        
            return cantidadVocales;
        }

}

/* Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro
una cadena de texto y devuelva cuántas consonantes
contiene (mayúsculas o minúsculas). Es decir consideramos
consonante a todo carácter que NO SEA VOCAL.

Debe recorrer la cadena con un ciclo for, analizar cada
carácter y determinar si es una letra que no sea vocal.

No debe utilizar métodos de strings como replace(),
split() o expresiones regulares.

NOTA: Debe devolver un número.
*/

export const contadorConsonantes = (texto)=>{
    {

        let cantidadConsonantes = 0;
        for(let i = 0; i < texto.length;i++)
        {
            // recorrido se produce aqui dentro //
    
            // extraigo el caracter que está en la posicion "i" //
            let caracter = texto[i];
            
            // agrego la condicion para que solo se cuenten las consonantes, tuve que cambiar el or por el & sino como probe, me cuenta todas las letras y espacios debido a las condiciones impuestas //
            if((caracter.toUpperCase() !== 'A')&&(caracter.toUpperCase() !== 'E')&&(caracter.toUpperCase() !== 'I')&&(caracter.toUpperCase() !== 'O')&&(caracter.toUpperCase() !== 'U')&&(caracter !== ' '))
    
               
            {
                cantidadConsonantes = cantidadConsonantes + 1;
            } 
    
        }
    
        return cantidadConsonantes;
    }
}

/* Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y
determine si contiene al menos dos letras "s" (mayúsculas
o minúsculas).

La función debe recorrer la palabra con un ciclo for,
utilizando un contador o una bandera booleana.

Debe devolver true si se cumplen dos apariciones y false
en caso contrario.

No puede utilizar métodos como includes() o indexOf().

NOTA: Debe devolver un boolean (true ó false).
*/

export const dobleS = (texto)=>{
    {

        let cantidadS = 0;
        for(let i = 0; i < texto.length;i++)
        {
            // recorrido se produce aqui dentro //
    
            // extraigo el caracter que está en la posicion "i" //
            let caracter = texto[i];
            
            if((caracter.toUpperCase() === 'S'))
    
            {
                cantidadS = cantidadS + 1;
            }
        }

        // Se sale del ciclo for para contar el acumulado de letras "S" que hay en el texto //

        // De acuerdo a la cantidad se dira si es true o false el que haya mas de dos letras "S" //
        if(cantidadS === 2) {

            return true;

        } else {

            return false;
        }

    }

}

/*Ejercicio Nro. 24:
Definir una arrow funcion que reciba como parámetro una
cadena de texto y determine si la misma contiene al menos
tres espacios en blanco.

La función debe recorrer la cadena carácter por carácter 
utilizando un ciclo for.

Durante el recorrido, deberá contar la cantidad de
espacios que se encuentren.

En el momento en que se detecte el tercer espacio en
blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instruccion break y devolver el valor
lógico true.

Si al finalizar el recorrido completo no se encontraron
tres espcacios, la función debe devolver false.

NOTA: Debe devolver un boolean (true ó false).
*/

export const limitador3Espacio = (texto)=>{
    {

        let espacios = 0;
        for(let i = 0; i < texto.length;i++)
        {
            // recorrido se produce aqui dentro //
    
            // extraigo el caracter que está en la posicion "i" //
            let caracter = texto[i];
            
            if((caracter === ' ')){
            // Se contabiliza los espacios y en caso de ser 3 o mas (no creo que haga falta poner >= pero es mas corto que ===) se produce el break //
                espacios = espacios + 1;

            } if (espacios >= 3) {

                break;
            }
        }

        // En base a la variable espacios manda el return el valor booleano true ó false de acuerdo al texto //
        if(espacios === 3) {

            return true;

        } else {

            return false;
        }

    }
}

/*Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una
cadena de texto y determine si la misma no contiene
ningún dígito numérico (del 0 al 9).

La función debe recorrer la cadena carácter por carácter
utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del
rango de los números '0' a '9'.

Si se detecta algún número, se debe interrumpir 
inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la
condición "no contiene números".

En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.

NOTA: Debe devolver un boolean (true ó false).
*/


export const detectarNumero = (texto) => {
    let contieneNumero = false;

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        // Verificamos si el caracter es un dígito entre 0 y 9
        if (caracter >= "0" && caracter <= "9") {
            contieneNumero = true;
            break;
        }
    }

    return !contieneNumero;
}
