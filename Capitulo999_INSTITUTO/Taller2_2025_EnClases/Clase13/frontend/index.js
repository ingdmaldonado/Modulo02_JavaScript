import {fnClickBotonRecuperar} from "./controlador.js";

window.addEventListener("load",()=>
{
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    const idBtnAgregar = document.querySelector("#idBtnAgregar");



    console.log(idBtnRecuperar);



    idBtnRecuperar.addEventListener("click",fnClickBotonRecuperar);

    idBtnAgregar.addEventListener("click",async ()=>
        {
            const clienteParaAgregar = {
                clientecuit:"27368440944",
                clientenombre:"BAFFARI NANCY"
            }

            console.log(JSON.stringify(clienteParaAgregar));

            let endPoint = "http://localhost:3000/clientes";
        

            const respuesta2 = await fetch(endPoint,{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(clienteParaAgregar)
            });

            const datosDeVuelta = await respuesta2.json();

            if(datosDeVuelta.result_estado ==='ok')
            {
                console.log("todo salio bien");
            }
            else
            {
                console.log(`se produjo un error ${datosDeVuelta.result_message}`);
            }

            console.log(datosDeVuelta);



        })

})