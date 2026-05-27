/*Ejercicio Nro. 25:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número */

export const fnCalcularPagoAgua = (consumo) => {

  let montoTotal = 0;

    if (consumo <= 50){
        montoTotal= 50 * 350;
    }
   else if ( consumo > 50 && consumo <= 70){

        montoTotal = (50 * 350) + ((consumo - 50) * 555.20);
    }
    else if(consumo > 70)
    {

        montoTotal = (50 * 350) + (20 * 555.20) + ((consumo - 70) * 1552.20);
    }
    return montoTotal;
};


export const  fnCalcularTasaSubsuelo = (importeBase) => {

    let tasa = (importeBase * 3)/100;

    return tasa;

};


export const fnCalcularTasaFiscalizacionENRE = (importeBase) => {

    let tasaENRE = (importeBase * 1.2)/100;
    return tasaENRE;
};
