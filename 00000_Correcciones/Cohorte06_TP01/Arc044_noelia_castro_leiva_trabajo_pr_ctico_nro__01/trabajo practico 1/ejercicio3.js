/*EJERCICIO 3*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el total de los gastos de energía: ", (energia) => {
  rl.question("Ingrese el total de los gastos de comunicación: ", (comunicacion) => {
    rl.question("Ingrese el total de los gastos de agua potable: ", (agua) => {
      let incrementoEnergia = parseFloat(energia) * 0.125;
      let incrementoComunicacion = parseFloat(comunicacion) * 0.07;
      let incrementoAgua = parseFloat(agua) * 0.03;

      let gastoFuturoEnergia = parseFloat(energia) + incrementoEnergia;
      let gastoFuturoComunicacion = parseFloat(comunicacion) + incrementoComunicacion;
      let gastoFuturoAgua = parseFloat(agua) + incrementoAgua;

      let gastoFuturoTotal = gastoFuturoEnergia + gastoFuturoComunicacion + gastoFuturoAgua;

      console.log("El gasto futuro por energía será: " + gastoFuturoEnergia);
      console.log("El gasto futuro por comunicación será: " + gastoFuturoComunicacion);
      console.log("El gasto futuro por agua potable será: " + gastoFuturoAgua);
      console.log("El gasto total futuro será: " + gastoFuturoTotal);

      rl.close();
    });
  });
});