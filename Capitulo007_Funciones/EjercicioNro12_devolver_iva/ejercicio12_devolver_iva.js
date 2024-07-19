

/* Función que recibe dos parámetros. 
uno es el tipo de articulo a facturar y otro
es el importe neto, la función analiza el tipo
de articulo y aplica el porcentaje dependiendo
lo que le corresponda */

const fnDevolverIVA = (tipoArticulo,importeNeto)=>
    {
        if(tipoArticulo === 1)// alicuota general
        {
            return (importeNeto + (importeNeto * 21)/100);
        }
        if(tipoArticulo === 2) // servicios públicos
        {
            return (importeNeto + (importeNeto * 27)/100);
        }
        if(tipoArticulo === 3) // productos tecnológicos
        {
            return (importeNeto + (importeNeto * 10.5)/100);
        }
        if(tipoArticulo === 4) // productos agrículas
        {
            return (importeNeto + (importeNeto * 5)/100);
        }
        if(tipoArticulo === 5) // Exentos
            {
                return importeNeto; 
            }
    }

/* EJEMPLO DE INVOCACIÓN DE LA FUNCIÓN */
{

    let tipo = 1;

    let neto = 20000;

    let Resultado = fnDevolverIVA(tipo,neto);

    console.log(`El Resultado es : ${Resultado}`);
 
}