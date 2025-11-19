
import {evaluarNota} from "./modulo.js";



window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;
    let notaAlumno=0;
        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        
        notaAlumno = Number(prompt(`Por favor ingrese la nota del alumno orden:  ${cuentaIntentos} `));



        let resulatado = evaluarNota(notaAlumno);
        console.log(resulatado);


        
            
        continuaProcesando = prompt(`Desea procesar otra nota ? (SI = Continua / Otro valor: Terminar Jornada)`);  

    }


    
    



};





