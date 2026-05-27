import { calcularTazaSubsuelo } from "./Modelo.js";

/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {importeBase:0,subTotal:0};

    const importeBase = document.querySelector("#importeBase");
    const btnTasaSubsuelo= document.querySelector("#TasaSubsuelo");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(importeBase);
    console.log(btnTasaSubsuelo);
    console.log(resultado);

    /* 4 - Asignar comportamiento a los elementos capturados */
    btnTasaSubsuelo.onclick = () => {

        let montoFactura = Number(importeBase.value);
        estadoAplicacion.subTotal = calcularTazaSubsuelo(montoFactura);
        console.log(estadoAplicacion);
        resultado.innerHTML = `El importe total a pagar es: $${calcularTazaSubsuelo(montoFactura)}`;

    }

   

importeBase.oninput = () => {

        estadoAplicacion.importeBase = Number(importeBase.value);        
        console.log(estadoAplicacion);       
    }

    btnLimpiar.onclick = () => {

        estadoAplicacion.importeBase = 0;
        estadoAplicacion.subTotal = 0;
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
    }

}