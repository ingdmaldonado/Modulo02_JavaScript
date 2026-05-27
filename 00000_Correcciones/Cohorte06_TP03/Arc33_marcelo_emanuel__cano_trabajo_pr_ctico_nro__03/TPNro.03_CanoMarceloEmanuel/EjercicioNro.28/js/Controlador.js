


/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {texto:0,catidadConsonantes:0};

    const texto = document.querySelector("#texto");   

    const btnContarConsonantes = document.querySelector("#contarConsonantes");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(texto);
    console.log(btnContarConsonantes);
    console.log(btnLimpiar);
    console.log(resultado);    

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnContarConsonantes.onclick = () => {

        const cantidadConsonantes = contarConsonantes(texto.value);        
        resultado.innerHTML = `La cantidad de consonantes en el texto es: ${cantidadConsonantes}`;       

    }

const contarConsonantes = (texto) => {   
     let cantidadConsonantes = 0;
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u" && letra != " ") {
            cantidadConsonantes++;
        }
    }
    estadoAplicacion.catidadConsonantes = cantidadConsonantes;
    console.log(estadoAplicacion);        
    return cantidadConsonantes;
}

texto.oninput = () => {
    estadoAplicacion.texto = texto.value;
    console.log(estadoAplicacion);
}

btnLimpiar.onclick = () => {
        estadoAplicacion.texto = "";
        estadoAplicacion.catidadConsonantes = 0;
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
}

}