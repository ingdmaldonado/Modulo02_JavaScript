export const fnCalcularImporteAgua = (mCubicos) => {

    let resultado = 0;
    if (mCubicos >= 70) {
        resultado = (50 * 350.00) + (20 * 555.20) + (15 * 1552.20);
    } else if (mCubicos < 70 && mCubicos > 50) {
        resultado = (50 * 350) + (5 * 555.20);
    }else if(mCubicos <= 50){
        resultado = 50 * 350.00
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
        let estadoOBJETO = JSON.parse(datoRecuperado);

        idMetrosCubicos.value = estadoOBJETO.metrosCubicos;
        
    }
};
