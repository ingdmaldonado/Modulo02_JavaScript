/* aqui comenzamos a trabajar con la funcioniones de la vista
similar a generar un componente co react 
*/
export const fnUniversidadToview = (universidad) => {
    // aqui tengo que devolver una fila de la tabla //
    /*<tr>
        <td>Argentina </td>

     <td>Universidad Nacional de catmarca  </td>

     <td><a href="http://www.unca.edu.ar"target="_blank">www.unca.edu.ar</a> </td>
    
    </tr> 
    */

    //(1) hagoo de destructuring en el cuerpo// 

    

    
   const { country: paisuniversidad, name: nombreuniversidad, state_province: provinciauniversidad, web_pages: paginasuniversidad } = universidad;
    /*(2do) estoy haciendo destructurig del vector que tiene los links a las paginas de esa universidad*/
    
     const [paginaOficial, ...resto] = paginasuniversidad;
     
     /* 3(ro )muestro las constantes donde ya tengo listos los datos  */
    
    console.log(paisuniversidad);
    console.log(nombreuniversidad);
    console.log(provinciauniversidad);
    console.log(paginasuniversidad);
    console.log(paginaOficial);
    /*  4(to) vamos a crear una fila de una tabla ,con sus elementos y devolverlo para que otro proceso los utilice */
   
    const filaDeTabla =document.createElement("tr");

    const celda1=document.createElement("td");
    celda1.textContent= paisuniversidad;

    const celda2=document.createElement("td");
    celda2.textContent= nombreuniversidad;

    const celda3=document.createElement("td");
    celda3.textContent= provinciauniversidad;
    const celda4=document.createElement("td");
    const linkUniversidad=document.createElement("a");
    linkUniversidad.href=paginaOficial;
    linkUniversidad.target="_blank";
    linkUniversidad.textContent=paginaOficial;
    celda4.appendChild(linkUniversidad);

    filaDeTabla.appendChild(celda1);
    filaDeTabla.appendChild(celda2);
    filaDeTabla.appendChild(celda3);
    filaDeTabla.appendChild(celda4);

    return filaDeTabla;




};
// el objetivo de esta funcion es tomar todas las universidades de un vector y convertirlas en filas .cuando tengo una coleccion de elementos convertir todos ellos en una coleccion de componentes //
  
  export const fnUniversidadesToviews=(Universidades)=>{
   const Views =Universidades.map(Universidad=>fnUniversidadToview(Universidad));
   return Views;

  };
  // el objetivo de esta funcion es tomar todas las vistas e inyectarlas a Dom//
  export const frRender = (Views,contenedor)=>{
    contenedor.innerHTML=" ";
    Views.forEach(view=>contenedor.appendChild(view));
  };
  