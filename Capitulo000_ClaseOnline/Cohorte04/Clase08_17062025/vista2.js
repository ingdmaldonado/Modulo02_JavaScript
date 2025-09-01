

{
    console.log(`la aplicacion 2 esta corriendo`);

    let importeTotal = 25000;
    let domicilioPersona = `BARRIO CENTRO. CHACABUCO 881`;

    let encontrarLetraO = false; 

    for(let j = 0;j < domicilioPersona.length;j = j+1)
    {
        let caracterExtraido = domicilioPersona.charAt(j);
        console.log(`iteracion ${j} caracter: ${caracterExtraido}`);

        if(caracterExtraido === 'O' || caracterExtraido === 'o')
        {
            encontrarLetraO = true; // bandera o flag
            break; // como ya lo encontre salgo
        }
    }

    if(encontrarLetraO)
    {
        console.log(`la cadena si tiene una letra O`);
    }
    else
    {
        console.log(`la cadena no tiene una letra O`);
    }
}