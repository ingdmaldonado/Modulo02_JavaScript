const fnClick = ()=>
    {
        alert("soy el click del boton dinamico");
    }

window.addEventListener("load",()=>
    {

        const idBtnAgregar1 = document.querySelector("#idBtnAgregar1");
        const idBtnAgregar2 = document.querySelector("#idBtnAgregar2");

        const idContenedor1 = document.querySelector("#idContenedor1");



        idBtnAgregar1.addEventListener("click",()=>
            {

                console.log("running");

                let botonDinamico = `<input type='button' id='idBotonDinamico' value='Soy un boton dinamico'>`;

                idContenedor1.innerHTML = botonDinamico;

                const idBotonDinamico = document.querySelector("#idBotonDinamico");
                
                console.log(idBotonDinamico);

                if(idBotonDinamico)
                {
                    console.log("se agrego al DOM");

                    idBotonDinamico.addEventListener("click",()=>
                        {
                            alert("me agregaron comportamiento despues");
                        })

                }
                else
                {
                    console.log("no se agrego al DOM");
                }
            })

        idBtnAgregar2.addEventListener("click",()=>
            {
                const enfermedadesDeNinio = [
                    { idEnfermedad: 1, nombreEnfermedad: "hepatitis" },
                    { idEnfermedad: 2, nombreEnfermedad: "dengue" },
                    { idEnfermedad: 3, nombreEnfermedad: "covid" },
                    { idEnfermedad: 4, nombreEnfermedad: "gripe A" },
                    { idEnfermedad: 5, nombreEnfermedad: "gripe porcina" }
                ];
                

                const checkBoxDeEnfermedades = [];


                enfermedadesDeNinio.forEach((element,indice) => 
                    {
                      
                        let labelDinamico = document.createElement("label");
                        labelDinamico.textContent = `${element.nombreEnfermedad}`;
                        labelDinamico.for = `idEnfermedad${element.idEnfermedad}`;

                        let checkDinamico = document.createElement("input");
                        checkDinamico.id = `idEnfermedad${element.idEnfermedad}`;
                        checkDinamico.type = "checkbox";
                        checkDinamico.addEventListener("change",()=>{
                            console.log(`me estan cambiando ${checkDinamico.checked} en ${element.nombreEnfermedad}`);
                        })

                        let objetoNuevo = {...element,checkDinamico:checkDinamico};

                        checkBoxDeEnfermedades.push(objetoNuevo);

                        idContenedor1.appendChild(labelDinamico);
                        idContenedor1.appendChild(checkDinamico);

                    })

                console.log(checkBoxDeEnfermedades);
            })
    })