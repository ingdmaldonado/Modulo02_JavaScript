/*Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. No debe utilizar métodos de strings como replace(), split() o expresiones regulares. Nota: Debe devolver un número*/

import { contarConsonantes } from './modelo';

const contarConsonantes = () => {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    if (texto.trim() === "") {
        resultado.textContent = "Por favor ingrese un texto";
        return;
    }

    const cantidad = contarConsonantes(texto);
    resultado.textContent = "Cantidad de consonantes: " + cantidad;
};

document.getElementById('texto').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});