import {alumnos} from "./modelo.js";

/* concepto de caja negra */
const fnConversion = (alus)=>{

    console.log(alus)

    /* lo tiene que hacer este proceso
    es convertir los alumnos en filas 
    de la tabla 
    */

    /* 
      <tr>
            <td>8889999</td>
            <td>JUAN ANDRES CANO OCAMPOS</td>
            <td>10</td>
            <td><input type="checkbox"></td>
        </tr>   
    */

    const filas = alus.map((alumno)=>{

        // destructuring de un objeto //
        const {dni,apellido,nombre,nota_final} = alumno;

        // vamos a crear la fila //
        const fila = document.createElement("tr");

        // vamos a crear las celdas //
        const celda1 = document.createElement("td");
        const celda2 = document.createElement("td");
        const celda3 = document.createElement("td");
        const celda4 = document.createElement("td");

        // vamos a combinar las celdas con los datos //
        celda1.textContent = dni;
        celda2.textContent = `${apellido} - ${nombre}`;
        celda3.textContent = nota_final;
        celda4.textContent = "en construccion";

        // vamos a agregar las celdas a la fila //
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        fila.onclick = ()=>{
            console.log(alumno);
        };

        celda3.onclick = (event)=>{
            
            if(nota_final >= 4)
            {
                console.log("esta aprobado");
            }
            else
            {
                console.log("DESAPROBADO");
            }

            event.stopPropagation();

        };

        // esto es por alumno //       
        return fila;


    });

    // son todos los alumnos transformados //
    return filas;

};

const fnRender = (filas,contenedor)=>{

    // limpio todo el contenedor
    contenedor.innerHTML = "";

    // recorro las filas y las renderizo en el contenedor //
    filas.forEach(fila => contenedor.appendChild(fila));


};


window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // cuando haga click disparamos el evento //
    idBtnRecuperar.onclick = ()=>{

        console.log("aqui tendria que dibujar las filas de la tabla");

        /*(1ro) aqui aplico la función de trans
        formación sobre todos los alumnos */

        const filas = fnConversion(alumnos);

        /* (2do) Recorro todas esas filas
        y las meto en la tabla. Renderizar
        dinamicamente */

        fnRender(filas,idCuerpoTabla);

      
    };    


};
