import { noTieneNumeros } from "./modelo25.js";
const form = document.querySelector("#form-ej25");
const salida = document.querySelector("#resultado25");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const txt = document.querySelector("#texto25").value;

    if (!txt) {
        salida.textContent = "Ingresá una cadena.";
        return;
    }

    const r = noTieneNumeros(txt);

    salida.textContent = "¿La cadena no contiene números? → " + r;
});
