import { fnImpuestoSobreTasa } from "./modelo.js"; 
/* El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número */


window.onload = ()=>{

    console.log(`la pagina esta cargada =O`);

    const estadoDeAplicacion = { importeBaseBebida:0,
                                    bebida:0,

    };

    const idImportebaseBebida = document.querySelector("#idImportebaseBebida");
    const idBebida = document.querySelector("#idBebida");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado =document.querySelector("#resultado");
    const btnGuardar =document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");

   //inputs 

    idImportebaseBebida.oninput= ()=>{
        estadoDeAplicacion.importeBaseBebida = Number(idImportebaseBebida.value);
        console.log(estadoDeAplicacion);
    };

    idBebida.oninput = ()=>{
        estadoDeAplicacion.bebida = Number (idBebida.value);
        console.log(estadoDeAplicacion);
    };


    //boton click 
    btnCalcular.onclick =()=>{
        let impuestoBebida = fnImpuestoSobreTasa (estadoDeAplicacion.bebida,estadoDeAplicacion.importeBaseBebida);
        resultado.textContent =`el total a pagar es ${impuestoBebida}`
    };
    //botones guardar recuperar 
    btnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoDeAplicacion);
        console.log(datosJSON);
        localStorage.setItem("misDatos", datosJSON);
    };
    btnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("misDatos");
        if(datosJSON)
        {
            console.log(datosJSON);
            let objeto = JSON.parse(datosJSON);
            console.log(objeto);
            idImportebaseBebida.value = objeto.importeBaseBebida;
            idBebida.value = objeto.bebida;
        }
    };

   /* let impuestobebida = fnImpuestoSobreTasa(4,10);
   
    console.log(impuestobebida.toFixed(2));*/

};