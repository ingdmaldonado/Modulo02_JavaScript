
// Seleccionamos el div
var div = document.getElementById("miDiv");

// Evento de clic
div.onclick = function() {
    div.style.backgroundColor = "lightgreen";
    div.textContent = "¡Has hecho clic!";
};

// Evento de doble clic
div.ondblclick = function() {
    div.style.backgroundColor = "lightcoral";
    div.textContent = "¡Doble clic!";
};

// Evento de mouse enter (cuando el mouse entra en el div)
div.onmouseenter = function() {
    div.style.backgroundColor = "lightyellow";
    div.textContent = "¡Mouse adentro!";
};

// Evento de mouse leave (cuando el mouse sale del div)
div.onmouseleave = function() {
    div.style.backgroundColor = "lightblue";
    div.textContent = "Haz algo aquí";
};

// Evento de clic derecho (contextmenu)
div.oncontextmenu = function(event) {
    event.preventDefault(); // Evita el menú contextual predeterminado
    div.style.backgroundColor = "orange";
    div.textContent = "¡Clic derecho!";
};
