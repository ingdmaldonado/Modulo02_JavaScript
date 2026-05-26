let numeroA = Number(prompt("Ingrese el primer número"));
let numeroB = Number(prompt("Ingrese un segundo número"));

console.log(`Primer número: ${numeroA}. Segundo número: ${numeroB}.`);
console.log(`Suma: ${numeroA} + ${numeroB} = ${numeroA + numeroB}`);
console.log(`Resta: ${numeroA} - ${numeroB} = ${numeroA - numeroB}`);
console.log(`Producto: ${numeroA} * ${numeroB} = ${numeroA * numeroB}`);
console.log(`Cociente: ${numeroA} / ${numeroB} = ${numeroA/numeroB}`);

//Cuando el número B es igual a cero, el resultado del cociente es "infinito", siendo este el resultado de una operación válida matemáticamente hablando, pero inválida en la mayoría de lenguajes de programación
//Si no se carga un segundo número, da como resultado NaN (Not-A-Number), representando un valor no representable