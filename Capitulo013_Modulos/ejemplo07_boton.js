
export default function()
{
    let variableBoton = document.createElement("input");

    variableBoton.value = "soy un boton";
    variableBoton.type = "button";

    variableBoton.addEventListener("click",()=>
        {
            alert("soy un boton generado desde una biblioteca, me puedo replicar varias veces");
        })


    return variableBoton;

}