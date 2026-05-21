export const fnDosisInsulina = (glucosa, peso, tipo) => {

    let resultado = 0
    if (tipo === 1) {
        if (glucosa > 180) {
            resultado = (peso * 50 / 100) + (glucosa * 50 / 100);
        } else {
            resultado = peso * 50 / 100;
        }
    }

    if (tipo === 2) {
        if (glucosa > 180) {
            resultado = (peso * 20 / 100) + (glucosa * 50 / 100);
        } else {
            resultado = (peso * 20 / 100);
        }
    }

    return resultado;

};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {
        let estadoOBJETO = JSON.parse(datoRecuperado);
        idGlucosa.value = estadoOBJETO.glucosa;
        idPeso.value = estadoOBJETO.peso;
        idTipo.value = estadoOBJETO.tipo;
    }

};