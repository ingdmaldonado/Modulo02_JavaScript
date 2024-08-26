/*
Una prestigiosa concesionaria de autos lanza una promoción muy importante buscando como objetivo promover la venta de vehículos cero kilómetros que tiene en Stock.
	para ello contrata un programador Web Full Stack con la intención que mediante una aplicación web permita a los interesados simular la operatoria de compra y de esta manera no saturar sus oficinas con personas interesadas en la "operatoria".

	El dueño de la concesionaria plantea el siguiente esquema: El usuario podrá elegir tres modelos de vehículo que tenemos disponibles.

	Vehiculo1 => con un precio de venta de 25.000.000
	Vehiculo2 => con un precio de venta de 29.000.000
	Vehiculo3 => con un precio de venta de 35.000.000

	El Gerente nos da las siguientes indicaciones

1)	deberá elegir el vehículo en el cual está interesado
2)	podrá ingresar el importe a entregar de contado, que siempre, deberá ser mayor al 50% del valor del vehículo elegido y lógicamente menor al valor total del vehículo.
3ro) entendemos que el resto (diferencia será financiada bajo la siguiente modalidad).

	Podrá elegir entre los siguientes esquemas de financiación

a)	el total a financiar con un 10% en 24 cuotas
b)	el total a financiar con un 20% en 48 cuotas
c)	el total a financiar con un 50% en 60 cuotas.

Si el cliente decide recibir mayor información por parte de nuestros vendedores, que tenga un lugar donde pueda colocar sus datos personales, (apellido, nombre), teléfonos, correo electrónico y nos comunicaremos, es decir un representante estaría en condiciones de comunicarse con, siempre y cuando active la casilla de “aprobación de comunicarnos vía privada”.


*/


    /* Aqui construimos una función del tipo arrow
    function. que recibe como parametro el auto seleccionado
    y devuelve su valor comercial */

    const fnDevolverValorDelAuto = (autoSeleccionado)=>
        {
            let valorDelAuto = 0;

            switch(autoSeleccionado)
            {
                case 1:
                    {
                        valorDelAuto = 25000000.00;
                        break;
                    }

                case 2:
                    {
                        valorDelAuto = 29000000.00;
                        break;
                    }

                case 3:
                    {
                        valorDelAuto = 35000000.00;
                        break;
                    }
            }

            return valorDelAuto;
        }

    const fnMinimoExigible = (valorDelAuto,porcentajeGerente)=>
        {
            return (valorDelAuto * porcentajeGerente)/100;
        }

    const fnDevolverCuotaFinanciacion = (diferencia,plan)=>{

        let mensajeFinanciacion = "";
        let valorCuota = 0;
        if(plan === 1) /* son 24 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 10)/100)/24;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 24 cuotas de ${valorCuota}`;
        }
        if(plan === 2) /* son 48 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 20)/100)/48;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 48 cuotas de ${valorCuota}`;
        }
        if(plan === 3) /* son 60 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 50)/100)/60;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 60 cuotas de ${valorCuota}`;
        }

        return mensajeFinanciacion;
    }

    const fnCompletoTexto = (textoIngresado)=>
        {
            console.log("dentro de la funcion => ",textoIngresado, " ",textoIngresado.length);

            if((textoIngresado.length >= 5))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

window.addEventListener("load",()=>{

    console.log("la aplicación esta funcionando");

    /* En esta parte estoy vinculandome con la vista a traves
    de constantes a sus objetos u elementos HTML */
    const idSelectorVehiculo = document.querySelector("#idSelectorVehiculo");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idDineroAEntregar = document.querySelector("#idDineroAEntregar");
    const idSelectorDePlanFinanciacion = document.querySelector("#idSelectorDePlanFinanciacion");

    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idBtnCancelar = document.querySelector("#idBtnCancelar");


    const idApellido = document.querySelector("#idApellido");
    const idDatosPersonales = document.querySelector("#idDatosPersonales");
    const idAceptaLlamada = document.querySelector("#idAceptaLlamada");

    
	const idNombre = document.querySelector("#idNombre");
	const idTelefono = document.querySelector("#idTelefono");
	const idCorreo = document.querySelector("#idCorreo");


    /* Aqui voy mostrando esas constantes para
    verificar que estoy capturando bien 
    esos elementos u objetos */

    console.log(idSelectorVehiculo);
    console.log(idBtnCalcular);
    console.log(idDineroAEntregar);
    console.log(idSelectorDePlanFinanciacion);
    console.log(idDatosPersonales);

    idDatosPersonales.style.display = 'none';

    /* Estado de la aplicación */
    let VehiculoSeleccionado = 0;
    let valorVehiculoSeleccionado = 0;
    let dineroAEntregar = 0;
    let minimoExigible = 0;
    let diferenciaAFinanciar = 0;
    let planFinanciacion = 0;
    let mensajeFinanciacion = "";



    let apellidoIngresado = "";
    let nombreIngresado = "";
    let telefonoIngresado = "";
    let correoIngresado = "";


    idBtnCalcular.addEventListener("click",()=>{

        //console.log(idSelectorVehiculo.value);
        console.log(VehiculoSeleccionado);

        VehiculoSeleccionado = Number(idSelectorVehiculo.value);

        //console.log(fnDevolverValorDelAuto(VehiculoSeleccionado));

        valorVehiculoSeleccionado = fnDevolverValorDelAuto(VehiculoSeleccionado);

        console.log(valorVehiculoSeleccionado);
       
        dineroAEntregar = Number(idDineroAEntregar.value);

        console.log(dineroAEntregar);

        minimoExigible = fnMinimoExigible(valorVehiculoSeleccionado,50);

        console.log(minimoExigible);

        if(dineroAEntregar > minimoExigible)
        {
            /* por aqui la entrega es mayor al minimo
            exigible */

            console.log("por aqui tengo que hacer la financiación");

            if(dineroAEntregar < valorVehiculoSeleccionado)
            {
                /* por aqui se estaría cumpliendo la segunda condición
                que sería que la entrega debe ser menor al total del 
                vehiculo */

                console.log("por aqui se cumplen las dos condiciones");

                diferenciaAFinanciar = valorVehiculoSeleccionado - dineroAEntregar;

                console.log(diferenciaAFinanciar);

                planFinanciacion = Number(idSelectorDePlanFinanciacion.value);

                console.log(planFinanciacion);

                mensajeFinanciacion = fnDevolverCuotaFinanciacion(diferenciaAFinanciar,planFinanciacion);

                console.log(mensajeFinanciacion);

            }
            else
            {
                alert("Estimado cliente, el importe ingresado es mayor al valor del auto");
            }

        }
        else
        {
            alert(`por decisiones comerciales requerimos como mínimo de entrega un importe mayor a ${minimoExigible}`);
        }
    })

    idBtnAceptar.addEventListener("click",()=>{

        apellidoIngresado = idApellido.value;
        nombreIngresado = idNombre.value;
        telefonoIngresado = idTelefono.value;
        correoIngresado = idCorreo.value;    

        console.log(apellidoIngresado);
        console.log(nombreIngresado);
        console.log(telefonoIngresado);
        console.log(correoIngresado);

        console.log(fnCompletoTexto(apellidoIngresado));
        console.log(fnCompletoTexto(nombreIngresado));
        console.log(fnCompletoTexto(telefonoIngresado));
        console.log(fnCompletoTexto(correoIngresado));

        if(!fnCompletoTexto(apellidoIngresado))
        {
            alert("Por favor Ingrese su Apellido");
        }
        else
        {
            if(!fnCompletoTexto(nombreIngresado))
            {
                alert("Por favor Ingrese su Nombre");
            }
            else
            {
                
                if(!fnCompletoTexto(telefonoIngresado))
                    {
                        alert("Por favor Ingrese su correo telefono");
                    }
                else
                {
                    if(!fnCompletoTexto(correoIngresado))
                        {
                            alert("Por favor Ingrese su correo electrónico");
                        }
                    else
                    {
                        console.log("REGISTRAMOS AL USUARIO PARA LLAMARLO !!!.");
                    }
                }
            }
        }
    

    })

     idAceptaLlamada.addEventListener("change",()=>
        {
            console.log("aqui deberia mostrar el div");

            idDatosPersonales.style.display = 'block';

            if(idAceptaLlamada.checked) // Si esta encendido es porque quiere la llamada
            {
                idDatosPersonales.style.display = 'block';
            }
            else
            {
                idDatosPersonales.style.display = 'none';
            }
        })

        idBtnCancelar.addEventListener("click",()=>{

            idDatosPersonales.style.display = 'none';
            idAceptaLlamada.checked = false;

        })

})




/* 

    (00) Los objetos HTML que estaban mal capturados 
	 
	    const idNombre = document.querySelector("#idNombre");
	    const idTelefono = document.querySelector("#idTelefono");
	    const idCorreo = document.querySelector("#idCorreo");


    (1ro)
        en el evento change del checkbox realizamos el primer cambio, donde detectamos
        cada vez que se presiona en el checkbox y determinamos si está encendido, ponemos el div visible
        y en caso contrario, lo ocultamos.

    (2do) voy a aplicar unos estilos al div, para que en lugar de mostrarse debajo de todo, se muestre
    en estilo "popup", es decir que tome el centro de la página. 

      
        #idDatosPersonales {
            display: none; // Ocultar por defecto //
            position: absolute; // Posición absoluta //
            top: 50%; // Centrado verticalmente //
            left: 50%; // Centrado horizontalmente //
            transform: translate(-50%, -50%); // Ajusta la posición para centrar //
            background-color: #fff; // Color de fondo blanco //
            padding: 20px; // Espacio interno alrededor del contenido //
            border-radius: 5px; // Bordes redondeados //
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Sombra para darle un efecto de profundidad //
            z-index: 1000; // Asegura que esté encima de otros elementos //
            width: 80%; // Ancho del contenedor como porcentaje del ancho de la pantalla //
            max-width: 600px; // Ancho máximo para evitar que el contenedor sea demasiado grande //
    }

    (3ro) voy a incluir un boton "cancelar" en el div para ingresar datos personales, cosa
    que en caso que no quiera que le hagan la llamada, tenga la posibilidad de ocultar el mismo.

        3.1) lo agregamos al HTML
        
                 <input type="button" value="Cancelar" id="idBtnCancelar">

        3.2) lo capturamos desde el controlador

        3.3) vamos a asignarle comportamiento con addEventListener
        y le vamos a decir, cada vez que te presionen, que oculte ese div que está en modo "popup"

            idDatosPersonales.style.display = 'none';
            idAceptaLlamada.checked = false; // desactivamos el checkbox

        

    (4to) Vamos a terminar el boton aceptar llamada, donde vamos a obtener los datos ingresados,
    vamos a validar que sean datos válidos, y recién ahí le diremos en breve nos comunicaremos con UD.
    para ello tenemos que capturar el resto de los datos, idNombre, idTelefono, idCorreo

            
    	const idNombre = document.querySelector("#idNombre");
    	const idTelefono = document.querySelector("#idNombre");
    	const idCorreo = document.querySelector("#idNombre");

    (5to) Creamos las variables (globales) necesarias para almacenar Nombre,Telefono,Correo 

            let Nombre = "";
            let Telefono = "";
            let Correo = "";

    (6to) Obtenemos los valores ingresados dentro del boton aceptar llamada

            Nombre = idNombre.value;
    	    Telefono = idTelefono.value;
    	    Correo = idCorreo.value;

    (7mo) La unica validación que aceptaremos es que los campos no estén vacíos
        y que tengan una longitud mayor a 2 caracteres

        

    (8vo) Realizaremos una función, que reciba como parametro una cadena, un string
    y analice si está vacía o no. 

    
    

        // RESUMEN DE LO QUE VIMOS HASTA AHORA //

            - declaracion de variables
            - declaración de constantes
            - visualización de resultados a través de la consola. console.log()
            - HTML con sus etiquetas id para ser capturados desde JavaScript
            - incorporación del script. "controlador" con la etiqueta <script>
            - captura de elementos/objetos HTML desde JavaScript
            - eventos y delegación de eventos

                objeto.addEventListener("evento", ()=> { })


            - declaración de funciones, de forma clásica y de forma como arrow function guardandola
            dentro de una constante.

            - manejo de eventos de la página
                * load de la página => con una arrow function

            - visualización de pantallas en modo popup




*/





