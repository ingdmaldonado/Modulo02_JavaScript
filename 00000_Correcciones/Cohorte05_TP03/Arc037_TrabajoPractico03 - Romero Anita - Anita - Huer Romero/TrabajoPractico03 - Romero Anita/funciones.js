
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
  // Validamos que ambos valores sean números válidos
  if (isNaN(precioCosto) || isNaN(margen)) {
    return "Error: ambos valores deben ser numéricos.";
  }

  // Validar que no sean cero ni negativos
  if (precioCosto <= 0 || margen <= 0) {
    return "Error: el precio de costo y el margen deben ser mayores que cero.";
  }

  // Calcular el porcentaje de ganancia
  const calculo = (precioCosto * margen) / 100;

  // Sumar el margen al costo para obtener el precio final
  const precioFinal = precioCosto + calculo;

  // Retornar el resultado final
  return precioFinal;
};

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
  // Validar que las tres notas sean números
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    return "Error: todas las notas deben ser numéricas.";
  }

  // Validar que estén dentro del rango válido (0 a 10)
  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    return "Error: las notas deben estar entre 0 y 10.";
  }

  // Calcular el promedio
  const promedio = (nota1 + nota2 + nota3) / 3;

  // Retornar el resultado
  return promedio;
};

/*
Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto
*/

export const evaluarNota = (nota) => {
  // Validamos que sea un número válido
  if (isNaN(nota)) {
    return "Error: la nota debe ser numérica.";
  }

  // Validamos rango válido (0 a 10)
  if (nota < 0 || nota > 10) {
    return "Error: la nota debe estar entre 0 y 10.";
  }

  // Lógica de evaluación
  if (nota <= 4){
    return "Desaprobado";
  } 
  else if (nota > 4 && nota <= 7){
    return "Aprobado";
  } 
  else if (nota > 7 && nota <= 9){
    return "Muy Bueno";
  } 
  else{
    return "Excelente";
  } 
};

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

export const calcularSobreTasaBebida = (importe, tipo) => {
  // Validar que los valores sean numéricos
  if (isNaN(importe) || isNaN(tipo)) {
    return "Error: el importe y el tipo deben ser numéricos.";
  }

  // Validar que el importe sea positivo
  if (importe <= 0) {
    return "Error: el importe debe ser mayor que cero.";
  }

  // Definimos las tasas en ‰ (por mil)
  const tasas = {
    1: 5,
    2: 1,
    3: 7,
    4: 2,
    5: 15,
    6: 1
  };

  // Si el tipo no está definido, se usa 1‰ por defecto
  const tasa = tasas[tipo] || 1;

  // Cálculo de la sobre tasa
  const sobreTasa = (importe * tasa) / 1000;

  return sobreTasa;
};

/*
Ejercicio Nro. 17:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
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
Consumo (m³) Cálculo aplicado Importe final ($)
30 50 × 350,00 17.500,00
55 (50 × 350,00) + (5 × 555,20) 20.276,00
85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00
Nota: Debe devolver un número 
*/

export const calcularImporteAgua = (m3) => {
  // Validar que el valor ingresado sea numérico
  if (isNaN(m3)) {
    return "Error: el valor ingresado debe ser numérico.";
  }

  // Validar que no sea negativo
  if (m3 < 0) {
    return "Error: el consumo no puede ser negativo.";
  }

  // Definición de precios por bloque
  const minimo = 50;
  const p1 = 350;     // hasta 50 m³
  const p2 = 555.20;  // de 51 a 70 m³
  const p3 = 1552.20; // más de 70 m³

  // Si el consumo es menor al mínimo, se factura el mínimo
  let consumo;
  if (m3 < minimo) {
    consumo = minimo; // si consumió menos de 50, se cobra 50
  } else {
    consumo = m3; // si consumió 50 o más, se cobra lo real
  }

   let total = 0;

  // Cálculo por bloques
  if (consumo <= 50) {
    total = consumo * p1;
  } else if (consumo <= 70) {
    total = (50 * p1) + ((consumo - 50) * p2);
  } else {
    total = (50 * p1) + (20 * p2) + ((consumo - 70) * p3);
  }

  // Retornar el importe final
  return total;
};

/*
Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número 
*/

export const calcularTasaSubsuelo = (importe) => {
  // Validar que el importe sea numérico
  if (isNaN(importe)) {
    return "Error: el importe debe ser numérico.";
  }

  // Validar que sea un valor positivo
  if (importe <= 0) {
    return "Error: el importe debe ser mayor que cero.";
  }

  // Calcular el 3% del importe base
  const tasa = importe * 0.03;

  // Retornar el resultado numérico
  return tasa;
};


/*
Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número 
*/

export const calcularTasaENRE = (importe) => {
  // Validar que el importe sea numérico
  if (isNaN(importe)) {
    return "Error: el importe debe ser numérico.";
  }

  // Validar que el importe sea positivo
  if (importe <= 0) {
    return "Error: el importe debe ser mayor que cero.";
  }

  // Calcular el 1,2% del importe base
  const tasa = importe * 0.012;

  // Retornar el valor calculado
  return tasa;
};


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

export const calcularDosisInsulina = (glucosa, peso, tipo) => {
  // Validaciones de tipo
  if (isNaN(glucosa) || isNaN(peso) || isNaN(tipo)) {
    return "Error: los valores de glucosa, peso y tipo deben ser numéricos.";
  }

  // Validaciones de valores lógicos
  if (glucosa <= 0 || peso <= 0) {
    return "Error: los valores de glucosa y peso deben ser mayores que cero.";
  }

  if (tipo !== 1 && tipo !== 2) {
    return "Error: el tipo de diabetes debe ser 1 o 2.";
  }

  let dosis = 0;

  // Cálculo para Tipo 1
  if (tipo === 1) {
    dosis = 0.5 * peso;
    if (glucosa > 180) {
      dosis += 0.5 * glucosa;
    }
  }

  // Cálculo para Tipo 2
  if (tipo === 2) {
    dosis = 0.2 * peso;
    if (glucosa > 180) {
      dosis += 0.5 * glucosa;
    }
  }

  return dosis;
};

/*
Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarVocales = (texto) => {
  // Validar que el parámetro sea una cadena de texto
  if (typeof texto !== "string") {
    return "Error: el parámetro debe ser una cadena de texto.";
  }

  // Definimos las vocales (incluye acentuadas)
  const vocales = "aeiouáéíóú";
  let contador = 0;

  // Recorremos cada carácter del texto
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase(); // convertimos a minúscula
    if (vocales.includes(letra)) {
      contador++; // si es vocal, sumamos 1
    }
  }

  // Devolvemos la cantidad total de vocales
  return contador;
};


/*
Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarConsonantes = (texto) => {
  // Validar que el parámetro sea una cadena
  if (typeof texto !== "string") {
    return "Error: el parámetro debe ser una cadena de texto.";
  }

  // Definimos las consonantes válidas
  const consonantes = "bcdfghjklmnñpqrstvwxyz";
  let contador = 0;

  // Recorremos cada carácter de la cadena
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase(); // convertimos a minúscula
    // Si el carácter está dentro del conjunto de consonantes, sumamos 1
    if (consonantes.includes(letra)) {
      contador++;
    }
  }

  // Retornar la cantidad total de consonantes encontradas
  return contador;
};



/*
Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneDosEss = (palabra) => {
  // Validar que el parámetro sea una cadena
  if (typeof palabra !== "string") {
    console.error("Error: el parámetro debe ser una palabra (texto).");
    return false;
  }

  let contador = 0;

  // Recorremos la palabra letra por letra
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i].toLowerCase();

    // Si encontramos una "s", aumentamos el contador
    if (letra === "s") {
      contador++;
    }

    // Si ya hay dos "s", no hace falta seguir revisando
    if (contador === 2) {
      return true;
    }
  }

  // Si termina el bucle y no se encontraron dos "s", devolvemos false
  return false;
};

/*
Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneTresEspacios = (texto) => {
  // Validar que el parámetro sea una cadena
  if (typeof texto !== "string") {
    console.error("Error: el parámetro debe ser una cadena de texto.");
    return false;
  }

  let contador = 0;
  let encontrado = false; // bandera para saber si encontramos 3 espacios

  // Recorremos cada carácter de la cadena
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
      contador++;
      if (contador === 3) {
        encontrado = true; // marcamos que encontramos 3 espacios
        break;              // interrumpimos el bucle con break
      }
    }
  }

  // Si la bandera es true devolvemos true, sino false
  return encontrado;
};

/*
Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).
*/

export const sinDigitos = (texto) => {
  // Validar que el parámetro sea una cadena
  if (typeof texto !== "string") {
    console.error("Error: el parámetro debe ser una cadena de texto.");
    return false;
  }

  let contieneNumero = false;

  // Recorremos la cadena carácter por carácter
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];

    // Si el carácter está entre '0' y '9', encontramos un número
    if (c >= "0" && c <= "9") {
      contieneNumero = true;
      break; 
    }
  }

  // Si contiene número → false; si no → true
  return !contieneNumero;
};








