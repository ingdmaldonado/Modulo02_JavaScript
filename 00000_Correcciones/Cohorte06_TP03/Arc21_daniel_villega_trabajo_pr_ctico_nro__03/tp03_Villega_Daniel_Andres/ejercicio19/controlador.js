import {fnCalculoPrecioVenta} from "./modelo.js";



 const fnGuardarEstado = (estadoAplicacion)=>{

   
    let estadoApp = JSON.stringify(estadoAplicacion);

   
    localStorage.setItem("estadoApp",estadoApp);

};

const fnRecuperarEstado = ()=>{

   
        let datoRecuperado = localStorage.getItem("estadoApp");
       
        if(datoRecuperado)
        {
            let estadoOBJETO = JSON.parse(datoRecuperado);

            console.log(datoRecuperado);

            console.log(estadoOBJETO);

   

            idImporteCompra.value = estadoOBJETO.importeCompra;
            idMargen.value = estadoOBJETO.margen;




        }

}

window.onload = ()=>{

    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {
        importeCompra:0,
        margen:0,
    };

    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");


    fnRecuperarEstado();

    console.log(idImporteCompra,idMargen,idBtnCalcular,idResultado);

    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra = Number(idImporteCompra.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idMargen.oninput = ()=>{
        estadoAplicacion.margen = Number(idMargen.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

   
    idBtnCalcular.onclick = ()=>{

   
        let resultado = fnCalculoPrecioVenta(estadoAplicacion.importeCompra,estadoAplicacion.margen);

   

        console.log(resultado.toFixed(2));

   
        idResultado.textContent = `Importe Compra ${estadoAplicacion.importeCompra} - Margen ${estadoAplicacion.margen} - Total:= ${resultado}`;

    };

   
    idBtnGuardar.onclick = ()=>{

   

        console.log(estadoAplicacion);

   

        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);

   
        localStorage.setItem("estadoApp",estadoJSON);

    };

   
    idBtnRecuperar.onclick = ()=>{

      
        fnRecuperarEstado();       
       
      

    };
   
    
};

 
