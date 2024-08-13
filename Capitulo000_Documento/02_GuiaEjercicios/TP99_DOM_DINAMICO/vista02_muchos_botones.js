

    window.addEventListener("load",()=>{

        const idBtnGenerarBotones = document.querySelector("#idBtnGenerarBotones");
        const idAcumuladorTotal = document.querySelector("#idAcumuladorTotal");
        const idContenedorBotones = document.querySelector("#idContenedorBotones");

        console.log(idBtnGenerarBotones);

        console.log("funcionando");

        idBtnGenerarBotones.addEventListener("click",()=>{

            console.log("click en el boton");

            let BotonDinamico = '';

            for(let i = 0;i <= 10;i++)
            {
                BotonDinamico = document.createElement("input");

                BotonDinamico.type = "button";
                BotonDinamico.value = `Soy el Boton Dinamico Nro. ${i}`;

                BotonDinamico.addEventListener("click",(event)=>{

                    console.log(`Soy el Boton Numero ${i} ${event} - ${event.target} - ${event.target.value}`);

                })

                BotonDinamico.addEventListener("click",()=>{

                    let valorDelBoton = i;

                    idAcumuladorTotal.value = Number(idAcumuladorTotal.value) + valorDelBoton;

                })

                let Espacio = document.createElement("br");

                console.log(BotonDinamico);

                idContenedorBotones.appendChild(BotonDinamico);
                idContenedorBotones.appendChild(Espacio);
                idContenedorBotones.appendChild(Espacio);

            }

        })



    })