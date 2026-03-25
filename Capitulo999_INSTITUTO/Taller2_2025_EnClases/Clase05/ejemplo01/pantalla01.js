

const estadoAplicacion =
    {
        numeroDNI:0,
        apellidoYNombre:"",
    }

window.addEventListener("load",()=>
    {
        const idNumeroDNI = document.querySelector("#idNumeroDNI");
        const idApellidoNombre = document.querySelector("#idApellidoNombre");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        console.log(idNumeroDNI);
        console.log(idApellidoNombre);
        console.log(idBtnAceptar);

        idNumeroDNI.addEventListener("input",()=>
            {
                estadoAplicacion.numeroDNI = Number(idNumeroDNI.value);
            })

        idApellidoNombre.addEventListener("input",()=>
            {
                estadoAplicacion.apellidoYNombre = idApellidoNombre.value;
            })

        idBtnAceptar.addEventListener("click",()=>
            {
                if(estadoAplicacion.numeroDNI === 0)
                {
                    alert("ingrese el dni por favor");
                }
                else
                {
                    if(estadoAplicacion.apellidoYNombre ==="")
                    {
                        alert("por favor ingrese el apellido y nombre");
                    }
                    else
                    {
                        console.log(estadoAplicacion);
                        
                        /* antes de irme a la otra pantalla */

                        /* 1ro) Convertir los datos a formato JSON 
                        convertirlos a String formateado de tal forma
                        que los navegadores lo entienden como JSON
                        */

                        // aqui converti el estado de la aplicacion a JSON //
                        let datosJSON = JSON.stringify(estadoAplicacion);

                        // aqui guarde en el localStorage los datos en formato JSON //
                        localStorage.setItem("datosGuardados",datosJSON);

                            /* 
                            
                                setItem => Guardar y Persistir
                                getItem => Recuperar 

                            */

                        // esto redirige el navegador a la pantalla 02 */

                        window.location.href = "pantalla02.html";

                    }
                }

                
               // alert("validar que haya ingresado los datos");
            })
    })