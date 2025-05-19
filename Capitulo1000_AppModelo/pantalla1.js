
const estadoAplicacion = 
    {
        FirstName:"",
        LastName:"",
        Email:"",

    }


window.addEventListener("load",()=>
    {
        const idFirstName = document.querySelector("#idFirstName");;
        const idLastName = document.querySelector("#idLastName");
        const idEmail = document.querySelector("#idEmail");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        console.log(idFirstName,idLastName,idEmail,idBtnAceptar);


        idFirstName.addEventListener("input",()=>{

            estadoAplicacion.FirstName = idFirstName.value;
        });

        idLastName.addEventListener("input",()=>{

            estadoAplicacion.LastName = idLastName.value;
        });

        idEmail.addEventListener("input",()=>{

            estadoAplicacion.Email = idEmail.value;
        });

        idBtnAceptar.addEventListener("click",()=>{

            console.log(estadoAplicacion);

            // guardamos el estado de la aplicacion en el local storage //

            localStorage.setItem("estadoAplicacion",JSON.stringify(estadoAplicacion));
            // redirigimos a la pantalla 2 //

            pantalla2 = window.open("pantalla2.html","_self");

           // window.location.href = "pantalla2.html";
        });


    })