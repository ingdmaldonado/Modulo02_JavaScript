
/* aqui lo que estoy haciendo 
es crearme un vector de Paises
y que este a nivel global de toda
la aplicación */

const vectorDePaises = ["ARGENTINA","BRASIL","ESTADOS UNIDOS","ECUADOR","PERU","VENEZUELA","CANADA","COLOMBIA","PUERTO RICO"];

/* es muy probable que venga
desde una fuente externa. 
que puedeser

    1) Base de datos propia. WebServices
    2) WebServices de un tercero
    3) localStorage

*/


window.addEventListener("load",()=>
    {
        console.log("running");

        const idSelectorDinamico1 = document.querySelector("#idSelectorDinamico1");
        const idBtnGenerarContenedor = document.querySelector("#idBtnGenerarContenedor");
        const contenedor = document.querySelector("#contenedor");
       
        console.log(idSelectorDinamico1);
        console.log(idBtnGenerarContenedor);

        // aqui lo que hago es recorrer el vector de Paises //
        vectorDePaises.forEach((element,indice)=>
            {
                console.log(element,indice);

                let opcionDinamica = `<option value=${indice}>${element}</option>`;

                console.log(opcionDinamica);

                idSelectorDinamico1.innerHTML = idSelectorDinamico1.innerHTML + opcionDinamica;

            })

        idBtnGenerarContenedor.addEventListener("click",()=>{

            vectorDePaises.forEach((element,indice)=>
                {
                    let divDinamico = `<div>${element}</div>`;
                    let checkBoxDinamico = `<input type='checkbox' id=${indice}>`;
                    let botonDinamico = `<input type='button' value='${element}'>`;

                    contenedor.innerHTML = contenedor.innerHTML + divDinamico + checkBoxDinamico + botonDinamico;

                })

        })
    })