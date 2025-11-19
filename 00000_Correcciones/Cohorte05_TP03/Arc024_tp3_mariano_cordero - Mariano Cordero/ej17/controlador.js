import { calcularImporteBaseAgua } from "./modelo.js";

window.onload = () => {
    
        let ingresarCantidadAgua = 0;

        ingresarCantidadAgua = Number(prompt(`Ingrese los mts Cubicos`));

        let resultado = calcularImporteBaseAgua(ingresarCantidadAgua);

        if (ingresarCantidadAgua <= 0) {
            console.log("No se pueden ingresar números negativos ni 0");

        } else {
            console.log(`El cliente debe abonar ${resultado}`);
        };

    
};
