import { datos, validarDato, agregarDato } from "./datos19.js";

console.log("Import exitoso:", { datos, validarDato, agregarDato });

/* Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de "Servicios
Públicos de Aguas de Catamarca" y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número */

// Arrow function para calcular tasa de fiscalizacion ENRE (1.2%)
const tasaFiscalizacion = (importeBase) => {
    return importeBase * 0.012;
};

console.log("Antes de window.onload");

window.onload = () => {
    console.log("Window.onload ejecutado");
    
    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idListaResultados = document.querySelector("#idListaResultados");
    
    console.log("Elementos capturados:", idImporteBase, idBtnCalcular, idResultado, idListaResultados);
    
    if (!idImporteBase || !idBtnCalcular || !idResultado || !idListaResultados) {
        console.error("ERROR: Algún elemento no se encontró en el HTML");
        return;
    }
    
    idBtnCalcular.onclick = () => {
        const importeBase = parseFloat(idImporteBase.value);
        console.log("Importe ingresado:", importeBase);
        if (!validarDato(idImporteBase.value) || isNaN(importeBase) || importeBase <= 0) {
            alert("Ingrese un importe valido");
            return;
        }
        const resultado = tasaFiscalizacion(importeBase);
        
        const calculo = {
            importe: importeBase,
            tasa: resultado,
            fecha: new Date().toLocaleString()
        };
        agregarDato(calculo); 
        console.log("Tasa de Fiscalización ENRE calculada:", resultado);
        console.log("Importe Base: $" + importeBase + " - Tasa: $" + resultado.toFixed(2));        
        idResultado.textContent = "Tasa de Fiscalización ENRE: $" + resultado.toFixed(2);
        const todosLosResultados = datos.map(d => {
            return "Importe: $" + d.importe + " - Tasa: $" + d.tasa.toFixed(2);
        });
        console.log("Todos los calculos:", todosLosResultados);
        console.log("Total calculos realizados:", datos.length);
        const nuevoResultado = document.createElement("p");
        nuevoResultado.textContent = "Importe: $" + importeBase + " - Tasa: $" + resultado.toFixed(2);
        idListaResultados.appendChild(nuevoResultado);
        idImporteBase.value = "";
    };
};