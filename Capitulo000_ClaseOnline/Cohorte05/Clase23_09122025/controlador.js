

window.onload = ()=>{


    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    // recuperar los datos del localStorage //
    idBtnRecuperar.onclick = ()=>{

        let datos = localStorage.getItem("version");

        console.log(datos);

        localStorage.removeItem("")

    };

    console.log(`este codigo se ejecuta en el cliente`);

    /********************************************/
    /********* TEMA 01:  JSON  **********/
    /********************************************/


    const persona = {
        dni:22777888,
        nombrecompleto:"MESSI LIONEL ANDRES",
        telefono:33252323232
    }

    console.log(persona);

    /* aqui estoy convirtiendo datos de formato 
    OBJETO => JSON. estaría en condiciones
    de viajar a traves de internet al BackEnd */

    let personaAJSON = JSON.stringify(persona);

    console.log(personaAJSON);


    const Productos = [
        {
            id:200,
            productonombre:"COCA COLA",
            productoprecio:3700
        },
           {
            id:300,
            productonombre:"FERNET DE 750 CM3",
            productoprecio:12000
        },
    ];

    console.log(Productos);

    console.log(JSON.stringify(Productos));

    /*************************************************************/
    /********* TEMA 02:  PERSISTENCIA EN EL NAVEGADOR  **********/
    /************************************************************/

        /* 
            - localStorage: almacenamiento en el navegador
                con sesiones múltiples.
                no se eliminan hasta que que la propia
                aplicacion los elimine

            - sessionStorage
                almacenamiento en el navegador pero con 
                independiencia de la sesión y se eliminan
                automaticamente cuando el navegador se cierra

            - cookies: Persistencia en el navegador
            que tienen como objetivo enviarse
            de forma automática al servidor Web.
        
        */

    
        localStorage.setItem("version","Version 1 - 09.12.2025");




};