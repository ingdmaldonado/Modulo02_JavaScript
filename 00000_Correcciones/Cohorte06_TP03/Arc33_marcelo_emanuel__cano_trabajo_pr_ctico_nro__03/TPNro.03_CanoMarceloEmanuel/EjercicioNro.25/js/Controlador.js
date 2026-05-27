import { calcularTazaFiscalizacion } from "./Modelo.js";

/* 1- cuando se carga la pagina se dispara ula arro fuction */
window.onload = () => {

    /* 2 - Capturar elementos que me interesan del DOM */
    const estadoAplicacion = {importeBase:0,importeTaza:0};

    const tasaFiscalizacion = document.querySelector("#tasaFiscalizacion");
    const btnCalcularTasa = document.querySelector("#calcularTasa");
    const resultado = document.querySelector("#resultado");
    const btnLimpiar = document.querySelector("#limpiar");

    /* 3 - Muestro los elementos capturados por consola */
    console.log(tasaFiscalizacion);
    console.log(btnCalcularTasa);
    console.log(resultado);
    console.log(btnLimpiar);

    /* 4 - Asignar comportamiento a los elementos capturados */
  btnCalcularTasa.onclick = () => {

        let importe = Number(tasaFiscalizacion.value);
        estadoAplicacion.importeTaza = calcularTazaFiscalizacion(importe);
        console.log(estadoAplicacion);
        resultado.innerHTML = `El importe total a pagar es: $${calcularTazaFiscalizacion(importe)}`;

    }

   

tasaFiscalizacion.oninput = () => {

        estadoAplicacion.importeBase = Number(tasaFiscalizacion.value);
        estadoAplicacion.importeTaza = calcularTazaFiscalizacion(estadoAplicacion.importeBase);       
        console.log(estadoAplicacion);       
    }

    btnLimpiar.onclick = () => {

        estadoAplicacion.importeTaza = 0;
        estadoAplicacion.subTotal = 0;
        console.log(estadoAplicacion);
        resultado.innerHTML = "";
    }

}