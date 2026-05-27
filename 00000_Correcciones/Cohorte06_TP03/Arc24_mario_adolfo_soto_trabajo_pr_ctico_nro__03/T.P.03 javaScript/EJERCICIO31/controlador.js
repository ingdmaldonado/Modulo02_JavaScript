import {fnNumero} from "./modelo.js"
/*Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.*/


window.onload = ()=>{
    console.log(`la pagina esta cargada`);
    const estaddoAplicacion = {
        texto : " ",
    }

    const idTexto = document.querySelector("#idTexto");
    const resultado = document.querySelector("#resultado");
    const btnGuardar = document.querySelector ("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const btncalcular = document.querySelector ("#btncalcular");

    idTexto.oninput =()=>{ 
        estaddoAplicacion.texto= idTexto.value 
        };

    btncalcular.onclick =()=>{
        let cadenaDeTexto1 = fnNumero(estaddoAplicacion.texto) ; 
        resultado.textContent =`contiene numeros ${cadenaDeTexto1}`;


    };
    //Guardar
    btnGuardar.onclick = ()=>{
        let datosJSON =JSON.stringify(estaddoAplicacion)
        localStorage.setItem ("misdatos",datosJSON);
    };

    btnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem ("misdatos");
        if(datosJSON){
            let objeto = JSON.parse(datosJSON);
            console.log(objeto);
            idTexto.value = objeto.texto;
        }
    };

    

};

