
import {fnObtenerPaises} from "./modelo.js";
import {fnRenderizarPaises} from "./vista.js";

export const fnClickEnBotonRecuperar = async ()=>
{
    console.log("me estan haciendo click en el boton");

    let resultado = await fnObtenerPaises("https://restcountries.com/v3.1/region/americas");

    fnRenderizarPaises(resultado);

    console.log(resultado);

}