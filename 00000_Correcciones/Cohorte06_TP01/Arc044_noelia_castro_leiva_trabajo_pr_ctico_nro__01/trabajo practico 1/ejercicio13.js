/*EJERCICIO 13*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(importe, rubro) {
    let descuento = 0;
    let topeMaximo = 0;
    let rubroComercio = "";
    let totalAPagar = 0;

    switch (rubro) {
        case 1:
            descuento = importe * 0.20;
            topeMaximo = 80000;
            rubroComercio = "Vestimenta";
        break;
        case 2:
            descuento = importe * 0.20;
            topeMaximo = 80000;
            rubroComercio = "Perfumería";
        break;
        case 3:
            descuento = importe * 0.30;
            topeMaximo = 90000;
            rubroComercio = "Librería";
        break;
        case 4:
            descuento = importe * 0.15;
            topeMaximo = 70000;
            rubroComercio = "Electrodomésticos";
        break;
        case 5:
            descuento = importe * 0.20;
            topeMaximo = 80000;
            rubroComercio = "Calzado";
        break;
        default:
            console.log("Rubro no valido");
            rubroComercio = "Desconocido";
        return;
    }

    if (descuento > topeMaximo)
    {
        totalAPagar = importe - topeMaximo;
        descuento = topeMaximo;
    }
    else
    {
        totalAPagar = importe - descuento;
    }

    console.log("\nRubro: ", rubroComercio);
    console.log("Importe de la compra:", importe);
    console.log("Descuento aplicado: ", descuento);
    console.log("Importe final a pagar: ", totalAPagar)
}

console.log("Rubros:\nVestimenta - 1\nPerfumería - 2\nLibrería - 3\nElectrodomésticos - 4\nCalzado - 5\n");

rl.question("Rubro del comercio: ", (rubroDelComercio) => {
    rl.question("Importe a pagar: ", (importeTotal) => {
        calcularDescuento(importeTotal, parseInt(rubroDelComercio));
        rl.close();
    })

});