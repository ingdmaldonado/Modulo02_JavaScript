

const notasDeEstudiantes = [10,9,8,2,9,8,7,4,10];


/* Rest operator => le aviso a javaScript que 
vendrán varios parametros y que todos ellos, 
se manejarán vajo un solo nombre y sería 
un vector 
*/

const fnCalcularPromedio = (...valores)=>
{

    let sumaDeValores = 0;

    valores.forEach((element)=>{

        sumaDeValores = sumaDeValores + element;

    })

    if(valores.length > 0)
    {
        return sumaDeValores/valores.length;
    }
    else
    {
        return false;
    }

}


window.addEventListener("load",()=>{

    console.log("running");

    console.log(fnCalcularPromedio(8,10,12,14,25,31));



})