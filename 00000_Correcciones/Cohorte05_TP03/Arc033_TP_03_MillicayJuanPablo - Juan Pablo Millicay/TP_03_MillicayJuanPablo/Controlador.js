//Importamos las funciones del Modelo
import {
  precioVenta,
  promedioNotas,
  evaluarNota,
  calcularSobreTasaBebida,
  calcularImporteAgua,
  tasaSubsuelo,
  tasaENRE,
  dosisInsulina,
  contarVocales,
  contarConsonantes,
  tieneDosS,
  tieneTresEspacios,
  sinDigitos,
} from './Modelo.js';

window.onload = () => {
  console.log(`LA PÁGINA ESTA CARGADA....`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 13: precioVenta */
  console.log(`########## Ejercicio Nro. 13 ##########`);
  let precioDeVenta = precioVenta(1000, 80);
  console.log(`Precio de venta: $${precioDeVenta}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 14: promedio de 3 notas */
  console.log(`########## Ejercicio Nro. 14 ##########`);
  let promedio = promedioNotas(10, 8, 7);
  console.log(`Promedio: ${promedio}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 15: evaluar nota */
  console.log(`########## Ejercicio Nro. 15 ##########`);
  let resultadoPromedio = evaluarNota(8);
  console.log(`Resultado: ${resultadoPromedio}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 16: calcular sobre tasa según tipo (‰ -> por mil) */
  console.log(`########## Ejercicio Nro. 16 ##########`);
  let sobretasa = calcularSobreTasaBebida(5000, 6);
  console.log(`SobreTasa: $${sobretasa}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 17: calcular importe agua por bloques */
  console.log(`########## Ejercicio Nro. 17 ##########`);
  let importeAgua = calcularImporteAgua(55);
  console.log(`Importe base a pagar: $${importeAgua}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 18: tasa subsuelo 3% */
  console.log(`########## Ejercicio Nro. 18 ##########`);
  let tasa = tasaSubsuelo(25000);
  console.log(`Tasa Subsuelo (3%): $${tasa}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 19: tasa ENRE 1.2% */
  console.log(`########## Ejercicio Nro. 19 ##########`);
  let enre = tasaENRE(12000);
  console.log(`Tasa ENRE (1.2%): $${enre}`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 20: dosis de insulina */
  console.log(`########## Ejercicio Nro. 20 ##########`);
  let dosis = dosisInsulina(200, 90, 2);
  console.log(`Dosis recomendada: ${dosis}`);
  console.log(``);
  
  /* Ejemplo Invocación Ejercicio Nro. 21: contar vocales sin usar split/replace/regex */
  console.log(`########## Ejercicio Nro. 21 ##########`);
  let textoVocales = `EstO es una cadena dE ejemplo`;
  let vocales = contarVocales(textoVocales);
  console.log(`Vocales encontradas: ${vocales} (${textoVocales})`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 22: contar consonantes (letras que no sean vocales). Ignora otros caracteres. */
  console.log(`########## Ejercicio Nro. 22 ##########`);
  let textoConsonante = `Hola Mundo 123!!`;
  let consonantes = contarConsonantes(textoConsonante);
  console.log(`Consonantes encontradas: ${consonantes} (${textoConsonante})`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 23: contiene al menos 2 letras 's' (mayus/minus) - no usar includes/indexOf */
  console.log(`########## Ejercicio Nro. 23 ##########`);
  let cadenaDosS = `Sabrina Nietos`;
  let dosS = tieneDosS(cadenaDosS);
  console.log(`¿Tiene al menos dos 's'?: ${dosS} (${cadenaDosS})`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 24: contiene al menos 3 espacios (romper con break al 3) */
  console.log(`########## Ejercicio Nro. 24 ##########`);
  let cadenaEspacios = `primer curso de programacion`;
  let espacios = tieneTresEspacios(cadenaEspacios);
  console.log(`¿Tiene al menos 3 espacios?: ${espacios} (${cadenaEspacios})`);
  console.log(``);

  /* Ejemplo Invocación Ejercicio Nro. 25: determina si no contiene dígitos (0-9). Si encuentra un dígito devuelve false (break) */
  console.log(`########## Ejercicio Nro. 25 ##########`);
  let cadenaDigitos = `hola 2026`;
  let digitos = sinDigitos(cadenaDigitos);
  console.log(`¿No contiene dígitos?: ${digitos} (${cadenaDigitos})`);
};
