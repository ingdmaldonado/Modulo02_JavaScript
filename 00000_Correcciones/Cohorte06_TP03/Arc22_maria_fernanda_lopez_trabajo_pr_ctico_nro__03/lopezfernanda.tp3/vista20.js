
/* Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número */

import {fnPromedioDeTres} from "./modelo20.js";

window.onload = () =>{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = {
    Nota1: 0,
    Nota2: 0,
    Nota3: 0,
}

    const IdNota1 = document.querySelector ("#IdNota1");
    const IdNota2 = document.querySelector ("#IdNota2");
    const IdNota3 = document.querySelector ("#IdNota3");
    const IdBtnPromedio= document.querySelector ("#IdBtnPromedio");
    const IdPromedio= document.querySelector ("#IdPromedio");
    const IdBtnGuardar =document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");

IdNota1.oninput = ()=>{
    estadoAplicacion.Nota1= Number (IdNota1.value);
};
IdNota2.oninput= ()=>{
    estadoAplicacion.Nota2= Number (IdNota2.value);
};
IdNota3.oninput = ()=>{
    estadoAplicacion.Nota3 = Number (IdNota3.value);
};

IdBtnPromedio.onclick= ()=>{
    let promedio = fnPromedioDeTres (estadoAplicacion.Nota1, estadoAplicacion.Nota2, estadoAplicacion.Nota3);

console.log (`Promedio:`, promedio.toFixed(2));

IdPromedio.textContent = `El promedio general es ${promedio.toFixed(2)}`;
};

IdBtnGuardar.onclick= ()=>{

    console.log (estadoAplicacion);
    let estadoJSON= JSON.stringify (estadoAplicacion);
    console.log (estadoJSON);
    localStorage.setItem ("estadoApp", estadoJSON);
};

IdBtnRecuperar.onclick = ()=>{
    let notasRecuperadas = localStorage.getItem ("estadoApp");

    if(notasRecuperadas)
    {
        let estadoObjeto = JSON.parse (notasRecuperadas);
        console.log (notasRecuperadas);
        console.log (estadoObjeto);
    }
    console.log (`Notas Recuperadas `, notasRecuperadas);
};

};