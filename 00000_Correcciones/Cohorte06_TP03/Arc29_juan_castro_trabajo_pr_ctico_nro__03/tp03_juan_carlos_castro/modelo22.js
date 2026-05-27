export const fnTotalImporte = (importe, tipo) => {

    let resultado = 0;
    let impuesto = 0;
    switch (tipo) {
        case 1:
            impuesto = importe * 5 / 1000;
            resultado = importe + impuesto; 
            break;
        case 2:
            impuesto = importe * 1 / 1000;
            resultado = importe + impuesto; 
            break;
        case 3:
            impuesto = importe * 7 / 1000;
            resultado = importe + impuesto; 
            break;
        case 4:
            impuesto = importe * 2 / 1000;
            resultado = importe + impuesto; 
            break;
        case 5:
            impuesto = importe * 15 / 1000;
            resultado = importe + impuesto; 
            break;
        default:
            impuesto = importe * 1 / 1000;
            resultado = importe + impuesto; 
            break;
    }

    return resultado;

};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadpOBJETO = JSON.parse(datoRecuperado);

        idImporte.value = estadoOBJETO.importe;
        idSelectorBebida.value = estadoOBJETO.tipo;
        
    }

}; 