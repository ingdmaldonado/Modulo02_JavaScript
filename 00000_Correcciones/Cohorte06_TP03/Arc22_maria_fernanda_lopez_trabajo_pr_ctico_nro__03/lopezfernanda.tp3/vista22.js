/* Ejercicio Nro. 22:
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
Nota: Debe devolver un número */

import {fnSobreTasa} from "./modelo22.js";

window.onload = ()=>{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = {
    tipoProducto: 0,
    importeBase: 0,
    sobreTasa: 0,
    }

const IdtipoProducto = document.querySelector("#IdTipoProducto");
const IdimporteBase = document.querySelector ("#IdImporteBase");
const IdBtnCalcular = document.querySelector ("#IdBtnCalcular");
const IdResultado = document.querySelector ("#IdResultado");
const IdBtnGuardar = document.querySelector("#IdBtnGuardar");
const IdBtnRecuperar= document.querySelector ("#IdBtnRecuperar");

IdTipoProducto.oninput = ()=>{
    estadoAplicacion.tipoProducto = Number (IdTipoProducto.value);
};

IdImporteBase.oninput = ()=>{
    estadoAplicacion.importeBase = Number (IdImporteBase.value);
    
};

IdBtnCalcular.onclick =()=>{
    let resultado= fnSobreTasa (estadoAplicacion.tipoProducto, estadoAplicacion.importeBase);

    estadoAplicacion.sobreTasa= resultado;
    console.log("Importe Base:", estadoAplicacion.importeBase);
    console.log (`Resultado de sobretasa: ${resultado} `);

    IdResultado.textContent = `Resultado de sobretasa destinada a la protección del medio ambiente: ${resultado}`;
};

 IdBtnGuardar.onclick = ()=>{
        let estadoJSON= JSON.stringify (estadoAplicacion);
        console.log (estadoJSON);
        localStorage.setItem ("estadoApp", estadoJSON);
    };

IdBtnRecuperar.onclick = ()=>{
        let tasasRecuperadas= localStorage.getItem ("estadoApp");

        if (tasasRecuperadas)
        {
            let estadoObjeto= JSON.parse (tasasRecuperadas);
            console.log (tasasRecuperadas);
            console.log (estadoObjeto);
        }
        console.log (tasasRecuperadas);
        };

   
};

