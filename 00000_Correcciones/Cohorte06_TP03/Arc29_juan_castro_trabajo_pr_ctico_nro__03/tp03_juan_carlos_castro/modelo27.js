export const fnCantidadVocales = (texto) => {

    let resultado = 0;
    for (let i = 0; i < texto.length; i++) {

        let vocal = texto.charAt(i).toUpperCase();
        if (vocal === `A` || vocal === `E` || vocal === `I` || vocal === `O` || vocal === `U`) {
            resultado = resultado + 1;
        }
    }
    return resultado
};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {
        let estadoOBJETO = JSON.parse(datoRecuperado);
        idTexto.value = idTexto.texto;
    }

};