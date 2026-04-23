let nota;
let continuar;


let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

do {
    nota = Number(prompt("Ingrese una nota (0 a 10)"));

    
    if (nota < 0 || nota > 10) {
        errores++;
    } else {
        
        if (nota <= 4) {
            desaprobados++;
        } else if (nota <= 7) {
            aprobados++;
        } else if (nota < 10) {
            muyBuenos++;
        } else {
            excelentes++;
        }
    }

  
    continuar = prompt("¿Desea continuar? si/no");

    while (continuar !== "si" && continuar !== "no") {
        continuar = prompt("ERROR. Ingrese si o no");
    }

} while (continuar === "si");



console.log("Desaprobados:", desaprobados);
console.log("Aprobados:", aprobados);
console.log("Muy buenos:", muyBuenos);
console.log("Excelentes:", excelentes);
console.log("Errores:", errores);