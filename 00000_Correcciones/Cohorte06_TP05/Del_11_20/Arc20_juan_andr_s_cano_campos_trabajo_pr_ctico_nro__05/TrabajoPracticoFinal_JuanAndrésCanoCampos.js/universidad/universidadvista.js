export const fnUniversidadView = (universidad) => {

    // 1. Destructuring en el cuerpo de la función 
    const { 
        name: nombreUniversidad, 
        country: pais, 
        "state-province": provincia, 
        web_pages: web 
    } = universidad;

    // 2. Extraemos la primera página web
    const [paginaOficial, ...resto] = web;

    // 3. Muestro en consola los datos listos
    console.log(`Nombre: ${nombreUniversidad}, País: ${pais}, Provincia: ${provincia || "Sin provincia"}, Web: ${paginaOficial}`);

    /* 4. Creamos la fila de la tabla con sus elementos ordenados */
    const filaDeTabla = document.createElement("tr");

    // Celda 1: Universidad
    const celda1 = document.createElement("td");
    celda1.textContent = nombreUniversidad;

    // Celda 2: País (Name)
    const celda2 = document.createElement("td");
    celda2.textContent = pais ? pais : "Sin país";

    // Celda 3: Provincia (State-Province)
    const celda3 = document.createElement("td");
    celda3.textContent = provincia ? provincia : "Sin provincia";

    // Celda 4: URL (Con el enlace interactivo adentro)
    const celda4 = document.createElement("td");
    if (paginaOficial) {
        const enlace = document.createElement("a");
        enlace.href = paginaOficial;
        enlace.textContent = "Entra";
        enlace.target = "_blank";
        celda4.appendChild(enlace);
    } else {
        celda4.textContent = "Sin sitio web";
    }

    // Inyectamos las celdas en el orden correcto
    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;
};

/* Convertir universidades en filas con map  */
export const fnUniversidadViews = (universidades) => {
    const Views = universidades.map(universidad => fnUniversidadView(universidad));
    return Views;
};

/* El objetivo es tomar todas las vistas e inyectar al DOM  */
export const fnRender = (Views, contenedor) => {
    contenedor.innerHTML = "";
    Views.forEach(View => contenedor.appendChild(View));
};