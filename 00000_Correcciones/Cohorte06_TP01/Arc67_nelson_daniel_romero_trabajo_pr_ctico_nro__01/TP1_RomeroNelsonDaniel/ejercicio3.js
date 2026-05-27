let gastoElectricidad = Number(prompt("Ingrese lo que pagó de electricidad"));
let gastoComunicacion = Number(prompt("Ingrese lo que pagó de comunicación"));
let gastosAgua = Number(prompt("Ingrese lo que pagó de agua"));

gastoElectricidadAumentada = gastoElectricidad + gastoElectricidad * 0.125;
gastoComunicacionAumentada = gastoComunicacion + gastoComunicacion * 0.07;
gastosAguaAumentada = gastosAgua + gastosAgua * 0.03;

console.log(`Gasto actual de electricidad: ${gastoElectricidad}`);
console.log(`Gasto actual en comunicación: ${gastoComunicacion}`);
console.log(`Gasto actual en agua: ${gastosAgua}`);
console.log(`Gasto total actual: ${gastoElectricidad + gastoComunicacion + gastosAgua}`);
console.log(`----------------------------------`);
console.log(`Gasto futuro de electricidad: ${gastoElectricidadAumentada}`);
console.log(`Gasto futuro en comunicación: ${gastoComunicacionAumentada}`);
console.log(`Gasto futuro en agua: ${gastosAguaAumentada}`);
console.log(`Gasto total futuro: ${gastoElectricidadAumentada + gastoComunicacionAumentada + gastosAguaAumentada}`);

//Almacenar en variables las sumas montos de dinero cuando sean datos que se almacenen o se usen en otra parte del código