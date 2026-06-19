export const fnUniversidadToView = (universidad) =>{
    /*
      <tbody id="idCuerpoDeTabla">
            <tr>
                <td>ARGENTINA</td>
                <td>UNIVERSIDAD NACIONAL DE CATAMARCA</td>
                <td>Catamarca</td>
                <td><a href="http://www.unca.edu.ar" target="_blank">UNCA</a></td>
            </tr>
        </tbody>
     */

    const {country:paisUniversidad,name:nombreUniversiad,"state-province":provinciaUniversidad,web_pages:paginasUniversidad} = universidad;
    // hago destrugturing del vector que tiene los links a las paginas de esa universidad 

    const [paginaOficial,...resto] = paginasUniversidad;

    console.log(paisUniversidad);
    console.log(nombreUniversiad);
    console.log(provinciaUniversidad);
    console.log(paginasUniversidad);
    console.log(paginaOficial);

    // creamos una fila de una taabla y devolverla para que otro proceso los utilice

    const filaDeTabla = document.createElement("tr");

    const celda1 = document.createElement("td");
    celda1.textContent = paisUniversidad;
    
    const celda2 = document.createElement("td");
    celda2.textContent = nombreUniversiad;

    const celda3= document.createElement("td");
    celda3.textContent = provinciaUniversidad;

    const celda4= document.createElement("td");
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

export const fnUniversidadestoviews = (universidades)=>{
     const views = universidades.map(universidad => fnUniversidadToView(universidad) );
     return views;
};

export const fnRender = (views,contenedor)=> {
    contenedor.innerHTML= "";
    views.forEach(view => contenedor.appendChild(view));

};