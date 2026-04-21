//Ejercicio N° 17

let cantidad =(prompt("Ingrese la cantidad de huevos")) * 1;

let total = 0;
let xl = 0;
let l = 0;
let m = 0;
let descartados = 0;


for (let i = 1; i <= cantidad; i++) {

    let peso = (prompt("Ingrese el peso del huevo " + i)) * 1;

    total = total + 1;

    if (peso >= 73) {
        xl = xl + 1;
    } else if (peso >= 63 && peso < 73) {
        l = l + 1;
    } else if (peso >= 53 && peso < 63) {
        m = m + 1;
    } else {
        descartados = descartados + 1;
    }
}


let porcentajeXL = 0;
let porcentajeL = 0;
let porcentajeM = 0;

if (total > 0) 
    {
    porcentajeXL = (xl * 100) / total;
    porcentajeL = (l * 100) / total;
    porcentajeM = (m * 100) / total;}

console.log("Total de huevos: " + total);
console.log("Huevos XL: " + xl);
console.log("Huevos L: " + l);
console.log("Huevos M: " + m);
console.log("Huevos descartados: " + descartados);

console.log("% XL: " + porcentajeXL);
console.log("% L: " + porcentajeL);
console.log("% M: " + porcentajeM);