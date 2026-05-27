export const fnNumeros = (texto) => {

    let resultado = true;
    for (let i = 0; i < texto.length; i++) {

        let numero = texto.charAt(i);
        if (numero >= `0` && numero <= `9`) {
            resultado = false
            break;
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
