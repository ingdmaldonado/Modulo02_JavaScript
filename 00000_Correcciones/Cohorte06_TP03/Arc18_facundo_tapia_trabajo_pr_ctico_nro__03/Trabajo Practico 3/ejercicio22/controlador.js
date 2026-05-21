/*Ejercicio Nro. 22:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número
*/



import { calcularSobretasa } from "./modelo.js";


window.onload = () => {


    const estadoAplicacion = {
        tipoBebida:1,
        importeBase:0
    };


    const idTipoBebida = document.querySelector("#idTipoBebida");
    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    idTipoBebida.oninput = () =>{
        estadoAplicacion.tipoBebida = Number(idTipoBebida.value);
    };

    idImporteBase.oninput =() =>{
        estadoAplicacion.importeBase = Number(idImporteBase.value);
    };

    idBtnCalcular.onclick = () => {
        let resultado = calcularSobretasa(estadoAplicacion.tipoBebida,estadoAplicacion.importeBase);

        idResultado.textContent = "sobretasa: " +resultado;
    }

    idBtnGuardar.onclick = () =>{

        let datosJSON = JSON.stringify(estadoAplicacion);

        console.log(datosJSON);


        localStorage.setItem (`datosAPP`,datosJSON);


    };
    
    
    idBtnRecuperar.onclick = () =>{

        let datosJSON = localStorage.getItem(`datosAPP`);

        let datosObjeto = JSON.parse(datosJSON);

        console.log(datosJSON);
        console.log(datosObjeto);


        
        idTipoBebida.value = datosObjeto.tipoBebida;
        idImporteBase.value = datosObjeto.importeBase;

        
        estadoAplicacion.tipoBebida = Number(datosObjeto.tipoBebida);
        estadoAplicacion.importeBase = Number(datosObjeto.importeBase);



    };





















};