


export const determinarImporteApagarporCliente = (metrosCubicos)=>{

    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    let importeBase = 0;// acumiulador de importes 


    // Cliente bloque 1
    if (metrosCubicos <= 50) 
    {
        
        importeBloque1 = 50 * 350.00;

       
    }
    
    // Cliente bloque 1 y bloque 2
    if((metrosCubicos <= 70) && (metrosCubicos > 50) )
    {
        

        importeBloque1 = 50 * 350.00;     
        importeBloque2 = (metrosCubicos - 50) * 555.20;

        

    }
    // Cliente bloque 1 y bloque 2 y bloque 3
    if (metrosCubicos > 70)
    {
       
        importeBloque1 = 50 * 350.00;
        importeBloque2 = 20 * 555.20;
        importeBloque3 = (metrosCubicos - 70) * 1552.20;

     

    }


    importeBase = importeBloque1 + importeBloque2 + importeBloque3;

    return importeBase;

};






