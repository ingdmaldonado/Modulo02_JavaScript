
import {fnRecuperarPaises} from "./controllers/controllers.js";


window.addEventListener("load",async ()=>{

  const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");

  idBtnRecuperarPaises.addEventListener("click", async () => {
    let salida = await fnRecuperarPaises();

    if(salida.resultado){
      console.log(salida.data);
    }
    else
    {
      console.log(salida.mensaje);
    }

   
  });


})

