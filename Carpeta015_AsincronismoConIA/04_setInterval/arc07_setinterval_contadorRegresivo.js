
  const estadoAplicacion = 
  {
    cantidadPasos:10
  }

window.addEventListener("load", () => 
  {
  
    const idBtnIniciar = document.querySelector("#idBtnIniciar");
    const idContador = document.querySelector("#idContador");
 
 
    idBtnIniciar.addEventListener("click",()=>{
      
      idContador.textContent = estadoAplicacion.cantidadPasos;

      const repeticion = setInterval(()=>{
        estadoAplicacion.cantidadPasos = estadoAplicacion.cantidadPasos - 1;
        idContador.textContent = estadoAplicacion.cantidadPasos;
        if (estadoAplicacion.cantidadPasos === 0) 
          {
            clearInterval(repeticion);        
          }

      },1000); 
    });
});
