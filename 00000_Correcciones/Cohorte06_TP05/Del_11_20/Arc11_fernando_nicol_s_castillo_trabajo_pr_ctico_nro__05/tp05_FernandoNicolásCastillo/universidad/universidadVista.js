/*FUNCIONES DE LA VISTA*/
export const fnUniversidadToView = (universidad) => {

    /*1) Hago destructuring en el cuerpo*/
    const {country:paisUniversidad,name:nombreUniversidad,"state-province":provinciaUniversidad,web_pages:paginasUniversidad} = universidad;
    
    /*2) estoy haciendo destructuring del Vector que tiene los links a las páginas web de las Universidades*/
    const[paginaOficial,...resto] = paginasUniversidad;

    /*3)muetros las constantes donde ya tengo listos los datos*/
console.log(paisUniversidad);
console.log(nombreUniversidad);
console.log(provinciaUniversidad);
console.log(paginasUniversidad);
console.log(paginaOficial);

    /*4)vamos a crear una fila de una tabla con sus elementos y a devolverlos para que otro proceso los utlice*/
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

/*el objetivo de esta función es tomar todas las universidades de un vector y convertirlas en filas*/

export const fnUniversidadesToView = (Universidades) =>{
    
   const Views = Universidades.map(Universidad => fnUniversidadToView(Universidad));

    return Views;

};
/*El objetivo de esta función, es tomar todas las vistas e inyectarlas al DOM*/

export const fnRender = (Views,contenedor) => {
        contenedor.innerHTML = ""; 
        Views.forEach(view => contenedor.appendChild(view));

}; 
