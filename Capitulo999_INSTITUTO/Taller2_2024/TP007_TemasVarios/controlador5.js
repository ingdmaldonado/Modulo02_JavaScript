

window.addEventListener("load",()=>
    {
        console.log("la aplicacion esta andando");

        const btnGenerar100 = document.querySelector("#btnGenerar100");
        const idDivBotones = document.querySelector("#idDivBotones");
        const btnAsignarEventos = document.querySelector("#btnAsignarEventos");
        const btnCrearDos = document.querySelector("#btnCrearDos");

        console.log(btnGenerar100);
        console.log(idDivBotones);

        btnGenerar100.addEventListener("click",()=>
            {
                console.log("aqui tengo que generar 100 botones dinamicos");

                let BotonesDinamicos = "";

                for(let i = 0; i< 100;i++)
                    {
                        BotonesDinamicos = BotonesDinamicos + `<br><br><input type='button' value='Boton Dinamico ${i}'/>`;
                    }

                console.log(BotonesDinamicos);

                idDivBotones.innerHTML = BotonesDinamicos;
                
            })

            btnAsignarEventos.addEventListener("click",()=>
                {
                    console.clear();
                    console.log("aqui deberia recorrer y asignarle comportamiento");

                    let VectorDeBotones = document.querySelectorAll("input");

                    //console.log(VectorDeBotones);

                    VectorDeBotones.forEach((elemento,indice)=>
                        {
                            console.log(elemento);

                            elemento.addEventListener("click",()=>{

                                console.log(`Soy el Boton Dinamico ${indice}`);
                                alert(`Soy el Boton Dinamico ${indice}`);

                            })
                        })

                        VectorDeBotones.forEach((elemento,indice)=>
                            {
                                console.log(elemento);
    
                                elemento.addEventListener("click",()=>{
    
                                    console.log(`Soy el Boton Dinamico ${indice}`);
                                    alert(`RIVER PERDIO ANOCHE ${indice}`);
    
                                })
                            })
    

                })

            btnCrearDos.addEventListener("click",()=>{
                console.log("por aqui deberia generar botones de otra forma");


                    for(let i = 0;i <10;i++)
                    {
                        let BotonDinamico = document.createElement("input");

                        BotonDinamico.type = "button";
                        BotonDinamico.value = `Soy Dinamico ${i}`;

                        console.log(BotonDinamico);

                        BotonDinamico.addEventListener("click",()=>{

                            alert(`Soy Dinamico ${i}`);

                        })

                        idDivBotones.appendChild(BotonDinamico);
                    }

                  


            })

    })