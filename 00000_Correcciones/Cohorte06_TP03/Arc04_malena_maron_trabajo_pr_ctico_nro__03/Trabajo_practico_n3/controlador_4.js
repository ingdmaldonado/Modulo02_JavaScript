/*El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente 
clasificación y tipo. 
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la 
recaudación de ese impuesto tendrá destino a la protección del medio ambiente. 
Nota: Debe devolver un número*/

import { Impuesto } from "./modulo_4.js";

window.onload = ()=>{

    const estadoAplicacion={
        importe:0,
        tipo:0,
        
    }

    const idtipo =(document.querySelector("#idtipo"));;
    const importe=(document.querySelector("#idImporte"));
    const btnCalcular =(document.querySelector("#btnCalcular"));
    const idResultado =(document.querySelector("#idResultado"));
    const btnGuardar =(document.querySelector("#btnGuardar"));
    const btnRecuperar=(document.querySelector("#btnRecuperar"));

    console.log(idtipo,importe,btnCalcular,idResultado)

     importe.oninput =()=> {
        estadoAplicacion.importe = Number(importe.value);
        console.log(importe.value)
    };

    idtipo.oninput = ()=> {
        estadoAplicacion.tipo = Number(idtipo.value);
        console.log(idtipo.value)
    };
    
    btnCalcular.onclick = () => {

        let resultadoFinal = Impuesto(
            estadoAplicacion.importe,
            estadoAplicacion.tipo,
           
        )
        idResultado.textContent= `Impuesto:$${resultadoFinal.toFixed(2)}`;

         
        }
         
    btnGuardar.onclick=()=>{
        console.log(estadoAplicacion)
        let datos = JSON.stringify(estadoAplicacion)
        console.log(datos);
        localStorage.setItem("datos", datos);
       };
    btnRecuperar.onclick=()=>{
        let datos=localStorage.getItem("datos")
        let datosR= JSON.parse(datos)
        console.log("Recuperado:",datosR);
        idResultado.textContent= `Impuesto ${datosR.importe} `;
   
       };
}
