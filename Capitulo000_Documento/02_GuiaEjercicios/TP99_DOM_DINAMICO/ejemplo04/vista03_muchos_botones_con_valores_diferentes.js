import fnGeneraBotonDinamico from "./fnGeneraBotonDinamico.js";




    let TOTAL_GLOBAL = 400.25;
    let CONTADOR_GLOBAL = 2;


    const setTOTAL_GLOBAL = (nuevoValor)=>
        {
            TOTAL_GLOBAL = nuevoValor;
        }

    const getTOTAL_GLOBAL = ()=>
        {
            return TOTAL_GLOBAL;
        }

    const getCONTADOR_GLOBAL = ()=>
        {
            return CONTADOR_GLOBAL;
        }

    const setCONTADOR_GLOBAL = (nuevoValor)=>
        {
            CONTADOR_GLOBAL = nuevoValor;            
        }


window.addEventListener("load",()=>{

  

    const idBtnGenerar1 = document.querySelector("#idBtnGenerar1");
    const idBtnGenerar2 = document.querySelector("#idBtnGenerar2");

    const idContenedor2 = document.querySelector("#idContenedor2");

    const idTotalCobrado = document.querySelector("#idTotalCobrado");
    const idCantidadVehiculos = document.querySelector("#idCantidadVehiculos");

    /* ponele la imagen bolu */

    const TextoYValorDeBotones = [{tipo:1,nombre:'CAMION',precio:23500.50},{tipo:2,nombre:'CAMIONETA',precio:12400.40},{tipo:3,nombre:'AUTO',precio:4000},{tipo:4,nombre:'MOTO',precio:1500},{tipo:5,nombre:'CUATRICICLO',precio:1650.20}];

    console.log(TextoYValorDeBotones);

    idBtnGenerar1.addEventListener("click",()=>{

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


    idBtnGenerar2.addEventListener("click",()=>{

        TextoYValorDeBotones.forEach((item,indice)=>
            {
                console.log(item,indice);
                let botonDinamico = fnGeneraBotonDinamico(item,getTOTAL_GLOBAL,setTOTAL_GLOBAL,getCONTADOR_GLOBAL,setCONTADOR_GLOBAL,idTotalCobrado,idCantidadVehiculos);
                idContenedor2.appendChild(botonDinamico);
            });
    })
})

