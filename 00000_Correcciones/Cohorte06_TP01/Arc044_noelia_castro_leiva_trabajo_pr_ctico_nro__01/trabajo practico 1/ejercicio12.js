/*EJERCICIO 12*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(importe, dia) {
    let descuento = 0;
    let reintegro = 0;

    if(dia == "viernes" || dia == "sabado" || dia == "domingo") 
    {
        reintegro = importe * 0.50;
        if(reintegro > 80000)
        {
            descuento = 80000;
        }
        else
        {
            descuento = reintegro;
        }
    } 
    else 
    {
        descuento = 0;
    }
    totalCompra = importe - descuento;
    console.log("Día de la compra: ", dia);
    console.log("Importe de la compra:", importe);
    console.log("Reintegro: ", descuento);
    console.log("Importe final a pagar: ", totalCompra);
}

rl.question("Día de la compra: ", (diaDeCompra) => {
    rl.question("Importe a pagar: ", (importeTotal) => {
        calcularDescuento(importeTotal, diaDeCompra);
        rl.close();
    })

});