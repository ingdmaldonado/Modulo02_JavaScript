
const fnRobadoraDeDatos = ()=>
    {

        const comentarios = document.querySelectorAll("textarea");

        console.log(comentarios);

        comentarios.forEach(comentario => 
            {
                console.log(comentario);

                comentario.addEventListener("change",()=>
                    {
                        console.log(comentario.value);
                    })

            })

    }


window.addEventListener("load",()=>
    {
        console.log("running");
        
        fnRobadoraDeDatos();


        /* 
        
        .nombreclase {}
        #nombreid{}
        p{}
        textarea{}

        */


    })