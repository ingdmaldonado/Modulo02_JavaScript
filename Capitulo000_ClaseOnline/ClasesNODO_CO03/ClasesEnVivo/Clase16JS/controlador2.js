

/* lo que estoy haciendo es importando
desde la biblioteca ó modulo anexo 
las funciones necesarias para el calculo 
del plazo fijo */

import {fnRetornarTasaMensual,fnRetornaTasaTotal,fnRetornoTotalPlazoFijo} from "./modelo.js";

/*
Ejercicio Nro. 53: Arrow function
	Un banco de plaza local, desea realizar un simulador de plazos fijos,
 con la intención de captar clientes y fomentar el ahorro, para ello contratará un programador FULL STACK que permita construir una aplicación web con el objetivo de simular las siguientes reglas de negocio. El gerente del Banco nos indica que la aplicación debería solicitar que ingrese 
1) El capital a Ingresar
2) La cantidad de meses en los que realizará el plazo fijo
para Montos de Capital de: 
- 500.000 a 1.500.000 la rentabilidad será del 6% mensual
- 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
- 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
- para valores que superen esa magnitud la tasa mensual será del 9,5%
*/


/* creando una arrow function 
guardandola dentro de una constante
que se llama fnLoad, no recibe parametros
y lo unico que hace es imprimir algo por 
la consola.*/

const fnLoad = ()=>
    {
        console.log("pagina cargada 1");
    }

//window.addEventListener("load",fnLoad);



/* esta arrow function que se esta pasando
como parametro. es una función anónima */
window.addEventListener("load",()=>
    {
        console.log("la pagina esta cargada 2");

        /* (1ro) Vincularme a los elementos HTML 
        con los que quiero controlar */

        const idImporteCapital = document.querySelector("#idImporteCapital");
        const idCantidadMeses = document.querySelector("#idCantidadMeses");
        const idBtnSimular = document.querySelector("#idBtnSimular");
        const idResultado = document.querySelector("#idResultado");

        console.log(idImporteCapital,idCantidadMeses,idBtnSimular,idResultado);

        /* (2do) Voy a Controlar los Eventos de los
        objetos o elementos HTML que capture en el 
        punto anterior */

        idBtnSimular.addEventListener("click",()=>
            {
                let importeCapital = Number(idImporteCapital.value);
                let cantidadDeMeses = Number(idCantidadMeses.value);

                console.log(importeCapital,cantidadDeMeses);

                /* (1ro) aqui invoco la función y le paso como parametro el capital
                para ver si retorna bien la tasa mensual */

                let tasaMensual = fnRetornarTasaMensual(importeCapital);
                console.log(tasaMensual);

                /* (2do) Vamos a determinar la tasa total */

                let tasaTotal = fnRetornaTasaTotal(tasaMensual,cantidadDeMeses);
                console.log(tasaTotal);

                /* (3ro) Calcular la Rentabilidad del Plazo Fijo */

                let rentabilidadTotal = fnRetornoTotalPlazoFijo(tasaTotal,importeCapital);
                console.log(rentabilidadTotal);

                /* (4to) Mostrar el Resultado del Plazo Fijo en el DOCUMENTO HTML */
                idResultado.textContent = `Resultado Plazo Fijo ${rentabilidadTotal.toFixed(2)}`;



            })


    })


