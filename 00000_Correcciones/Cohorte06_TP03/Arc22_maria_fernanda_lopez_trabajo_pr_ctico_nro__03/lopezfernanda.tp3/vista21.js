/* Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto */
 
import {fnNotaPromedio} from "./modelo21.js";

window.onload = ()=>{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = {
        desaprobado: 0,
        aprobado: 0,
        muyBueno: 0,
        excelente: 0,
        notaPromedio: 0,
    
    }

    const IdNotaPromedio = document.querySelector ("#IdNotaPromedio");
    const IdBtnRegistrar = document.querySelector ("#IdBtnRegistrar");
    const IdResultado = document.querySelector ("#IdResultado");
    const IdBtnGuardar = document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");

    IdNotaPromedio.oninput = ()=>{
        estadoAplicacion.notaPromedio = Number(IdNotaPromedio.value);
    };

    IdBtnRegistrar.onclick= ()=>{
        estadoAplicacion.notaPromedio = Number(IdNotaPromedio.value); 
        let resultado = fnNotaPromedio (estadoAplicacion.notaPromedio);

        estadoAplicacion.resultado= resultado;

        console.log (`Nota Promedio`,estadoAplicacion.notaPromedio);
        console.log(`Condición del alumno:`, resultado);


        IdResultado.textContent= `Nota Promedio: ${estadoAplicacion.notaPromedio}.Condicion del alumno : ${resultado}`;

        console.log(estadoAplicacion);
    };

    IdBtnGuardar.onclick = ()=>{
        
        let estadoJSON= JSON.stringify (estadoAplicacion);
        localStorage.setItem ("estadoApp", estadoJSON);
    };

        IdBtnRecuperar.onclick = ()=>{
        let promediosRecuperados= localStorage.getItem ("estadoApp");

        if (promediosRecuperados)
        {
            let estadoObjeto= JSON.parse (promediosRecuperados);
            console.log (promediosRecuperados);
            console.log (estadoObjeto);
        }
        console.log (`Promedio recuperado:`, promediosRecuperados);
        };
    };
