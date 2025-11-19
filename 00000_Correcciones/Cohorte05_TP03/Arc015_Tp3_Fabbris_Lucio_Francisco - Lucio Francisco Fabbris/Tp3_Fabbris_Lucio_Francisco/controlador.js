import { precioDeVenta } from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import { estadoDelAlmuno } from "./funciones.js";
import { calcularSobreTasa } from "./funciones.js";
import { calcularImporteAgua } from "./funciones.js";
import { calcularTasaSubsuelo } from "./funciones.js";
import { calcularTasaFiscalizacion } from "./funciones.js";
import {calcularDosisInsulina} from "./funciones.js";
import {contarVocales} from "./funciones.js";
import {tieneDos} from "./funciones.js"
import {tresEspacios} from "./funciones.js";
import {noContieneNumeros} from "./funciones.js";

window.onload = () => {
  
  console.log(`La aplicacion esta funcionando`);
  console.log(`------------------------------`);
  
  // Primer ejercicio
  let resultado1 = precioDeVenta(1000,24);

  console.log(`El precio de venta es:${resultado1}`);
  console.log(`------------------------------`);

  // segundo ejercicio
  let resultado2 = promedioDeTres(7,8,9);

  console.log(`El promedio de los tres numeros es:${resultado2}`);
  console.log(`------------------------------`);

    // Tercer ejercicio
  let resultado3 = estadoDelAlmuno(3);
  let ejercicio3 = estadoDelAlmuno(6);
  let punto3 = estadoDelAlmuno(8);
  let ejercicio33 = estadoDelAlmuno(10);

  console.log(`La clasificacion del alumno es:${resultado3}`);
  console.log(`La clasificacion del alumno es:${ejercicio3}`);
  console.log(`La clasificacion del alumno es:${punto3}`);
  console.log(`La clasificacion del alumno es:${ejercicio33}`);
  console.log(`------------------------------`);
  
  // Cuarto ejercicio
  let resultado4 = calcularSobreTasa(1500);

  console.log(`El importe de la sobretasa es:${resultado4}`);
  console.log(`------------------------------`);

  // Quinto ejercicio
  let resultado5 = calcularImporteAgua(20);

  console.log(`El importe base a pagar es:${resultado5}`);
  console.log(`------------------------------`);

  // Sexto ejercicio
  let resultado6 = calcularTasaSubsuelo(10000);

  console.log(`El importe de la tasa de subsuelo es:${resultado6}`);
  console.log(`------------------------------`);

  // Septimo ejercico
  let resultado7 = calcularTasaFiscalizacion(10000);

  console.log(`La tasa de fiscalizacion es:${resultado7}`);
  console.log(`------------------------------`);

  // Octavo ejercicio 
  let resultado8 = calcularDosisInsulina(150,70,"Tipo 2");

  console.log(`La dosis de insulina a aplicar es de:${resultado8}`);
  console.log(`------------------------------`);

  // Noveno ejercicio
  let resultado9 = contarVocales(`Hola soy francisco`);

  console.log(`La cantidad de vocales que hay son:${resultado9}`);
  console.log(`------------------------------`);

  // Decimo ejercicio 
  let resultado10 = tieneDos("Salsa");
  let ejercicio10 = tieneDos("sol");

  console.log(`contiene dos s:${resultado10}`);
  console.log(`contiene dos s:${ejercicio10}`);
  console.log(`------------------------------`);

  // Onceavo ejercicio
  let resultado11 = tresEspacios("Hola soy de boca");
  let ejercicio11 = tresEspacios("Hola mundo");

  console.log(`contiene tres espacios:${resultado11}`);
  console.log(`contiene tres espacios:${ejercicio11}`);
  console.log(`------------------------------`);

  // Doceavo ejercicio
  let resultado12 = noContieneNumeros(`Catamarca`);
  let ejercicio12 = noContieneNumeros(`C0rdoba`);

  console.log(`contiene numeros:${resultado12}`);
  console.log(`contiene numeros:${ejercicio12}`);
  console.log(`------------------------------`);

};


