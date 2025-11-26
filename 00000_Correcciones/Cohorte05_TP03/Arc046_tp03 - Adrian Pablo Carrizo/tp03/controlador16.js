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
import {calcularImpuestoBebida} from "./datos16.js";
window.onload = () => {
    console.log(`inicio del programa`);
    
    const idTipoBebida = document.querySelector("#idTipoBebida");  
    const idImporteBase = document.querySelector("#idImporteBase");
    const idBtnCalcularImpuesto = document.querySelector("#idBtnCalcularImpuesto");
    const idResultadoImpuesto = document.querySelector("#idResultadoImpuesto");    
    console.log(idTipoBebida, idImporteBase, idBtnCalcularImpuesto, idResultadoImpuesto);
    idBtnCalcularImpuesto.onclick = () => {
        let tipoBebida = Number(idTipoBebida.value);
        let importeBase = Number(idImporteBase.value);
        
        console.log(`Tipo: ${tipoBebida}`);
        console.log(`Importe: ${importeBase}`);
        
        let impuesto = calcularImpuestoBebida(tipoBebida, importeBase);
        
        console.log(`Impuesto: ${impuesto}`);
        
        idResultadoImpuesto.textContent = `El Impuesto es: $${impuesto.toFixed(2)}`;
    };
};  
