
let totalHuevos = 0;
let huevosXL = 0;
let huevosL = 0;
let huevosM = 0;
let huevosDescartados = 0;
let peso;
let opcion;


do {
    
    let entrada = prompt("Ingrese el peso del huevo en gramos:");
    
  
    peso = +entrada;

    
    if (peso > 0) {
        totalHuevos = totalHuevos + 1;

        
        if (peso >= 73) {
            huevosXL = huevosXL + 1;
        } else if (peso >= 63) { 
            huevosL = huevosL + 1;
        } else if (peso >= 53) { 
            huevosM = huevosM + 1;
        } else {
            huevosDescartados = huevosDescartados + 1;
        }
    }

    opcion = prompt("¿Desea ingresar otro huevo? (si/no)");

} while (opcion == "si" || opcion == "SI" || opcion == "Si");


let porcXL = 0;
let porcL = 0;
let porcM = 0;

if (totalHuevos > 0) {
    porcXL = (huevosXL / totalHuevos) * 100;
    porcL = (huevosL / totalHuevos) * 100;
    porcM = (huevosM / totalHuevos) * 100;
}


console.log("1) Cantidad total de Huevos: " + totalHuevos);
console.log("2) Cantidad total de Huevos XL: " + huevosXL);
console.log("3) Cantidad total de Huevos L: " + huevosL);
console.log("4) Cantidad total de Huevos M: " + huevosM);
console.log("5) Cantidad total de Huevos descartados: " + huevosDescartados);
console.log("6) % de Huevos XL: " + porcXL + "%");
console.log("7) % de Huevos L: " + porcL + "%");
console.log("8) % de Huevos M: " + porcM + "%");