

window.onload = function()
{ 

    const idDivContenedor = document.getElementById("idDivContenedor");

    const paisesSudAmerica = ["ARGENTINA","BRASIL","PARAGUAY","URUGUAY","BOLIVIA","PERU","COLOMBIA","VENEZUELA"];


    fnPrimerPaso(paisesSudAmerica,(parametro)=>
        {
            console.log(parametro);

            idDivContenedor.innerHTML = parametro;
        });
}


/* la primera función espera 5 segundos, ,
calcula el cuadrado y la segunda función
que es la función callback muestra el resultado
*/

const fnPrimerPaso = (vector,fnCallBack)=>
{
    setTimeout(()=>{

        let Resultado = vector.map((item,indice)=>
            {
                return `<input type='button' value='${item}'/>`
            })

        fnCallBack(Resultado);

    },5000);

}