/*Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false). */

let palabra1 = "Hola qué tal";
console.log(palabra1, "→", tieneTresEspacios(palabra1));

let palabra2 = "Uno  dos   tres";
console.log(palabra2, "→", tieneTresEspacios(palabra2));

let palabra3 = "sin espacios";
console.log(palabra3, "→", tieneTresEspacios(palabra3));

let palabra4 = "a b c d";
console.log(palabra4, "→", tieneTresEspacios(palabra4));              