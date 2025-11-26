import { verificaciones, validarTexto, agregarVerificacion } from "./datos24.js";

/* Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false). */

// Arrow function para verificar si tiene al menos tres espacios
const tieneTresEspacios = (texto) => {
    let contadorEspacios = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ') {
            contadorEspacios++;
            
            // Si encontramos el tercer espacio, interrumpimos y retornamos true
            if (contadorEspacios === 3) {
                return true;
            }
        }
    }
    
    // Si terminamos el ciclo sin encontrar 3 espacios, retornamos false
    return false;
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
        
        const resultado = tieneTresEspacios(texto);
        console.log("Resultado:", resultado);
        
        const verificacion = {
            texto: texto,
            tieneTresEspacios: resultado,
            fecha: new Date().toLocaleString()
        };
        
        agregarVerificacion(verificacion);
        
        const textoResultado = resultado ? "SI tiene al menos tres espacios" : "NO tiene al menos tres espacios";
        idResultado.textContent = "El texto '" + texto + "' " + textoResultado;
        
        const todasLasVerificaciones = verificaciones.map(v => {
            const texto = v.tieneTresEspacios ? "SI" : "NO";
            return "Texto: '" + v.texto + "' - " + texto + " tiene tres espacios";
        });
        console.log("Todas las verificaciones:", todasLasVerificaciones);
        
        const nuevoResultado = document.createElement("p");
        const textoNuevo = resultado ? "SI" : "NO";
        nuevoResultado.textContent = "'" + texto + "' - " + textoNuevo + " tiene tres espacios";
        idListaResultados.appendChild(nuevoResultado);
        
        idTexto.value = "";
    };
};
