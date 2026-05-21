/*
Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro devuelva un texto que diga los siguientes mensajes.
•
Si la nota <= 4 debe devolver “Desaprobado”
•
Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
•
Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
•
Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto

*/

import { fnCalcularNotaFinal, fnGuardarEstado, fnRecuperarEstado } from "./modelo.js";

window.onload = ()=>{

    const EstadoAplicacion = {NotaFin:0};
    const IdNotaFinal = document.querySelector("#IdNotaFinal");
    const IdCalcularNotaFinal = document.querySelector("#IdCalcularNotaFinal");
    const IdPromedioFinal = document.querySelector("#IdPromedioFinal");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    
    IdNotaFinal.oninput = ()=>{
            EstadoAplicacion.NotaFin = Number(IdNotaFinal.value);
            console.log(EstadoAplicacion);

    };

    IdCalcularNotaFinal.onclick = ()=>{
        if(EstadoAplicacion.NotaFin >= 0 && EstadoAplicacion.NotaFin <= 10 )
        {        
            let NotaFinal = fnCalcularNotaFinal(EstadoAplicacion.NotaFin);
            console.log(NotaFinal);
            IdPromedioFinal.textContent = (NotaFinal);
        }
        else
        {
            window.alert("Error en Nota ingresada - Reingrese Nota");
            IdNotaFinal.value = 0;            
        }
    };

    idBtnGuardar.onclick = ()=>{

        fnGuardarEstado(EstadoAplicacion);

        /* (1) convertir a JSON */
        let estadoJSON = JSON.stringify(EstadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(EstadoAplicacion);   
        console.log(DatosRecuperados);   

        IdNotaFinal.value = DatosRecuperados.NotaFin;
        EstadoAplicacion.NotaFin = IdNotaFinal.value;
    
    };     

};