

 export const fnUniversidadtoView =( Universidad) => {


    const {country:paisUniversidad,name:nombreUniversidad,"state_province":provinciaUniversidad, web_pages:paguinaUniversidad} =Universidad;
     
    const [ PaginaOficial,... restos] = paguinaUniversidad;




    console.log (paisUniversidad);
    console.log (nombreUniversidad);
    console.log (provinciaUniversidad);
    console.log (paguinaUniversidad);
    console.log ( PaginaOficial);

    const filaDeTabla = document.createElement ("tr");
    const celda1 = document.createElement ("td");
    celda1.textContent = paisUniversidad;

    const celda2 = document.createElement ("td");
    celda2.textContent = nombreUniversidad;

    const celda3 = document.createElement ("td");
    celda3.textContent = provinciaUniversidad;

    const celda4 = document.createElement ("td");
    const linkUniversidad = document.createElement ("a");
    linkUniversidad.href = PaginaOficial;
    linkUniversidad.target = "-blank";
    linkUniversidad.textContent = PaginaOficial;
    celda4.appendChild(linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;

};
export const fnUniversidadestoView = (Universidades) =>{

     const views = Universidades.map (Universidad => fnUniversidadtoView (Universidad));
     return views;

};


export const fnRender = ( views,contenedor) => {
    contenedor.innerHTML ="";

    views. forEach (views => contenedor.appendChildn(views));
};