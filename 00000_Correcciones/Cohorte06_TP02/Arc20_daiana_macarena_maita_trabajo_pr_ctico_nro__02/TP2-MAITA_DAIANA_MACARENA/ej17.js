// EJERCICIO 17 - HUEVOS

let total = 0,
    xl = 0,
    l = 0,
    m = 0,
    descartados = 0;

let continuar = true;

while (continuar) {

    let peso = parseFloat(prompt("Peso del huevo"));

    total++;

    if (peso >= 73) xl++;
    else if (peso >= 63) l++;
    else if (peso >= 53) m++;
    else descartados++;

    continuar = confirm("¿Seguir?");
}

// Porcentajes
let pXL = (xl / total) * 100;
let pL = (l / total) * 100;
let pM = (m / total) * 100;

// Resultados
alert("Total: " + total);
alert("XL: " + xl + " (" + pXL.toFixed(2) + "%)");
alert("L: " + l + " (" + pL.toFixed(2) + "%)");
alert("M: " + m + " (" + pM.toFixed(2) + "%)");
alert("Descartados: " + descartados);