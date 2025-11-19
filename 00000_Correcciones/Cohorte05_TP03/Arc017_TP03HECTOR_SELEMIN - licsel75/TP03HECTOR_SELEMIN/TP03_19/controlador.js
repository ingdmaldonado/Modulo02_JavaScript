
import {determinarTasaDeFiscalizacion} from "./modulo.js";


window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;
    let importeBAseAcontrolar="";
    let importeBase=0;
        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        

        importeBAseAcontrolar = prompt(`Por favor ingrese el Importe Base:`);

        if (importeBAseAcontrolar === null || importeBAseAcontrolar.trim() === "" || isNaN(importeBAseAcontrolar)) {
            console.log("Valor no válido");
            break; // no permito seguir
        }

        importeBase = Number(importeBAseAcontrolar);



        let resulatado = determinarTasaDeFiscalizacion(importeBase);
        console.log(`Tasa de Fiscalización:   ${resulatado} `);


        
        /*cuentaIntentos=cuentaIntentos+1; sin funicionlidad en esta ocación */
        continuaProcesando = prompt(`Desea procesar otro Importe? (SI = Continua / Otro valor: Terminar Jornada)`);  

    }


    
    



};





