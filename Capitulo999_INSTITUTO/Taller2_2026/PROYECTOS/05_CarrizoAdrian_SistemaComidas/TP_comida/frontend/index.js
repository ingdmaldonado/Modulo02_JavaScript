// Funcion para validar que los campos requeridos contengan datos antes de enviar la peticion
function validarRequired(objeto, camposObligatorios) {
    for (const campo of camposObligatorios) {
        if (!objeto[campo] || objeto[campo].toString().trim() === "") {
            return {
                esValido: false,
                mensaje: `El campo '${campo}' es obligatorio.`
            };
        }
    }
    return { esValido: true };
}

window.onload = () => {
    // Referencias a los elementos del documento HTML
    const btnMenu = document.querySelector("#btnMenu");
    const btnStats = document.querySelector("#btnStats");
    const formularioComida = document.querySelector("#formularioComida");
    const contenedorResultados = document.querySelector("#contenedorResultados");
    const mensajeEstado = document.querySelector("#mensajeEstado");

    // 1. Peticion GET asincrona para traer platos con su categoria (INNER JOIN)
    btnMenu.onclick = async () => {
        try {
            contenedorResultados.innerHTML = "<p>Cargando menú...</p>";
            const respuesta = await fetch("http://localhost:3000/api/comida");
            if (!respuesta.ok) throw new Error("Fallo en la comunicación con la API");

            const comidas = await respuesta.json();

            contenedorResultados.innerHTML = comidas.map(c => `
                <div class="item-lista">
                    <div>
                        <strong>${c.comidanombre}</strong> 
                        <span style="color: #666;">(${c.categorianombre})</span>
                    </div>
                    <div><strong>$${parseFloat(c.comidaprecio).toFixed(2)}</strong></div>
                </div>
            `).join("");
        } catch (error) {
            contenedorResultados.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    };

    // 2. Peticion GET asincrona para traer estadisticas procesadas (GROUP BY)
    btnStats.onclick = async () => {
        try {
            contenedorResultados.innerHTML = "<p>Calculando estadísticas...</p>";
            const respuesta = await fetch("http://localhost:3000/api/categoria/estadisticas");
            if (!respuesta.ok) throw new Error("Fallo en la comunicación con la API");

            const stats = await respuesta.json();

            contenedorResultados.innerHTML = stats.map(s => `
                <div class="item-lista">
                    <div><strong>Categoría:</strong> ${s.categorianombre}</div>
                    <div>Platos: ${s.total_platos} | Promedio: $${s.precio_promedio || 0}</div>
                </div>
            `).join("");
        } catch (error) {
            contenedorResultados.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    };

    // 3. Peticion POST asincrona para guardar un nuevo plato aplicando validarRequired
    formularioComida.onsubmit = async (evento) => {
        evento.preventDefault(); // Evita que la pagina se recargue al presionar enviar

        const comidaNueva = {
            comidanombre: document.querySelector("#nombreComida").value,
            comidaprecio: document.querySelector("#precioComida").value,
            categoriaid: document.querySelector("#categoriaId").value
        };

        // Ejecucion de la funcion required
        const validacion = validarRequired(comidaNueva, ["comidanombre", "comidaprecio", "categoriaid"]);
        if (!validacion.esValido) {
            mensajeEstado.style.color = "red";
            mensajeEstado.textContent = validacion.mensaje;
            return;
        }

        try {
            mensajeEstado.style.color = "blue";
            mensajeEstado.textContent = "Guardando en el servidor...";

            const respuesta = await fetch("http://localhost:3000/api/comida", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(comidaNueva)
            });

            if (!respuesta.ok) throw new Error("No se pudo registrar la comida");

            mensajeEstado.style.color = "green";
            mensajeEstado.textContent = "¡Plato guardado con éxito!";
            formularioComida.reset();

            btnMenu.click(); // Recarga la lista en pantalla automaticamente
        } catch (error) {
            mensajeEstado.style.color = "red";
            mensajeEstado.textContent = `Error: ${error.message}`;
        }
    };
};