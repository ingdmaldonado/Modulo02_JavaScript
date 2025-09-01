import {fnClickRecuperarPaises} from "./controllers/funcionesDelControlador.js";


/* 

const URLAfrica = "https://restcountries.com/v3.1/region/africa";
const URLAmerica = "https://restcountries.com/v3.1/region/americas"; // ← usar "americas"
const URLAsia = "https://restcountries.com/v3.1/region/asia";
const URLEurope = "https://restcountries.com/v3.1/region/europe";
const URLOceania = "https://restcountries.com/v3.1/region/oceania";

*/


window.addEventListener("load", () => {
  const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");


  idBtnRecuperarPaises.addEventListener("click",async()=>{

    let resultado = await fnClickRecuperarPaises("https://restcountries.com/v3.1/region/americas");

    console.log(resultado);

  });
});
