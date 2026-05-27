export const fnEstadoAlumno = (nota) => {

    let estado = `Indefinido`;
    if (nota === 10) {
        estado = `Excelente`;
    } else if (nota <= 9 && nota > 7) {
        estado = `Muy Bueno`;
    } else if (nota > 4 && nota <= 7) {
        estado = `Aprobado`
    } else if (nota <= 4) {
        estado = `Desaprobado`
    } else {
        alert(`Ingrese una nota valida.`)
    }

    return estado;

};

export const fnGuardar = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);

};

export const fnRecuperar = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);

        idNota.value = estadoOBJETO.nota;
        
    }

};