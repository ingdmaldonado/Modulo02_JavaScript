
const estadoAplicacion =
{
    nombres:"",
}

window.addEventListener("load",()=>
    {
        console.log("arrancando desde");

        const idNombres = document.querySelector("#idNombres");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        console.log(idNombres,idBtnAceptar);

        idNombres.addEventListener("input",()=>
            {
                let valor = idNombres.value;
                estadoAplicacion.nombres = valor;
            })

        idBtnAceptar.addEventListener("click",()=>
            {
                console.log(estadoAplicacion);

                let datosFormatoJSON = JSON.stringify(estadoAplicacion);
                localStorage.setItem("datos",datosFormatoJSON);

                window.location.href = "archivo2.html";

            })
    })

window.addEventListener("beforeunload",()=>
    {
        let datosFormatoJSON = JSON.stringify(estadoAplicacion);

        localStorage.setItem("datos",datosFormatoJSON);

    })