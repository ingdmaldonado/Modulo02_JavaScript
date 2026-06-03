
import { promedioNotas } from "./modelo.js";

//console.log(`el Promedio de 3 notas es: ${promedioNotas(7,8,9)}`);

const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0
}



window.onload = () => {
    const nota1 = document.querySelector("#idNota1");
    const nota2 = document.querySelector("#idNota2");
    const nota3 = document.querySelector("#idNota3");
    const calcularNota = document.querySelector("#idBtnCalcularNota");
    const resultado = document.querySelector("#idlblPromedio");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    nota1.oninput = () => {
        estadoAplicacion.nota1 = Number(nota1.value);
        console.log(`nota1 = ${estadoAplicacion.nota1}`);
    }

    nota2.oninput = () =>{
        estadoAplicacion.nota2 = Number(nota2.value);
        console.log(`nota 2 = ${estadoAplicacion.nota2}`);
    }
    nota3.oninput = () => {
        estadoAplicacion.nota3 = Number(nota3.value);
        console.log(`Nota 3= ${estadoAplicacion.nota3}`);
    }




    calcularNota.onclick = () => {
        let nota1 = estadoAplicacion.nota1;
        let nota2 = estadoAplicacion.nota2;
        let nota3 = estadoAplicacion.nota3;
        resultado.textContent = promedioNotas(nota1,nota2,nota3);
    }



    const fnGuardarEstado = () => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
}

    const fnRecuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(` ${datoRecuperado}  ${estadoOBJETO}`);
        nota1.value = estadoOBJETO.nota1;
        nota2.value = estadoOBJETO.nota2;
        nota3.value = estadoOBJETO.nota3;
    }
    }

    idBtnGuardar.onclick = () => {
        fnGuardarEstado();
    }

    idBtnRecuperar.onclick = () => {
        fnRecuperarEstado();
    }


}



