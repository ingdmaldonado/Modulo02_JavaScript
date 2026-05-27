


/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {texto:"",hayLetra:false,catidadDeS:0};

    const texto = document.querySelector("#texto");   

    const btnVerificar = document.querySelector("#verificarS");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(texto);
    console.log(btnVerificar);
    console.log(btnLimpiar);
    console.log(resultado);    

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnVerificar.onclick = () => {
               
        resultado.innerHTML = `¿El texto contienen al menos 2 letras S en el texto? -> ${contarLetrasS(texto.value) ? "Sí" : "No"}`;       

    }

const contarLetrasS = (texto) => {   
     let cantidadDeS = 0;
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (letra == "s") {
            cantidadDeS++;
        }
    }
    estadoAplicacion.catidadDeS = cantidadDeS;
    estadoAplicacion.hayLetra = cantidadDeS >= 2 ? true : false;
    console.log(estadoAplicacion);        
    return cantidadDeS >= 2 ? true : false;
}

texto.oninput = () => {
    estadoAplicacion.texto = texto.value;
    console.log(estadoAplicacion);
}

btnLimpiar.onclick = () => {
        estadoAplicacion.texto = "";
        estadoAplicacion.catidadDeS = 0;
        estadoAplicacion.hayLetra = false;
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
}

}