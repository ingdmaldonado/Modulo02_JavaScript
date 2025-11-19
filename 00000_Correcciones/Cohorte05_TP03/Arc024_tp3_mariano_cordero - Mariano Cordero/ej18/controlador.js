import { servicioAguasCatSubsuelo } from "./modelo.js";

window.onload = () => {
    let tasaDeSubsuelo = 0;

    tasaDeSubsuelo = Number(prompt(`Ingrese el importe de su Factura`));

    let resultado = servicioAguasCatSubsuelo(tasaDeSubsuelo);

    console.log(` Su monto final es de: $${resultado}`);
};