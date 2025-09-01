
import {fnClickEnBotonRecuperar} from "./controlador.js";



window.addEventListener("load",()=>{

    console.log("aplicacion corriendo");

    const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");

    // El click del boton se delegará en la fnClickEnBotonRecuperar
    idBtnRecuperarPaises.addEventListener("click",fnClickEnBotonRecuperar);
  
});