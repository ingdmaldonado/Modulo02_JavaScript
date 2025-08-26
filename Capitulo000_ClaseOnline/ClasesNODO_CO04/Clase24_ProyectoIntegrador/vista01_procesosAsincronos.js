

window.addEventListener("load",()=>{

  const idBtnSetTimeOut = document.querySelector("#idBtnSetTimeOut");

  const idBtnSetInterval = document.querySelector("#idBtnSetInterval");

  const idPromesas = document.querySelector("#idPromesas");

  const idGuardarEnLocalStorage = document.querySelector("#idGuardarEnLocalStorage");

  const idRecuperarDeLocalStorage = document.querySelector("#idRecuperarDeLocalStorage");

  idBtnSetTimeOut.addEventListener("click",()=>{


    /* Codigo Sincrono */

    console.log("paso 1");
    console.log("paso 2");
    /* Codigo Asíncrono */    
    setTimeout(()=>{
      console.log("paso 3");
    },4000)

    console.log("paso 4");

  })

  idBtnSetInterval.addEventListener("click",()=>{

    setInterval(()=>{

      const ahora = new Date();

      console.log("cada 1 segundos consulto algo " + ahora.toLocaleString());

    },1000);

  });

  idPromesas.addEventListener("click",async ()=>{

    const data = null;

    try 
    {
        console.log("por aqui promesas - fetch");

        const response = await fetch("https://restcountries.com/v3.1/region/americas");

        data = await response.json();

        console.log(data);
      
    } catch (error) 
    {
      console.error("Error al obtener los datos:", error);
    }

  });

  idGuardarEnLocalStorage.addEventListener("click",()=>{

    let vectorDeEmpleados = [
      { id: 1, nombre: "Juan", puesto: "Desarrollador" },
      { id: 2, nombre: "Ana", puesto: "Diseñadora" },
      { id: 3, nombre: "Luis", puesto: "Gerente" }
    ];

    localStorage.setItem("empleados", JSON.stringify(vectorDeEmpleados));

    alert("datos guardados !!!.");

  });

  idRecuperarDeLocalStorage.addEventListener("click",()=>{

    const datosString = localStorage.getItem("empleados");

    const empleados = JSON.parse(datosString);  

    console.log(empleados);

  });

})