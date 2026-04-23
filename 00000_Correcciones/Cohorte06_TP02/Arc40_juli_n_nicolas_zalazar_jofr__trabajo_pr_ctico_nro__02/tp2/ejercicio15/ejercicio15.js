let desaprobados = 0;
let aprobados = 0;
let muybueno = 0;
let excelente = 0;
let errores = 0;

let continuar = "s";

while (continuar.toLowerCase() === "s") {

    let nota = parseFloat(prompt("Ingrese la nota del alumno (0-10):"));
    if (nota >= 0 && nota <= 10) {
        if (nota >=0 && nota <= 4) {
            desaprobados += 1;   
        } else if ( nota >= 5 && nota <= 7) {
            aprobados += 1;
        } else if ( nota >= 8 && nota <= 9) {
            muybueno += 1;
        } else if ( nota === 10) {
            excelente += 1;
        }
    } else {
        alert("Nota Inválida. Por favor, ingrese una nota entre 0 y 10.");
        errores += 1;
    }
    continuar = prompt("¿Desea ingresar otra nota? (s/n):");
}

console.log(`Resultados:
    Desaprobados (o-4): ${desaprobados}
    Aprobados (5-7): ${aprobados}
    Muy Bueno (8-9): ${muybueno}
    Excelente (10): ${excelente}
    Errores: ${errores}`);  

alert(`Resultados:
    Desaprobados (o-4): ${desaprobados}
    Aprobados (5-7): ${aprobados}
    Muy Bueno (8-9): ${muybueno}
    Excelente (10): ${excelente}
    Errores: ${errores}`);  



             



