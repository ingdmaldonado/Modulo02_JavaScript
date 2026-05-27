import {fnDosisDeInsulina, fnGuardarEstado , fnRecuperarEstado} from "./modelo26.js";  

window.onload = ()=>{

    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {
        peso:0,
        glucosa:0,
        diabete:0,
    };
    const idNumero1=document.querySelector("#idNumero1");
    const idNumero2=document.querySelector("#idNumero2");
    const idTipo=document.querySelector("#idTipo");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");


    fnRecuperarEstado();
    

        idTipo.oninput = () => {
    
            estadoAplicacion.diabete= Number (idTipo.value);
            fnGuardarEstado(estadoAplicacion);
            console.log (estadoAplicacion);
        };
       
    
        idNumero1.oninput = ()=>{
    
            estadoAplicacion.peso = Number (idNumero1.value);
            fnGuardarEstado(estadoAplicacion);
            console.log (estadoAplicacion);
        };
    
        idNumero2.oninput = () => {
    
            estadoAplicacion.glucosa = Number (idNumero2.value);
            fnGuardarEstado(estadoAplicacion);
            console.log (estadoAplicacion);
        };

        
    
       idTipo.onchange=() => {
    
            estadoAplicacion.diabete = Number (idTipo.value);
            fnGuardarEstado(estadoAplicacion);
            console.log (estadoAplicacion);
            
        };
    
    
    idBtnCalcular.onclick = () => {
    
            let nota1 = Number(idTipo.value);
            let nota2 = Number(idNumero1.value);
            let nota3 = Number(idNumero2.value);
           
    
            let resultado = fnDosisDeInsulina (nota1,nota2,nota3);
           
    
            
            idResultado.textContent=`tipo de diabetes ${estadoAplicacion.diabete}, Nivel de glucosa en sangre ${estadoAplicacion.glucosa}, Peso Corporal (en kilogramos) ${estadoAplicacion.peso}, resultado ${resultado } `;
        };
    
    
            idBtnGuardar.onclick = () => {
    
                console.log(estadoAplicacion);
    
                let estadoJSON= JSON.stringify(estadoAplicacion);
    
                localStorage.setItem("estadoApp",estadoJSON);
            };
    
            idBtnRecuperar.onclick = () => {
    
                fnRecuperarEstado();
    
               
            };
    
    }
    
    