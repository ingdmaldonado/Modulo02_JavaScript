{
    let edadIngresada = 0;
    edadIngresada = Number(prompt(`Por favor, ingrese su edad`))
    
    if((edadIngresada >= 0) && (edadIngresada <= 12))
    {
        console.log(`Niño`)
    }
    else
    {
        if((edadIngresada > 12) && (edadIngresada <= 17))
        {
            console.log(`Adolescente`)
        }
        else
        {
            if((edadIngresada >= 18) && (edadIngresada <= 64))
            {
                console.log(`Adulto`)
            }
            else
            {
                console.log(`Adulto mayor`)
            }
        }
    }


}