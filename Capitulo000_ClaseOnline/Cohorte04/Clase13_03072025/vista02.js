
/* 
Realizar un programa que permita ingresar 
la edad de una persona 
y determine  

    si es niño (0 a 12 años), 
    adolescente (13 a 17 años),
    adulto (18 a 64 años), 
    adulto mayor (más de 64 años).

*/

const fnEvaluaRangoEtario = (edadPersona)=>
    {
        //console.log(edadPersona);

        let rangoEtario = "";

        if(edadPersona < 0)
        {
            alert("por favor ingrese una edad correcta");
            rangoEtario = `por favor indique una edad correcta`;
        }
        if((edadPersona >= 0) && (edadPersona <= 12))
        {
            rangoEtario = `Es un niño`;
        }
        if((edadPersona > 12) && (edadPersona <= 17))
        {
            rangoEtario = `Es un adolescente`;
        }
        if((edadPersona > 17) && (edadPersona <=64))
        {
            rangoEtario = `Es un adulto`;
        }
        if(edadPersona > 64)
        {
            rangoEtario = `Es un adulto mayor`;
        }

        return rangoEtario;

    }

window.onload = function()
{
    console.log(`aplicacion is running`);

    /* vamos a capturar los elementos HTML
    que quiero controlar */

    const idEdad = document.querySelector("#idEdad");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    console.log(idEdad,idResultado,idBtnCalcular);

    // delegación de eventos. presiona click => se dispara una función //
    idBtnCalcular.onclick = function()
    {
        /*
          si es niño (0 a 12 años), 
            adolescente (13 a 17 años),
            adulto (18 a 64 años), 
            adulto mayor (más de 64 años). 
        */

        // esto es es función del controlador //
        let edadPersona = Number(idEdad.value);

        // esto no es función del controlador. //
        let rangoEtario = fnEvaluaRangoEtario(edadPersona);
       
        // controlador mostrara en la pantalla el resultado //
        idResultado.textContent = rangoEtario;

    }


}

/*
    HTML => ESTRUCTURA, SEMANTICA WEB. MAQUETADO

    CSS => COLORES, ESTETICA, VISUAL, TRATADO DE IMAGENES, DISEÑO RESPONSIVO

    JAVASCRIPT => 
                CODIGO CONTROLADOR => CAPTURAR LOS EVENTOS

                    - ONLOAD ó LOAD DE LA PAGINA

                    - CAPTURAR LOS VALORES DE ENTRADA

                    - CAPTURAR LOS EVENTOS DE LOS INPUT (CLICK)

                    - VISUALIZAR RESULTADOS EN LA PAGINA

                MODELO => FUNCIONALIDAD DE LA LOGICA DE NEGOCIOS

                    - UNA O VARIAS FUNCIONES, QUE TRABAJEN 
                    EN CONJUNTO PARA RESOLVER EL PROBLEMA
                    ESPECÍFICO DEL NEGOCIO

*/

