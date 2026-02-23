
window.addEventListener("load",()=>{

    // definir un vector donde alojaré los invitados //
    const vectorDeInvitados = [];

    // 1ro) Capturo los elementos del DOM que quiero manejar

    const idApellidoYNombre = document.querySelector("#idApellidoYNombre");
    const idBtnAgregar = document.querySelector("#idBtnAgregar");
    const idBtnMostrar = document.querySelector("#idBtnMostrar");

    /* (2do) Muestro por consola los elementos 
    del DOM capturados ó "controlados" */

    console.log(idApellidoYNombre,idBtnAgregar);

    /* (3ro) Voy a manejar o controlar los eventos
    del DOM. en este caso el click del boton agregar
    */

    idBtnAgregar.addEventListener("click",()=>{

        //console.log("me estan haciendo click");

        let apellidoYNombre = idApellidoYNombre.value;

        console.log(apellidoYNombre);

        if(apellidoYNombre ==="")
        {
            alert("por favor ingrese apellido y nombre");
        }
        else
        {
            console.log("por aqui lo agrego a la lista de invitados");

            vectorDeInvitados.push(apellidoYNombre);
            
        }

    idBtnMostrar.addEventListener("click",()=>
        {
            console.log("listado de invitados",vectorDeInvitados);

            console.table(vectorDeInvitados);
        })

    /* 
        push => agregar uno nuevo pero lo hace atras
        unshif => agregar uno nuevo pero al principio
        pop => quitar el ultimo invitado
        shift => quitar el primer invitado
        splice => quitar uno o varios elementos de un vector 
    */
      

    })


})
