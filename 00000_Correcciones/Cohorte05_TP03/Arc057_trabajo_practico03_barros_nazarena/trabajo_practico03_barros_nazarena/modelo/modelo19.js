/*Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número */

// calculo de la Tasa de Fiscalización ENRE (1,2% del importe base)
const calcularTasaENRE = (importeBase) => {
    return importeBase * 0.012; // 1,2%
};