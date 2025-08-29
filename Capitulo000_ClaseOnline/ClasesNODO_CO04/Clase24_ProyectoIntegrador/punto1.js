import { fnRecuperarPaises } from "./controllers/funcionesDelControlador.js";

window.addEventListener("load", () => {
  const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");

  idBtnRecuperarPaises.addEventListener("click", fnRecuperarPaises);
});
