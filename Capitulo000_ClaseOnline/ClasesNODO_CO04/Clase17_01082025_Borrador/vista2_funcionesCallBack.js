const fnCuadrado = (numero) => numero * numero;

const fnCubo = (numero) => numero * numero * numero;

const fnRaizCuadrada = (numero) => Math.sqrt(numero);

const fnLLamadora = (numero, fnCallback) => {
  return fnCallback(numero);
};

window.addEventListener("load", () => {
  console.log("this application is loaded");

  let resultado1 = fnLLamadora(5, fnCuadrado);
  console.log(resultado1);

  let resultado2 = fnLLamadora(5, fnCubo);
  console.log(resultado2);

  let resultado3 = fnLLamadora(25, fnRaizCuadrada);
  console.log(resultado3);
});
