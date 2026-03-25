
// importando un modulo donde tengo un vector //
import {paises} from "./datos.js";

window.addEventListener("load",()=>
    {
        console.log("trabajo final iniciado");

        const idContenedor1 = document.querySelector("#idContenedor1");

        /* DOM DINAMICO FACULTAD. que tiene JAVASCRIPT
        de generar componentes HTML / elementos HTML 
        mediante programación.

            1) generar etiquetas HTML formato texto e 
            inyectarlas al DOM
            2) Template String
            3) createElement => mejor !!!.
        */


        /* aqui cree una variable donde me cree
        un boton dinamico por medio de una facultad
        que tiene el dom. que se llama createElement */

/*
        for(let i = 0; i <= 2;i++)
        {
            // aqui creo el boton
            let botonDinamico = document.createElement("input");
            // aqui le cambio las propiedades al boton
            botonDinamico.type = "button"; // le asigno la propiedad type
            botonDinamico.value = `Soy el boton ${i}`; // le asigno la propiead value
            botonDinamico.id = i; // le agrego un id
    
            // le agrego comportamiento a cada uno de los botones
            botonDinamico.addEventListener("click",()=>
                {
                    alert(`Soy el boton ${i}`);
                })
    
            // lo agrego a su contenedor //
            idContenedor1.appendChild(botonDinamico);

        }

        */

         /* vamos a recorrer el vector de paises y 
            vamos a generar unas etiquetas h3 donde
            mostraré el nombre del pais y la capital */

            /*
        paises.forEach(pais => {

            let etiquetaH3dinamica = document.createElement("h3");
            etiquetaH3dinamica.textContent = `Pais ${pais.nombrePais} - Capital ${pais.capital}`;

            etiquetaH3dinamica.addEventListener("click",()=>
                {
                    console.log(pais);
                })

            idContenedor1.appendChild(etiquetaH3dinamica);
        })
        */


        /* 
            HTML Y CSS => modulo 1 => ESTATICO

            JAVASCRIPT (vanila) => PURO NATIVO STANDARD => modulo 2

            NODE JS (javascript)

            REACT (LIBRERIAS) => 
        
        */

        console.log(paises);

        /* renderizado dinamico de componentes
        utilizando map y forEach */

        let vectorTransformado = paises.map(pais => {

            // esto lo hara por cada pais del vector 

            // creame un div => dinamico //
            const divPais = document.createElement("div");

            // me genere el parrafo
            const parrafoPais = document.createElement("p");
            parrafoPais.textContent = pais.nombrePais; // el nombre del pais


            // aqui voy a generar la imagen 

            const img = document.createElement("img");
            img.src = pais.bandera;
            img.alt = `Bandera de ${pais.nombrePais}`;
            img.width = 80;


            // agregar el parrafo pais al div contenedor
            divPais.appendChild(parrafoPais);

            // agregar la imagen de la bandera 
            divPais.appendChild(img);

            // retornando el div //
            return divPais;

        })

        /* ahora. puedo recorrer el vector
        transformado con forEach y agrega
        esos div generados dinamicamente
        al DOM. al contenedor */
    
        console.log(vectorTransformado);

        vectorTransformado.forEach(divDinamico => 
            {
                idContenedor1.appendChild(divDinamico);
            })

        // tengo un vector de datos //

        // lo transformo con map => elementos visuales que necesito //

        // lo recorro a ese vector con forEach y lo incrusto al DOM //


        /* generación dinamica de componentes
        esta totalmente aislada de la presentación 
        de la vista 
        
            grid
            flexbox 

        */

    })