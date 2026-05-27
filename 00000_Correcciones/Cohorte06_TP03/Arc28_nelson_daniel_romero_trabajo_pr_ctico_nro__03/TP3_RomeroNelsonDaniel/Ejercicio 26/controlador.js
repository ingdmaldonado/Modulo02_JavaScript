import {calcularDosisInsulina} from "./modelo.js";

const estadoAplicacion = {
    peso : 0,
    nivelGlucosa : 0,
    diabetesTipo : 0
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    if(datosJSON){
        let datosMemoria = JSON.parse(datosJSON);
        peso.value = datosMemoria.peso;
        nivelGlucosa.value = datosMemoria.nivelGlucosa;
        datosMemoria.diabetesTipo === 1 ? diabetesTipo1.checked = true : diabetesTipo2.checked = true;
        
        estadoAplicacion.peso = datosMemoria.peso;
        estadoAplicacion.nivelGlucosa = datosMemoria.nivelGlucosa;
        estadoAplicacion.diabetesTipo = datosMemoria.diabetesTipo;
    }
}

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

window.onload = () => {
    const peso = document.querySelector("#peso");
    const nivelGlucosa = document.querySelector("#nivelGlucosa");
    const diabetesTipo1 = document.querySelector("#diabetesTipo1");
    const diabetesTipo2 = document.querySelector("#diabetesTipo2");
    const botonCalcular = document.querySelector("#botonCalcular");
    const resultado = document.querySelector("#resultado");

    recuperarEstado();

    peso.oninput = () => {
        if(Number(peso.value) >= 0){
            estadoAplicacion.peso = Number(peso.value);
            guardarEstado();
        }
        else
        {
            resultado.textContent = "El peso debe ser mayor que cero";
        }
    }

    nivelGlucosa.oninput = () => {
        if(Number(nivelGlucosa.value) >= 0){
            estadoAplicacion.nivelGlucosa = Number(nivelGlucosa.value);
            guardarEstado();
        }
        else
        {
            resultado.textContent = "El nivel de glucosa debe ser mayor que cero";
        }
    }

    diabetesTipo1.onchange = () => {
        estadoAplicacion.diabetesTipo = Number(diabetesTipo1.value);
        guardarEstado();
    }

    diabetesTipo2.onchange = () => {
        estadoAplicacion.diabetesTipo = Number(diabetesTipo2.value);
        guardarEstado();
    }

    botonCalcular.onclick = () => {
        if(Number(peso.value) > 0 && Number(nivelGlucosa.value) > 0 && estadoAplicacion.diabetesTipo){
            resultado.textContent = `La dosis de insulina recomendada es de ${calcularDosisInsulina(estadoAplicacion.peso, estadoAplicacion.nivelGlucosa, estadoAplicacion.diabetesTipo)}`;
        }
        else
        {
            resultado.textContent = "No se puede realizar el cálculo"
        }
    }

    window.onkeydown = (tecla) => {
        if(tecla.key === "Enter")
        {
            botonCalcular.onclick();
        }
    }
}