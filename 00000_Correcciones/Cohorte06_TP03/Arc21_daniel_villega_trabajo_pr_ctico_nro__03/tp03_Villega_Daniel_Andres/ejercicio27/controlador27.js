import {fnCantidadVocales} from "./module.js";

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

    

            idTexto.value = estadoOBJETO.texto;
            




        }

}

window.onload = ()=>{

    console.log(`la aplicación corriendo`);


    const estadoAplicacion = {
    texto: "",
    resultado: 0 ,
};

    const idTexto = document.querySelector("#idTexto");
    const idBtnContar = document.querySelector("#idBtnContar");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const ejecutarContador = () => {
    const texto = idTexto.value;
    
    
    estadoAplicacion.texto = texto;
    estadoAplicacion.resultado = fnCantidadVocales(idTexto);
    
    
    idResultado = `Resultado: ${estadoAplicacion.texto}`;
    console.log("Estado actual:", estadoAplicacion);
};


fnRecuperarEstado();

    //console.log(idTexto,idBtnContar,idResultado);

    idTexto.oninput = ()=>{
        estadoAplicacion.texto = (idTexto.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    

    
    idBtnContar.onclick = ()=>{

        let resultado = fnCantidadVocales(estadoAplicacion.resultado);

    

        console.log(resultado);


        idResultado.textContent = `resultado  ${resultado}`;

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

