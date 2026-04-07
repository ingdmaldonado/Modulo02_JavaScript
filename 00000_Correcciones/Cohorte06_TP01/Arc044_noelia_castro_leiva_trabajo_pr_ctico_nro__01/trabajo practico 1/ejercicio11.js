/*EJERCICIO 11*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const costosEnvio = {
  centro: 2500,
  oeste: 3750,
  norte: 4225,
  sur: 5222.5,
  este: 4288.5
};

function calcularCostoEnvio(zona) {
  return costosEnvio[zona] || "Zona no válida";
}

function calcularTotalFinal(importe, zona) {
  const costoEnvio = calcularCostoEnvio(zona);
  const totalFinal = parseFloat(importe) + parseFloat(costoEnvio);

  console.log(`Costo de envío: ${costoEnvio}`);
  console.log(`Total final: ${totalFinal.toFixed(2)}`);
}

rl.question("Ingrese el importe de compra: ", (importeCompra) => {
    rl.question("Ingrese zona de entrega: ", (zonaEntrega) => {
        calcularTotalFinal(importeCompra, zonaEntrega);
    rl.close();
    })

});