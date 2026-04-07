/*EJERCICIO 7*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const precio1 = 38000;
const precio2 = 31000;
const precio3 = 46000;

console.log("Codigo 1: Dogui x 21 kilos\nCodigo 2: Tiernitos x 21 kilos\nCodigo 3: DogPro x 21 kilos");

rl.question("Ingrese el código del producto (1-3): ", function(codigo) {

  rl.question("Ingrese la cantidad de productos: ", function(cantidad) {

    codigo = parseInt(codigo);
    cantidad = parseInt(cantidad);

    let precio = 0;

    if (codigo === 1) { 
      precio = precio1;
    } else if (codigo === 2) {
      precio = precio2;
    } else if (codigo === 3) {
      precio = precio3;
    } else {
      console.log("Código de producto inválido");
      rl.close();
      return;
    }

    if (cantidad < 5) {
        let total = precio * cantidad;
        console.log("Cantidad de productos:", cantidad);
        console.log("Precio total:", total);
    }
    else if (cantidad >= 5 && cantidad <= 10) {
         let total = (precio-2000) * cantidad;
        console.log("Cantidad de productos:", cantidad);
        console.log("Precio total:", total);
    } else if (cantidad >= 11) {
         let total = (precio-4000) * cantidad;
        console.log("Cantidad de productos:", cantidad);
        console.log("Precio total:", total);
    }

    rl.close();
  });

});

