                                 /*--------- EJERCICIO N°17----------*/

/*Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el
consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para
ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros
cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20
metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20
pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.

Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes
descripto.
Consumo (m3)  Cálculo aplicado                          Importe final ($)
30              50 × 350,00                              17.500,00
55       (50 × 350,00) + (5 × 555,20)                    20.276,00
85  (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20)      57.214,00

Nota: Debe devolver un número */

export const calcularImporteAgua=(mtsCubicos)=>{ //exporta la funcion.
    //declaramos las variables y las inicialisamos en cero.
    let importeBase=0;
    let importeBloque1=0;
    let importeBloque2=0;
    let importeBloque3=0;
    if(mtsCubicos<=50){ //Bloque 1
        importeBloque1=50*350;
    }
    if(mtsCubicos<=70){ //Bloque 2
        importeBloque1=50*350;
        importeBloque2=(mtsCubicos-50)*555.20;
    }
    if(mtsCubicos>70){ //Bloque 3
        importeBloque1=50*350;
        importeBloque2=20*555.20;
        importeBloque3=(mtsCubicos-70)*1552.20;
    }
    // se calcula el importe base.
    importeBase=importeBloque1+importeBloque2+importeBloque3;
    return importeBase; // retorna el importe base.
};

                         /*--------- EJERCICIO N°18----------*/

/*Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número*/

export const calculoTasaSubsuelo=(importe)=>{ // se exporta la funcion.
    let tasaSubsuelo= (importe*3)/100; // se calcula la tasa de subsuelo.
    return tasaSubsuelo; // retorna la tasa de subsuelo.
}; 

                        /*--------- EJERCICIO N°19----------*/

/*Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número*/

export const calculoTasaFiscalizacion=(importeB)=>{ // se exporta la funcion.
    let tasaEnre=(importeB*1.2)/100; // se calcula la tasa de fiscalizacion ENRE.
    return tasaEnre;// retorna la tasa de fiscalizacion ENRE.
};