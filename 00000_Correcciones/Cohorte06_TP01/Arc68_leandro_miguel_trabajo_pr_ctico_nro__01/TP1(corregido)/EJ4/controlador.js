/* Ejercicio N4 */


let numero1 = Number(prompt("Ingrese el primer numero:"));

if (numero1 > 0) {
    alert("El numero es positivo");
} else if (numero1 < 0) {
    alert("El numero es negativo");
} else {
    alert("El numero es cero");
}

// operador ternario

numero1 > 0 ? alert("El numero es positivo") : numero1 < 0 ? alert("El numero es negativo") : alert("El numero es cero"); 
