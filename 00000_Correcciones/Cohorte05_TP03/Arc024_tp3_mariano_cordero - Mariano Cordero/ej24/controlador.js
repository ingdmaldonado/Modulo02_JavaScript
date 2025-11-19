import { fnAnalizarEspacios } from "./modelo.js";

window.onload = () => {

        let domicilio1 = `San Antonio - SFVC - CP: 4707`;
        let domicilio2 = `Guemes 388`;

        
       fnAnalizarEspacios(domicilio1); //Texto 1

        console.log("--------------------");

        fnAnalizarEspacios(domicilio2); //Texto 2
    
}; 





 