

/* CODIGO PARA EL CONTROLADOR 1 */

console.log("la aplicación web iniciada");

/* (1ro) Encontrarse en que parte del Padron Electoral se encuentran */

console.log(PadronElectoral);

let resultadoFind = PadronElectoral.find((element,indice)=>
    {
        if(element.NUMDNI === '24010663')
        {
            return true;
        }
    })

if(resultadoFind)
{
    console.log(resultadoFind);
}
else
{
    console.log("no encontrado");
}

/* (2do) Busqueda - Arrow Function Corta */

let resultadoFind2 = PadronElectoral.find(element => element.NUMDNI = '24010663');
if(resultadoFind2)
{
    console.log(resultadoFind2);
}

/* (3ro) Vamos a Filtrar elementos de un Vector - Arrow Function Larga */

let vectorFiltrado = PadronElectoral.filter((element,indice)=>
    {
        if(element.CLASE === '1996')
        {
            return true;
        }
    })

console.log(vectorFiltrado);

/* (4to) Vamos a Filtrar los elementos de un Vector - Arrow Function Corta */

let vectorFiltrado2 = PadronElectoral.filter(element => element.CLASE === '1996');

console.log(vectorFiltrado2);

/* (5to) Vamos a Filtrar los que tienen entre 40 y 50 años - Arrow Function Larga */

let vectorFiltrado3 = PadronElectoral.filter((element,indice)=>
    {
        let anioNacimiento = Number(element.CLASE);
        if ((anioNacimiento >= 1974) && (anioNacimiento <= 1984))
        {
            return true;
        }
    })

console.log(vectorFiltrado3);

/* (6to.) Vamos a Filtrar los que tienen entre 40 y 50 años - Arrow Function Corta */

let vectorFiltrado4 = PadronElectoral.filter(element => Number(element.CLASE) >= 1974 && Number(element.CLASE) <= 1984)

console.log(vectorFiltrado4);

/* (7mo.) Mujeres que tengan entre 25 y 30 años - Arrow Function Larga */

let vectorFiltrado5 = PadronElectoral.filter((element,indice)=>
    {
        if((Number(element.CLASE) >= 1994) && (Number(element.CLASE) <= 1999) && (element.SEXO === 'F'))
        {
            return true;
        }
    })

console.log(vectorFiltrado5);

/* (8vo.) Mujeres que tengan entre 25 y 30 años - Arrow Function Corta */

let vectorFiltrado6 = PadronElectoral.filter(element => (Number(element.CLASE) >= 1994) && (Number(element.CLASE) <= 1999) && (element.SEXO === 'F'));

console.log(vectorFiltrado6);

/* (9no.) Varones que tengan entre 25 y 30 años - Arrow Function Corta */

   let vectorFiltrado7 = PadronElectoral.filter(element => (Number(element.CLASE) >= 1994) && (Number(element.CLASE) <= 1999) && (element.SEXO === 'M'));

   console.log(vectorFiltrado7);

/* 
    (10) Generar a partir del Vector Determinado un 
    segundo Vector que diga unicamente DNI, APELLIDOYNOMBRE, AÑO DE NACIMIENTO Y AÑOS 
*/

/* (11) Destructuring para generar un vector nuevo
con una estructura reduci*/