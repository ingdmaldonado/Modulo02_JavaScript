

/* Realizar un programa que permita a un Bioquímico
ingresar los valores de glucosa en sangre y determine
y muestre las alertas que se deberían imprimir 
en el análisis de sangre en ayunas. 
la tabla de valoración es la siguiente:


unidad (miligramos por decilitro).

- un nivel de 70 a 99 mg/dl (3.9 y 5.5 mmol/l) se considera normal.

-un nivel de 100 a 125 mg/dl (5.6 a 6.9 mmol/l) 
significa que usted tiene una alteración de la glucosa en ayunas,
un tipo de prediabetes. 
Esto incrementa el riesgo de desarrollar 
diabetes tipo 2.

-un nivel de 126 mg/dl (7 mmol/l) o mayor casi siempre 
significa que usted tiene diabetes.

https://medlineplus.gov/spanish/ency/article/003482.htm

*/

{

    let nivelDeGlucosaEnSangre = 0;

    nivelDeGlucosaEnSangre = prompt("Ingrese su nivel de glucosa en Sangre");

    if(!isNaN(nivelDeGlucosaEnSangre))
    {
        nivelDeGlucosaEnSangre = Number(nivelDeGlucosaEnSangre);
    }
    else
    {
        alert("por favor ingrese un número válido")
    }

  
    let resultado = 
        (nivelDeGlucosaEnSangre >= 70) && (nivelDeGlucosaEnSangre < 100) ? 'normal' 
        :
        (nivelDeGlucosaEnSangre >= 100) && (nivelDeGlucosaEnSangre < 125) ? 'pre diabetes tipo 2'
        :
        (nivelDeGlucosaEnSangre >= 125) ? 'diabetes':'valores muy bajos. consulte a su médico';
      

    console.log(resultado);

}


