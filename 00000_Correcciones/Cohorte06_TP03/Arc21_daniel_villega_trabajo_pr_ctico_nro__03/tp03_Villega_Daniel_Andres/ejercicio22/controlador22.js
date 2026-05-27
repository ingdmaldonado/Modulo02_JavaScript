import {fnSobreTasa} from "./modulo.js";

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



            idImporteBase.value = estadoOBJETO.importeBase;
            idTipoBebida.value = estadoOBJETO.tipoBebida;




        }

}
window.onload = ()=>{

    console.log(`la aplicación corriendo`);

const estadoAplicacion = {
    importeBase: 0,
    tipoBebida: 0,
    
};


const idImporteBase = document.querySelector("#idImporteBase");
const idTipoBebida = document.querySelector("#idTipoBebida");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");

fnRecuperarEstado();

    

    idImporteBase.oninput = ()=>{
        estadoAplicacion.importeBase = Number(idImporteBase.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idTipoBebida.oninput = ()=>{
        estadoAplicacion.tipoBebida = Number(idTipoBebida.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    
idBtnCalcular.onclick = ()=>{

    
        let BASE= Number(idImporteBase.value);
        let BEBIDA = Number(idTipoBebida.value);

    
        let resultado = fnSobreTasa (BASE,BEBIDA);

    

        console.log(resultado.toFixed(2));

    
        idResultado.textContent = `Importe Base ${estadoAplicacion.importeBase} - Tipo de bebida ${estadoAplicacion.tipoBebida} - Total: ${resultado.toFixed(2)}`;

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


