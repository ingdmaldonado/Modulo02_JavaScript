export const fnUniversidadToView = (universidad) => {


const {country:paisUniversidad,name:nombreUniversidad, "state-province":provinciaUniversidad,web_pages:paginaUniversidad
} = universidad;

const [paginaOficial,...resto] = paginaUniversidad;

console.log(paisUniversidad);
console.log(nombreUniversidad);
console.log(provinciaUniversidad);
console.log(paginaUniversidad);
console.log(paginaOficial);

const filaDeTabla = document.createElement("tr");

const celda1 = document.createElement("td");

celda1.textContent = paisUniversidad;

const celda2 = document.createElement("td");

celda2.textContent = nombreUniversidad;

const celda3 = document.createElement("td");

celda3.textContent = provinciaUniversidad;

const celda4  = document.createElement("td");
const linkUniversidad = document.createElement("a");

linkUniversidad.href = paginaOficial;
linkUniversidad.target = "_blank";
linkUniversidad.textContent = paginaOficial;

celda4.appendChild(linkUniversidad);

filaDeTabla.appendChild(celda1);
filaDeTabla.appendChild(celda2);
filaDeTabla.appendChild(celda3);
filaDeTabla.appendChild(celda4);

return filaDeTabla


};

export const fnUniversidadesToViews = (universidades) => {

const Views = universidades.map(universidad => fnUniversidadToView(universidad));

return Views;


};

export const fnRender = (Views,contenedor) => {

    contenedor.innerHTML = "";

    Views.forEach(views => contenedor.appendChild(views));

};