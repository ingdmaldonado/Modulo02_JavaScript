{
    let marca= 0;
    let cantidadBolsas = 0;
    let totalAPagar = 0;
    let marcaValido = true;

    marca = Number(prompt(`Ingrese la marca del alimento que desea comprar: 1 - DOGUI --- 2 - TIERNITOS --- 3 - DOGPRO`));

    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas que desea comprar`));


    switch (marca)
    {
        case 1 : {
            console.log(`Dogui x 21 Kg`);
            totalAPagar = totalAPagar ;
            if(cantidadBolsas >= 1 && cantidadBolsas <= 4){
                totalAPagar = cantidadBolsas * 38000;
                console.log(`El total a pagar es de:`,totalAPagar);
            }else{
                if(cantidadBolsas >=5 && cantidadBolsas <=10){
                   totalAPagar = cantidadBolsas * 36000;
                    console.log(`El total a pagar es de:`,totalAPagar); 
                }else{
                    if(cantidadBolsas >=11){
                        totalAPagar = cantidadBolsas * 34000;
                        console.log(`El total a pagar es de:`,totalAPagar);
                    }else{
                        console.log(`Cantidad incorrecta, vuelva a intentarlo`);
                    }
                }
            }
            break;
        }

        case 2 : {
            console.log(`Tiernitos x 21 Kg`);
            if(cantidadBolsas >= 1 && cantidadBolsas <= 4){
                totalAPagar = cantidadBolsas * 31000;
                console.log(`El total a pagar es de:`,totalAPagar);
            }else{
                if(cantidadBolsas >=5 && cantidadBolsas <=10){
                   totalAPagar = cantidadBolsas * 29000;
                    console.log(`El total a pagar es de:`,totalAPagar); 
                }else{
                    if(cantidadBolsas >=11){
                        totalAPagar = cantidadBolsas * 27000;
                        console.log(`El total a pagar es de:`,totalAPagar);
                    }else{
                        console.log(`Cantidad incorrecta, vuelva a intentarlo`);
                    }
                }
            }
            break;
        }

        case 3 : {
            console.log(`Dogpro x 21 Kg`);
            if(cantidadBolsas >= 1 && cantidadBolsas <= 4){
                totalAPagar = cantidadBolsas * 46000;
                console.log(`El total a pagar es de:`,totalAPagar);
            }else{
                if(cantidadBolsas >=5 && cantidadBolsas <=10){
                   totalAPagar = cantidadBolsas * 44000;
                    console.log(`El total a pagar es de:`,totalAPagar); 
                }else{
                    if(cantidadBolsas >=11){
                        totalAPagar = cantidadBolsas * 42000;
                        console.log(`El total a pagar es de:`,totalAPagar);
                    }else{
                        console.log(`Cantidad incorrecta, vuelva a intentarlo`);
                    }
                }
            }
            break;
        }

        default : {

        console.log(`Marca Invalido, intentelo nuevamente`);
        marcaValido = false;
        break;
    };
    }

    
}