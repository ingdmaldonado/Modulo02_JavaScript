import { conteos, validarTexto, agregarConteo } from "./datos21.js";

/* Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número. */

// Arrow function para contar vocales usando ciclo for
const contarVocales = (texto) => {
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
            caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
            contador++;
        }
    }
    
    return contador;
};

window.onload = () => {
    const idTexto = document.querySelector("#idTexto");
    const idBtnContar = document.querySelector("#idBtnContar");
    const idResultado = document.querySelector("#idResultado");
    const idListaResultados = document.querySelector("#idListaResultados");
    
    console.log("Elementos capturados:", idTexto, idBtnContar, idResultado, idListaResultados);
    
    idBtnContar.onclick = () => {
        const texto = idTexto.value;
        
        console.log("Texto ingresado:", texto);
        
        if (!validarTexto(texto)) {
            alert("Ingrese un texto valido");
            return;
        }
        
        const cantidadVocales = contarVocales(texto);
        
        const conteo = {
            texto: texto,
            vocales: cantidadVocales,
            fecha: new Date().toLocaleString()
        };
        
        agregarConteo(conteo);
        
        console.log("Vocales encontradas:", cantidadVocales);
        
        idResultado.textContent = "El texto tiene " + cantidadVocales + " vocales";
        
        const todosLosConteos = conteos.map(c => {
            return "Texto: '" + c.texto + "' - Vocales: " + c.vocales;
        });
        
        console.log("Todos los conteos:", todosLosConteos);
        console.log("Total textos analizados:", conteos.length);
        
        const nuevoResultado = document.createElement("p");
        nuevoResultado.textContent = "'" + texto + "' tiene " + cantidadVocales + " vocales";
        idListaResultados.appendChild(nuevoResultado);
        
        idTexto.value = "";
    };
};