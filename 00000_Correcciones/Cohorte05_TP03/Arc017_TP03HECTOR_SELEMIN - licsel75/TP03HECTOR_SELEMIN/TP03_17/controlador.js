
import {determinarImporteApagarporCliente} from "./modulo.js";


window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;
    let totalMetrosCubicosAcontrolar="";
    let totalMetrosCubicos=0;
        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        

        totalMetrosCubicosAcontrolar = prompt(`Por favor ingrese el los metros cúbicos consumidos por el Cliente:`);

        if (totalMetrosCubicosAcontrolar === null || totalMetrosCubicosAcontrolar.trim() === "" || isNaN(totalMetrosCubicosAcontrolar)) {
            console.log("Valor no válido");
            break; // no permito seguir
        }

        totalMetrosCubicos = Number(totalMetrosCubicosAcontrolar);



        let resulatado = determinarImporteApagarporCliente(totalMetrosCubicos);
        console.log(`Importe a Pagar:   ${resulatado} `);


        
        /*cuentaIntentos=cuentaIntentos+1; sin funicionlidad en esta ocación */
        continuaProcesando = prompt(`Desea seguir procesando ? (SI = Continua / Otro valor: Terminar Jornada)`);  

    }


    
    



};





