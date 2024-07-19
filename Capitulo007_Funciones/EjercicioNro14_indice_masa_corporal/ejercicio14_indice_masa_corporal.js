
/* Función que devuelve el cuadrado de un numero */
const Cuadrado = (numero)=>
    {
        return numero * numero;
    }


/* Función que devuelve el INDICE DE MASA CORPORAL
y recibe como parametros el pesoEnKilogramos, y la 
altura en Metros */

const fnIndiceMasaCorporal = (pesoEnKilogramos,alturaEnMetros)=>
    {   

        let IMC = pesoEnKilogramos / Cuadrado(alturaEnMetros);

        return IMC;

    }

/* Función que recibe como parametro 
el indice de masa corporal y retorna
el indicador ó aviso, ó diagnóstico
de su situación */

const fnDevolverAnalisisIMC = (indiceMasaCorporal)=>
    {
        if (indiceMasaCorporal < 18.5)
        {
            return 'Bajo Peso';
        }
        if((indiceMasaCorporal >= 18.5) && (indiceMasaCorporal < 25))
        {
            return 'Peso Normal';
        }
        if((indiceMasaCorporal >= 25) && (indiceMasaCorporal < 30))
        {
            return 'Sobre Peso';
        }
        if ((indiceMasaCorporal >= 30) && (indiceMasaCorporal < 35))
        {
            return 'Obesidad Grado I';
        }
        if ((indiceMasaCorporal >= 35) && (indiceMasaCorporal <= 40))
        {
            return 'Obesidad Grado II';
        }
        if (indiceMasaCorporal >= 40)
        {
            return 'Obesidad Graddo III - mórbida';
        }
    }

/* EJEMPLO DE INVOCACIÓN DE FUNCIONES */
{

    let peso = 80;

    let altura = 1.65;

    let Resultado = fnIndiceMasaCorporal(peso,altura);

    let Aviso = fnDevolverAnalisisIMC(Resultado);

    console.log(`INDICE DE MASA CORPORAL para peso ${peso} altura ${altura} es igual a: ${Resultado} - Aviso ${Aviso}`);
    
}