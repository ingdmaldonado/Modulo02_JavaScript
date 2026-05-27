import { fnSobreTasa } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";


/**Ejercicio Nro. 22: 
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente 
clasificación y tipo. 
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la 
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.  */


window.onload = () => {

    const estadoAplicacion = {
        importeBase: 0,
        tipoProducto: 0
    };

    const idImporteBase = document.querySelector("#idImporteBase");
    const idTipoProducto = document.querySelector("#idTipoProducto");
    const idCalculoTasa = document.querySelector("#idCalculoTasa");
    const idResultadosBebidas = document.querySelector("#idResultadosBebidas");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio22");

    idImporteBase.oninput = () => {

        estadoAplicacion.importeBase = Number(idImporteBase.value);
        fnGuardar("ejercicio22", estadoAplicacion);
    };

    idTipoProducto.oninput = () => {
        estadoAplicacion.tipoProducto = Number(idTipoProducto.value);
        fnGuardar("ejercicio22", estadoAplicacion);
    };

    idCalculoTasa.onclick = () => {

        let sobreTasa = fnSobreTasa(estadoAplicacion.tipoProducto, estadoAplicacion.importeBase);

        console.log(sobreTasa.toFixed(2));

        /*H3*/
        idResultadosBebidas.textContent = `-Importe Base ${estadoAplicacion.importeBase}
        - Tipo de Preducto ${estadoAplicacion.tipoProducto}
        - Importe final: ${sobreTasa}`;
    }
    /* GUARDAR */
        idGuardar.onclick = () => {
    
            fnGuardar("ejercicio22", estadoAplicacion);
        };
    
        /* RECUPERAR */
        idRecuperar.onclick = () => {
    
            let datos = fnRecuperar("ejercicio22");
    
            if (datos) {
    
                estadoAplicacion.importeBase = datos.importeBase;
                estadoAplicacion.tipoProducto = datos.tipoProducto;
    
                idImporteBase.value = datos.importeBase;
                idTipoProducto.value = datos.tipoProducto;
            }
        };
} 