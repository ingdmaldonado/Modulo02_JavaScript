
import {determinarInsulinaRecomendadParaPaciente} from "./modulo.js";


window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  

    let continuaProcesando='SI';
    let cuentaIntentos=0;


    let pesoCorporalAControlar="";
    let pesoCorporal=0;

    let tipoDiabetesAControlar="";
    let tipoDiabetes=0;

    let nivelGlucosaEnSangreAControlar="";
    let nivelGlucosa=0;


        

        
    while(continuaProcesando.toUpperCase()==='SI')
    {     
        

        pesoCorporalAControlar = prompt(`Por favor ingrese el peso de la persona:`);//controles para el peso 

        if (pesoCorporalAControlar === null || pesoCorporalAControlar.trim() === "" || isNaN(pesoCorporalAControlar)) {
            console.log("Valor de peso corporal no válido");
            break; // no permito seguir
        }

        pesoCorporal = Number(pesoCorporalAControlar);







        nivelGlucosaEnSangreAControlar = prompt(`Por favor ingrese el nivel de glucosa en sangre de la persona:`);//controles para la glucosa

        if (nivelGlucosaEnSangreAControlar === null || nivelGlucosaEnSangreAControlar.trim() === "" || isNaN(nivelGlucosaEnSangreAControlar)) {
            console.log("Valor  de glucosa en sangre no válido");
            break; // no permito seguir
        }

        nivelGlucosa = Number(nivelGlucosaEnSangreAControlar);





        tipoDiabetesAControlar = prompt(`Por favor ingrese tipo de Diabetes:`);

        if (tipoDiabetesAControlar === null || tipoDiabetesAControlar.trim() === "" || isNaN(tipoDiabetesAControlar)) {
            console.log("Valor de tipo de diabetes no válido");
            break; // no permito seguir
        }

        tipoDiabetes = Number(tipoDiabetesAControlar);
       if ((tipoDiabetes===1)||(tipoDiabetes===2))
       {
        let resulatado = determinarInsulinaRecomendadParaPaciente(pesoCorporal,tipoDiabetes,nivelGlucosa);
        console.log(`Recomendacion de Insulina en Sangre :   ${resulatado} `);

       }
       else{
        console.log(`Tipo de daibetes equivocado`)
       }



        


        
        /*cuentaIntentos=cuentaIntentos+1; sin funicionlidad en esta ocación */
        continuaProcesando = prompt(`Desea procesar otra persona? (SI = Continua / Otro valor: Terminar Jornada)`);  

    }


    
    



};





