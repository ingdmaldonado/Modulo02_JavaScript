
  export  const Impuesto = (importe, tipo) => {

    let tasa = 0;
   

    switch (tipo) {
        case 1: {
            tasa = 5;
            
        }
        break;
        case 2:{ 
            tasa = 1;
        } 
            break;
        case 3:{
         tasa = 7;
        } 
         break;
        case 4:{ 
            tasa = 2;
        }
         break;
        case 5: {
            tasa = 15;
        }
        break;
        default:{
            tasa = 1;
        }
         break;
    }

    return (importe * tasa) / 1000;
    };