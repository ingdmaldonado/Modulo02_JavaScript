{

    let cantidadTrabajosDesaprobados = 0;
    let cantidadTrabajosAprobados = 0;
    let cantidadTrabajosMuyBuenos = 0;
    let cantidadTrabajosExcelentes = 0;
    let cantidadIngresosErroneos = 0;
    
    let continuarCargandoNotas = true;
    
    while (continuarCargandoNotas) {
        let entradaNotaDelAlumno = prompt("Ingrese la nota del trabajo final del alumno (valores permitidos del 0 al 10):");
        let notaDelAlumno = parseFloat(entradaNotaDelAlumno);
    
        if (notaDelAlumno < 0 || notaDelAlumno > 10 || isNaN(notaDelAlumno)) {
            cantidadIngresosErroneos++;
            console.log("Error de validación: La nota ingresada debe ser un número válido entre 0 y 10.");
        } else if (notaDelAlumno >= 0 && notaDelAlumno <= 4) {
            cantidadTrabajosDesaprobados++;
            console.log("El trabajo final ha sido clasificado como: Desaprobado.");
        } else if (notaDelAlumno > 4 && notaDelAlumno <= 7) {
            cantidadTrabajosAprobados++;
            console.log("El trabajo final ha sido clasificado como: Aprobado.");
        } else if (notaDelAlumno > 7 && notaDelAlumno < 10) {
            cantidadTrabajosMuyBuenos++;
            console.log("El trabajo final ha sido clasificado como: Muy Bueno.");
        } else if (notaDelAlumno === 10) {
            cantidadTrabajosExcelentes++;
            console.log("El trabajo final ha sido clasificado como: Excelente.");
        }
    
        let respuestaUsuarioContinuar = prompt("¿Desea ingresar una nueva nota al sistema? (Escriba 'si' o 'no')");
        if (respuestaUsuarioContinuar.toLowerCase() !== "si") {
            continuarCargandoNotas = false;
        }
    }
    
    console.log(`Cantidad de trabajos Desaprobados: ${cantidadTrabajosDesaprobados}
    Cantidad de trabajos Aprobados: ${cantidadTrabajosAprobados}
    Cantidad de trabajos Muy Buenos: ${cantidadTrabajosMuyBuenos}
    Cantidad de trabajos Excelentes: ${cantidadTrabajosExcelentes}
    Se registraron ${cantidadIngresosErroneos} intentos de ingresos de notas inválidas.
    `);
    }