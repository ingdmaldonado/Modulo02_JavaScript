
window.onload = function()
{
    const idCaja1 = document.querySelector("#idCaja1");
    const idCaja2 = document.querySelector("#idCaja2");

    const cajasDeTexto = document.querySelectorAll("input");

    console.log(cajasDeTexto);

    cajasDeTexto.forEach(caja=>{

        caja.onchange = (e)=>{
            console.log(e.target.value);
        };

    })

    /* trabaja con el evento onchange */

    idCaja1.onchange = (e)=>{

        console.log(e);

        console.log(e.target);

        console.log(e.target.value);



    };

    idCaja2.onchange = (e)=>{};

};