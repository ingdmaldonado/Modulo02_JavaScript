
import {fnCalcularImporteTotal,versionSistema} from "./modelo.js";


window.addEventListener("load",()=>{

    console.log("la aplicación esta corriendo");

    /* capturando los elementos visuales que 
    quiero controlar */
    const idImporteBase = document.querySelector("#idImporteBase");
    const idSelectTipoProducto = document.querySelector("#idSelectTipoProducto");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    console.log(idImporteBase,idSelectTipoProducto,idBtnCalcular,idResultado);

    idBtnCalcular.addEventListener("click",()=>{

        console.log(`me estan haciendo click`);

        let importeBase = Number(idImporteBase.value);
        let tipoProducto = Number(idSelectTipoProducto.value);

        console.log(importeBase,tipoProducto);

        /* aqui lo que el controlador hace
        es invocar una función ESPECIALIZADA
        en el cálculo del impuesto (IVA) y
        delega en esa función la "complejidad"
        del cálculo */

        let totalAPagar = fnCalcularImporteTotal(importeBase,tipoProducto);

        idResultado.textContent = `Importe: ${importeBase} Tipo Producto: ${tipoProducto} Total: ${totalAPagar}`;

        console.log(`Importe: ${importeBase} Tipo Producto: ${tipoProducto} Total: ${totalAPagar}`);

        /* aqui deberíamos calcular el impuesto
        en función del tipo de producto y el importe
        base */

        /* El controlador, NO SE DEBE
        ENCARGAR NI RESPONSABILIZAR DE LA LÓGICA
        PROPIA DEL OBJETO DE LA APLICACIÓN.

        OBJETIVO APLICACIÓN => Calcular el Importe Total = Importe Base + IVA
        */

        /* NO ES MI FUNCIÓN CALCULAR ABSOLUTAMENTE 
        NADA. yo simplemente capturo los valores
        que están en la pantalla, se los paso a 
        un "RESPONSABLE" y ese se encargara
        de decirme el o los resultados que tengo
        que mostrar. 
        */





    })
})

/* ESQUEMA GENERAL => PATRON DE DISEÑO

    MODELO => LOGICA ESPECIFICA DE LA APLICACIÓN

        MÓDULOS => LA POSIBILIDAD QUE ME DA JS
        de EXPORTAR FUNCIONES, CONSTANTES, Y 
        UN MONTON DE HERRAMIENTAS EN OTRO ARCHIVO .JS


    VISTA => HTML + CSS
    
    CONTROLADOR => 
                CAPTURA DE LOS VALORES Y 
                EVENTOS QUE GENERAL USUARIO EN EL DOM

*/