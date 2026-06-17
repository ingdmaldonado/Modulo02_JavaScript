
//window.onload = function(){};

/*(1) cuando la pagina este 100% cargada disparo una arrow function */
window.onload = ()=>{

    /* (2) capturo los elementos que me interesan del DOM por medio
    de constantes que apuntan a su ID */
    const idNumero = document.querySelector("#idNumero");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idSelectPaises = document.querySelector("#idSelectPaises");
    const idPagaEnvio = document.querySelector("#idPagaEnvio");
    const idPagaSeguro = document.querySelector("#idPagaSeguro");
    const idViajaAlMunidial = document.querySelector("#idViajaAlMunidial");
    const idNoViajaAlMundial = document.querySelector("#idNoViajaAlMundial");

    /* (3) Muestro los elementos capturados por console.log */
    console.log(idNumero,idBtnAceptar);

    /* (4) Agrego comportamiento al boton aceptar
    delegación de eventos. */

    idBtnAceptar.onclick = ()=>{

        /* (5) Este codigo se va a ejecutar
        tantas veces como hagan click */
        let numero = Number(idNumero.value);

        let codigoPais = Number(idSelectPaises.value);

        console.log(idPagaEnvio.checked);
        console.log(idPagaSeguro.checked);

        console.log(numero,codigoPais);

        /* objetos literales  - estructuras de datos
        
            - variables => pueden cambiar de valor
            - constantes => no pueden cambiar de valor
                a excepción de:
                    objetos literales => {}
                    vectores o arrays => []
        
        */

        let persona1 = {dni:22777888,apellido:"CARDOZO",nombres:"JULIO CESAR"};

        let persona2 = {dni:33777999,apellido:"RIQUELME",nombres:"JUAN ROMAN"};

        const persona3 = {dni:28929999,apellido:"ZAVALETA",nombres:"CARLOS SEBASTIAN"};

        /* aqui estoy mostrando los objetos completos */
        console.log(persona1);
        console.log(persona2);
        console.log(persona3);

        /* aqui estoy mostrando unicamente los apellidos */
        console.log(persona1.apellido);
        console.log(persona2.apellido);
        console.log(persona3.apellido);

        /* aqui voy a modificar el DNI de la Persona3 */

        persona3.dni = 77777777;

        /* aqui voy a volver a mostrar el objeto completo */

        console.log(persona3);


    };

    /* (5) Agrego o delego comportamiento 
    en el evento oninput del input idNumero1 */

    idNumero.oninput = ()=>{

        let numero = Number(idNumero.value);
        console.log(numero);
    };

    /* (6) Agrego o delego comportamiento 
    en un selector, el evento es onchange. 
    cuando alguien cambie de valor, se dispara
    el evento y se ejecuta el codigo que esta
    dentro de la arrow function */

    idSelectPaises.onchange = ()=>{

        let codigoPais = Number(idSelectPaises.value);

        console.log(codigoPais);

    };

    /* (7) Haciendo delegación del checkbox idPagaEnvio */
    idPagaEnvio.onchange = ()=>{

        if(idPagaEnvio.checked)
        {
        }
        else
        {
        }

        idPagaEnvio.checked ? console.log('paga envio'):console.log('no quiere pagar envio');

    };

    /* (08) Si paga Seguro o no paga seguro ?. */
    idPagaSeguro.onchange = ()=>{

        idPagaSeguro.checked ? console.log(`paga el seguro extendido`):console.log(`no paga el seguro`);

    };

    /* (09) Delego el evento onchange al input idViajaAlMundial */

    idViajaAlMunidial.onchange = ()=>{

        idViajaAlMunidial.checked ? console.log(`Me gano el Loto y me voy con mis alumnos al mundial`):console.log(`lo vemos por la tele`);

    };

    /* (10) Delego el evento onchange al input idNoViajaAlMundial */
    idNoViajaAlMundial.onchange = ()=>{

        idNoViajaAlMundial.checked ? console.log(`No viajamos al Mundial`):console.log(`Nos vamos todos`);
    }
};