export const fnPrecioVenta = (importe, margen) => {

    let total = 0;
    total = importe + (importe * margen) / 100
    return total;
};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {
        let estadoOBJETO = JSON.parse(datoRecuperado);

        idImporte.value = estadoOBJETO.importe;
        idMargen.value = estadoOBJETO.margen;

    }

};
