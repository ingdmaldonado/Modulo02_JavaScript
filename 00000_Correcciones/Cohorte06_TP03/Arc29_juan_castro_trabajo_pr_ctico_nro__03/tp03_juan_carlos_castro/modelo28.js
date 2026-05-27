export const fnCantidadConsonantes = (texto) => {

    let resultado = 0;
    for (let i = 0; i < texto.length; i++) {

        let consonante = texto.charAt(i).toUpperCase();
        if (consonante !== `A` && consonante !== `E` && consonante !== `I` && consonante !== `O` && consonante !== `U`) {
            resultado = resultado + 1;
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
        idTexto.value = idTexto.texto;
    }

};