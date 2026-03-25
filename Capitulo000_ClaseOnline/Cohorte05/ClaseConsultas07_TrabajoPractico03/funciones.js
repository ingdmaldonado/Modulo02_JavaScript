

/*
Ejercicio Nro. 13:
Realizar una arrow function que reciba 
dos parámetros de entrada. 
El parámetro 1 será el importe de compra de un producto,
el segundo será el margen de ganancia que
 se aplicará sobre ese producto, 
 la función debe retornar el precio de venta
 que será igual a aplicarle el % de margen de ganancia.
 La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número
*/

export const precioDeVenta = (precioCosto,margen) =>
    {
        // aqui calculo el % de ganancia
        let calculo = (precioCosto * margen)/100;

        // aqui al precio final le sumo el % de ganancia
        let precioFinal = precioCosto + calculo;

        // retornamos el valor //

        return precioFinal;

    }

/* 
Ejercicio Nro. 14:
Realizar una arrow function que reciba 
como parámetro las 3 notas que obtuvo un alumno 
en los distintos trabajos prácticos de una materia
y que a partir de esas notas obtenga el promedio 
de las mismas
Nota: Debe devolver un número
*/

export const promedioDeTres = (nota1,nota2,nota3)=>{

    return (nota1 + nota2 + nota3)/3;

}

/*
Ejercicio Nro. 16:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número 
*/

export const calcularSobreTasa = (tipoBebida,importeBase)=>{

    let calculoSobreTasa = 0;

    switch(tipoBebida)
    {
        case 1:
            {
                calculoSobreTasa = (importeBase * 5)/1000;
                break;
            }

        case 2:
            {
                calculoSobreTasa = (importeBase * 1)/1000;
                break;
            }

        case 3:
            {
                calculoSobreTasa = (importeBase * 7)/1000;
                break;
            }

        case 4:
            {
                calculoSobreTasa = (importeBase * 2)/1000;
                break;
            }

        case 5:
            {
                calculoSobreTasa = (importeBase * 15)/1000;
                break;
            }

        default:
            {
                calculoSobreTasa = (importeBase * 1)/1000;
                break;
            }
    }

    return calculoSobreTasa;

}

/* Ejercicio Nro. 17 */

export const calcularImporteBaseAgua = (mtsCubicos)=>{

    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    let importeBase = 0;

    if (mtsCubicos <= 50) // bloque 1
    {
        console.log(`estoy entrando por el bloque 1`);
        importeBloque1 = 50 * 350.00;

        console.log(importeBloque1);
    }
    
    if(mtsCubicos <= 70) // bloque 1 y bloque 2
    {
        console.log(`estoy entrando por el bloque 2`);

        importeBloque1 = 50 * 350.00;

        /* si un tipo consume 68 mts. cubicos. 

            mtsSegundoBloque = (mtsCubicos - 50)

            60 => consumio

                50 mts bloque 1
                10 mts bloque 2 => 68 - 50 => 18

        */

        importeBloque2 = (mtsCubicos - 50) * 555.20;

        console.log(importeBloque1);
        console.log(importeBloque2);

    }

    if (mtsCubicos > 70)
    {
        console.log(`Estoy entrando por el bloque 3`);
        importeBloque1 = 50 * 350.00;
        importeBloque2 = 20 * 555.20;

        importeBloque3 = (mtsCubicos - 70) * 1552.20;

        console.log(importeBloque1);
        console.log(importeBloque2);
        console.log(importeBloque3);

    }


    importeBase = importeBloque1 + importeBloque2 + importeBloque3;

    return importeBase;

};