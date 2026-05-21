


/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {texto:"",hayNumero:false,digito:""};

    const texto = document.querySelector("#texto");   

    const btnVerificar = document.querySelector("#verificarNumeros");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(texto);
    console.log(btnVerificar);
    console.log(btnLimpiar);
    console.log(resultado);    

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnVerificar.onclick = () => {
               
        resultado.innerHTML = `¿El texto tiene algun números? -> ${contarNumeros(texto.value) ? "Sí" : "No"}`;       

    }

const contarNumeros = (texto) => {   
     let cantidadDeNumeros = 0;
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (letra >= "0" && letra <= "9") {
            estadoAplicacion.hayNumero = true;
            estadoAplicacion.digito = letra;
            console.log(estadoAplicacion);
            return true;                        
        }
    }
    estadoAplicacion.hayNumero = false;    
    console.log(estadoAplicacion);        
    return false;
}

texto.oninput = () => {
    estadoAplicacion.texto = texto.value;
    console.log(estadoAplicacion);
}

btnLimpiar.onclick = () => {
        estadoAplicacion.texto = "";
        estadoAplicacion.hayNumero = false;
        estadoAplicacion.digito = "";
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
}

}