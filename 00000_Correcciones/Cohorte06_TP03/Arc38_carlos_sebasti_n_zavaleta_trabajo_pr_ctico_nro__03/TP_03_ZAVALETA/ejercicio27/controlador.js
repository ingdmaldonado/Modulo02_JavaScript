import { fnContarVocales } from "./modelo.js";
let temp = fnContarVocales("La vida es bella");
console.log(`Mayúsculas: ${temp.cantMay}`);
console.log(`Minúsculas: ${temp.cantMin}`);

const estadoAplicacion = {
    texto : ""
}

window.onload = () => {
    const ingresoTexto = document.querySelector("#idIngresarTexto");
    const botonTexto = document.querySelector("#idBtnTexto");
    const respuesta = document.querySelector("#idTextoRespuesta");
    const guardarDatos = document.querySelector("#idBtnGuardarDatos");
    const recuperarDatos = document.querySelector("#idBtnRecuperarDatos");
    const botonGuardarDatos = document.querySelector("#idBtnGuardarDatos");
    const botonRecuperarDatos = document.querySelector("#idBtnRecuperarDatos");
    
    console.log(ingresoTexto.value);

const fnGuardarDatos = () =>{
    localStorage.setItem("estadoApp",JSON.stringify(estadoAplicacion));
    console.log(`Guardando Datos: ${estadoAplicacion}`);
}
const fnRecuperarDatos = () => {
    let datos;
    let recuperar = localStorage.getItem("estadoApp");
    if (recuperar){
        datos=JSON.parse(recuperar);
        ingresoTexto.value = datos.texto;
        console.log(`Recupero Datos: ${datos.texto}`);
    }
}

botonGuardarDatos.onclick = () => {
    fnGuardarDatos();
}
botonRecuperarDatos.onclick = () => {
    fnRecuperarDatos();
}


let ingreso = "";
ingresoTexto.oninput = () => {
    console.log(ingresoTexto.value);
    estadoAplicacion.texto = ingresoTexto.value;
    ingreso = fnContarVocales(ingresoTexto.value);
}
botonTexto.onclick = () => {
    estadoAplicacion.texto = ingresoTexto.value;
    if (ingreso){
        respuesta.textContent= `Letras Minúsculas: ${ingreso.cantMin} y letras Mayúsculas ${ingreso.cantMay}`;
    } else {
        let ingreso2 = fnContarVocales(ingresoTexto.value);
        respuesta.textContent= `Letras Minúsculas: ${ingreso2.cantMin} y letras Mayúsculas ${ingreso2.cantMay}`;

    }
    
}




}