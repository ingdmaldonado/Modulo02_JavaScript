export const fnCalcularPromedio = (nota1, nota2, nota3) => {

    let promedio = 0;
    promedio = (nota1 + nota2 + nota3) / 3
    return promedio;  
};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {
        let estadoOBJETO = JSON.parse(datoRecuperado);

        idNota1.value = estadoOBJETO.nota1;
        idNota2.value = estadoOBJETO.nota2;
        idNota3.value = estadoOBJETO.nota3;

    }

};