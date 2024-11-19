
function CalculeElIVA(importeBase,anioVigencia)
{
    if(anioVigencia <= 2024)
    {
        return importeBase * 21/100; // antes del 2024 el 21%
    }
    else
    {
        return importeBase * 35/100; // despues del 2024 el 35%
    }  
}

function CalculeTasaMunicipal(importeBase,anioVigencia)
{
    if (anioVigencia <= 2024)
    {
        return importeBase * 6/100; // antes del 2024 se usaba el 6%
    }
    else
    {
        return importeBase * 7/100; //  despues del 2024 el 7%
    }
    
}

{
    console.log("funcionando");

    let importeBaseDeFactura = 30000;

    let importeTotalDeFactura = 0;

    importeTotalDeFactura = importeBaseDeFactura + CalculeElIVA(importeBaseDeFactura,2025) + CalculeTasaMunicipal(importeBaseDeFactura,2025);

    console.log(importeTotalDeFactura);




}