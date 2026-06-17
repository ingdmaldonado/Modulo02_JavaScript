
const funcionDelegada = (e)=>{

     alert(`me estan haciendo click en el boton ${e.target.textContent}`)

    if(e.target.textContent === 'Boton 1')
    {
        console.log(`me estan haciendo click en el 1`);
    }

}

window.onload = ()=>{

    const Botones = document.querySelectorAll("button");

    console.log(Botones);

    Botones.forEach(boton => {

        boton.onclick = funcionDelegada;

        /*
        boton.onclick = (e)=>{
            alert(`me estan haciendo click en el boton ${e.target.textContent}`)
        };
        */


    });



};