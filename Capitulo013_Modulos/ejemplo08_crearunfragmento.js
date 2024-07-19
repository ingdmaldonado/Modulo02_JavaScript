
export default function()
{
    let fragmento = document.createDocumentFragment();

    let boton1 = document.createElement("input");
    boton1.value ="Soy el Boton 1 del Fragment";
    boton1.type ="button";

    let boton2 = document.createElement("input");
    boton2.value ="Soy el Boton 2 del Fragment";
    boton2.type = "button";

    boton1.addEventListener("click",()=>
        {
            alert("soy el boton1 del Fragment");
        })

    boton2.addEventListener("click",()=>{
        alert("soy el boton2 del Fragment");
    })


    fragmento.appendChild(boton1);
    fragmento.appendChild(boton2);

    return fragmento;
}