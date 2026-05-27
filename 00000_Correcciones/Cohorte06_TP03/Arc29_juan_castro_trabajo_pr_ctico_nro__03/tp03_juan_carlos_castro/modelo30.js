export const fnCantidadEspacios = (texto) => {

    let resultado = 0;
    for (let i = 0; i < texto.length; i++) {

        let espacio = texto.charAt(i);
        if (espacio === " ") {
            resultado = resultado + 1;
        } if (resultado >= 3) {
            break;
        }
    }
    if (resultado >= 3) {
        resultado = true;
    } else {
        resultado = false;
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