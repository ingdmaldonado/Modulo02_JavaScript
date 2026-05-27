export const fnTasaEnre = (importe) => {

    let resultado = 0;
    resultado = importe * 1.2 / 100;
    
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
        idImporteTasa.value = estadoOBJETO.importe;
        
    }
};