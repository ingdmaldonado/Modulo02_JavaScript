/** 
    Ejercicio Nro. 13:
    ________________________________________
    Realizar una arrow function que reciba dos 
    parámetros de entrada. El parámetro 1 será el 
    importe de compra de un producto, el segundo 
    será el margen de recargo que se aplicará sobre 
    ese producto, la función debe retornar el precio 
    de venta que será igual a aplicarle el % de 
    margen de recargo. La función debe retornar el 
    precio de venta (sin impuestos).
    Nota: Debe devolver un número
    ---------------------------
    margen de recargo: porcentaje que se agrega al 
    costo de un producto para determinar su precio 
    de venta, antes de impuestos o descuentos.
*/

export const precioVenta = (importeCompra, margenGanancia) => {
  let resultado = 0;
  let recargo = 0;

  /**
      return `Error. Tanto el Importe de Compra como el Margen 
      de Ganancia deben ser mayores a 0`;
  */
  if (importeCompra <= 0 || margenGanancia <= 0) { return -1; }
  else {
    // se calcula el recargo o impuesto
    recargo = (importeCompra * margenGanancia) / 100;
    // se suma al importe inicial
    resultado = importeCompra + recargo;

    return resultado;
  }
};

/**
    Ejercicio Nro. 14: 
    ________________________________________
    Realizar una arrow function que reciba como 
    parámetro las 3 notas que obtuvo un alumno en 
    los distintos trabajos prácticos de una materia 
    y que a partir de esas notas obtenga el promedio 
    de las mismas. 
    Nota: Debe devolver un número 
*/
export const promedioNotas = (nota1, nota2, nota3) => {
  let promedio = 0;

  promedio = (nota1 + nota2 + nota3) / 3;

  return promedio;
};

/** 
   Ejercicio Nro. 15: 
   ____________________________________
    Realizar una arrow function que reciba como 
    parámetro una nota promedio y que según la 
    nota recibida como parámetro devuelva un texto 
    que diga los siguientes mensajes. 
        • Si la nota <= 4 debe devolver “Desaprobado” 
        • Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
        • Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
        • Si la nota = 10 debe devolver “Excelente” 
    Nota: Debe Devolver un Texto
*/

export const promedioFinal = (promedio) => {

  if ((promedio < 0) || (promedio > 10)) { return `Error`; }

  if (promedio <= 4) { return `Desaprobado`; }

  if ((promedio > 4) && (promedio <= 7)) { return `Aprobado`; }

  if ((promedio > 7) && (promedio <= 9)) { return `Muy Bueno`; }

  if ((promedio > 9) && (promedio < 10)) { return `Distinguido`; }

  if (promedio === 10) { return `Excelente`; }
};

/** 
    Ejercicio Nro. 16: 
    _____________________________________
    El Gobierno Nacional desea aplicar un impuesto 
    (Sobre Tasa o recargo) a las bebidas en función de la 
    siguiente clasificación y tipo. 
       1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)         
       2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
       3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
       4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
       5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
       6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
    La función debe recibir el Importe Base de la Bebida, debe calcular y 
    retornar la sobre Tasa, la recaudación de ese impuesto tendrá destino 
    a la protección del medio ambiente. 

    Nota: Debe devolver un número
    -----------------------------
    sobretasa = recargo 
*/

export const calculoSobreTasa = (importeBase, tipo) => {
  let recargo = 0;
  let tasaDeSubsuelo = 0;

  switch (tipo) {
    case 1: {
      console.log(`Bebidas Agua en envases plásticos`);
      recargo = (importeBase * 5) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
    case 2: {
      console.log(` Bebidas Agua en envases retornables`);
      recargo = (importeBase * 1) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
    case 3: {
      console.log(`Bebidas Gaseosas Azucaradas en envases plásticos`);
      recargo = (importeBase * 7) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
    case 4: {
      console.log(`Bebidas Gaseosas Azucaradas en envases plásticos`);
      recargo = (importeBase * 2) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
    case 5: {
      console.log(`Bebidas Energéticas`);
      recargo = (importeBase * 15) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
    default: {
      console.log(`Cualquier otra bebida no clasificada`);
      recargo = (importeBase * 1) / 1000;
      //tasaDeSubsuelo = importeBase + recargo;
      break;
    }
  }

  return recargo;
};

/**
    Ejercicio Nro. 17: 
    _______________________________________________
    Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" 
    utiliza un esquema de facturación por bloques de consumo, donde el precio 
    por metro cúbico aumenta a medida que el usuario consume más. Este tipo 
    de sistema se aplica con el objetivo de promover el uso responsable del 
    recurso y penalizar el consumo excesivo.
    
    El cálculo del importe base se realiza a partir de los metros cúbicos 
    leídos en el medidor del cliente. Para ello, la empresa define tres 
    bloques de facturación. 

    - El primer bloque corresponde a los primeros 50 metros cúbicos, que 
    se facturan a razón de 350 pesos por metro cúbico. 
    
    - El segundo bloque comprende los siguientes 20 metros cúbicos, es decir, 
    desde el metro cúbico número 51 hasta el 70, los cuales se facturan a 
    un valor de 555,20 pesos por metro cúbico. 
    
    - Finalmente, todo consumo que supere los 70 metros cúbicos se considera 
    dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 
    pesos por metro cúbico.

    Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 
    50 metros cúbicos igualmente abonan un mínimo de 50 metros cúbicos, 
    de modo que ese sea el valor base de cálculo.

    La tarea consiste en definir una arrow function llamada calcularImporteAgua 
    que reciba como parámetro el total de metros cúbicos leídos y devuelva 
    el importe base a pagar por el cliente según el esquema tarifario 
    antes descripto.

    Consumo (m³)  |  Cálculo aplicado                                  |  Importe final ($) |
    --------------|----------------------------------------------------|--------------------|
     30           |  50 × 350,00                                       |  17.500,00         |
     55           |  (50 × 350,00) + (5 × 555,20)                      |  20.276,00         |  
     85           |  (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20)   |  51.887,00         |
    ----------------------------------------------------------------------------------------|

    Nota: Debe devolver un número

*/

export const calcularImporteAgua = (consumo) => {
  let importeAPagar = 0;
  let primerBloque = 50 * 350.0;
  let excedente = 0;
  let segundoBloque = 0;
  let tercerBloque = 0;

  if (consumo <= 50) {
    importeAPagar = primerBloque;
  } else {
    if (consumo > 50 && consumo <= 70) {
      // se calcula el excedente para el segundo bloque
      excedente = consumo - 50;
      // se calcula el valor del segundo bloque
      segundoBloque = excedente * 555.2;
      importeAPagar = primerBloque + segundoBloque;
    }
    if (consumo > 70) {
      // resto los 50, y luego los 20.
      excedente = consumo - 70;
      // calculo el segundo bloque, con los 20m3
      segundoBloque = 20 * 555.2;
      // calculo el tercer bloque con el excedente
      tercerBloque = excedente * 1552.2;
      importeAPagar = primerBloque + segundoBloque + tercerBloque;
    }
  }
  return importeAPagar;
};

/** 
    Ejercicio Nro. 18: 
    _____________________________________________
    Realizar una arrow function que reciba como parámetro el 
    Importe Base de una factura de “Servicios Públicos de Aguas 
    de Catamarca” y a partir de ese importe base calcule y 
    devuelva la Tasa de Subsuelo, que es un importe que corresponde 
    al 3% del importe Base ingresado como parámetro de la arrow function. 
    
    Nota: Debe devolver un número
*/
export const calculoTasaDeSubsuelo = (importeBase) => {
  let recargo = 0;
  // let tasaDeSubsuelo = 0;

  if (importeBase > 0) {
    recargo = (importeBase * 3) / 100;
    //tasaDeSubsuelo = importeBase + recargo;

    return recargo;
  }
  else { return -1; }
};

/** 
    Ejercicio Nro. 19: 
    _____________________________________________
    Realizar una arrow function que reciba como parámetro el 
    Importe Base de una factura de “Servicios Públicos de Aguas 
    de Catamarca” y partir de ese importe base calcule y devuelva 
    la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos) 
    que corresponde al 1,2 % del importe Base ingresado como 
    parámetro de la arrow function. 

    Nota: Debe devolver un número
*/

export const calculoENRE = (importeBase) => {
  //let tasaENRE = 0;
  let recargo = 0;

  if (importeBase > 0) {
    recargo = (importeBase * 1.2) / 100;
    //tasaENRE = importeBase + recargo;

    return recargo;
  }
  else { return -1; }
};

/** 
    Ejercicio Nro. 20: 
    _________________________________________
    Realizar una aplicación web que permita calcular y determinar 
    la dosis de insulina recomendada para un paciente diabético; 
    Basada en tres datos importantes para el cálculo. 
    
        1) Nivel de glucosa en sangre 
        2) Peso Corporal (en kilogramos) 
        3) Tipo de diabetes 
            a. Tipo1
            b. Tipo 2 
    
    Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente
    + el 50% del nivel de glucosa en sangre, este último término 
    solamente si la glucosa es mayor a 180. 
    
    Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente 
    + el 50% del nivel de glucosa en sangre, este último término 
    solamente si la glucosa es mayor a  180. 
    
    La función debe retornar la dosis de insulina recomendada y recibir 
    como parámetros de entrada (argumentos) nivel de glucosa, peso corporal
    y tipo de diabetes.  
    
    Salidas de la aplicación: la aplicación debe indicar la insulina 
    recomendada para el paciente.
        
*/

export const dosisDeInsulina = (nivelGlucosa, pesoCorporal, tipo) => {
  let calculoDosis = 0;

  switch (tipo) {
    case 1: {
      //console.log(`Diabetes Tipo 1 `);
      if (nivelGlucosa > 180) {
        calculoDosis = (pesoCorporal * 50) / 100 + (nivelGlucosa * 50) / 100;
        break;
      } else {
        calculoDosis = (pesoCorporal * 50) / 100;
        break;
      }
    }
    case 2: {
      // console.log(`Diabetes Tipo 2`);
      if (nivelGlucosa > 180) {
        calculoDosis = (pesoCorporal * 20) / 100 + (nivelGlucosa * 50) / 100;
        break;
      } else {
        calculoDosis = (pesoCorporal * 20) / 100;
        break;
      }
    }
    default: {
      calculoDosis = -1;
      break;
    }
  }
  return calculoDosis;
};

/** 
    Ejercicio Nro. 21: 
    ______________________________________
    Realizar una arrow function que reciba como parámetro una 
    cadena de texto y que devuelva la cantidad de vocales 
    “mayúsculas y/o minúsculas” que tiene la misma.  
    
    Debe recorrer la cadena con un ciclo for, desde el primer 
    carácter hasta el último, analizar cada uno de los caracteres 
    y determinar si es una vocal o no. 
    
    No debe utilizar métodos de strings como replace(), split() 
    o expresiones regulares. 

    Nota: Debe devolver un número.
*/

export const cantidadVocales = (cadena) => {
  let vocales = 0;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.toLowerCase().charAt(i);
    //console.log(caracter);

    if (
      caracter === `a` ||
      caracter === `e` ||
      caracter === `i` ||
      caracter === `o` ||
      caracter === `u`
    ) {
      vocales = vocales + 1;
    }
  }
  return vocales;
};

/** 
    Ejercicio Nro. 22: 
    __________________________________________
    Realizar una arrow function que reciba como parámetro una 
    cadena de texto y devuelva cuántas consonantes contiene 
    (mayúsculas o minúsculas). Es decir, consideramos consonante 
    a todo carácter que NO SEA VOCAL. 
    
    Debe recorrer la cadena con un ciclo for, analizar cada carácter 
    y determinar si es una letra que no sea vocal. 
    
    No debe utilizar métodos de strings como replace(), split() o 
    expresiones regulares. 
    
    Nota: Debe devolver un número
*/

export const cantidadNoVocales = (cadena) => {
  let consonantes = 0;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.toLowerCase().charAt(i);
    //console.log(caracter);

    // se determina si es una letra y no un caracter especial
    if (caracter >= "a" && caracter <= "z") {
      // se determina que no es ninguna vocal
      if (
        caracter !== `a` &&
        caracter !== `e` &&
        caracter !== `i` &&
        caracter !== `o` &&
        caracter !== `u`
      ) {
        consonantes = consonantes + 1;
      }
    }
  }
  return consonantes;
};

/**
    Ejercicio Nro. 23: 
    ________________________________________
    Definir una arrow function que reciba una palabra y determine 
    si contiene al menos dos letras “s” (mayúsculas o minúsculas). 
    La función debe recorrer la palabra con un ciclo for, utilizando 
    un contador o una bandera booleana. 

    Debe devolver true si se cumplen las dos apariciones y false en 
    caso contrario.
    
    No puede utilizar métodos como includes() o indexOf(). 
    
    Nota: Debe devolver un boolean (true ó false). 

*/
export const letra_S = (cadena) => {
  let cantidad_S = 0;

  let bandera = false;
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.toLowerCase().charAt(i);

    if (caracter >= "a" && caracter <= "z") {
      if (caracter === `s`) {
        cantidad_S = cantidad_S + 1;
      }
      if (cantidad_S === 2) {
        bandera = true;
        break;
      }
    }
  }

  return bandera;
};

/** 
    Ejercicio Nro. 24: 
    _________________________________
    Definir una arrow function que reciba como parámetro una 
    cadena de texto y determine si la misma contiene al menos 
    tres espacios en blanco. 
    
    La función debe recorrer la cadena carácter por carácter 
    utilizando un ciclo for.

    Durante el recorrido, deberá contar la cantidad de espacios 
    que se encuentren. 
    
    En el momento en que se detecte el tercer espacio en blanco, 
    la función debe interrumpir inmediatamente el ciclo mediante 
    la instrucción break y devolver el valor lógico true. 
    
    Si al finalizar el recorrido completo no se encontraron tres 
    espacios, la función debe devolver false. 
    
    Nota: Debe devolver un boolean (true ó false).
*/

export const espacioEnBlanco = (cadena) => {
  let cantidadEspacios = 0;

  // bandera
  let espacioBlanco = false;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i);
    //console.log(caracter);

    if (caracter === ` `) {
      cantidadEspacios = cantidadEspacios + 1;
    }

    if (cantidadEspacios >= 3) {
      espacioBlanco = true;
      break;
    }
  }
  return espacioBlanco;
};

/** 
    //*Ejercicio Nro. 25: 
    ________________________________________
    Definir una arrow function que reciba como parámetro una cadena de texto 
    y determine si la misma no contiene ningún dígito numérico (del 0 al 9). 
    
    La función debe recorrer la cadena carácter por carácter utilizando un 
    ciclo for. Durante el recorrido, analizar cada carácter y comprobar si se 
    encuentra dentro del rango de los números '0' a '9'. 
    
    Si se detecta algún número, se debe interrumpir inmediatamente el bucle con 
    break y devolver el valor lógico false, ya que la cadena deja de cumplir la 
    condición “no contiene números”. 
    
    En caso de recorrer la cadena completa sin encontrar ningún número, la función 
    deberá devolver true. 
    
    Nota: Debe devolver un boolean (true ó false). 
*/

export const digitoNumerico = (cadena) => {
  let hayUnNro = true;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i);
    //console.log(caracter);

    if (caracter >= `0` && caracter <= `9`) {
      hayUnNro = false;
      break;
    }
  }
  return hayUnNro;
};
