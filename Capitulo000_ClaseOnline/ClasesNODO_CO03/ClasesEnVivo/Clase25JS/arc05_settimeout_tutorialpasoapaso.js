

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

    /* esto demora y lo hace en tres segundos */

    /* funcioens callBack anidadas */

    setTimeout(()=>{

      paso1.style.display = "block"; // primero muestra el paso1

      setTimeout(()=>{

        paso2.style.display = "block"; // segundo muestra el paso2

      },4000)

    },3000);


    /*
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
    */

    /* 
    
    Generalmente se utiliza ASINCRONISMO cuando
    se está dependiendo del resultado de algo que
    mi hilo de ejcución de javaScript no lo puede controlar.

        1er) un cliente consulta una deuda

        2do) pasarle la deuda del cliente a la pasarela de pago

        3ro) el cliente ingresrá a esa billetera de pagos
        y efectuará el pago.

        4to) datos en formato JSON, 

          convierto de JSON => objeto literal

          analizo la respuesta

        5to) pueden pasar dos cosas

          1) pago => yo debería registrar ese pago en mi sistema

          2) no pago => 


    
    */ 

            /* 
                100.000 => 7%
            */

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