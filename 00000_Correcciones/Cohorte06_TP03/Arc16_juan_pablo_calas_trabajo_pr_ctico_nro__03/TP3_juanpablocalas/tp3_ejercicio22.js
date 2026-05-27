/*
Ejercicio Nro. 22:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número

*/
import { fnCalcularTasa, fnGuardarEstado,fnRecuperarEstado } from "./modelo.js";

window.onload = ()=>{

        const EstadoAplicacion = {CodigoProd:0,MontoProd:0};
        const IdSelectProducto = document.querySelector("#IdSelectProducto");
        const IdMontoBebida = document.querySelector("#IdMontoBebida");
        const IdCalcularSobreTasa = document.querySelector("#IdCalcularSobreTasa");
        const IdTasaCalculada = document.querySelector("#IdTasaCalculada")

        IdSelectProducto.onchange = ()=>{
            EstadoAplicacion.CodigoProd = Number(IdSelectProducto.value)
            console.log(EstadoAplicacion)

        };        
        
        IdMontoBebida.oninput = ()=>{
            EstadoAplicacion.MontoProd = Number(IdMontoBebida.value);
            console.log(EstadoAplicacion);
    
        };
    
        IdCalcularSobreTasa.onclick = ()=>{
            let Tasa = fnCalcularTasa(EstadoAplicacion.CodigoProd,EstadoAplicacion.MontoProd);
            console.log(Tasa);
            IdTasaCalculada.textContent = (`Sobre Tasa Municipa: ${Tasa}`);
        };
    
    idBtnGuardar.onclick = ()=>{

        fnGuardarEstado(EstadoAplicacion);

        /* (1) convertir a JSON */
        let estadoJSON = JSON.stringify(EstadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(EstadoAplicacion);   
        console.log(DatosRecuperados);   

        IdSelectProducto.value = DatosRecuperados.CodigoProd;
        IdMontoBebida.value = DatosRecuperados.MontoProd;
        EstadoAplicacion.CodigoProd = IdSelectProducto.value;
        EstadoAplicacion.MontoProd = IdMontoBebida.value;
    
    };

};