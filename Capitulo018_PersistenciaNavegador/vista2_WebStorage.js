
const DestinoPersistencia = Object.freeze({
    EnLocalStorage:'EnLocalStorage',
    EnSessionStorage:'EnSessionStorage'
});


window.onload = function()
{
    const idTxtNombreClave = document.querySelector("#idTxtNombreClave");
    const idTxtValor = document.querySelector("#idTxtValor");
    const idPersistir = document.querySelector("#idPersistir");
    const idSelectorDestino = document.querySelector("#idSelectorDestino");
    const idTxtNombreClaveEliminar = document.querySelector("#idTxtNombreClaveEliminar");
    const idBtnEliminar = document.querySelector("#idBtnEliminar");
    const idBtnEliminarTodas = document.querySelector("#idBtnEliminarTodas");

    console.log(DestinoPersistencia);

    const idVerDatosGuardados = document.querySelector("#idVerDatosGuardados");

    console.log(idTxtNombreClave);
    console.log(idTxtValor);
    console.log(idPersistir);
    console.log(idVerDatosGuardados);
    console.log(idSelectorDestino);

    idPersistir.addEventListener("click",()=>
        {
            let TxtNombreClave = idTxtNombreClave.value;
            let TxtValor = idTxtValor.value;
            let SelectorDestino = idSelectorDestino.value;

            if(TxtNombreClave.length !=0)
            {
                if(TxtValor.length !=0)
                {
                    fnPersistirDato(SelectorDestino,TxtNombreClave,TxtValor);
                }
                else
                {
                    alert("debe ingresar el valor");
                }
            }
            else
            {
                alert("debe ingresar el nombre de la clave");
            }
        })

    idVerDatosGuardados.addEventListener("click",()=>
        {

            let SelectorDestino = idSelectorDestino.value;

            fnVerDatosAlmacenados(SelectorDestino);

        })

    idBtnEliminar.addEventListener("click",()=>{

            let SelectorDestino = idSelectorDestino.value;
            let TxtNombreClaveEliminar = idTxtNombreClaveEliminar.value;

            if (TxtNombreClaveEliminar.length !=0)
            {
                fnEliminarClave(SelectorDestino,TxtNombreClaveEliminar);
            }

        })

    idBtnEliminarTodas.addEventListener("click",()=>{

        let SelectorDestino = idSelectorDestino.value;

        fnLimpiarStorage(SelectorDestino);

    })

}


/* Funcion Que permite persistir un dato ya sea en local storage o session storage */
const fnPersistirDato = (stringDestino,stringClave,stringValor)=>
{

    if (stringDestino === DestinoPersistencia.EnLocalStorage)
    {
        localStorage.setItem(stringClave,stringValor);
        return;
    }

    if(stringDestino === DestinoPersistencia.EnSessionStorage)
    {
        sessionStorage.setItem(stringClave,stringValor);
        return;
    }
}

/* Funcion Que permite ver los datos almacenados en local storage o session storage */
const fnVerDatosAlmacenados = (stringDestino)=>
    {
        if (stringDestino === DestinoPersistencia.EnLocalStorage)
        {
            console.log(`Cantidad de Claves Almacenadas en ${stringDestino} = ${localStorage.length}`);  

            for(let i = 0;i < localStorage.length;i++)
            {
                let Clave = localStorage.key(i);
                //console.log(Clave);

                let Valor = localStorage.getItem(Clave);
                //console.log(Valor);

                console.log(`${Clave} : ${Valor}`);
            }
        }
        
        if(stringDestino === DestinoPersistencia.EnSessionStorage)
        {
            console.log(`Cantidad de Claves Almacenadas en ${stringDestino} = ${sessionStorage.length}`);  

            for(let i = 0;i < sessionStorage.length;i++)
                {
                    let Clave = sessionStorage.key(i);
                    //console.log(Clave);
    
                    let Valor = sessionStorage.getItem(Clave);
                    //console.log(Valor);

                    console.log(`${Clave} : ${Valor}`);
                }
        }
    }

/* Funcion que permite eliminar una clave del local storage o session storage */

const fnEliminarClave = (StringDestino,StringClave)=>
    {
        if(StringDestino === DestinoPersistencia.EnLocalStorage)
        {
            localStorage.removeItem(StringClave);
        }
        if(StringDestino === DestinoPersistencia.EnSessionStorage)
        {
            sessionStorage.removeItem(StringClave);
        }

    }

/* Funcion que permite eliminar todas las claves almacenadas en el local storage o session storage
dependiendo del parametro que se le pase */

const fnLimpiarStorage = (StringDestino)=>
{
    
    if(StringDestino === DestinoPersistencia.EnLocalStorage)
        {
            localStorage.clear();
        }
    if(StringDestino === DestinoPersistencia.EnSessionStorage)
        {
            sessionStorage.clear();
        }

}