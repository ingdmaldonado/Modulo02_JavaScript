export const fnCalcularTasaENRE= (importeBase) => {
    return importeBase * 0.012;
};


export const fnGuardarEstado =(estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);

    localStorage.setItem("estadoApp", estadoApp);
};

export const fnRecuperarEstado = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");
            console.log(datoRecuperado);

            if (datoRecuperado)

                {
                    let estadoOBJETO = JSON.parse(datoRecuperado);

                    console.log(datoRecuperado);

                    console.log(estadoOBJETO);

                    idImporteBase.value = estadoOBJETO.importeBase;
                    idCategoria.value = estadoOBJETO.categoria;
                    
                    

                }
};