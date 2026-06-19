import {fnRecuperarPaises} from "./paisesmodelo.js";
import {fnCreaFilaTablaPaises,fnInsertFilaTabla} from "./vistapaises.js"
//import {fnRequestAPI} from "../api.js"



window.onload = ()=>{

    const btnRecuperarApiPaises = document.querySelector("#btnRecuperarApiPaises");
    const IdSeleccionPaises = document.querySelector("#IdSeleccionPaises");
    const CuerpoTablaPaises = document.querySelector("#CuerpoTablaPaises");


    btnRecuperarApiPaises.onclick = async ()=>{

        const RegionSelccionada = Number(IdSeleccionPaises.value);
        const PaisesPorRegion = await fnRecuperarPaises(RegionSelccionada);
//      const PaisesRecuperados = await fnRequestAPI("https://restcountries.com/v3.1/region/americas");
        console.log(PaisesPorRegion);
        const FilasDevueltas = fnCreaFilaTablaPaises(PaisesPorRegion);
//        console.log(FilasDevueltas,CuerpoTablaPaises);
         fnInsertFilaTabla(FilasDevueltas,CuerpoTablaPaises);

    };
};