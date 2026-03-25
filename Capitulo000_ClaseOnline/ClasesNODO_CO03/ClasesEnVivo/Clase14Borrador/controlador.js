

window.onload = function()
{
    const idSelectorTipoDiabetes = document.querySelector("#idSelectorTipoDiabetes");

    const idBtnOpcion = document.querySelector("#idBtnOpcion");

    console.log(idSelectorTipoDiabetes);
    console.log(idBtnOpcion);

    idSelectorTipoDiabetes.onchange = function()
    {
        console.log(idSelectorTipoDiabetes.value);
    }

    idBtnOpcion.onclick = function()
    {
        //console.log(idSelectorTipoDiabetes.value);
    }



}