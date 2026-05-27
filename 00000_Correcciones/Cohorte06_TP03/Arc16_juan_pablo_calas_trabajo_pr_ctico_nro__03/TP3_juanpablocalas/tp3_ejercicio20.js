/*

Ejercicio Nro. 20:
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número

*/


import { FnPromedioNotas, fnAcumulaNotas, fnCuentaNotas, fnGuardarEstado, fnRecuperarEstado } from "./modelo.js";


window.onload = ()=>{
    const EstadoAplicacion = {Nota:0,SumaNotas:0,CantNotas:0};
    const IdNotas = document.querySelector("#IdNotas");
    const IdCargaNota = document.querySelector("#IdCargaNota");
    const IdSumaNotas = document.querySelector("#IdSumaNotas");
    const IdCantNotas = document.querySelector("#IdCantNotas");
    const IdCalcularPromedio = document.querySelector("#IdCalcularPromedio");
    const IdPromedio = document.querySelector("#IdPromedio");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");    

    IdNotas.oninput = ()=>{
        EstadoAplicacion.Nota = Number(IdNotas.value);
        console.log(EstadoAplicacion);

        };
    IdCargaNota.onclick = ()=>{
        if(EstadoAplicacion.Nota  >= 0 && EstadoAplicacion.Nota <= 10 )
        {
            let SumaNotas = fnAcumulaNotas(EstadoAplicacion.Nota);
            IdSumaNotas.value = SumaNotas;
            let CantidadNotas = fnCuentaNotas();
            IdCantNotas.value = CantidadNotas; 
            EstadoAplicacion.SumaNotas =  Number(IdSumaNotas.value); 
            EstadoAplicacion.CantNotas = Number(IdCantNotas.value);
            console.log(EstadoAplicacion);
            IdNotas.value = 0;
        }
        else
            {
                window.alert("Error en Nota ingresada - Reingrese Nota");
                IdNotas.value = 0;
            }    

    };    
    IdCalcularPromedio.onclick = ()=>{
        let Promedio = FnPromedioNotas(IdSumaNotas.value, IdCantNotas.value);
        IdPromedio.textContent = `El Promedio Final es ${Promedio}`;
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

        IdNotas.value = DatosRecuperados.Nota;
        IdSumaNotas.value = DatosRecuperados.SumaNotas;
        IdCantNotas.value = DatosRecuperados.CantNotas
        EstadoAplicacion.Nota = IdNotas.value;
        EstadoAplicacion.SumaNotas = IdSumaNotas.value;
        EstadoAplicacion.CantNotas = IdCantNotas.value;

    };      

};