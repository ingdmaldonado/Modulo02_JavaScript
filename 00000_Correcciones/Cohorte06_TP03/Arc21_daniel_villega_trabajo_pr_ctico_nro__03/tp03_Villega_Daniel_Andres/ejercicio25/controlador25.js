import {fnCalcularTasaENRE, fnRecuperarEstado, fnGuardarEstado } from "./module.js";



window.onload =() => {
    console.log(`corriendo`);

   const estadoAplicacion = {
    importeBase: 0,
    categoria: "",
    resultado: 0,
};



        const idImporteBase=document.querySelector("#idImporteBase");
        const idCategoria=document.querySelector("#idCategoria");
        const idBtnCalcular=document.querySelector("#idBtnCalcular");
    
        const idBtnGuardar=document.querySelector("#idBtnGuardar");
        const idBtnRecuperar=document.querySelector("#idBtnRecuperar");
    
        const idResultado=document.querySelector("#idResultado");
    
        fnRecuperarEstado();
    
        idImporteBase.oninput = () => {
            
                    estadoAplicacion.importeBase= Number (idImporteBase.value);
                    fnGuardarEstado(estadoAplicacion);
                    console.log (estadoAplicacion);
                };

         idCategoria.oninput = () => {
            
                    estadoAplicacion.categoria= (idCategoria.value);
                    fnGuardarEstado(estadoAplicacion);
                    console.log (estadoAplicacion);
                };        
               
            
                
    
        idBtnCalcular.onclick = () => {
    
            let resultado = fnCalcularTasaENRE(estadoAplicacion.importeBase);
            console.log(resultado);
    
            idResultado.textContent=`monto ingresado ${estadoAplicacion.importeBase} categoria ${ estadoAplicacion.categoria} resultado ${resultado} `;
        };
    
        idBtnGuardar.onclick = () => {
    
            let datosJSON = JSON.stringify(estadoAplicacion);
            
            console.log(datosJSON);
    
            localStorage.setItem("datosAPP", datosJSON);
        };
    
        idBtnRecuperar.onclick = () => {
    
            let datosJSON = localStorage.getItem("datosAPP");
            
            let datosObjeto = JSON.parse(datosJSON);
    
            console.log(datosJSON);
            console.log(datosObjeto);
    
            idImporteBase.value = datosObjeto.numero;
        };
    };
