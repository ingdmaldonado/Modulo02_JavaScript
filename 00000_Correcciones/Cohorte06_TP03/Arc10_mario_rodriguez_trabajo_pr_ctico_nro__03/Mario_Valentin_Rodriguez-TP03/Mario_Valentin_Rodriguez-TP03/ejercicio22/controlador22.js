import {fnSobreTasa} from "./modelo22.js";

/*

Ejercicio Nro. 22: 

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


window.onload = ()=>{

    console.log(`funcionando`);

    const estadoAplicacion ={

        importeBase:0,
        tipoProducto:1,

    };

    const idSelectProducto = document.querySelector("#idSelectProducto");
    const idImporteBase = document.querySelector("#idImporteBase");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idSelectProducto.onchange = () => {

        estadoAplicacion.tipoProducto = Number(idSelectProducto.value);


        console.log(estadoAplicacion);
    };

    idImporteBase.oninput = ()=>{
        estadoAplicacion.importeBase = Number(idImporteBase.value);
        
        console.log(estadoAplicacion);
    };

    idBtnCalcular.onclick = ()=>{
            
        let resultado = fnSobreTasa(estadoAplicacion.importeBase, estadoAplicacion.tipoProducto);
            
        console.log(resultado.toFixed(2));
            
        idResultado.textContent = `Tipo producto: ${estadoAplicacion.tipoProducto} - Importe Base: ${estadoAplicacion.importeBase} - Sobre Tasa: ${resultado.toFixed(2)}`;
            
    };




};