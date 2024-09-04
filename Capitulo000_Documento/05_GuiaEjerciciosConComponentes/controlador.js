

window.addEventListener("load",()=>
{

    const idBtnGenerar = document.querySelector("#idBtnGenerar");

    console.log(idBtnGenerar);

    idBtnGenerar.addEventListener("click",()=>{

        console.log("por aqui debería generar varios botones");

     // Crear el botón
    let button = document.createElement("button");

    // Asignar todas las clases como una cadena de texto
    button.className = "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";

    // Establecer el texto del botón
    button.innerText = "Purple";

    // Insertar el botón en el documento, por ejemplo en el body
    document.body.appendChild(button);

    })

})