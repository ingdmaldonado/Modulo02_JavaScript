let desaprobados = 0;
let aprobados = 0;
let muybuenos = 0;
let excelentes = 0;
let errores = 0;

let continuar = "si";

while (continuar == "si") {

    let nota = parseFloat(prompt("ingrese una nota entre 0 y 10"));

    if (nota < 0 || nota > 10 || isNaN(nota)) {
        errores++;
        alert("nota incorrecta");
    }
    else if (nota >= 0 && nota <= 4) {
        desaprobados++;
    }
    else if (nota > 4 && nota <= 7) {
        aprobados++;
    }
    else if (nota > 7 && nota < 10) {
        muybuenos++;
    }
    else if (nota == 10) {
        excelentes++;
    }

    continuar = prompt("¿desea continuar? si / no");
}

alert(
    "desaprobados: " + desaprobados + "\n" +
    "aprobados: " + aprobados + "\n" +
    "muy buenos: " + muyBuenos + "\n" +
    "excelentes: " + excelentes + "\n" +
    "errores ingresados: " + errores
);