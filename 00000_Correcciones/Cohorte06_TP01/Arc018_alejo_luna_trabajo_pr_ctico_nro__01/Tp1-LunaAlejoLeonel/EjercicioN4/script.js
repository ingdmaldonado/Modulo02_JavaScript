// ingreso el número
let numero = Number(prompt("Ingrese un número"));

//Primera forma: if - else

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
}

/*aquí le agregué un else para que quede la lógica completa ya que existe la chance de que el usuario elija
el número neutro*/ 

else {
    console.log("IF: El número es cero");
}

//Segunda forma: utilizando ternario

/* Aquí es un poquito más complejo ya que para poder hacer que esto funcione necesito evaluar 2 veces la condición para
para que tome al cero también ya que no es un número positivo ni negativo*/

let resultado = (numero > 0) ? "TERNARIO: El número es positivo" 
    : (numero < 0) 
        ? "TERNARIO: El número es negativo" 
        : "TERNARIO: El número es cero";

console.log(resultado);