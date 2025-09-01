
/* 
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona
pagó por sus servicios en su hogar. El primer valor representará 
los gastos de energía (luz eléctrica), el segundo valor 
representará los gastos en comunicación (conectividad a internet),
el tercer valor representará los gastos ocasionados 
por el servicio de agua potable. Se estima que para el siguiente 
mes estos tres valores incrementarán en un 

    12,5%, 
    7% 
    3%
    
    
respectivamente.
El programa debe calcular el gasto futuro a pagar.

*/

window.onload = function()
{
    console.log(`la aplicación is running`);

    /* crear constantes que lleven el nombre de los id
    de los inputs o elementos html que quiero controlar */

    const idEnergia = document.querySelector("#idEnergia");
    const idInternet = document.querySelector("#idInternet");
    const idAgua = document.querySelector("#idAgua");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultados = document.querySelector("#idResultados");

    console.log(idEnergia,idInternet,idAgua,idBtnCalcular,idResultados);

    /* delegación de eventos => cuando presionen click => funcion */
    idBtnCalcular.onclick = function()
    {
        let costoEnergia = Number(idEnergia.value);
        let costoInternet = Number(idInternet.value);
        let costoAgua = Number(idAgua.value);

        let costoEnergiaFuturo = costoEnergia + (costoEnergia * 12.5)/100;
        let costoInternetFuturo = costoInternet + (costoInternet * 7)/100;
        let costoAguaFuturo = costoAgua + (costoAgua * 3)/100;

        let costoTotalPrevisto = 0;
        costoTotalPrevisto = costoEnergiaFuturo + costoInternetFuturo + costoAguaFuturo;


        console.log(costoEnergia,costoInternet,costoAgua);

        console.log(costoEnergiaFuturo,costoInternetFuturo,costoAguaFuturo);

        idResultados.textContent = `Costo Futuro Energia ${costoEnergiaFuturo.toFixed(2)} Costo Intert Futuro ${costoInternetFuturo.toFixed(2)} Costo Agua Futuro ${costoAguaFuturo.toFixed(2)} Igual = ${costoTotalPrevisto.toFixed(2)}`;


        /* 
            3.6666666666

            3.67 => trunca a dos decimales.
        
        */

        /*
            <h1>textContent</h1>
            <h5>textContent</h5>
            <p>textContent</p>
            <div>textContent</div> 
        */

        /*
            12,5%, 
            7% 
            3% 
        */

        console.log(`aqui me estan haciendo click`);
    }


}

