import { paises } from "./datos.js";

window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("#lista-paises");

  const itemsHTML = paises.map(function (p) {
    const linea = `
      <li data-id="${p.id}">
        <img src="${p.bandera}" alt="Bandera de ${p.nombre}" loading="lazy">
        <strong>${p.nombre}</strong><br>
        Capital: ${p.capital} &middot; Idioma: ${p.idioma} &middot; Continente: ${p.continente}
      </li>
    `;
    return linea;
  });

  const htmlFinal = itemsHTML.join("");
  ul.innerHTML = htmlFinal;
});

