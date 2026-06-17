

function DeterminarGenero(isMan,isWoman,isUndefined)
{

    console.log(isMan,isWoman,isUndefined);
   

    if(typeof(isMan)!== 'boolean')
    {       
        alert("isMan no es booleano");
        return 0;
    }
    
    if(typeof(isWoman)!=='boolean')
    {
        alert("isWoman no es booleano")
        return 0;
    }
   
    if(typeof(isUndefined)!== 'boolean')
    {
        alert("isUndefined no es booleano");
        return 0;
    }
    

    if(isMan)
    {
        return 1;
    }
    else
    {
        if(isWoman)
        {
            return 2;
        }
        else
        {
            if(isUndefined)
            {
                return 3;
            }
            else
            {
                alert("seleccione una opción valida");
            }
        }
    }
}



window.onload = function()
{

    console.log(`this application is running !!!`);

    let idradVAron = document.getElementById("idradVAron");

    let idradMujer = document.getElementById("idradMujer");

    let idradNoDefinido = document.getElementById("idradNoDefinido");

    let btnDeterminarGenero = document.getElementById("btnDeterminarGenero");

    console.log(idradMujer,idradVAron,idradNoDefinido,btnDeterminarGenero);


    btnDeterminarGenero.onclick = function()
    {
        console.log("the event click is ok !!!");

        let Resultado = DeterminarGenero(idradVAron.checked,idradMujer.checked,idradNoDefinido.checked);
    
        alert(Resultado);
    
    }

   // btnDeterminarGenero.onclick = ClickBotonGenero;


}