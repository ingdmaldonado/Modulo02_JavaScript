export const fnSobreTasa = (importeBase, tipoProducto)=>{

    let sobreTasa = 0;

    switch(tipoProducto){

        case 1:{
            sobreTasa = (importeBase * 5 )/ 1000;

            break;
        }

        case 2:{
            sobreTasa = (importeBase * 1 )/ 1000;

            break;
        }

        case 3:{
            sobreTasa = (importeBase * 7 )/ 1000;

            break;
        }

        case 4:{
            sobreTasa = (importeBase * 2 )/ 1000;

            break;
        }

        case 5:{
            sobreTasa = (importeBase * 15 )/ 1000;

            break;
        }

        case 6:{
            sobreTasa = (importeBase * 1 )/ 1000;

            break;
        }

        default:{
            sobreTasa = 0;

            break;
        }
    }

    return sobreTasa;

};