/*EJERCICIO 10*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDescuento(formaDePago, importe) {
  let descuento;

  switch (formaDePago) {
    case "efectivo":
      descuento = importe * 0.1;
      break;
    case "debito":
      descuento = importe * 0.05;
      break;
    case "credito":
      descuento = 0;
      break;
    default:
      console.log("Forma de pago no válida");
      return;
  }

  const totalFinal = importe - descuento;

  console.log(`Descuento: ${descuento.toFixed(2)}`);
  console.log(`Total final: ${totalFinal.toFixed(2)}`);
}

rl.question("Ingrese importe de compra: ", (importeTotal) => {
    rl.question("Ingrese metodo de pago: ", (metodoDePago) => {
        calcularDescuento(metodoDePago, importeTotal);
    rl.close();
    })

});