import { impuestoBebidas } from "../modelo.js";

console.log(`Prueba: ${impuestoBebidas(1500,5)}`); //5-> 15 -- Resultado 22.5

const storageDatos = {
    seleccion: 0,
    importe: 0
}

window.onload = () => {
    const eleccionBebida = document.querySelector("#idEleccionBebida");
    const importeBebida = document.querySelector("#idImporteBebida");
    const calcular = document.querySelector("#idBtnCalcular");
    const resultadoBebida = document.querySelector("#idResultadoBebida");
    const guardarDatos = document.querySelector("#idBtnGuardarDatos");
    const restaurarDatos = document.querySelector("#idBtnRestaurarDatos");

    eleccionBebida.onchange = () => {
        storageDatos.seleccion = Number(eleccionBebida.value);
        fnGuardarDatos();
        console.log(eleccionBebida.value);
    }

    importeBebida.oninput = () => {
        storageDatos.importe = Number(importeBebida.value);
        
        fnGuardarDatos();
    }


    calcular.onclick = () => {
        resultadoBebida.textContent = impuestoBebidas(storageDatos.importe,storageDatos.seleccion);
        storageDatos.importe = importeBebida.value;
        storageDatos.seleccion = eleccionBebida.value;
    }

    const fnGuardarDatos = () => {
        localStorage.setItem("storageD", JSON.stringify(storageDatos));
    }
    const fnRecuperarDatos = () => {
        let datos;
        let recupera = localStorage.getItem("storageD");        
        if (recupera){
            let datos = JSON.parse(recupera);
            eleccionBebida.value = datos.seleccion;
            importeBebida.value = datos.importe;
        }
    }
        guardarDatos.onclick = () => {
        fnGuardarDatos();
    }
        restaurarDatos.onclick = () => {
        fnRecuperarDatos();
    }

}