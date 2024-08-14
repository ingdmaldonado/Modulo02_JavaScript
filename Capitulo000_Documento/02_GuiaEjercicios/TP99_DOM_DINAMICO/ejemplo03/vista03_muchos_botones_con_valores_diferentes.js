
window.addEventListener("load",()=>{

    let TOTAL_GLOBAL = 0;
    let CONTADOR_GLOBAL = 0;

    const idBtnGenerar = document.querySelector("#idBtnGenerar");
 //   const idAcumulador = document.querySelector("#idAcumulador");
    const idContenedor2 = document.querySelector("#idContenedor2");

    const idTotalCobrado = document.querySelector("#idTotalCobrado");
    const idCantidadVehiculos = document.querySelector("#idCantidadVehiculos");

    /* ponele la imagen bolu */

    const TextoYValorDeBotones = [{tipo:1,nombre:'CAMION',precio:23500.50},{tipo:2,nombre:'CAMIONETA',precio:12400.40},{tipo:3,nombre:'AUTO',precio:4000},{tipo:4,nombre:'MOTO',precio:1500}] 

    console.log(TextoYValorDeBotones);

    idBtnGenerar.addEventListener("click",()=>{

        console.log("funcionando");

        TextoYValorDeBotones.forEach((item,indice)=>
            {
                console.log(item,indice);

                let BotonDinamico = document.createElement("input");
                BotonDinamico.type = "button";
                BotonDinamico.value = `${item.nombre} - ${item.precio}`;

                BotonDinamico.addEventListener("click",()=>
                    {

                        TOTAL_GLOBAL = TOTAL_GLOBAL + item.precio;
                        CONTADOR_GLOBAL++;                  

                        idTotalCobrado.textContent = TOTAL_GLOBAL.toLocaleString('es-ES');
                        idCantidadVehiculos.textContent = CONTADOR_GLOBAL.toLocaleString('es-ES');

                })

                idContenedor2.appendChild(BotonDinamico);

                console.log(BotonDinamico);

            })
    })
})