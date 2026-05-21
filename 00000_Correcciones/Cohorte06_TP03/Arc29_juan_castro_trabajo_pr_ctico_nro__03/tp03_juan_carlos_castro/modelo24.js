export const fnCalculoTasaSub = (importe) => {

    let resultado = 0
    let impuesto = importe * 3 / 100;
    resultado = importe + impuesto;
    return resultado;

};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){

        let estadoOBJETO = JSON.parse(datoRecuperado);
        idImporte.value = estadoOBJETO.importe;
        
    }
};