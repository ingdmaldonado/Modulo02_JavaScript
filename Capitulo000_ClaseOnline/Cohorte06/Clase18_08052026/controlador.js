

//import PadronElectoral from "./PadronParte01.js";
//import PadronElectoral from "./PadronParte02.js";
//import PadronElectoral from "./PadronParte03.js";
//import PadronElectoral from "./PadronParte04.js";
//import PadronElectoral from "./PadronParte05.js";
//import PadronElectoral from "./PadronParte06.js";
import PadronElectoral from "./PadronParte07.js";
//import PadronElectoral from "./PadronParte08_Completo.js";

window.onload = function()
{
    console.log("la aplicación web iniciada");

    const idDni = document.querySelector("#idDni");
    const idBtnBuscarDni = document.querySelector("#idBtnBuscarDni");
    const idDatos = document.querySelector("#idDatos");

    const idNombre = document.querySelector("#idNombre");
    const idBtnBuscarNombre = document.querySelector("#idBtnBuscarNombre");

    const idBtnReduce = document.querySelector("#idBtnReduce");

    idBtnBuscarDni.onclick = ()=>{

        let dniIngresado = (idDni.value);
        let votante = PadronElectoral.find(item => item.NUMDNI === dniIngresado);

        console.log(dniIngresado);
        console.log(votante);

        if(votante)
        {
            idDatos.textContent = votante.APELLIDOYNOMBRE;
        }
        else
        {
            idDatos.textContent = "Dato no encontrado";
        }
    };


    idBtnBuscarNombre.onclick = ()=>{

        let nombreIngresado = idNombre.value;

        let votantes = PadronElectoral.filter(item => item.APELLIDOYNOMBRE.includes(nombreIngresado));

        if(votantes)
        {
            console.log(votantes);
        }
        else
        {
            console.log("datos no encontrados");
        }


    };


    idBtnReduce.onclick = ()=>{

        /* Busqueda a la forma antigua */

        let cantidadF = 0;
        let cantidadM = 0;

        PadronElectoral.forEach((votante)=>{

            if(votante.SEXO === "F")
            {
                cantidadF++;
            }
            if(votante.SEXO === 'M')
            {
                cantidadM++
            }

        });
        console.log(cantidadF);
        console.log(cantidadM);

        /* Busqueda utilizando Operador Ternario */

        let cantidadF2 = 0;
        let cantidadM2 = 0;

        PadronElectoral.forEach(votante => {

            // operador ternario para sexo femenino //
            cantidadF2 = votante.SEXO === 'F' ? cantidadF2 + 1:cantidadF2;

            // operador ternario para sexo masculino //
            cantidadM2 = votante.SEXO === 'M' ? cantidadM2 + 1:cantidadM2;

        });

        console.log(cantidadF2);
        console.log(cantidadM2);

        /* con Reduce se hace lo siguiente */

       let cantidadMujeres = PadronElectoral.reduce((acumulador,votante)=>{

            if(votante.SEXO === 'F')
            {
                return acumulador = acumulador + 1;
            }

            return acumulador;

       },0);

       console.log("Cantidad de Mujeres por Reduce ",cantidadMujeres);


       let cantidadVarones = PadronElectoral.reduce((contadorHombres,votante)=>{

            if(votante.SEXO === 'M')
            {
                return contadorHombres = contadorHombres + 1;
            }

            return contadorHombres;

       },0)

       console.log(`La Cantidad de Hombres es : ${cantidadVarones}`);


    };

    console.log(PadronElectoral);





}