
/* variante1 => definición de la función cuadrado
de la forma clásica */

export function Cuadrado(numero)
{
    return numero * numero;
}

/* variante2 => guardandola dentro de una constante */

export const Cuadrado2 = function(numero)
{
    return numero * numero;    
}

/* variante3 => Arrow Function => Funciones Flecha */
export const Cuadrado3 = (numero)=>{return numero * numero};

/********** a partir de aqui comienzo a utilizar arrow function */

export const retornarIVA = (importeBase,anio)=>
    {
        /*
            para facturas del año 2026 16%
            para facturas del año 2025 21%
            para facturas anteriores al 2025 10%
        */

        console.log("entrando");

        if (anio >= 2026)
        {
            console.log("para el 2026");
            return (importeBase * 16)/100;
        }
        if(anio === 2025)
        {
            console.log("cuando sea el 2025");
            return (importeBase * 21/100);
        }
        if(anio < 2025)
        {
            console.log("para años anteriores al 2025");
            return (importeBase * 10/100);
        }
    };

export const retornarIngBrutos = (importeBase)=>
    {
        return (importeBase * 3)/100;
    };

// yo puedo dentro de una función invocar a otras funciones //

export const retornarTotal = (importeBase,anio) => 
    {
        /* total importe base + importe iva + ingresos brutos */

        return (importeBase + retornarIVA(importeBase,anio) + retornarIngBrutos(importeBase));

    };

export const versionDelSistema = `2026.03`;