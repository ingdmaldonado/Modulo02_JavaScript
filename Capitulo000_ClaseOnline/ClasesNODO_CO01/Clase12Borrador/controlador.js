
class Espionaje
{

    vinculoAlDOM; // atributo que tiene vínculo con el DOM 
    elementosEspiados; // atributo donde guardo los <textarea> guardados en el DOCUMENTO
    mensajesEspiados = []; // lugar donde voy guardando los mensajes que se van registrando

    /* en el Constructor voy a inicializar el vínculo hacía el DOM */
    constructor(parametro)
    {
        /*(1ro) Guardo un vínculo al DOM */
        this.vinculoAlDOM = parametro;

        /* (2do) a través de ese DOM. accedo a todos los textarea del documento */
        this.elementosEspiados = this.vinculoAlDOM.querySelectorAll("textarea");

        /* (3ro) los muestro por consola como para ir haciendo pruebas */
        console.log(this.elementosEspiados);

        /* (4to) recorro los textarea y les incorporo el evento change, para
        que vaya registrando en el vector de mensajes espiados */

        this.elementosEspiados.forEach(element => 
            {
                element.addEventListener("change",()=>
                    {
                        console.log(element.value);

                        this.mensajesEspiados.push(element.value);
                    })
            })
    }

    /* metodo de la clase, que me permite ir viendo los mensajes que voy 
    recabando */

    mostrarObjetosEspiados()
    {
        console.log(this.elementosEspiados);
    }

    /* Es una función miembro de la clase (método) que
    recibirá como parametro un mensaje de texto y 
    determinará si el usuario tiene intenciones de comprar
    un auto */

    EvaluarFrase(texto)
    {
        let palabras = texto.replace(/\n/g, " ").toUpperCase().split(" ");
    
        console.log(palabras);
    
        if(palabras.includes("QUIERO") && palabras.includes("COMPRAR") && palabras.includes("AUTO"))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /* Función miembro de la clase que permitirá 
    recorrer todos los mensajes capturados e ir
    analizando si en las frases escritas hay 
    intenciones de comprar el auto, analizando
    esos datos con la función anterior */

    analizarMensajesRegistrados()
    {
        console.log(this.mensajesEspiados);

        if(this.mensajesEspiados != null && this.mensajesEspiados != undefined)
        {
            this.mensajesEspiados.forEach(element => 
                {
                    if(this.EvaluarFrase(element))
                    {
                        console.log("tiene intenciones de comprar un auto - reportar");
                    }
                })      
        }
        else
        {
            console.log("esta saliendo por el else del nulo");
        }      
    }


    /* Arrancamos con este metodo */

    Arrancar()
        {
            setInterval(()=>{
                this.analizarMensajesRegistrados();
            },5000);
        }

}

   

window.addEventListener("load",()=>
    {
        

        //const idBtnVisualizarDatos = document.querySelector("#idBtnVisualizarDatos");

        console.log("aplicación corriendo");


        let objetoDeEspionaje = new Espionaje(document);

        objetoDeEspionaje.Arrancar();


        objetoDeEspionaje.mostrarObjetosEspiados();

        
    idBtnVisualizarDatos.addEventListener("click",()=>
        {
            objetoDeEspionaje.analizarMensajesRegistrados();
        })

    })