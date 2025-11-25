import { fnfacturaDeServicioPublicos } from "./modulo01.js";




{
console.log(`“Servicios Públicos de Aguas de Catamarca” `);

let resultado=fnfacturaDeServicioPublicos(15000.72);

let  resultado1= resultado.toFixed(2);

console.log(`La Tasa de Fiscalización ENRE ES:`,resultado1);

}