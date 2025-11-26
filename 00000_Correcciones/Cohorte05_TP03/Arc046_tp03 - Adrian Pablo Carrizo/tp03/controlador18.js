/* 
Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número
*/
import { porcentajeTasa, validarImporte, calculosRealizados } from "./datos18.js";

// Arrow function para calcular la tasa de subsuelo (3% del importe base)
const calcularTasaSubsuelo = (importeBase) => {
    return importeBase * porcentajeTasa;
};

window.onload = () => {
    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    
    console.log("Elementos capturados:", idImporteBase, idBtnCalcular, idResultado);

    idBtnCalcular.onclick = () => {
        const importeBase = parseFloat(idImporteBase.value);
        
        if (!validarImporte(importeBase)) {
            alert("Ingrese un importe valido");
            return;
        }
        const tasaSubsuelo = calcularTasaSubsuelo(importeBase);
        const calculo = {
            importe: importeBase,
            tasa: tasaSubsuelo,
            fecha: new Date().toLocaleString()
        };
        calculosRealizados.push(calculo);
        idResultado.textContent = "Importe Base: $" + importeBase + " - Tasa Subsuelo: $" + tasaSubsuelo.toFixed(2);
        const resumenCalculos = calculosRealizados.map(c => {
            return "Importe: $" + c.importe + ", Tasa: $" + c.tasa.toFixed(2);
        });
        console.log("Calculos realizados:", resumenCalculos);
        console.log("Total calculos:", calculosRealizados.length);
        
        idImporteBase.value = "";
    };
};