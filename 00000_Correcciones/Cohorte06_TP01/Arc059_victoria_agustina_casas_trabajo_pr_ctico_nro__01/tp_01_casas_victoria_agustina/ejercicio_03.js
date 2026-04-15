let importeEnergia= 0; 
importeEnergia = Number(prompt("Ingrese Gasto de Servicio de Energía"));

let importeConectividad= 0; 
importeConectividad = Number(prompt("Ingrese Gasto de Servicio de Conectividad"));

let importeAgua= 0; 
importeAgua = Number(prompt("Ingrese Gasto de Servicio de Agua Potable"));

let porcentajeIncrementoEnergia = 0.125;
let porcentajeIncrementoConectividad = 0.07;
let porcentajeIncrementoAgua = 0.03;

let incrementoEnergía = importeEnergia * (1 + porcentajeIncrementoEnergia);
let incrementoConectividad = importeConectividad * (1 + porcentajeIncrementoConectividad);
let incrementoAgua = importeAgua * (1 + porcentajeIncrementoAgua);


console.log("Importe de Gasto de Servicio de Energía: $", importeEnergia);
console.log("Importe Final con incremento: $", incrementoEnergía);

console.log("Importe de Gasto de Servicio de Conectividad: $", importeConectividad);
console.log("Importe Final con incremento: $", incrementoConectividad);

console.log("Importe de Gasto de Servicio de Agua: $", importeAgua);
console.log("Importe Final con incremento: $", incrementoAgua);