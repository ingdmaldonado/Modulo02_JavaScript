

    class EspiarDOM
    {
        vinculoDOM; // esto es un atributo que tiene el vinculo al DOM
        vinculoALosTextAreaDelDOM; // esto es un vector a los text Area del DOCUMENTO
        mensajesDelUsuario = []; // esto es un array ó vector que guardará los mensajes

        /* escribo el constructor y recibe como parametro
        el vinculo al DOM, a que dom ?. a cualquiera que
        tenga elementos textarea como para "ESPIAR" */

        constructor(parametro)
        {
            this.vinculoDOM = parametro; // aqui guardo el vínculo al DOM 
            this.getVinculoALosTextAreaDelDOM(); // aquí llamo al método que obtiene los vínculos a los text area del DOM
            this.recorrerTextAreayAgregarComportamiento(); // aquí llamo al método recorre todos los text area y les agrega el comportamiento onchange
        }

        /* este método. lo que hará es buscar todos los textarea que existan en el documento
        y los guardará en un atributo para que el resto de los métodos puedan acceder a través
        de un vector
        */

        getVinculoALosTextAreaDelDOM()
        {
            this.vinculoALosTextAreaDelDOM = this.vinculoDOM.querySelectorAll("textarea");
        }

        /* este método lo que permite únicamente es visualizar los textarea capturados */
        mostrarTextAreasCapturados()
        {
            console.log(this.vinculoALosTextAreaDelDOM);
        }

        /* este método lo que hace es recorrer los textarea capturados y que se encuentran
        almacenados en el atributo this.vinculoALosTextAreaDelDOM, los recorremos con un 
        forEach y les incorporamos el evento change, de esa forma sabremos cuando alguién
        escriba texto en cada textarea y nos reporte los mensajes y los vaya guardando
        en un vector de mensajes que es un atributo que se llama this.mensajesDelUsuario
        */

        recorrerTextAreayAgregarComportamiento()
        {
            this.vinculoALosTextAreaDelDOM.forEach((element)=>
                {

                    element.addEventListener("change",()=>
                        {
                            //console.log(element.value);

                            this.mensajesDelUsuario.push(element.value.toUpperCase());

                            // cada vez que se dispara el evento change, el textarea se deshabilita 
                            element.disabled = true;

                        })

                    //console.log(element);
                })
        }

        /* este método lo que permite mostrar
        los mensajes que vamos recolectando */
        mostrarMensajesRobados()
        {
            console.log(this.mensajesDelUsuario);
        }

        /* este es un método que me permite, a partir de una frase
        determinar si un texto contiene la frase "QUIERO COMPRAR UN AUTO"
        no importa el orden del texto, no importa como vengan las palabras.
        lo importante es determinar si quiere comprar un auto en algún mensaje
        */

        evaluarFrase(texto) {
            // Eliminar caracteres especiales como comas, puntos, etc.
            texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            
            // Unificar múltiples espacios en un solo espacio
            texto = texto.replace(/\s{2,}/g, " ");
            
            // Convertir a mayúsculas y dividir las palabras
            let palabras = texto.toUpperCase().split(" "); 
        
            // Verificar si las palabras clave están presentes
            if (palabras.includes("QUIERO") && palabras.includes("COMPRAR") && palabras.includes("AUTO")) {
                return true;
            } else {
                return false;
            }
        }
        


        /* Este método es el que tomará todos los mensajes que vamos capturando
        y que están almacenados en el atributo this.mensajesDelUsuario. 
        allí recorreremos elemento a elemento (frase x frase) y a cada una 
        de esas frases le iremos evaluando si existe la intención de comprar
        un auto */
    
        analizarInteresDeCompra()
        {

            // aqui recorremos mensaje x mensaje
            this.mensajesDelUsuario.forEach((element)=>
                {
                    // guardamos la frase que esto se sacó de un comentario de un textarea
                    let fraseRobada = element;

                    //console.log(element);

                    // luego por cada mensaje, invocamos al metodo evaluarFrase pasandole como parametro la frase //
                    let tieneInteresDeCompra = this.evaluarFrase(fraseRobada);

                    // mostramos el resultado por consola //
                    console.log(`Esta es la frase: ${element} => analisis: ${tieneInteresDeCompra}`);
  
                })
        }

        /* Este método es muy similar al anterior, con la diferencia
        que este método devolverá true ó false, si encuentra algún mensaje
        donde exista interés de compra 
        por eso, el método se llama some, porque recorre el vector
        aplicando la función evaluar frase, si alguna frase tiene lo que yo
        busco, al menos 1 frase, entonces puedo decir que el cliente está
        interesado en realizar una compra.
        */

        analizarInteresDeCompra2()
        {
            let resultado = this.mensajesDelUsuario.some((element)=>{

                return this.evaluarFrase(element);
            })

            console.log(resultado);
        }
    }


window.addEventListener("load",()=>
    {

        /* creo un objeto o instancia de la clase EspiarDOM y le paso como 
        parametro al constructor el document */

        let objetoEspia = new EspiarDOM(document);

        /* aquí invoco al metodo mostrar los textarea capturados que 
        me permite ver, cuales son las entradas del dom que vamos a 
        escuchar */

        objetoEspia.mostrarTextAreasCapturados();

        /* creo un vínculo al boton */
        const idBtnVerMensajesCapturados = document.querySelector("#idBtnVerMensajesCapturados");

        const idBtnClienteInteresado = document.querySelector("#idBtnClienteInteresado");

        /* cuando presione click en el boton debería recorrer frase x
        frase buscando la palabra "QUIERO" "COMPRAR" "AUTO" */

        idBtnVerMensajesCapturados.addEventListener("click",()=>
        {
            console.clear();
            objetoEspia.analizarInteresDeCompra();
        })

        idBtnClienteInteresado.addEventListener("click",()=>
        {
            console.clear();
            let Resultado = objetoEspia.analizarInteresDeCompra2();
            if(Resultado)
            {
                alert("este cliente tiene intenciones de comprar un auto");
            }
            else
            {
                alert("no tiene interes de comprar un auto");
            }

        })
    })