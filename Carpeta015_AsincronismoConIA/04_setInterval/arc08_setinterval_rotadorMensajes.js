
const estadoAplicacion = {
  mensajes: [
    "Tip 1: Usá let y const en lugar de var.",
    "Tip 2: Recordá que fetch() es asincrónico.",
    "Tip 3: No olvides usar clearInterval cuando sea necesario.",
    "Tip 4: JavaScript es single-threaded."
  ],
  indice: 0
};

/*
const fnRotarMensajes = () => {
  const idMensaje = document.querySelector("#idMensaje");

  setInterval(() => {
    idMensaje.textContent = estadoAplicacion.mensajes[estadoAplicacion.indice];
    estadoAplicacion.indice++;

    if (estadoAplicacion.indice >= estadoAplicacion.mensajes.length) {
      estadoAplicacion.indice = 0;
    }
  }, 3000);
};
*/

const fnRotarMensajes = ()=>
  {
  
    console.log("que esta pasando ?");

    setInterval(()=>{

      let indiceMensaje = estadoAplicacion.indice;

      if(indiceMensaje < estadoAplicacion.mensajes.length)
        {
          idMensaje.textContent = estadoAplicacion.mensajes[indiceMensaje];
          estadoAplicacion.indice = indiceMensaje + 1;
        }
      else
        {
          estadoAplicacion.indice = 0;
          idMensaje.textContent = estadoAplicacion.mensajes[estadoAplicacion.indice];
        }
    },2000);
  };

window.addEventListener("load",()=>{

  const idMensaje = document.querySelector("#idMensaje");


  fnRotarMensajes();

});

