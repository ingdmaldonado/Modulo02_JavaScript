

const fnValidarDatos = (...valores)=>
    {

        let datosValidados = true;
        valores.forEach(element => {

            if(element.length === 0)
            {
                datosValidados = false;
                console.log(element);
                console.log(element.length);
            }
            else
            {
                console.log(element);
            }
        })
        return datosValidados;
    }


window.addEventListener("load",()=>
    {

        const idApellido = document.querySelector("#idApellido");
        const idNombre = document.querySelector("#idNombre");
        const idDomicilioReal = document.querySelector("#idDomicilioReal");
        const idDomicilioLegal = document.querySelector("#idDomicilioLegal");
        const idBtnValidar = document.querySelector("#idBtnValidar");

        console.log(idApellido);
        console.log(idNombre);
        console.log(idDomicilioReal);
        console.log(idDomicilioLegal);
        console.log(idBtnValidar);


        idBtnValidar.addEventListener("click",()=>
            {

                let Apellido = idApellido.value;
                let Nombre = idNombre.value;
                let DomicilioReal = idDomicilioReal.value;
                let DomicilioLegal = idDomicilioLegal.value;


                console.log(fnValidarDatos(Apellido,Nombre,DomicilioReal,DomicilioLegal));

            })



    })