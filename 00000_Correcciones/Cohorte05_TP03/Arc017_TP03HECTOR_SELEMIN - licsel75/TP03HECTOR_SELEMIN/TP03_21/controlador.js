
import {contarVocales} from "./modulo.js";


window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;
    let cadena="";


   


        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        

        cadena = prompt(`Por favor ingrese una frase:`);

        let resulatado = contarVocales(cadena);
        console.log(`La cantidad de vocales es:   ${resulatado} `);


       



        


        
        /*cuentaIntentos=cuentaIntentos+1; sin funicionlidad en esta ocación */
        continuaProcesando = prompt(`Desea procesar otra Cadena ? (SI = Continua / Otro valor: Terminar )`);  

    }


    
    



};





