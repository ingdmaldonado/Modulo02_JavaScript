window.addEventListener("load", () =>
  {

    const paso1 = document.querySelector("#paso1");
    const paso2 = document.querySelector("#paso2");
    const paso3 = document.querySelector("#paso3");
    const paso4 = document.querySelector("#paso4");
    const paso5 = document.querySelector("#paso5");


    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "none";
    paso4.style.display = "none";
    paso5.style.display = "none";

    console.log(paso1);
    console.log(paso2);
    console.log(paso3);

    setTimeout(()=>{
      paso1.style.display = "block";

      setTimeout(()=>{
        paso2.style.display = "block";

        setTimeout(()=>{
          paso3.style.display = "block";

          setTimeout(()=>{
            paso4.style.display = "block";

            setTimeout(()=>{
              paso5.style.display = "block";
            },2000);
          },3000);

        },2000);

      },2000);

    },2000);

});

/*

  Este patrón se ve mucho en:
    Formularios de contacto
    Botones de compra o de login
  Captchas de reintento

  Juegos o encuestas donde el botón 
  debe esperar un tiempo antes de 
  permitir otro clic

*/