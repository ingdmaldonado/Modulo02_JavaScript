//Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas//

import { calcularPromedio } from './modelo.js';
//calculo promedio de notas//
const calcularPromedioNotas = () => {  
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    const resultadoDiv = document.getElementById('resultado');

    // función del modelo//
    const promedio = calcularPromedio(nota1, nota2, nota3);

    // Muestra de calculos//
    resultadoDiv.style.color = '#27ae60';
    resultadoDiv.textContent = `El promedio es: ${promedio.toFixed(2)}`;
};

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('resultado').textContent = '';
    });
});