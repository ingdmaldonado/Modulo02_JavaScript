/*Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false). */

let t1 = "Hola Mundo";
console.log(t1, "→", noContieneNumeros(t1));

let t2 = "Casa123";
console.log(t2, "→", noContieneNumeros(t2));

let t3 = "sinNumerosAqui";
console.log(t3, "→", noContieneNumeros(t3));

let t4 = "2025";
console.log(t4, "→", noContieneNumeros(t4));