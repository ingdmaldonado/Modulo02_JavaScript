
window.onload = () => {

    
    const btnMensaje = document.querySelector("#mensaje");
    const btnLimpiar = document.querySelector("#limpiar");

    btnMensaje.onclick = () => {

        const notaPromedio = document.querySelector("#promedio");
        const MostrarMensaje = document.querySelector("#resultado");

        let promedio = Number(notaPromedio.value);
        
        let mensaje = "";

        MostrarMensaje.innerHTML = `El mensaje es: ${CalificarNotaPromedio(promedio)}`;

    }

const CalificarNotaPromedio = (promedio) => {

    if (promedio <= 4) {
        return "Desaprobado";
    } else if (promedio >4 && promedio <= 7) {
        return "Aprobado";
    } else if (promedio >7 && promedio <= 9) {
        return "Muy Bueno";
    } else if (promedio == 10) {
        return "Excelente";
    }

}

    btnLimpiar.onclick = () => {

        const notaPromedio = document.querySelector("#promedio");
        const MostrarMensaje = document.querySelector("#resultado");

        notaPromedio.value = "";
        MostrarMensaje.innerHTML = "";       

    }

}

