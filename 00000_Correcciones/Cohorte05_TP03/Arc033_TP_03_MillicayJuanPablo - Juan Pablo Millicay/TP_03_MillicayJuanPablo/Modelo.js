// Contiene todas las funciones (arrow functions) exportadas para usar en Controlador.js

/******************************************************************/

/*// Ejercicio Nro. 13 - precioVenta*/
export const precioVenta = (importeCompra, margenGanancia) => {
  //si no se envian parametros las variables asumen el valor 0
  let importe = Number(importeCompra) || 0;
  let margen = Number(margenGanancia) || 0;

  //Calculo el % de ganancia
  let porcentajeGanancia = (importe * margen) / 100;

  //Al precio final le sumo el % de ganancia
  let precioVenta = importe + porcentajeGanancia;

  //Retorna el Precio de Venta
  return precioVenta.toFixed(2);
};

/*****************************************************************/

/*// Ejercicio Nro. 14 - promedio de 3 notas*/
export const promedioNotas = (nota1, nota2, nota3) => {
  //si no se envian parametros las variables asumen el valor 0
  let a = Number(nota1) || 0;
  let b = Number(nota2) || 0;
  let c = Number(nota3) || 0;

  //Retorna el promedio
  return ((a + b + c) / 3).toFixed(2);
};

/******************************************************************/

/*// Ejercicio Nro. 15 - evaluar nota*/
export const evaluarNota = (notaPromedio) => {
  //recibe valor de nota
  let promedio = Number(notaPromedio);

  // isNaN es una función que se utiliza para comprobar si un valor no es un número válido
  if (isNaN(promedio)) return 'Dato inválido';
  if (promedio <= 4) return 'Desaprobado';
  if (promedio > 4 && promedio <= 7) return 'Aprobado';
  if (promedio > 7 && promedio <= 9) return 'Muy Bueno';
  if (promedio === 10) return 'Excelente';
  // Si es 9 < p < 10 (ej 9.5) lo consideramos Muy Bueno según enunciado
  if (promedio > 9 && promedio < 10) return 'Muy Bueno';
  return 'Valor fuera de rango';
};

/*******************************************************************/

/*// Ejercicio Nro. 16 - calcular sobre tasa según tipo (‰ -> por mil)*/
export const calcularSobreTasaBebida = (importeBase, tipo) => {
  let tasa = 0;

  switch (tipo) {
    case 1: // Agua plástico
      tasa = 5;    // % (por mil)
      break;
    case 2: // Agua retornable
      tasa = 1;
      break;
    case 3: // Gaseosa plástica
      tasa = 7;
      break;
    case 4: // Gaseosa retornable
      tasa = 2;
      break;
    case 5: // Energéticas
      tasa = 15;
      break;
    default: // Cualquier otra bebida
      tasa = 1;
      break;
  }
  // Cálculo de la sobre tasa (por mil)
  const sobreTasa = (importeBase * tasa) / 1000;

  return sobreTasa.toFixed(2); // devuelve un número
};

/*******************************************************************/

// Ejercicio Nro. 17 - calcular importe agua por bloques
export const calcularImporteAgua = (m3) => {
  // Mínimo facturable
  if (m3 < 50) {
    m3 = 50;
  }

  let importe = 0;

  // Bloque 1 → hasta 50
  if (m3 <= 50) {
    importe = m3 * 350;
  }
  // Bloque 2 → 51 a 70
  else if (m3 <= 70) {
    const bloque1 = 50 * 350;
    const bloque2 = (m3 - 50) * 555.20;
    importe = bloque1 + bloque2;
  }
  // Bloque 3 → más de 70
  else {
    const bloque1 = 50 * 350;
    const bloque2 = 20 * 555.20;     // Bloque completo 51–70
    const bloque3 = (m3 - 70) * 1552.20;
    importe = bloque1 + bloque2 + bloque3;
  }

  return importe.toFixed(2); // devuelve número
};


/*******************************************************************/

// Ejercicio Nro. 18 - tasa subsuelo 3%
export const tasaSubsuelo = (importeBase) => {
  //si no se envian parametro la variable asume el valor 0
  let importe = Number(importeBase) || 0;
  return (importe * 0.03).toFixed(2);
};

/*******************************************************************/

// Ejercicio Nro. 19 - tasa ENRE 1.2%
export const tasaENRE = (importeBase) => {
  //si no se envian parametro la variable asume el valor 0
  let importe = Number(importeBase) || 0;
  return (importe * 0.012).toFixed(2);
};

/*******************************************************************/

// Ejercicio Nro. 20 - dosis de insulina
export const dosisInsulina = (glucosa, peso, tipo) => {
  let dosis = 0;

  if (tipo === 1) {
    // Tipo 1 → 50% del peso
    dosis = peso * 0.5;

    // + 50% de la glucosa solo si > 180
    if (glucosa > 180) {
      dosis += glucosa * 0.5;
    }
  }
  else if (tipo === 2) {
    // Tipo 2 → 20% del peso
    dosis = peso * 0.2;

    // + 50% de la glucosa solo si > 180
    if (glucosa > 180) {
      dosis += glucosa * 0.5;
    }
  }
  return dosis;
};


/*******************************************************************/

// Ejercicio Nro. 21: contar vocales sin usar split/replace/regex
export const contarVocales = (cadenaVocales) => {
  let contador = 0;
  // lista de vocales para comparar
  const vocales = 'aeiouAEIOU';
  //Recorre la cadena
  for (let i = 0; i < cadenaVocales.length; i++) {
    let caracter = cadenaVocales[i];

    // Recorre la lista de vocales para verificar si coincide
    for (let j = 0; j < vocales.length; j++) {
      if (caracter === vocales[j]) {
        contador++;
      }
    }
  }
  return contador;
};

/*******************************************************************/

// Ej.22 - contar consonantes (letras que no sean vocales). Ignora otros caracteres.
export const contarConsonantes = (cadenaConsonates) => {
  let contador = 0;
  //recorre la cadena carácter por carácter
  for (let i = 0; i < cadenaConsonates.length; i++) {
    let c = cadenaConsonates[i];
    let letra = c.toLowerCase();
    // 1. Verificar si es letra (a-z) - letra entre 'a' (97) y 'z' (122)
    if (letra >= 'a' && letra <= 'z') {
      // 2. Verificar si NO es vocal
      if (
        letra !== 'a' &&
        letra !== 'e' &&
        letra !== 'i' &&
        letra !== 'o' &&
        letra !== 'u'
      ) {
        contador++;
      }
    }
  }
  return contador;
};

/*******************************************************************/
// Ej.23 - contiene al menos 2 letras 's' (mayus/minus) - no usar includes/indexOf
export const tieneDosS = (cadenaLetras) => {
  let s = String(cadenaLetras);
  let contador = 0;
  //Recorre la cadena
  for (let i = 0; i < s.length; i++) {
    //convierte a minuscula los caractres
    let ch = s[i].toLowerCase();
    if (ch === 's') {
      contador++;
      if (contador >= 2) return true;
    }
  }
  return false;
};

/*******************************************************************/

// Ej.24 - contiene al menos 3 espacios (romper con break al 3)
export const tieneTresEspacios = (cadenaEspacios) => {
  let s = String(cadenaEspacios);
  let espacios = 0;
  //Recorre la cadena
  for (let i = 0; i < s.length; i++) {
    //Comprueba si es un espacio
    if (s[i] === ' ') {
      espacios++;
      //comprueba cantidad de espacios
      if (espacios === 3) {
        return true;
      }
    }
  }
  return false;
};

/*******************************************************************/

// Ej.25 - determina si no contiene dígitos (0-9). Si encuentra un dígito devuelve false (break)
export const sinDigitos = (cadenaSinDigitos) => {
  const s = String(cadenaSinDigitos);
  let sinNumeros = true; // asumimos que no hay dígitos

  //Recorre la cadena
  for (let i = 0; i < s.length; i++) {
    //charCodeAt() es un método que devuelve el valor Unicode (como un número entero)
    const code = s[i].charCodeAt(0);
    //códigos ASCII para los números del 0 al 9
    if (code >= 48 && code <= 57) {
      sinNumeros = false; // encontramos un dígito
      break; // salimos del for
    }
  }
  return sinNumeros;
};
