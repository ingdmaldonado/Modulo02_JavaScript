let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

let continuar = true;

while (continuar) {
    let entrada = prompt("Ingrese la nota del trabajo final:");
    let nota = parseFloat(entrada);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Error: La nota ingresada es inválida");
        errores++;
    } else if (nota <= 4) {
        desaprobados++;
        alert("Resultado: Desaprobado");
    } else if (nota <= 7) {
        aprobados++;
        alert("Resultado: Aprobado");
    } else if (nota < 10) {
        muyBuenos++;
        alert("Resultado: Muy bueno");
    } else {
        excelentes++;
        alert("Resultado: Excelente");
    }

    let respuesta = prompt("¿Desea continuar cargando notas? (si/no)").toLowerCase();

    if (respuesta !== "si" && respuesta !== "s") {
        continuar = false;
    }
}

// Resultados
console.log("--- INFORME DE CALIFICACIONES ---");
console.log("Trabajos desaprobados: " + desaprobados);
console.log("Trabajos aprobados: " + aprobados);
console.log("Trabajos Muy Buenos: " + muyBuenos);
console.log("Trabajos excelentes: " + excelentes);
console.log("Cantidad de errores de ingreso: " + errores);