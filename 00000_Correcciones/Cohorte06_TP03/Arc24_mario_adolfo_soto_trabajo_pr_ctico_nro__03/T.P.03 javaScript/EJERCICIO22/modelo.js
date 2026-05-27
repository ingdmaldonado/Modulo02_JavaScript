
export const fnImpuestoSobreTasa = (tipoDeBebida,importeBaseBebida)=>{
    let totalConImpuesto= 0;
    switch(tipoDeBebida)
    {

        case 1:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*5)/1000;
            
            break;
        }


        case 2:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*1)/1000;
            
            break;
        }


        case 3:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*7)/1000;
            
            break;
        }


        case 4:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*2)/1000;
            
            break;
        }


        case 5:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*15)/1000;
            
            break;
        }

        case 6:{ totalConImpuesto = importeBaseBebida + (importeBaseBebida*1)/1000;
            
            break;
        }

        default: { importeBaseBebida = 0;
       }


    }
    return totalConImpuesto;
};
