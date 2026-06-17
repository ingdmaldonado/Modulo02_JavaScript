
window.onload = function(){

    const idBoton1 = document.querySelector("#idBoton1");

    /* capturarlos de manera individual */
    const idTextArea1 = document.querySelector("#idTextArea1");
    const idTextArea2 = document.querySelector("#idTextArea2");
    const idTextArea3 = document.querySelector("#idTextArea3");

    /* captura global. de todos los elementos 
    juntos */

    const todos = document.querySelectorAll("textArea");

    todos.forEach(item => {

        item.addEventListener("input",()=>{

            let datos = item.value;
            console.log(`datos ingresados ${datos}`);

        });

    });

    console.log(todos);


    idTextArea1.addEventListener("input",()=>{

        let texto1 = idTextArea1.value;

        console.log("este es el evento tradicional ",texto1);

    });


    // delegacion de eventos //

    idBoton1.onclick = ()=>{

        console.log("es el click 1 en el boton");

    };

    // aqui vuelvo a hacer otra delegacion de eventos //
    idBoton1.onclick = ()=>{

        console.log("es el click 2 en el boton");

    };

    /* addEventListener */

    idBoton1.addEventListener("click",()=>{
        console.log("add event listener 1");
    });

    idBoton1.addEventListener("click",()=>{
        console.log("add event listener 2");
    });

    /* voy a dar un ejemplo con variables */

    let a = 10;
    console.log(a);

    a = 20;
    console.log(a);


};