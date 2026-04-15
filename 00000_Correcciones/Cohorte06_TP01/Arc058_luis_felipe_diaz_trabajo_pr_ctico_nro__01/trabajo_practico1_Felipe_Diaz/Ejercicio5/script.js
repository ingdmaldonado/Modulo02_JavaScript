// Ingreso del valor X
let X = Number(prompt("Ingrese un numero para saber si es par o impar"));

// Usamos el operador módulo (%) para saber si el resto de la división por 2 es cero
if (X % 2 === 0) {
    console.log("El número " + X + " es PAR");
} else {
    console.log("El número " + X + " es IMPAR");
}