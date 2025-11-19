
import {determinarTasa} from "./modulo.js";



window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;

    let tipoBebidaAcontrolar="";
    let tipoBebida=0;
    let importeBaseAcontrolar="";
    let importeBase=0;
        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        // Aplicando las sugerencias de la devolución del   TP2
        tipoBebidaAcontrolar = prompt(`Por favor ingrese el tipo de bebida  `);
         if (tipoBebidaAcontrolar === null || tipoBebidaAcontrolar.trim() === "" || isNaN(tipoBebidaAcontrolar))
         {
            console.log("Tipo de Bebida no válido");
                 break; // no prmito continuar 

         }
         tipoBebida=Number(tipoBebidaAcontrolar);


        
        


        // Aplicando las sugerencias de la devolución del   TP2
        importeBaseAcontrolar = prompt(`Por favor ingrese el Importe Base`);
         if (importeBaseAcontrolar === null || importeBaseAcontrolar.trim() === "" || isNaN(importeBaseAcontrolar))
         {
            console.log("Importe Base no válido");
                 break; // no prmito continuar 

         }
         importeBase=Number(importeBaseAcontrolar);



        let resulatado = determinarTasa(tipoBebida,importeBase);
        console.log(`La tasa para esta Bebida es  ${resulatado} `);


        
        /*cuentaIntentos=cuentaIntentos+1;*/ 
        //para este caso comento los intentos porque no tienen funcionalidad
        continuaProcesando = prompt(`Desea procesar otra Bebida ? (SI = Continua / Otro valor: Terminar Jornada)`);  

    }


    
    



};





