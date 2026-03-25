

/* 
    1ro) Transformar los paises con MAP 
    y es preferible que esto esté dentro
    de una función.
        map => vector => filas

    2do) Con forEAch => recorrer el vector
    generado en el paso anterior. 
    y esas filas => agregarlas al DOM
*/

export const fnGenerarFilas = (paises)=>
    {
        let vectorDeFilas = paises.map(({id,nombrePais,capital,poblacionPais}) => 
            {
                /*
                    por cada pais => una fila
                
                     <tr>
                        <td>ARGENTINA</td>
                        <td>BUENOS AIRES</td>
                        <td>47.500.000</td>
                        <td><input type="checkbox"></td>
                    </tr>
                
                */

                let filaDinamica = document.createElement("tr");

                let celda0 = document.createElement("td");
                celda0.textContent = id;

                let celda1 = document.createElement("td");
                celda1.textContent = nombrePais;

                let celda2 = document.createElement("td");
                celda2.textContent = capital;

                let celda3 = document.createElement("td");
                celda3.textContent = poblacionPais;

                let celda4 = document.createElement("td");

                let checkboxDinamico = document.createElement("input");
                checkboxDinamico.type = "checkbox";

                let botonDinamico = document.createElement("input");
                botonDinamico.type = "button";
                botonDinamico.value = "ver pais";

                botonDinamico.addEventListener("click",()=>{

                    console.log(capital);

                })

                // agregando el checkbox a la celda4
                celda4.appendChild(checkboxDinamico);
                // agregando el input a la celda 4 
                celda4.appendChild(botonDinamico);

                // aqui lo que hago es agregar todas esas celdas a la fila //
                filaDinamica.appendChild(celda0);
                filaDinamica.appendChild(celda1);
                filaDinamica.appendChild(celda2);
                filaDinamica.appendChild(celda3);
                filaDinamica.appendChild(celda4);

                filaDinamica.addEventListener("click",()=>
                    {
                        console.log(`me estan haciendo click en la fila ${id} - ${nombrePais}`);
                    })

                // aqui cada pais se convierte en una => fila y esa fila se devuelve //
                return filaDinamica;

            })

        return vectorDeFilas;

    }

/* Esta función se encarga de recorrer un vector
de filas. e insertarlas en el cuerpo de la tabla.
la función recibe dos parametros. el vector de filas
y el cuerpo de la tabla */

export const fnDibujarFilasEnDOM = (vectorDeFilas,idTableBody)=>
    {
        idTableBody.innerHTML = "";
        vectorDeFilas.forEach(fila => 
            {
                idTableBody.appendChild(fila);
            })
    }