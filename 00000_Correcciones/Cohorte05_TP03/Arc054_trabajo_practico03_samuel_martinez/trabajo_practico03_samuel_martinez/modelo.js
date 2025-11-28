
/* 
    ejercicio 13
    empezamos con una funcion que pida el precio original del producto y el margen que se quiere ganar del porducto
    luego dentro de esa funcion calculamos el precio de venta y lo retornamos
*/
export const precioVenta = (importeCompra , margenGanancia) => {
    return importeCompra + (importeCompra * margenGanancia / 100);    
}



/*
    ejercicio 14
    empezamos con una funcion que reciba tres notas como parametros
    luego dentro de la funcion calculamos el promedio de las notas sumandolas y dividiendolas por tres
    para finalizar retornamos el resultado
*/
export const calcularPromedio = (nota1, nota2, nota3) =>{
    return (nota1 + nota2 + nota3) / 3;    
}



/* 
    ejercicio 15

*/
export const notaPromedio = (nota) => {
    if (nota < 0 || nota > 10 || isNaN(nota))  return `nota invalida`;

    if (nota <= 4) return `desaprobado`;
    if (nota >4 && nota <=7) return `aprobado`;
    if (nota >7 && nota <=9) return `muy bueno`;
    if (nota === 10) return `sobresaliente`;

    return notaPromedio;

}


//ejercicio 16


export const impuestoBebidas = (precioBebidas, tipoBebida) => {
    let precio = 0; 

    switch (tipoBebida) {

        case 1:
            precio = 5 / 1000;
            break;

        case 2:    
            precio = 1 / 1000;
            break;

        case 3:
            precio = 7 / 1000;
            break;

        case 4:
            precio = 2 / 1000;
            break;
            
        case 5:
            precio = 15 / 1000;
            break;

        case 6:
        default:
            precio = 1 / 1000;
            break;
            
    }

    return precioBebidas * precio;
}


//ejercicio 17

export const calcularImporteAgua = (metrosCubicos) => {

    let m3 = metrosCubicos;
    if(m3 < 50 ) m3 = 50; 

    const precio1 = 350.00;
    const precio2 = 555.20;
    const precio3 = 1552.20;

    let importe = 0; 


    if (m3 <= 50){
        importe = m3 * precio1;

    }else if (m3 <= 70){
        importe = (50 * precio1) + ((m3 - 50) * precio2);

    }else{
        importe = (50 * precio1) + (20 * precio2) + ((m3 - 70) *precio3);
    }
    
    return importe;
    
}



//ejercicio 18

export const calcularTasaSubsuelo = (importeNeto) => {
    const tasa = 0.03 ; // esto seria el 3%, que puede ser cambiado si es necesario
    return importeNeto * tasa;
}



//ejercicio 19

export const calcularENRE = (importeNeto) => {

    const Enre = 0.012; // esto seria el 1.2%, que puede ser cambiado si es necesario

    return importeNeto * Enre;
}




//ejercicio 20

export const calcularDosisInsulina = (glucosa, peso, tipo) => {

    let dosis = 0;

    if (tipo === 1) {
         dosis = peso * 0.5;

        if(glucosa > 180)
            dosis += glucosa * 0.5;
    
    }else if (tipo === 2){
        dosis = peso * 0.2;

        if (glucosa > 180)
            dosis += glucosa * 0.5;
    }

    return dosis;

}




// ejercico 21

export const cantidadVocales = (texto) => {

    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++)
    {
        let caracter = texto[i];

        if ((caracter.toUpperCase() === `A`) || (caracter.toUpperCase() === `E`) || (caracter.toUpperCase() === `I`) || (caracter.toUpperCase() === `O`) || (caracter.toUpperCase() === `U`));
        {
            contadorVocales ++;
        }
    }


    return contadorVocales;


}




//ejercicio 22

export const cantidadConsonantes = (texto) => {

    let contadorConsonantes = 0;

    for (let i = 0; i < texto.length; i++)
    {
        let caracter = texto[i];
        if ( ((caracter.toUpperCase() >= `A`) && (caracter.toUpperCase() <= `Z`)) &&
                (caracter.toUpperCase() !== `A`) &&
                (caracter.toUpperCase() !== `E`) &&
                (caracter.toUpperCase() !== `I`) &&
                (caracter.toUpperCase() !== `O`) &&
                (caracter.toUpperCase() !== `U`) )
        {
            contadorConsonantes ++;
        }   
    }


    return contadorConsonantes;


}



//ejercicio 23

export const contadorS = (palabra) => {
    
    let contador = 0;

    for (let i = 0; i < palabra.length; i++)
    {
        if (palabra[i] === `S`){
            contador ++;
            
            if (contador === 2){
                return true;
                // si ya se detecto dos S, no hace falta seguir recorriendo la palabra
            }
        }
    }
    return false;
    //esto es si termino de recorrer la palabra y no se encontro al menos dos S 
}




//ejercicio 24

export const contadorEspacios = (texto) => {

    let contador = 0;

    for (let i = 0; i < texto.length; i++)
    {
        if (texto[i]=== ` `){
            contador ++;

            if(contador === 3 ){
                return true;
            }
        }
    } 


    return false;


}




export const detectorNumeros = (texto) => {

    let contador = 0;

    for (let i = 0; i < texto.length; i++)
    {
        if (texto[i] >= `0` && texto[i] <= `9`){
            return false;
        }
    }


    return true;


}