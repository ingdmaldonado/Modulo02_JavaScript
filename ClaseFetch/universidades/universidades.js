import {fnUniversidades} from "../modelo.js";


window.onload = ()=>{

  const idBtnRecuperarUniversidades = document.querySelector("#idBtnRecuperarUniversidades");

  idBtnRecuperarUniversidades.onclick = async ()=>{

    try {
      const datos = await fnUniversidades();
      console.log(datos);
    } catch (error) {
      alert(`se produjo un error ${error.message}`);
    }
  };

};