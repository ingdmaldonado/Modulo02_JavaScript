
const actualizarHora = () => {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  idReloj.textContent = hora;

  
  console.log(ahora.toLocaleTimeString()); // Hora local según el navegador (ej. "14:38:20")

  console.log(ahora.toLocaleTimeString("en-US")); // "2:38:20 PM"
  console.log(ahora.toLocaleTimeString("en-GB")); // "14:38:20"

  console.log(ahora.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit"
  })); // "14:38"

  console.log(ahora.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
    })); // "02:38:20 p. m."

};

window.addEventListener("load", () => 
  {

    const idReloj = document.querySelector("#idReloj");

    // Luego actualizamos cada segundo
    setInterval(actualizarHora, 1000);
});
