/*Ejercicio Nro. 31:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false). */

import { noTieneNumeros } from './modelo';

// Función principal llamada desde el botón
const verificarSinNumeros = () => {
    
    const textoIngresado = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    // Valida//
    if (textoIngresado.trim() === "") {
        resultado.textContent = "Por favor ingrese un texto para verificar";
        return;
    }

    // Usamos la función del modelo7//
    const esValido = noTieneNumeros(textoIngresado);
    
    // Mostramos resultado claro
    if (esValido) {
        resultado.textContent = "True - El texto no contiene ningún número";
    } else {
        resultado.textContent = "False - El texto contiene al menos un número";
    }
};

// Limpiamos el resultado mientras el usuario escribe*/
document.getElementById('texto').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});