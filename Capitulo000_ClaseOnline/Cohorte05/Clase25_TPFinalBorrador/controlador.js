
import {endPointAfrica,endPointAsia,endPointOceania,endPointAmerica,endPointEuropa} from "./endPoints.js";
import {fnRecuperarPaises} from "./modelo.js";

window.onload = async ()=>{

    console.log(`aplicatión is running`);

    let Africa = await fnRecuperarPaises(endPointAfrica);
    console.log(Africa);

    let Europa = await fnRecuperarPaises(endPointEuropa);
    console.log(Europa);

    let America = await fnRecuperarPaises(endPointAmerica);
    console.log(America);

    let Oceania = await fnRecuperarPaises(endPointOceania);
    console.log(Oceania);

    let Asia  = await fnRecuperarPaises(endPointOceania);
    console.log(Asia);

    const Paises = [];

    Paises.push(...Africa,...America,...Europa,...Oceania,...Asia);
    console.log(Paises);

    Paises.forEach(pais => {
       

        /* practiquemos destructuring */

        //console.log(pais);
        //console.log("---------");
        
        const {name:nombre,flags:banderas} = pais;

        //console.log(nombre);

        const {png:banderaPng,svg:banderaSvg} = banderas;

        //console.log(banderas);

        console.log(banderaPng);

        const {common:nombreComun,official:nombreOficial} = nombre;

        //console.log(nombreComun,nombreOficial);

        //if (nombreComun.toUpperCase() === 'ARGENTINA')
        //{
          //  console.log("lo encontre");
        //}


    });



};