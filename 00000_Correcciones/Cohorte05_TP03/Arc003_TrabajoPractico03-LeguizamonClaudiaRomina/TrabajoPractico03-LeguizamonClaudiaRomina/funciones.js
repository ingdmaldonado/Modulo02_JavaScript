

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
Ejercicio N° 15
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/

export const mensajeNota =(notaPromedio)=> 
{

  if((0<=notaPromedio) && (notaPromedio<=4))
        {
            return `DESAPROBADO`;
        }   
        else
        {
            if((4<notaPromedio)&&(notaPromedio<=7))
            {
                return `APROBADO`;
            }
            else
            {
                if((7<notaPromedio)&&(notaPromedio<10)) /*ASUMO QUE ES UN ERROR EN EL ANUNCIADO POR LO QUE MODIFIQUE EL LIMTE SUPERIOR A 10*/ 
                {
                    return `MUY BUENO`;
                }   
                else
                {
                    if(notaPromedio===10)
                    {
                        return `EXCELENTE`;
                    }   
                    else
                    {
                        return `Nota fuera de los rangos`;
     
                    } 
                } 
            }
        } 
    
}
/*
Ejercicio N° 16
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número*/

export const funcionSobreTasa =(tipoDeBebida,importeBaseBebida)=> 
{
  switch (tipoDeBebida)
  {
    case 1:
    {
        return importeBaseBebida*5/1000;
    }   
    case 2:
    {
        return importeBaseBebida*1/1000;
    }   
    case 3:
    {
        return importeBaseBebida*7/1000;
    }  
    case 4:
    {
        return importeBaseBebida*2/1000;
    }  
    case 5:
    {
        return importeBaseBebida*15/1000;
    }  
    case 6:
    {
        return importeBaseBebida*1/1000;
    }  
    default:
    {
        return 0;
    }
  } 


}
/*
Ejercicio N° 17
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
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
Consumo (m³) Cálculo aplicado Importe final ($)
30 50 × 350,00 17.500,00
55 (50 × 350,00) + (5 × 555,20) 20.276,00
85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00 (EL VALOR CORRECTO ES 51887)
Nota: Debe devolver un número */

export const importeAgua=(metrosCubicosLeidos)=> 
{
   let excedenteMetrosCubicos=0;
    if((50<metrosCubicosLeidos) && (metrosCubicosLeidos<=70))
    {
       excedenteMetrosCubicos=metrosCubicosLeidos-50;
       let importeFinal= 50*350 +excedenteMetrosCubicos*555.20;
   
        return importeFinal;
    }
    else
    {
         if(70<metrosCubicosLeidos)   
           {
            excedenteMetrosCubicos=metrosCubicosLeidos-70;
            return (50*350)+(20*555.20)+(excedenteMetrosCubicos*1552.20);
           } 
         else
            {
             if(metrosCubicosLeidos>0)
             {
                return (50*350); 
             }
             else
             {
                return 0;
             }
            }  
    }
    
}

/*
Ejercicio N° 18
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número  */

export const tasaSubsuelo=(importeBase)=>
{
    return importeBase*3/100;
} 


/*
Ejercicio N° 19
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.  */

export const tasaFiscalizacion=(importeBase)=>
{
    return importeBase*1.2/100;
} 

/*
Ejercicio N° 20
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.  */

export const dosisInsulina=(tipoDeDiabetes,Peso,nivelGlucosa)=>
{
    switch (tipoDeDiabetes)
  {
    case 1:
    {
       if (nivelGlucosa<=180)
       {
        return 50*Peso/100;
       }
       else
       {
        return (50*Peso/100)+(50*nivelGlucosa/100);
       } 
    }   
    case 2:
    {
         if (nivelGlucosa<=180)
       {
        return 20*Peso/100;
       }
       else
       {
        return (20*Peso/100)+(50*nivelGlucosa/100);
       } 
    }   
   
  } 
} 

/*
Ejercicio N° 21
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.
*/
export const cantidadDeVocales=(cadenaTexto)=>
{
    let cantVocales=0;

    for (let i=0; i<cadenaTexto.length;i=i+1)
    {
        if (cadenaTexto.charAt(i)==='a' || cadenaTexto.charAt(i)==='A' || cadenaTexto.charAt(i)==='e' || cadenaTexto.charAt(i)==='E' || cadenaTexto.charAt(i)==='i' || cadenaTexto.charAt(i)==='I' || cadenaTexto.charAt(i)==='o' || cadenaTexto.charAt(i)==='O' || cadenaTexto.charAt(i)==='u' ||cadenaTexto.charAt(i)==='U' )
        {
           cantVocales= cantVocales+1;
        }
    }   
    
    return cantVocales;
} 

/*
Ejercicio N° 22
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
*/
export const cantidadDeConsonantes=(cadenaTexto)=>
{
    let cantConsonantes=0;

    for (let i=0; i<cadenaTexto.length;i=i+1)
    {
        if (cadenaTexto.charAt(i)==='a' || cadenaTexto.charAt(i)==='A' || cadenaTexto.charAt(i)==='e' || cadenaTexto.charAt(i)==='E' || cadenaTexto.charAt(i)==='i' || cadenaTexto.charAt(i)==='I' || cadenaTexto.charAt(i)==='o' || cadenaTexto.charAt(i)==='O' || cadenaTexto.charAt(i)==='u' ||cadenaTexto.charAt(i)==='U' ||cadenaTexto.charAt(i)===' ' )
        {
           cantConsonantes= cantConsonantes+0;
        }
        else
        {
           cantConsonantes= cantConsonantes+1; 
        }
    }   
    
    return cantConsonantes;
} 

/*
Ejercicio N° 23
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
*/

export const cantidadDeS=(cadenaTexto)=>
{
    let cantS=0;

    for (let i=0; i<cadenaTexto.length;i=i+1)
    {
        if (cadenaTexto.charAt(i)==='s' || cadenaTexto.charAt(i)==='S')
        {
           cantS=cantS+1;
        }
    }   
    if (cantS>=2)
    {
        return true;
    }    
    else
    {
       return false; 
    }    

} 

/*
Ejercicio N° 24
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/

export const EspaciosBlancos=(cadenaTexto)=>
{
    let cantEspacio=0;

    for (let i=0; i<cadenaTexto.length;i=i+1)
    {
        if (cadenaTexto.charAt(i)===' ')
        {
           cantEspacio= cantEspacio+1;
        }
        if (cantEspacio===3)
        {
            break
        }    
    }   
      
   
    if (cantEspacio>=3)
    {
        return true;
    }    
    else
    {
       return false; 
    }    

} 

/*
Ejercicio N° 25
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).
*/
export const contieneNumeros=(cadenaTexto)=>
{
    let sinNumero=true;

    for (let i=0; i<cadenaTexto.length;i=i+1)
    {
        if (cadenaTexto.charAt(i)==='0' || cadenaTexto.charAt(i)==='1' || cadenaTexto.charAt(i)==='2' || cadenaTexto.charAt(i)==='3' || cadenaTexto.charAt(i)==='4' || cadenaTexto.charAt(i)==='5' || cadenaTexto.charAt(i)==='6' || cadenaTexto.charAt(i)==='7' || cadenaTexto.charAt(i)==='8' ||cadenaTexto.charAt(i)==='9')
        {
           sinNumero=false;
           break;
        }
       
    }  
       return sinNumero ; 
      
} 