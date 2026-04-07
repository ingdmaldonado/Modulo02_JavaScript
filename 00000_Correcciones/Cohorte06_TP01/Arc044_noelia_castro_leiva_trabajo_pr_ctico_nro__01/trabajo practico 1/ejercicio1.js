/*EJERCICIO 1*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el primer número: ", (a) => {
  rl.question("Ingrese el segundo número: ", (b) => {
    let suma = parseFloat(a) + parseFloat(b);
    let resta = parseFloat(a) - parseFloat(b);
    let multiplicacion = parseFloat(a) * parseFloat(b);
    let division = parseFloat(a) / parseFloat(b);

    console.log("La suma es: " + suma);
    console.log("La resta es: " + resta);
    console.log("La multiplicacion es: " + multiplicacion);
    console.log("La division es: " + division);

    rl.close();
  });
});