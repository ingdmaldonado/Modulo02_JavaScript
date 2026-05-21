import { calcularImporteAgua } from "./modelo.js";

/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {metro3:0,subTotal:0, bloque1:0, bloque2:0, bloque3:0};

    const totalMetros3 = document.querySelector("#metroCubico");
    const btncalcularTotal = document.querySelector("#calcularTotal");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(totalMetros3);
    console.log(calcularTotal);
    console.log(resultado);

    /* 4 - Asignar comportamiento a los elementos capturados */
    btncalcularTotal.onclick = () => {

        let metros3 = Number(totalMetros3.value);
        resultado.innerHTML = `El importe total a pagar es: $${calcularImporteAgua(metros3)}`;

    }    

    totalMetros3.oninput = () => {

        estadoAplicacion.metro3= 0;
        estadoAplicacion.subTotal = 0;
        estadoAplicacion.bloque1 = 0;
        estadoAplicacion.bloque2 = 0;
        estadoAplicacion.bloque3 = 0;

        estadoAplicacion.metro3 = Number(totalMetros3.value);

        if (estadoAplicacion.metro3 <= 50) {            
            estadoAplicacion.subTotal = calcularImporteAgua(estadoAplicacion.metro3);
            estadoAplicacion.bloque1 = estadoAplicacion.metro3;
            console.log(estadoAplicacion);
        } 

        if (estadoAplicacion.metro3 > 50 && estadoAplicacion.metro3 <= 70) {
            estadoAplicacion.subTotal = calcularImporteAgua(estadoAplicacion.metro3);
            estadoAplicacion.bloque1 = 50;
            estadoAplicacion.bloque2 = estadoAplicacion.metro3 - 50;
            console.log(estadoAplicacion);
        }

        if (estadoAplicacion.metro3 > 70) {            
            estadoAplicacion.subTotal = calcularImporteAgua(estadoAplicacion.metro3);
            estadoAplicacion.bloque1 = 50;
            estadoAplicacion.bloque2 = 20;
            estadoAplicacion.bloque3 = estadoAplicacion.metro3 - 70;
            console.log(estadoAplicacion);
        }
        
        console.log(estadoAplicacion);
    }

    btnLimpiar.onclick = () => {

        totalMetros3.value = "";
        resultado.innerHTML = "";
    }

}

