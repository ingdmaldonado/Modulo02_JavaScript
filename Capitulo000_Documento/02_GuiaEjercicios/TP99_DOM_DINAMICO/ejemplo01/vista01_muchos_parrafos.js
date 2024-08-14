
window.addEventListener("load",()=>{

    console.log("this web application is running");

    const idBtnGenerarParrafos = document.querySelector("#idBtnGenerarParrafos");
    const idContenedor1 = document.querySelector("#idContenedor1");
    const idTxtArea = document.querySelector("#idTxtArea");

    idBtnGenerarParrafos.addEventListener("click",()=>
        {           

            let cantidadDeParrafos = 10;

            for(let i = 1; i <= cantidadDeParrafos;i++)
            {
                let parrafoCreado = document.createElement("p");

                parrafoCreado.textContent = `Soy el Parrafo Nro. ${i}`;
                parrafoCreado.id = i;

                parrafoCreado.addEventListener("click",()=>{

                    console.log(`me están haciendo click en el parrafo ${i}`);

                    idTxtArea.textContent = `me están haciendo click en el parrafo ${i}`;


                })

                idContenedor1.appendChild(parrafoCreado);

            }
        })
})






