/*

Ejercicio Nro. 27:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.

*/

import { fnCuentaVocales , fnCuentaConsonantes, fnCuentaLetrasS, fnCuentaEspacios, fnGuardarEstado, fnRecuperarEstado } from "./modelo.js";

window.onload = ()=>{
    
    const EstadoAplicacion = {CadenaCarct:''}
    const IdCadenaDeCaracteres = document.querySelector("#IdCadenaDeCaracteres")
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");    
/* PERTENECE EJERCICIO 27 */
    const IdContarVocales = document.querySelector("#IdContarVocales")
    const IdCantidadVocales = document.querySelector("#IdCantidadVocales")

    /* PERTENECE EJERCICIO 28 */
    const IdContarConsonantes = document.querySelector("#IdContarConsonantes")
    const IdCantidadConsonantes = document.querySelector("#IdCantidadConsonantes")

    /* PERTENECE EJERCICIO 29 */
    const IdContarLetrasS = document.querySelector("#IdContarLetrasS")
    const IdCantidadLetrasS = document.querySelector("#IdCantidadLetrasS")    

    /* PERTENECE EJERCICIO 30 */
    const IdContarEspacios = document.querySelector("#IdContarEspacios")
    const IdCantidadEspacios = document.querySelector("#IdCantidadEspacios")    


    IdCadenaDeCaracteres.oninput =()=>{
        EstadoAplicacion.CadenaCarct = IdCadenaDeCaracteres.value;

    };

/* PERTENECE EJERCICIO 27 */
    IdContarVocales.onclick = ()=>{
        let CantidadDevocales = fnCuentaVocales(EstadoAplicacion.CadenaCarct);
        IdCantidadVocales.textContent = `La Cantidad de vocales en el texto es ${CantidadDevocales}`;
    };

    /* PERTENECE EJERCICIO 28 */
    IdContarConsonantes.onclick = ()=>{
        let CantidadDeConsonantes = fnCuentaConsonantes(EstadoAplicacion.CadenaCarct);
        IdCantidadConsonantes.textContent = `La Cantidad de Consonantes en el texto es ${CantidadDeConsonantes}`;
    };

    /* PERTENECE EJERCICIO 29 */
    IdContarLetrasS.onclick = ()=>{
        let MasdeDosLetrasS = fnCuentaLetrasS(EstadoAplicacion.CadenaCarct);
        if(MasdeDosLetrasS === true){
            IdCantidadLetrasS.textContent = `Ele Texto SI contiene 2 o mas letras "s"`;
        }
        else{
            IdCantidadLetrasS.textContent = `Ele Texto NO contiene 2 o mas letras "s"`;            
        }

    };

    /* PERTENECE EJERCICIO 30 */
    IdContarEspacios.onclick = ()=>{
        let CantidadDeEspacios = fnCuentaEspacios(EstadoAplicacion.CadenaCarct);
        if(CantidadDeEspacios === true){
            IdCantidadEspacios.textContent = `El Texto SI contiene 3 o mas Espacios`;
        }
        else{
            IdCantidadEspacios.textContent = `El Texto NO contiene 3 o mas Espacios`;            
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
        console.log(DatosRecuperados)    

        IdCadenaDeCaracteres.value = DatosRecuperados.CadenaCarct;
        EstadoAplicacion.CadenaCarct = IdCadenaDeCaracteres.value;

     
    };    

};