export const fnUniversidadtoview=( universidad)=>{
   

    const {country: paisuniversidad,name:nombreUniversidad,"state-province":provinciauniversidad,web_pages:paginauniversidad} = universidad;
    
    const [paginaOficial,...resto]= paginauniversidad

    console.log(paisuniversidad);
    console.log(nombreUniversidad);
    console.log(provinciauniversidad);
    console.log(paginauniversidad);
    console.log(paginaOficial);

    const filaTabla=document.createElement("tr");
    const celda1=document.createElement("td");
    celda1.textContent=paisuniversidad;
    const celda2=document.createElement("td")
    celda2.textContent=nombreUniversidad;
    const celda3=document.createElement("td");
    celda3.textContent=provinciauniversidad;
    const celda4=document.createElement("td");
    const link=document.createElement("a")
    link.href=paginaOficial;
    link.target="_blank";
    link.textContent=paginaOficial
    celda4.appendChild(link);


    filaTabla.appendChild(celda1);
    filaTabla.appendChild(celda2);
    filaTabla.appendChild(celda3);
    filaTabla.appendChild(celda4);

    return filaTabla;
}

export const fnunitoviews=(universidades)=>{
  const views=  universidades.map(universidad=>fnUniversidadtoview(universidad))
  return views;
}

export const fnrender=(views,contenedor)=>{
    contenedor.innerHTML="";
    views.forEach(views =>contenedor.appendChild(views) );
    
    
}