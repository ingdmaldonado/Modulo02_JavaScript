// Control
let respuesta;

// Contadores
let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

//CONTROL
let continuar = true 

while (continuar) {
let nota = parseFloat(prompt("Ingrese la nota del alumno (0 a 10):"));

    if (nota < 0 || nota > 10 || isNaN(nota)) 
        {
        alert("Error: nota inválida");
        errores++;
    } 
    else {
        if (nota >= 0 && nota <= 4) {
            desaprobados++;
            alert("Resultado: desaprobados")
        } 
        else if (nota > 4 && nota <= 7) {
            aprobados++;
            alert("Resultado: aprobados")
        } 
        else if (nota > 7 && nota < 10) {
            muyBuenos++;
            alert("Resultados: muy buenos")
        } 
        else if (nota === 10) {
            excelentes++;
            alert("Resultados: excelentes")
        }

    }

    // Preguntar si continúa
  let respuesta = prompt("¿Desea ingresar las notas? (si/no)").toLowerCase();

    if (respuesta !== "si") 
        {
        continuar = false;
    }
}

// Mostrar resultados
console.log("--- INFORME DE CALIFICACIONES ---");
console.log("Desaprobados: " + desaprobados);
console.log("Aprobados: " + aprobados);
console.log("Muy buenos: " + muyBuenos);
console.log("Excelentes: " + excelentes);
console.log("Cantidad de errores: " + errores);
