export const promedioAlumn = (nota1,nota2,nota3)=>
{
    return (nota1 + nota2 + nota3)/3
} 
export const precioVenta = (precioCosto,margen) =>
{
    let calculo = (precioCosto * margen)/100;

    let precioFinal = precioCosto + calculo;

    return precioFinal;

} 

export const puntaje = (notaPromedio)=>
{
    if((notaPromedio < 0) && (notaPromedio > 10))
    {
    let error = "ERROR, ingrese un promedio de nota correcto"

    return error
    }
    else
    {
    if(notaPromedio <= 4)
    {
        let desaprobado = "desaprobado"
        
        return desaprobado
    }
    else
    {
        if((notaPromedio > 4) && (notaPromedio <= 7))
        {
        let aprobado = "aprobado"
        
        return aprobado
        }
        else
        {
            if((notaPromedio > 7) && (notaPromedio < 10))
            {
                let muyBueno = "muy bueno"

                return muyBueno
            }
            else
            {
                if(notaPromedio = 10)
                {
                    let excelente = "excelente"

                    return excelente
                }
            }
        }
    }
    }
} 

export const impuestoTasa = (tipoBebida,precioBebida)=>
{
    switch (tipoBebida)
    {
        case 1:
        {
            // Bebidas en envases de plastico
            return ((precioBebida * 5)/1000) + precioBebida
            break;
        }
        case 2:
        {
            // Bebidas envases retornables
            return precioBebida + (precioBebida * 0.001)
            break;
        }
        case 3:
        {
            // Bebidas Gaseosas Azucaradas en envases plásticos
            return precioBebida + (precioBebida * 0.007)
            break;
        }
        case 4:
        {
            // Bebidas Gaseosas Azucaradas en envases retornables
            return precioBebida + (precioBebida * 0.002)
            break;
        }
        case 5:
            {
                // Bebidas Energéticas
                return precioBebida + (precioBebida * 0.015)
                break;
            }
        default:
            {
                // Cualquier otra bebida no clasificada
                return precioBebida + (precioBebida * 0.001)
                break;
            }
    }
} 

export const calcularImporteAgua = (metrosCubicos) =>
{
    if(metrosCubicos <= 50)
    {
        let importeBase = (50 * 350.00) + metrosCubicos

        return importeBase
    }
    else
    {
        if((metrosCubicos >= 51) && (metrosCubicos <= 70))
        {
            let importeBase = (50 * 350.00) + (5 * 555,20) + metrosCubicos

            return importeBase
        }
        else
        {
            if(metrosCubicos > 70)
            {
                let importeBase = (50 * 350.00) + (20 * 555.20) + (15 * 1552.20) + metrosCubicos

                return importeBase
            }
        }
    }
} 

export const servicioAgua = (importeFactura) =>
{
    return (importeFactura * 0.03)
} 

export const servicioAguaENRE = (importeFact) =>
{
    return (importeFact * 0.012)
} 

export const dosisInsulina = (glucosaSangre,pesoPersona,tipoDiabetes) =>
{

    let dosisInsulinaParaDevolver = 0;

    switch(tipoDiabetes)
    {
    case 1:
        {
       
        if (glucosaSangre > 180)
        {  dosisInsulinaParaDevolver = (pesoPersona * 50)/100 + (glucosaSangre * 50)/100;
        }
        else
        {
         dosisInsulinaParaDevolver = (pesoPersona * 50)/100;
        }
         break;
        }
    case 2:
        {
         if (glucosaSangre > 180)
        {  dosisInsulinaParaDevolver = (pesoPersona * 20)/100 + (glucosaSangre * 50)/100;
        }
        else
        {
         dosisInsulinaParaDevolver = (pesoPersona * 20)/100;
        }
         break;
        }
    default:
        {
         dosisInsulinaParaDevolver = 0;
         break;
        }
    }
    
    return dosisInsulinaParaDevolver;
} 

export const FnCantidadConsonantes = (texto)=>
    {
        let cantidadConsonantes = 0;
        for(let i = 0; i < texto.length;i++)
        {
            let caracter = texto[i]; 

            if((caracter.toUpperCase() === 'B') || (caracter.toUpperCase() === 'C') || (caracter.toUpperCase() === 'D')||(caracter.toUpperCase() === 'F')||(caracter.toUpperCase() === 'G') || (caracter.toUpperCase() === 'H')  || (caracter.toUpperCase() === 'J') || (caracter.toUpperCase() === 'K') || (caracter.toUpperCase() === 'L') || (caracter.toUpperCase() === 'M') || (caracter.toUpperCase() === 'N') || (caracter.toUpperCase() === 'Ñ') || (caracter.toUpperCase() === 'P') || (caracter.toUpperCase() === 'Q') || (caracter.toUpperCase() === 'R') || (caracter.toUpperCase() === 'S') || (caracter.toUpperCase() === 'T') || (caracter.toUpperCase() === 'V') || (caracter.toUpperCase() === 'W') || (caracter.toUpperCase() === 'X') || (caracter.toUpperCase() === 'Y') || (caracter.toUpperCase() === 'Z')) 
            {
                cantidadConsonantes++;
            }
        }
        
        return cantidadConsonantes;
        
    } 

export const FnletrasS = (textos)=>
{
    let cantS = 0;
    for(let i = 0; i < textos.length;i++)
    {
        let caracteres = textos[i];
       
        if(caracteres.toUpperCase() === 'S')
        {
              cantS++;
        }

        if(cantS >= 2)
        {
            return true

        }
        else
        {

            return false
        }
    }
} 

export const FnEspacios = (cadenaTxt)=>
{
    let cantiEspacios = 0;
    for (let i = 0; i < cadenaTxt.length; i++)
    {
        let espaciosBlancos = cadenaTxt[i];

        if(espaciosBlancos === " ")
        {
            cantiEspacios++;
        }

        if(cantiEspacios >= 3)
        {
            return true
        }
    }
    return false 
}

export const mayusMins = (txtCadena)=>
{
    let mayus = 0;
    let minus = 0;

    for (let i = 0; i < txtCadena.length; i++)
    {
    let vocalesMinMay = txtCadena[i]

    if((vocalesMinMay === `A`) || (vocalesMinMay === `E`) || (vocalesMinMay === `I`) || (vocalesMinMay === `O`) || (vocalesMinMay === `U`))
    {
    mayus++;
    }

    if((vocalesMinMay === `a`) || (vocalesMinMay === `e`) || (vocalesMinMay === `i`) || (vocalesMinMay === `o`) || (vocalesMinMay === `u`))
    {
    minus++;
    }
    }

    return {mayus,minus}; // PERDONE NO LE ENTIENDO A ESTE EJERCICIO, ES EL 21 DE LA GUIA 
    
}

export const numerosTxt = (textoCdna)=>
{
  
    let numeros = 0;;
    for(let i = 0; i < textoCdna.length; i++)
    {
    let caracteres = textoCdna[i]
    if((caracteres >= 0) && (caracteres <= 9))
    {
     numeros = false;
    break;
    }
    else
    {
     numeros = true;
    }
    }

    return numeros
}

// let NumeroPositivoONegativo = Numero > 0 ? `POSITIVO` : Numero < 0 ? `NEGATIVO` : `CERO`