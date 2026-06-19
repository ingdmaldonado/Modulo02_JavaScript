/* Ahora comenzamos a trabajar con las funciones de la vista similar a generar un componente con React*/

export const fnUniversidadToView = (universidad) => {

/* Aqui tengo que devolver una fila de una tabla

<tr>
                <td>ARGENTINA</td>
                <td>UNIVERSIDAD NACIONAL DE CATAMARCA</td>
                <td>CATAMARCA</td>
                <td><a href="https://www.unca.edu.ar" target="_blank">www.unca.edu.ar</a></td>
 </tr>

country
name
state-province
web_pages

*/

/*(1) Hago destructuring en el cuerpo */
const {country: paisUniversidad, name: nombreUniversidad, "state-province": provinciaUniversidad, web_pages:paginasUniversidad } = universidad;

/*(2) Estoy haciendo destructuring del vetor que tiene los links a la paginas de esa universidad */
const [paginaOficial, ...resto] = paginasUniversidad;


/*Muestro las constantes donde ya tengo listos los datos */
console.log(paisUniversidad);
console.log(nombreUniversidad);
console.log(provinciaUniversidad);
console.log(paginasUniversidad);


console.log(paginaOficial);

/*(4) Vamos a crear una fila de una tabla, con sus elementos y devolverlos para que otro proceso los utilice */

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


}
/*El objetivo de esta funcion es, tomar todas las universidades de un vector y convertirlas en filas. Cuando tengo una coleccion de elementos, convertir todos ellos en una coleccion de componentes*/
export const fnUniversidadesToView = (Universidades) => {
    
const views = Universidades.map(universidad => fnUniversidadToView(universidad)); 

return views; 

};

/*El objetiv de esta funcion, tomar todas las vista e inyectarlas al DOM */

export const fnRender = (Views, contenedor) => {
    contenedor.innerHTML = "";

    Views.forEach(view => contenedor.appendChild(view));

};