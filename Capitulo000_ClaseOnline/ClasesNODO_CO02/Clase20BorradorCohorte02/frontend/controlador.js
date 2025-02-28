
const obtenerDatos = async ()=>
 {
    let datos = "";
    try {
      const respuesta = await fetch('http://localhost:3000/api/personas');

      datos = await respuesta.json();
    
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }

    return datos;
  }
  

window.addEventListener("load",()=>
    {
        console.log("running");

        const idBtnAsincronismo = document.querySelector("#idBtnAsincronismo");

        const idBtnRecuperarPersonas = document.querySelector("#idBtnRecuperarPersonas");

        console.log(idBtnAsincronismo)
        
        idBtnAsincronismo.addEventListener("click",()=>
            {
                console.log("este es el paso 1");

                setTimeout(()=>{

                    console.log("este es el paso 2");

                },5000);

                console.log("este es el paso 3");


            })

        idBtnRecuperarPersonas.addEventListener("click",async ()=>
            {

                alert("recuperamos datos de personas");

                let resultados = await obtenerDatos();

                console.log(resultados);



            })

    })