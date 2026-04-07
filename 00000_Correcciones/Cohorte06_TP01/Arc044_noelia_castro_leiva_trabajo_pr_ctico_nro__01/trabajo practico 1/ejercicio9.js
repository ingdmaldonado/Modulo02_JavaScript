/*EJERCICIO 9*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let total = 0;
let descuento = 0;

rl.question("Ingrese la cantidad de pasajes: ", (pasajes) => {
    rl.question("Ingrese el importe del pasaje: ", (precio) => {
        let cantidadPasajes = parseInt(pasajes);
        let importePasajes = parseInt(precio);
        let totalCompra = cantidadPasajes * importePasajes;

        if (cantidadPasajes > 3 && totalCompra > 250000 && totalCompra < 500000) {
            descuento = totalCompra * 0.11;
            total =  totalCompra - descuento;
        }
        else if (cantidadPasajes > 3 && totalCompra > 500000) {
            descuento = totalCompra * 0.15;
            console.log (descuento);
            total =  totalCompra - descuento;
        }
        else {
            total = totalCompra;
        }
        
        console.log("El total a pagar es: " + total);
    
    rl.close();
    })

});