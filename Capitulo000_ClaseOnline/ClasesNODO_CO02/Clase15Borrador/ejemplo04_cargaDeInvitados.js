

    let listadoDeInvitados = [

    ];

    const fnEstaInvitado = (numtelefono)=>
        {
            return listadoDeInvitados.some(element => element.telefono === numtelefono);
        }

    const fnAgregarInvitado = (persona) =>
        {

            let objetoNuevo = {...persona};
            objetoNuevo.confirmado = false;

            let filaDeTabla = document.createElement("tr");

            filaDeTabla.id = `${persona.telefono}`;

            let celda1 = document.createElement("td");
            celda1.textContent = persona.apellidoyNombre;

            let celda2 = document.createElement("td");
            celda2.textContent = persona.telefono;

            let celda3 = document.createElement("td");
            let checkCelda3 = document.createElement("input");
            checkCelda3.type = "checkbox";
            celda3.appendChild(checkCelda3);

            checkCelda3.addEventListener("change",()=>
                {
                    console.log(checkCelda3.checked);

                    objetoNuevo.confirmado = checkCelda3.checked;
                })


            filaDeTabla.appendChild(celda1);
            filaDeTabla.appendChild(celda2);
            filaDeTabla.appendChild(celda3);

            idCuerpoDeLaTabla.appendChild(filaDeTabla);

            objetoNuevo.filaDeTabla = filaDeTabla;

            listadoDeInvitados.push(objetoNuevo);
        }


window.addEventListener("load",()=>
    {
        const idApellidoyNombre = document.querySelector("#idApellidoyNombre");
        const idTelefono = document.querySelector("#idTelefono");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");
        const idCuerpoDeLaTabla = document.querySelector("#idCuerpoDeLaTabla");
        const idBtnEliminarLosNoConfirmados = document.querySelector("#idBtnEliminarLosNoConfirmados");

        console.log(idApellidoyNombre);
        console.log(idTelefono);
        console.log(idBtnAceptar);
        console.log(idCuerpoDeLaTabla);
        console.log(idBtnEliminarLosNoConfirmados);

        idBtnAceptar.addEventListener("click",()=>
            {
                let apellidoyNombre = idApellidoyNombre.value;
                let telefono = idTelefono.value;

                if(apellidoyNombre.trim().length >= 10)
                {
                    if(telefono.trim().length >= 10)
                    {
                    
                        console.log(fnEstaInvitado(telefono));
                        
                        if(!fnEstaInvitado(telefono))
                        {
                            let personaInvitada = 
                            {
                                apellidoyNombre:apellidoyNombre,
                                telefono:telefono
                            }

                            fnAgregarInvitado(personaInvitada);

                        }
                        else
                        {
                            alert("esa persona ya está cargada");
                        }

                        console.log(listadoDeInvitados);
                    }
                    else
                    {
                        alert("por favor cargue telefono");
                    }
                }
                else
                {
                    alert("por favor cargue apellido y nombre");
                }
            })

        idBtnEliminarLosNoConfirmados.addEventListener("click",()=>
            {
            
                  // Filtrar los confirmados
                const invitadosConfirmados = listadoDeInvitados.filter(element => element.confirmado);

                // Eliminar las filas de los no confirmados del DOM
                listadoDeInvitados.forEach(element => {
                    if (!element.confirmado) 
                    {
                        element.filaDeTabla.remove();
                    }
                });

              
               
                // Reasignar el vector original con una nueva copia de los confirmados
                listadoDeInvitados = [...invitadosConfirmados];

                console.log("Listado actualizado:", listadoDeInvitados);
                

            })

    })