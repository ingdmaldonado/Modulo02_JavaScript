import { verificaciones, validarPalabra, agregarVerificacion } from "./datos23.js";

/* Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras "s"
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false). */

// Arrow function para verificar si tiene al menos dos letras "s"
const tieneDosLetrasS = (palabra) => {
    let contador = 0;
    
    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra[i];
        
        if (caracter === 's' || caracter === 'S') {
            contador++;
            if (contador >= 2) {
                return true;
            }
        }
    }
    return false;
};

window.onload = () => {
    const idPalabra = document.querySelector("#idPalabra");
    const idBtnVerificar = document.querySelector("#idBtnVerificar");
    const idResultado = document.querySelector("#idResultado");
    const idListaResultados = document.querySelector("#idListaResultados");
    console.log("Elementos capturados:", idPalabra, idBtnVerificar, idResultado, idListaResultados);
    
    idBtnVerificar.onclick = () => {
        const palabra = idPalabra.value;
        console.log("Palabra ingresada:", palabra);
        
        if (!validarPalabra(palabra)) {
            alert("Ingrese una palabra valida");
            return;
        }
        
        const resultado = tieneDosLetrasS(palabra);
        console.log("Resultado:", resultado);
        
        const verificacion = {
            palabra: palabra,
            tieneDosS: resultado,
            fecha: new Date().toLocaleString()
        };
        
        agregarVerificacion(verificacion);
        
        const textoResultado = resultado ? "SI tiene al menos dos letras 's'" : "NO tiene al menos dos letras 's'";
        idResultado.textContent = "La palabra '" + palabra + "' " + textoResultado;
        
        const todasLasVerificaciones = verificaciones.map(v => {
            const texto = v.tieneDosS ? "SI" : "NO";
            return "Palabra: '" + v.palabra + "' - " + texto + " tiene dos 's'";
        });
        console.log("Todas las verificaciones:", todasLasVerificaciones);
        
        const nuevoResultado = document.createElement("p");
        const textoNuevo = resultado ? "SI" : "NO";
        nuevoResultado.textContent = "'" + palabra + "' - " + textoNuevo + " tiene dos 's'";
        idListaResultados.appendChild(nuevoResultado);
        
        idPalabra.value = "";
    };
};
