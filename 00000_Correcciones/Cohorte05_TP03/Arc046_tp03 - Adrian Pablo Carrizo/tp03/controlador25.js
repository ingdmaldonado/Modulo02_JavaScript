import { verificaciones, validarTexto, agregarVerificacion } from "./datos25.js";

/* Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición "no contiene números".
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false). */

// Arrow function para verificar si no contiene números
const noTieneNumeros = (texto) => {
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (caracter >= '0' && caracter <= '9') {
            return false;
        }
    }
    return true;
};

window.onload = () => {
    const idTexto = document.querySelector("#idTexto");
    const idBtnVerificar = document.querySelector("#idBtnVerificar");
    const idResultado = document.querySelector("#idResultado");
    const idListaResultados = document.querySelector("#idListaResultados");
    console.log("Elementos capturados:", idTexto, idBtnVerificar, idResultado, idListaResultados);

    
    idBtnVerificar.onclick = () => {
        const texto = idTexto.value;
        console.log("Texto ingresado:", texto);
        
        if (!validarTexto(texto)) {
            alert("Ingrese un texto valido");
            return;
        }
        
        const resultado = noTieneNumeros(texto);
        console.log("Resultado:", resultado);
        
        const verificacion = {
            texto: texto,
            noTieneNumeros: resultado,
            fecha: new Date().toLocaleString()
        };
        
        agregarVerificacion(verificacion);
        
        const textoResultado = resultado ? "NO tiene números" : "SI tiene números";
        idResultado.textContent = "El texto '" + texto + "' " + textoResultado;
        
        const todasLasVerificaciones = verificaciones.map(v => {
            const texto = v.noTieneNumeros ? "NO" : "SI";
            return "Texto: '" + v.texto + "' - " + texto + " tiene números";
        });
        console.log("Todas las verificaciones:", todasLasVerificaciones);
        
        const nuevoResultado = document.createElement("p");
        const textoNuevo = resultado ? "NO" : "SI";
        nuevoResultado.textContent = "'" + texto + "' - " + textoNuevo + " tiene números";
        idListaResultados.appendChild(nuevoResultado);
        
        idTexto.value = "";
    };
};