import { version } from "./estado.js";
import { estadoReact } from "./estado.js";


window.onload = function(){
  
  const idTotal1 = document.querySelector("#idTotal1");
  const idContenedor1 = document.querySelector("#idContenedor1");
  const idContenedor2 = document.querySelector("#idContenedor2");
  const idBtnCambiar = document.querySelector("#idBtnCambiar");

  console.log(idTotal1);
  console.log(idContenedor1);
  console.log(idContenedor2);
  
  /* aqui crearia el estado */
  let [estado,setEstado] = estadoReact({nombreVariable:"contadorGoles",valor:0});

  /* aqui muestro el estado y la función */
  console.log(estado);
  console.log(setEstado);

  /* aqui le agrego suscriptores */
  estado.agregarSuscriptor(idTotal1);
  estado.agregarSuscriptor(idContenedor1);
  estado.agregarSuscriptor(idContenedor2);
  
  /* aqui modifico los estados */
  setEstado({nombreVariable:"contadorGoles",valor:27});
  console.log(estado);

  /* aqui modifico los estados */
  setEstado({nombreVariable:"contadorGoles",valor:41});
  console.log(estado);

  /* Evento Click del Boton
  para ver el cambio de estado
  y ver como se cambia ese estado
  en todos los componentes */

  idBtnCambiar.onclick = ()=>{

    setEstado({nombreVariable:"contadorGoles",valor:33});

    console.log(estado);


  };


};






