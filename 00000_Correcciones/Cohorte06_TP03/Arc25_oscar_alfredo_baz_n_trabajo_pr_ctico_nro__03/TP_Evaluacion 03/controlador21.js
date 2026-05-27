import { fnCalculaPromedio, fnVeredicto } from "./modelo21.js";

const inputNota1 = document.getElementById("idNota1");
const inputNota2 = document.getElementById("idNota2");
const inputNota3 = document.getElementById("idNota3");

const boton = document.getElementById("idBotonCalcular");

const resultado = document.getElementById("resultado");

boton.onclick = ()=> {
 
    console.log(`Esta ingresando al boton calcular`);

    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    const nota3 = Number(inputNota3.value);


    const promedio = Number(fnCalculaPromedio(nota1, nota2, nota3).toFixed(1));


    const califiacion= fnVeredicto(promedio);

    resultado.textContent =(`El promedio del alumno es: ${promedio}. Su trabajo esta: ${califiacion} `);



};