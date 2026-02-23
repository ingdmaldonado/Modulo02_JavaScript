

/* spread operator 

    ...

    spread operator sirve para clonar de forma independiente vectores
    spread operator sirve para clonar de forma indpenediente objetos

*/


const estadoAplicacion = 
    {
        nivelDeCalidad:0,
        comentarios:"",
    }

window.addEventListener("load",()=>
    {

        const idSelectNivelCalidad = document.querySelector("#idSelectNivelCalidad");
        const idComentarios = document.querySelector("#idComentarios");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        /* (1ro) recuperar los datos del localStorage  */

        let datos = localStorage.getItem("datosGuardados");
        console.log(datos);

        /* (2do) Convertir esos datos a formato OBJETO LITERAL */

        let datosJSON = JSON.parse(datos);
        console.log(datosJSON);

        /* (3ro) le voy a agregar los atributos al estado de la aplicacion */

        //estadoAplicacion.numeroDNI = datosJSON.numeroDNI;
        //estadoAplicacion.apellidoYNombre = datosJSON.apellidoYNombre;

        Object.assign(estadoAplicacion,datosJSON);

      //  estadoAplicacion = {...estadoAplicacion,...datosJSON};

        console.log(estadoAplicacion);


        console.log(idSelectNivelCalidad,idComentarios,idBtnAceptar);

   

        idSelectNivelCalidad.addEventListener("change",()=>
            {
                estadoAplicacion.nivelDeCalidad = Number(idSelectNivelCalidad.value);
            })

        idComentarios.addEventListener("input",()=>
            {
                estadoAplicacion.comentarios = idComentarios.value;
            })

         idBtnAceptar.addEventListener("click",()=>
            {
                console.log(estadoAplicacion);
            })

    })