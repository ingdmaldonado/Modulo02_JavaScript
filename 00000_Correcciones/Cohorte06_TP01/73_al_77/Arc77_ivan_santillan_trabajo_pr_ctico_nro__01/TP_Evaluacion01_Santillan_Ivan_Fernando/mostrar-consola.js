const salida = document.getElementById("salida");
const consoleLogOriginal = console.log;

console.log = function (...mensajes) {
  consoleLogOriginal(...mensajes);

  if (salida) {
    salida.textContent += mensajes.join(" ") + "\n";
  }
};
