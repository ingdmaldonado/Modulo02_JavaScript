
import {paises} from "./datos.js";

const vectorDeBotones = ["me gusta","compartir","comentarios","no me gusta","seguir"];



window.onload = ()=>{

    console.log(paises);

    console.log("running");

    const idBoton1 = document.querySelector("#idBoton1");
    const idBoton2 = document.querySelector("#idBoton2");
    const idBoton3 = document.querySelector("#idBoton3");
    const idBoton4 = document.querySelector("#idBoton4");

    const idContenedor1 = document.querySelector("#idContenedor1");
    const idContenedor2 = document.querySelector("#idContenedor2");
    const idContenedor3 = document.querySelector("#idContenedor3");

    console.log(idBoton1,idContenedor1,idContenedor2,idContenedor3);

    /* cuando me hagan click en el boton 
    voy a crear botones dinamicos desde
    un vector */

    idBoton1.onclick = ()=>
        {
            /* 1ro) genero un boton dinamico 
            y le asigno las propiedades necesarias
            */

            let botonDinamico = document.createElement("input");
            botonDinamico.type = "button";
            botonDinamico.value = "soy un boton generado por programación";

            /* 2do) lo agrego en alguna parte
            o componente del DOM */

            botonDinamico.onclick = ()=>{

                alert("soy un boton generado por programación");

            }

            idContenedor1.appendChild(botonDinamico);
        }

    idBoton2.onclick = ()=>
        {

            for(let i = 0; i <= 999;i++)
            {
                  /* 1ro) genero un boton dinamico 
                y le asigno las propiedades necesarias
                */

                let botonDinamico = document.createElement("input");
                botonDinamico.type = "button";
                botonDinamico.value = `Soy el Boton ${i}`;

                /* 2do) lo agrego en alguna parte
                o componente del DOM */

                botonDinamico.onclick = ()=>{

                    alert(`me estan haciendo click en el boton nro. ${i}`);

                }

                idContenedor1.appendChild(botonDinamico);

            }

        }

    idBoton3.onclick = ()=>
        {
            console.log(vectorDeBotones);

            /* (1ro) A partir de un vector que contiene
            datos de algo ... vamos a crear un vector
            de componentes que se pueden inscrustar en el DOM */

            const resultadoMAP = vectorDeBotones.map((textoBoton)=>{

                /* (1ro) Generamos el Boton dinamico */

                const botonGenerado = document.createElement("input");

                /* (2do) le modificamos las propiedades */

                botonGenerado.type = "button";
                botonGenerado.value = textoBoton;

                /* (3ro) Agregamos comportamiento */

                botonGenerado.onclick = ()=>
                    {
                        alert(`Soy el Boton ${textoBoton}`);
                    }

                return botonGenerado;
            });

        /* 4to) Incrustamos al DOM */

        resultadoMAP.forEach(boton=>{
            idContenedor2.appendChild(boton);
        })

        console.log(resultadoMAP);

        }

    idBoton4.onclick = ()=>
        {
            console.log("cick");

            const VectorDeImagenes = paises.map(pais =>{

                /* 1ro Genero el componente que
                quiero devolver */

                const imagen = document.createElement("img");

                imagen.src = pais.banderaURL;

                imagen.alt = pais.nombre;

                imagen.onclick = ()=>{

                    alert(`Soy la Bandera de ${pais.nombre}`);
                }

                return imagen;

            });

            console.log(VectorDeImagenes);

            VectorDeImagenes.forEach(imagen => {

                idContenedor3.appendChild(imagen);

            })

        }

};