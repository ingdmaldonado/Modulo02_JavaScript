{
    // Inicialización de contadores 
    let contadorDesaprobados = 0;  
    let contadorAprobados = 0;   
    let contadorMuyBuenos = 0;    
    let contadorExcelentes = 0;   
    let contadorErrores = 0;       
    
    let continuar = "SI"; // Variable de control para el ciclo 

    while (continuar.toUpperCase() === "SI") {
       
        let nota = Number(prompt("Ingrese la nota del trabajo final (0-10):"));
       
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("Error: La nota ingresada no es válida. Debe ser entre 0 y 10.");
            contadorErrores++;
        } else {
            
            if (nota >= 0 && nota <= 4) {
                contadorDesaprobados++;
                console.log("Nota " + nota + ": Desaprobado");
            } else if (nota > 4 && nota <= 7) {
                contadorAprobados++; 
                console.log("Nota " + nota + ": Aprobado");
            } else if (nota > 7 && nota < 10) {
                contadorMuyBuenos++;
                console.log("Nota " + nota + ": Muy Bueno");
            } else if (nota === 10) {
                contadorExcelentes++; 
                console.log("Nota " + nota + ": Excelente");
            }
        }

        
        continuar = prompt("¿Desea continuar cargando notas? (SI/NO)");
    }

    // Informe Final
    console.log("--- RESUMEN DE EVALUACIONES ---");
    console.log("Cantidad de trabajos DESAPROBADOS: " + contadorDesaprobados);
    console.log("Cantidad de trabajos APROBADOS: " + contadorAprobados);
    console.log("Cantidad de trabajos MUY BUENOS: " + contadorMuyBuenos);
    console.log("Cantidad de trabajos EXCELENTES: " + contadorExcelentes);
    console.log("Cantidad de ingresos ERRÓNEOS: " + contadorErrores);
}