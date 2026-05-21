


/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {texto:0,catidadVocales:0};

    const texto = document.querySelector("#texto");   

    const btnContarVocales = document.querySelector("#contarVocales");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(texto);
    console.log(btnContarVocales);
    console.log(btnLimpiar);
    console.log(resultado);    

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnContarVocales.onclick = () => {

        const cantidadVocales = contarVocales(texto.value);        
        resultado.innerHTML = `La cantidad de vocales en el texto es: ${cantidadVocales}`;
        estadoAplicacion.catidadVocales = cantidadVocales;
        console.log(estadoAplicacion);

    }

const contarVocales = (texto) => {   
     let cantidadVocales = 0;
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            cantidadVocales++;
        }
    }        
    return cantidadVocales;
}

texto.oninput = () => {
    estadoAplicacion.texto = texto.value;
    console.log(estadoAplicacion);
}

btnLimpiar.onclick = () => {
        estadoAplicacion.texto = "";
        estadoAplicacion.catidadVocales = 0;
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
}

}