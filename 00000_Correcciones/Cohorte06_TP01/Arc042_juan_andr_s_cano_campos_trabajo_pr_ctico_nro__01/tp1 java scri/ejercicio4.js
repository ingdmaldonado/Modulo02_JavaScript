{
//Ejercicio 4
let num = 0 ;

num = Number(prompt("Ingrese un número"));

if (isNaN(num)) {

  console.log("Debe ingresar un número válido");
} else if (num > 0) {
  console.log(`El número es positivo : ${num}`);
} else if (num < 0) {
  console.log(`El número es negativo:${num}`);
} else {
  console.log(`El número es cero:${num}`);
}


let numero = 0;
numero = Number(prompt("Ingrese un número"));
let resultado = isNaN(numero)
  ? `Debe ingresar un número válido`
  : numero > 0
    ? `El número es positivo:${numero}`
    : numero < 0
      ? `El número es negativo:${numero}`
      : `El número es cero:${numero}`;
console.log(resultado);


}