import {fnCalcularPromedio} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        nota1:0,
        nota2:0,
        nota3:0
    };

    /* captura de elementos */

    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idResultado = document.querySelector("#idResultado");

    /* nota 1 */

    idNota1.oninput = ()=>{

        estadoAplicacion.nota1 = Number(idNota1.value);

        console.log(estadoAplicacion);

    };

    /* nota 2 */

    idNota2.oninput = ()=>{

        estadoAplicacion.nota2 = Number(idNota2.value);

        console.log(estadoAplicacion);

    };

    /* nota 3 */

    idNota3.oninput = ()=>{

        estadoAplicacion.nota3 = Number(idNota3.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularPromedio(
            estadoAplicacion.nota1,
            estadoAplicacion.nota2,
            estadoAplicacion.nota3
        );

        console.log(resultado);

        idResultado.textContent = `El promedio es ${resultado}`;

    };

    /* boton guardar */

    idBtnGuardar.onclick = ()=>{

        let estadoJSON = JSON.stringify(estadoAplicacion);

        localStorage.setItem("estadoApp",estadoJSON);

        console.log("datos guardados");

    };

    /* boton recuperar */

    idBtnRecuperar.onclick = ()=>{

        let datosRecuperados = localStorage.getItem("estadoApp");

        if(datosRecuperados)
        {
            let estadoObjeto = JSON.parse(datosRecuperados);

            console.log(estadoObjeto);

            idNota1.value = estadoObjeto.nota1;
            idNota2.value = estadoObjeto.nota2;
            idNota3.value = estadoObjeto.nota3;

            estadoAplicacion.nota1 = estadoObjeto.nota1;
            estadoAplicacion.nota2 = estadoObjeto.nota2;
            estadoAplicacion.nota3 = estadoObjeto.nota3;
        }

    };

};