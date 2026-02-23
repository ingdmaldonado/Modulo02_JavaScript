
import paisesAmerica from "./paisesAmerica.js";

window.onload = ()=>
    {
        console.log("is running");

        const idBtnGenerador1 = document.querySelector("#idBtnGenerador1");
        
        const idBtnCompletarPaises = document.querySelector("#idBtnCompletarPaises");

        const idBtnListaDePaises = document.querySelector("#idBtnListaDePaises");

        const idContenedor1 = document.querySelector("#idContenedor1");
    
        const idSelectorPais = document.querySelector("#idSelectorPais");

        const idContenedor2 =document.querySelector("#idContenedor2");

        /* Agregar Boton */
        idBtnGenerador1.onclick = ()=>{

            const botonDinamico = document.createElement("button");
            botonDinamico.textContent = `Soy un Boton Dinamico`;
            botonDinamico.onclick = ()=>{
                alert(`soy un boton generado dinamicamente`);
            }

            idContenedor1.appendChild(botonDinamico);
        };

        /* Agregar Opciones al Selector */
        idBtnCompletarPaises.onclick = ()=>{

            console.log(paisesAmerica);

            const opcionesDinamicas = paisesAmerica.map(pais => {

                const opcionDinamica = document.createElement("option");
                                
                opcionDinamica.id = pais.id;
                opcionDinamica.value = pais.id;
                opcionDinamica.textContent =  `${pais.nombre} - ${pais.capital}`;
                return (opcionDinamica);

            });
    
            opcionesDinamicas.forEach(opcion => idSelectorPais.appendChild(opcion));
        
        };

        idBtnListaDePaises.onclick = ()=>{

            console.log(paisesAmerica);

            const contenedorPais = paisesAmerica.map(pais => {

                const contenedor = document.createElement("div");

                const titulo = document.createElement("h3");
                titulo.textContent = pais.nombre;

                const tituloCapital = document.createElement("h5");
                tituloCapital.textContent = pais.capital;

                const imagenBandera = document.createElement("img");
                imagenBandera.src = pais.bandera;
                imagenBandera.width = 100;
               // imagenBandera.height = 100;
               // imagenBandera.style.objectFit = "contain"; // se ve toda, pero puede quedar “borde”


                contenedor.appendChild(titulo);
                contenedor.appendChild(tituloCapital);
                contenedor.appendChild(imagenBandera);

                contenedor.onclick = ()=>{
                    alert(`me están haciendo click en ${pais.nombre} y mi población es ${pais.poblacion}`);
                };

                return contenedor;

            });

            contenedorPais.forEach(contenedor => idContenedor2.appendChild(contenedor));

        };

    }

