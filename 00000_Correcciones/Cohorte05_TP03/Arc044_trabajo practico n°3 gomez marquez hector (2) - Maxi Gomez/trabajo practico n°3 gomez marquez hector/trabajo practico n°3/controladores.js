import {
  calcularPrecioVenta,
  calcularPromedioNotas,
  evaluarNota,
  calcularSobreTasa,
  calcularImporteAgua,
  calcularTasaSubsuelo,
  calcularTasaFiscalizacion,
  calcularDosisInsulina,
  contarVocales,
  contarConsonantes,
  contieneDosS,
  contieneTresEspacios,
  noContieneNumeros
} from './modelo.js';

// Ejemplo de uso en consola (opcional)
console.log("Ejercicio 13:", calcularPrecioVenta(1000, 20)); // 1200
console.log("Ejercicio 14:", calcularPromedioNotas(7, 8, 9)); // 8
console.log("Ejercicio 15:", evaluarNota(9)); // Muy Bueno
console.log("Ejercicio 16:", calcularSobreTasa(1000, 3)); // 7
console.log("Ejercicio 17:", calcularImporteAgua(85)); // 57214
console.log("Ejercicio 18:", calcularTasaSubsuelo(20000)); // 600
console.log("Ejercicio 19:", calcularTasaFiscalizacion(20000)); // 240
console.log("Ejercicio 20:", calcularDosisInsulina(200, 70, 1)); // 135
console.log("Ejercicio 21:", contarVocales("Hola Mundo")); // 4
console.log("Ejercicio 22:", contarConsonantes("Hola Mundo")); // 6
console.log("Ejercicio 23:", contieneDosS("salsa")); // true
console.log("Ejercicio 24:", contieneTresEspacios("uno dos tres cuatro")); // true
console.log("Ejercicio 25:", noContieneNumeros("Hola Mundo")); // true

// Ejercicio 13
window.ej13 = () => {
  const importe = parseFloat(document.getElementById("importeCompra").value);
  const margen = parseFloat(document.getElementById("margenGanancia").value);
  const resultado = calcularPrecioVenta(importe, margen);
  document.getElementById("resultado13").textContent = `Precio de venta: $${resultado.toFixed(2)}`;
};

// Ejercicio 14
window.ej14 = () => {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const promedio = calcularPromedioNotas(n1, n2, n3);
  document.getElementById("resultado14").textContent = `Promedio: ${promedio.toFixed(2)}`;
};

// Ejercicio 15
window.ej15 = () => {
  const nota = parseFloat(document.getElementById("notaEvaluar").value);
  const mensaje = evaluarNota(nota);
  document.getElementById("resultado15").textContent = `Resultado: ${mensaje}`;
};

// Ejercicio 16

window.ej16 = () => {
  const base = parseFloat(document.getElementById("importeBebida").value);
  const tipo = parseInt(document.getElementById("tipoBebida").value);
  document.getElementById("resultado16").textContent = `Sobre tasa: $${calcularSobreTasa(base, tipo).toFixed(2)}`;
};

window.ej17 = () => {
  const consumo = parseFloat(document.getElementById("consumoAgua").value);
  document.getElementById("resultado17").textContent = `Importe: $${calcularImporteAgua(consumo).toFixed(2)}`;
};

window.ej18 = () => {
  const base = parseFloat(document.getElementById("importeSubsuelo").value);
  document.getElementById("resultado18").textContent = `Tasa Subsuelo: $${calcularTasaSubsuelo(base).toFixed(2)}`;
};

window.ej19 = () => {
  const base = parseFloat(document.getElementById("importeFiscalizacion").value);
  document.getElementById("resultado19").textContent = `Tasa ENRE: $${calcularTasaFiscalizacion(base).toFixed(2)}`;
};

window.ej20 = () => {
  const glucosa = parseFloat(document.getElementById("glucosa").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const tipo = parseInt(document.getElementById("tipoDiabetes").value);
  document.getElementById("resultado20").textContent = `Dosis recomendada: ${calcularDosisInsulina(glucosa, peso, tipo).toFixed(2)} unidades`;
};

window.ej21 = () => {
  const texto = document.getElementById("textoVocales").value;
  document.getElementById("resultado21").textContent = `Vocales: ${contarVocales(texto)}`;
};

window.ej22 = () => {
  const texto = document.getElementById("textoConsonantes").value;
  document.getElementById("resultado22").textContent = `Consonantes: ${contarConsonantes(texto)}`;
};

window.ej23 = () => {
  const palabra = document.getElementById("textoS").value;
  document.getElementById("resultado23").textContent = contieneDosS(palabra) ? "Sí, contiene al menos dos 's'" : "No contiene dos 's'";
};

window.ej24 = () => {
  const texto = document.getElementById("textoEspacios").value;
  document.getElementById("resultado24").textContent = contieneTresEspacios(texto) ? "Sí, contiene al menos tres espacios" : "No contiene tres espacios";
};

window.ej25 = () => {
  const texto = document.getElementById("textoNumeros").value;
  document.getElementById("resultado25").textContent = noContieneNumeros(texto) ? "No contiene números" : "Contiene al menos un número";
};