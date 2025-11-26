/* Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto */

import {evaluarNota} from "./datos15.js";
window.onload = ()=> {

    console.log("running");
    
    const idBtnCalcularResultado = document.querySelector("#idBtnCalcularResultado");
    const idResultadoTexto = document.querySelector("#idResultadoTexto");
    const idNotaPromedio = document.querySelector("#idNotaPromedio");

    console.log(idBtnCalcularResultado, idResultadoTexto, idNotaPromedio);

    idBtnCalcularResultado.onclick = () => {
        let notaPromedio = Number(idNotaPromedio.value);
        
        console.log(`Nota: ${notaPromedio}`);
        
        let resultado = evaluarNota(notaPromedio);
        
        console.log(`Resultado: ${resultado}`);
        
        idResultadoTexto.textContent = `El Resultado es: ${resultado}`;
    };
}