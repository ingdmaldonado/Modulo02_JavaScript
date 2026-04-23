console.log("Clasificación de huevos");

let total = 0;
let xl = 0;
let l = 0;
let m = 0;
let descartados = 0;

let continuar = 1;

while (continuar === 1) {

    let peso = Number(prompt(`Ingrese peso del huevo (en gramos):`));

    total++;

    if (peso >= 73) {
        xl++;
    } else if (peso >= 63) {
        l++;
    } else if (peso >= 53) {
        m++;
    } else {
        descartados++;
    }

    continuar = Number(prompt(`¿Desea continuar? (1=SI / 0=NO)`));
}

// aquí calculo los porcentajes
let porcXL = (xl * 100) / total;
let porcL = (l * 100) / total;
let porcM = (m * 100) / total;

// Resultados finales
console.log(`Total de huevos:`, total);
console.log(`XL:`, xl);
console.log(`L:`, l);
console.log(`M:`, m);
console.log(`Descartados:`, descartados);

console.log(`% XL:`, porcXL);
console.log(`% L:`, porcL);
console.log(`% M:`, porcM);