


export const determinarInsulinaRecomendadParaPaciente = (pesoCorporal,tipoDiabetes, nivelGlucosaEnSangre, )=>{

   let recomendacionInsulinaEnSangre = 0;


    switch(tipoDiabetes){
        case 1:{
            recomendacionInsulinaEnSangre=(pesoCorporal*0.5);

            if(nivelGlucosaEnSangre>180){

                recomendacionInsulinaEnSangre=recomendacionInsulinaEnSangre+ (nivelGlucosaEnSangre*0.5)

            }





            break;
        }
         case 2:{
             recomendacionInsulinaEnSangre=(pesoCorporal*0.2);

            if(nivelGlucosaEnSangre>180){

                recomendacionInsulinaEnSangre=recomendacionInsulinaEnSangre+ (nivelGlucosaEnSangre*0.5)

            }



            break;
        }
         default :{
            recomendacionInsulinaEnSangre=0




            break;
        }

    }









    
    



    return recomendacionInsulinaEnSangre;

};






