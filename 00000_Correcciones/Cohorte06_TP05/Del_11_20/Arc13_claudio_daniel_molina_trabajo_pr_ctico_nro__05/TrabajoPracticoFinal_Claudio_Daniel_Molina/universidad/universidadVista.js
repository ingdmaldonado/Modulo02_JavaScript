

/* ahora vamos a empezar a trabajar con  las funciones de la vista, 

Simalar a generar un componente con React*/


export const fnUniversidadToView = (universidad) => {

  
     /* 1) Aquí se hace destructuring en el cuerpo de la función */ 

    const { country:paisUniversidad, name:nombreUniversidad, "state-province":provinciaUniversidad, web_pages:paginasUniversidad } = universidad;

    /* 2) Aquí hago destructuring del vector que tiene los links a las páginas de esa universidad */

    const [paginaOficial,...resto] = paginasUniversidad;

    /* Aquí muestro las constantes que contienen los datos de la universidad, para verificar que se haya hecho el destructuring correctamente */

    console.log(paisUniversidad);
    console.log(nombreUniversidad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);

    console.log(paginaOficial);

    /* 4) aquí se crea una fila de una tabla con los datos de la universidad (elementos), y se devuelve esa fila para
    que otro proceso los utilice */

    const filaDeTabla = document.createElement("tr");
    
    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;
    
    const celda2 = document.createElement("td");
    celda2.textContent = nombreUniversidad;

    const celda3 = document.createElement("td");
    celda3.textContent = provinciaUniversidad;

    const celda4 = document.createElement("td");
    const linkUniversidad = document.createElement("a");
    linkUniversidad.href = paginaOficial;
    linkUniversidad.target = "_blank";
    linkUniversidad.textContent = paginaOficial;
    celda4.appendChild(linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;
    
};

/* El objetivo de esta función, es todas las universidades de un vector, y convertirlas en filas.
Cuando tengo una colección de elementos. Convertir todos ellos en una colección de componentes*/
    
 export const fnUniversidadesToView = (Universidades) => {
        const views = Universidades.map((universidad) => fnUniversidadToView(universidad));
        return views;
    };

/* El objetivo de esta función, es tomar todas las vistas e inyectarlas en el DOM*/


    export const fnRender = (views,contenedor) => {
                contenedor.innerHTML = "";
                views.forEach((view) => contenedor.appendChild(view));
    };
