


const vectorDeOpciones = [{id:1,texto:"Galletas"},{id:2,texto:"Arroz Susarelli"},{id:3,texto:"Fernet con Coca"}];
const vectorDeValores = [];

const fnMostrarVectorDeValores = ()=>
    {
        vectorDeValores.forEach((item,indice)=>
            {
                console.log(indice,item.objetovisual.checked);
            })
    }

window.addEventListener("load",()=>{

    console.log("application is running");

    const idBtnGenerarOpciones = document.querySelector("#idBtnGenerarOpciones");
    const idContenedor = document.querySelector("#idContenedor");

    console.log(idBtnGenerarOpciones);
    console.log(idContenedor);


    console.log(vectorDeOpciones);

    idBtnGenerarOpciones.addEventListener("click",()=>{

        vectorDeOpciones.forEach((item,indice)=>
            {
                console.log(item);
                console.log(indice);

                let checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.value = item.texto;

                checkBox.addEventListener("change",()=>
                    {
                        console.log("me estan cambiando",checkBox.checked);

                        fnMostrarVectorDeValores();
                        
                    })


                console.log(checkBox);

                vectorDeValores.push({item:item,objetovisual:checkBox});

                idContenedor.appendChild(checkBox);

            })
        
        console.log(vectorDeValores);
    })
})