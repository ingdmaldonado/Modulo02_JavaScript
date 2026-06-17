

window.onload = ()=>{

    const idBoton = document.querySelector("#idBoton");
    const idBoton2 = document.querySelector("#idBoton2");
    const idReloj = document.querySelector("#idReloj");
    const idBoton3 = document.querySelector("#idBoton3");

    idBoton.onclick = ()=>{

        /* Sincronismo es la ejecución lineal
        y sentencia x sentencia hasta el final
        de un scope {} */

        /* Existen un conjunto de instrucciones
        en JS puro (Estandard) que me permiten
        generar procesos asíncronos 
        
            que cosas generan procesoa asíncronos

            *) setTimeOut => ejecutar codigo con demora
            *) setTimer => ejecutar codigo de manera cada cierto tiempo. un segundo
            *) fetch => es una promesa. que me permite
                    realizar consultas a APIs.

            *) Me permite leer información grande y pesada
                de un archivo del disco rígido. ese proceso
                puede demorar minutos en levantar.

        
        */

        setTimeout(()=>{

            console.log("esto se ejecutará pasado 3 segundos");

        },3000);

        console.log("aqui veremos setTimeOut");

        console.log("mi equipo nunca descendio");


    };

    idBoton2.onclick = ()=>{

        console.log("probar setTimer");

        setInterval(()=>{

            /* aqui lo que le digo es que me cree una
            constante que tenga la fecha y hora del dia
            y me la guarde en la constante ahora */

            const ahora = new Date();

            /* convierte la fecha y hora en formato local */
            idReloj.textContent = ahora.toLocaleString();

            

        },1000);


    };

    /* Vamos a ver Try/Catch */
    idBoton3.onclick = ()=>{

       
         


        try {           
    
            /* reference Error */
                //console.log("el total es",total);
                //fnCalcularIva(200);

            /* type error 
            porque quiero usar una variable o una constante
            como si fuera un función u otra cosa que son
            de distinto tipo.
            */


            /*
                let miImpuesto = 400;
                miImpuesto(200);
            */

         
        const Empleado = {dni:22777888,apellido:"BAZAN",nombre:"JULIO CESAR"};

           const {dni,apellido,domicilio="sin domicilio"} = Empleado;

          //  Empleado.domicilio = "AV. VIRGEN DEL VALLE 890";

            console.log(dni,apellido,domicilio);


        } catch (error) 
        {
            console.log(error);
            
        }

    };

};