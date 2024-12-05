

/* (1ro) Declaro un Vector de Comenzales o invitados
al asado */
const invitadosAsado = [];


/* función que valida que sea un nombre valido */
const fnValidarNombre = (nombre)=>
    {
        if(nombre.length >= 5)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

/* agregar de a un invitado en el contenedor */

const fnAgregarInvitado = (contenedor,nombre,indice) =>
{
    contenedor.innerHTML = contenedor.innerHTML + `<h3>${indice} - ${nombre}</h3>`;
}

const fnAgregarInvitadoSelector = (contenedor,nombre,indice) =>
    {
        let opcionDinamica = `<option value=${indice}>${indice} - ${nombre}</option>`;

        contenedor.innerHTML = contenedor.innerHTML + opcionDinamica;


    }

const fnAgregarInvitadoComoContenedor = (contenedor,nombre,indice) =>
    {

        let contenedorIndice = `<div>Nro. de Invitado: ${indice}</div>`;
        let contenedorNombre = `<div>${nombre}</div>`;
        let contenedorConfirmacion = `<div><input type='checkbox' id='${indice}'</></div>`;

        contenedor.innerHTML = contenedor.innerHTML + contenedorIndice + contenedorNombre + contenedorConfirmacion;
    }


const fnAgregarTodosLosInvitados = (contenedor,vector)=>
    {
        let vectorResultado = vector.map((element,indice)=>
            {
                let opcionDinamica = `<option value = ${indice}>${element}</option>`;
                return opcionDinamica;
            })

        contenedor.innerHTML = vectorResultado;
    }


window.addEventListener("load",()=>
    {
        console.log("running");

        const idApellidoyNombre = document.querySelector("#idApellidoyNombre");
        const idBtnAgregar = document.querySelector("#idBtnAgregar");
        const idBtnVisualizar = document.querySelector("#idBtnVisualizar");
        const idContenedor1 = document.querySelector("#idContenedor1");
        const idContenedor3 = document.querySelector("#idContenedor3");
        const idSelectorDeInvitados = document.querySelector("#idSelectorDeInvitados");
        const idSelectorDeInvitados2 = document.querySelector("#idSelectorDeInvitados2");
        const idBtnTransformarConMap = document.querySelector("#idBtnTransformarConMap");

        console.log(idApellidoyNombre);
        console.log(idBtnAgregar);
        console.log(idBtnVisualizar);
        console.log(idContenedor1);
        console.log(idContenedor3);
        console.log(idSelectorDeInvitados);
        console.log(idSelectorDeInvitados2);
        console.log(idBtnTransformarConMap);

        idBtnAgregar.addEventListener("click",()=>
            {
                let apellidoyNombre = idApellidoyNombre.value;

                console.log();

                if(fnValidarNombre(apellidoyNombre))
                {
                    console.log("por aqui todo bien");

                    invitadosAsado.push(apellidoyNombre);

                }
                else
                {
                    alert("por favor ingrese un nombre y apellido valido. longitud >= 5 caracteres");
                }

            })

        idBtnVisualizar.addEventListener("click",()=>
            {
                idContenedor1.innerHTML = "";
                idSelectorDeInvitados.innerHTML = "";
                idContenedor3.innerHTML = "";
                invitadosAsado.forEach((element,indice)=>
                    {
                        fnAgregarInvitado(idContenedor1,element,indice);

                        fnAgregarInvitadoSelector(idSelectorDeInvitados,element,indice);

                        fnAgregarInvitadoComoContenedor(idContenedor3,element,indice);

                    })

                console.log(invitadosAsado);
            })

        idBtnTransformarConMap.addEventListener("click",()=>
            {
                fnAgregarTodosLosInvitados(idSelectorDeInvitados2,invitadosAsado);

            })

    })