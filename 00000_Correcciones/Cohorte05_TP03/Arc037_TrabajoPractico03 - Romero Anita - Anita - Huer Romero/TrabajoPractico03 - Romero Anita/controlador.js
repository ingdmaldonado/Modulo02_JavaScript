// Importamos todas las funciones desde funciones.js
import {
  precioDeVenta,
  promedioDeTres,
  evaluarNota,
  calcularSobreTasaBebida,
  calcularImporteAgua,
  calcularTasaSubsuelo,
  calcularTasaENRE,
  calcularDosisInsulina,
  contarVocales,
  contarConsonantes,
  contieneDosEss,
  contieneTresEspacios,
  sinDigitos
} from "./funciones.js";

window.onload = () => {
  console.log("La página está cargada correctamente.\n");

  /* === Resultados de cada ejercicio === */

  // Ejercicio 13
  const resultado13 = precioDeVenta(700, 50);
  console.log(`Ejercicio 13 - Precio de venta: ${resultado13}`);

  // Ejercicio 14
  const resultado14 = promedioDeTres(10, 8, 7);
  console.log(`Ejercicio 14 - Promedio de tres notas: ${resultado14}`);

  // Ejercicio 15
  //let resultado15 = evaluarNota(9);
  const resultado15 = evaluarNota(resultado14);
  console.log(`Ejercicio 15 - Evaluación de nota: ${resultado15}`);

  // Ejercicio 16
  const resultado16 = calcularSobreTasaBebida(200, 3);
  console.log(`Ejercicio 16 - Sobre tasa de bebida: ${resultado16}`);

  // Ejercicio 17
  const resultado17 = calcularImporteAgua(85);
  console.log(`Ejercicio 17 - Importe de agua: ${resultado17}`);

  // Ejercicio 18
  //const resultado18 = calcularTasaSubsuelo(10000);
  const resultado18 = calcularTasaSubsuelo(resultado17);
  console.log(`Ejercicio 18 - Tasa de Subsuelo: ${resultado18}`);

  // Ejercicio 19
  //const resultado19 = calcularTasaENRE(10000);
  const resultado19 = calcularTasaENRE(resultado17);
  console.log(`Ejercicio 19 - Tasa ENRE: ${resultado19}`);

  // Ejercicio 20
  const resultado20 = calcularDosisInsulina(200, 70, 1);
  console.log(`Ejercicio 20 - Dosis de insulina: ${resultado20}`);

  // Ejercicio 21
  const resultado21 = contarVocales("Programación con JavaScript - Ing. D. Maldonado");
  console.log(`Ejercicio 21 - Cantidad de vocales: ${resultado21}`);

  // Ejercicio 22
  const resultado22 = contarConsonantes("Programación con JavaScript - Ing. D. Maldonado");
  console.log(`Ejercicio 22 - Cantidad de consonantes: ${resultado22}`);

  // Ejercicio 23
  const resultado23 = contieneDosEss("fideos con salsa");
  console.log(`Ejercicio 23 - Contiene al menos dos 's': ${resultado23}`);

  // Ejercicio 24
  const resultado24 = contieneTresEspacios("Hola  mundo  feliz hoy");
  console.log(`Ejercicio 24 - Contiene tres espacios: ${resultado24}`);

  // Ejercicio 25
  const resultado25 = sinDigitos("COHORTE: 05 con el Ing. D. Maldonado");
  console.log(`Ejercicio 25 - No contiene dígitos: ${resultado25}`);
};












