// Ejercicio 13
export const calcularPrecioVenta = (importeCompra, margenGanancia) => 
  importeCompra + (importeCompra * margenGanancia / 100);

// Ejercicio 14
export const calcularPromedioNotas = (n1, n2, n3) => 
  (n1 + n2 + n3) / 3;

// Ejercicio 15
export const evaluarNota = (nota) => {
  if (nota <= 4) return "Desaprobado";
  if (nota <= 7) return "Aprobado";
  if (nota <= 9) return "Muy Bueno";
  if (nota === 10) return "Excelente";
};

// Ejercicio 16
export const calcularSobreTasa = (importeBase, tipoBebida) => {
  const tasas = {
    1: 0.005,
    2: 0.001,
    3: 0.007,
    4: 0.002,
    5: 0.015,
    6: 0.001
  };
  return importeBase * (tasas[tipoBebida] || tasas[6]);
};

// Ejercicio 17
export const calcularImporteAgua = (consumo) => {
  const bloque1 = 50;
  const bloque2 = 20;
  const tarifa1 = 350;
  const tarifa2 = 555.2;
  const tarifa3 = 1552.2;

  let total = 0;
  if (consumo <= bloque1) {
    total = bloque1 * tarifa1;
  } else if (consumo <= bloque1 + bloque2) {
    total = bloque1 * tarifa1 + (consumo - bloque1) * tarifa2;
  } else {
    total = bloque1 * tarifa1 + bloque2 * tarifa2 + (consumo - bloque1 - bloque2) * tarifa3;
  }
  return total;
};

// Ejercicio 18
export const calcularTasaSubsuelo = (importeBase) => 
  importeBase * 0.03;

// Ejercicio 19
export const calcularTasaFiscalizacion = (importeBase) => 
  importeBase * 0.012;

// Ejercicio 20
export const calcularDosisInsulina = (glucosa, peso, tipo) => {
  let dosis = 0;
  if (tipo === 1) {
    dosis = peso * 0.5 + (glucosa > 180 ? glucosa * 0.5 : 0);
  } else if (tipo === 2) {
    dosis = peso * 0.2 + (glucosa > 180 ? glucosa * 0.5 : 0);
  }
  return dosis;
};

// Ejercicio 21
export const contarVocales = (cadena) => {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) contador++;
  }
  return contador;
};

// Ejercicio 22
export const contarConsonantes = (cadena) => {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    const c = cadena[i];
    if (/[a-zA-Z]/.test(c) && !vocales.includes(c)) contador++;
  }
  return contador;
};

// Ejercicio 23
export const contieneDosS = (palabra) => {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === 's' || palabra[i] === 'S') contador++;
    if (contador === 2) return true;
  }
  return false;
};

// Ejercicio 24
export const contieneTresEspacios = (cadena) => {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === ' ') contador++;
    if (contador === 3) return true;
  }
  return false;
};

// Ejercicio 25
export const noContieneNumeros = (cadena) => {
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] >= '0' && cadena[i] <= '9') return false;
  }
  return true;
};