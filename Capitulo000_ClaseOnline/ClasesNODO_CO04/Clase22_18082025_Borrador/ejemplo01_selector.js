import { paises } from "./datos.js";

window.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#select-paises");

  const optionsHTML = paises.map(function (p) {
    const linea = `<option value="${p.nombre}" id="${p.id}">${p.nombre} - ${p.continente}</option>`;
    return linea;
  });

  const htmlFinal = optionsHTML.join("");
  select.innerHTML = htmlFinal;
});
