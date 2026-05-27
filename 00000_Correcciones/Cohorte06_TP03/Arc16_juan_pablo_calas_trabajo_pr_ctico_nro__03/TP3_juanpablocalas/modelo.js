
/* Arrows Function EN COMUN TODOS LOS EJERCICIOS */
/* Arrows Function EN COMUN TODOS LOS EJERCICIOS */
/* Arrows Function EN COMUN TODOS LOS EJERCICIOS */
export const fnGuardarEstado = (estadoAplicacion)=>{

    // convierte el estado a JSON //
    let estadoApp = JSON.stringify(estadoAplicacion);
    // persiste en el navegador en el local Storage //
    localStorage.setItem("estadoApp",estadoApp);
};

export const fnRecuperarEstado = (estadoAplicacion)=>{
      // aqui recupero //
        let datoRecuperado = localStorage.getItem("estadoApp");

        if(datoRecuperado)
        {
            let estadoOBJETO = JSON.parse(datoRecuperado);
             return estadoOBJETO   
        };

};



/* Arrows Function Ejerciocio 19 */
/* Arrows Function Ejerciocio 19 */
export const fnCalculoPrecioVenta = (PrecioProducto,MargenGanancia)=>{

    let PrecioVtaProducto = PrecioProducto + (PrecioProducto * MargenGanancia / 100);
    return PrecioVtaProducto;
};

/* Arrows Function Ejerciocio 20 */
/* Arrows Function Ejerciocio 20 */
let SumatoriaNotas = 0;
export const fnAcumulaNotas = (Nota)=>{
    SumatoriaNotas = SumatoriaNotas + Nota;
    return SumatoriaNotas;

};
let CantNotas = 0;
export const fnCuentaNotas = ()=>{
    CantNotas = CantNotas + 1;
    return CantNotas;

};
export const FnPromedioNotas = (SumaNota,CantNota)=>{
    let PromedioFinal = (SumaNota)/CantNota;
    return PromedioFinal;
};

/* Arrows Function Ejerciocio 21 */
/* Arrows Function Ejerciocio 21 */
export const fnCalcularNotaFinal = (NotaF)=>{

    if( NotaF >= 0 && NotaF <= 4 ) return 'DESAPROBADO';
    if(NotaF > 4  && NotaF <=7) return 'APROBADO';
    if(NotaF > 7  && NotaF <=9) return 'MUY BUENO';
    if(NotaF === 10 ) return 'EXCELENTE';

    return 'NOTA ERRONEA'
    
};

/* Arrows Function Ejerciocio 22 */
/* Arrows Function Ejerciocio 22 */
export const fnCalcularTasa = (CodigoBebida,MontoBebida)=>{
    let SobreTasa = 0;
    switch(CodigoBebida)
    {
        case 1:
        {
            SobreTasa = MontoBebida * (5/1000);
            break;     
        }
        case 2:
        {
            SobreTasa = MontoBebida * (1/1000);
            break;     
        }                    
        case 3:
        {
            SobreTasa = MontoBebida * (7/1000);
            break;     
        }                    
        case 4:
        {
            SobreTasa = MontoBebida * (15/1000);
            break;     
        }
        default :
        {
            SobreTasa = MontoBebida * (1/1000);
            break;
        }    
    };

    return SobreTasa;

};

/* Arrows Function Ejerciocio 23 */
/* Arrows Function Ejerciocio 23 */
export const fncalcularImporteAgua = (MetrosCubAgua)=>
    {
        let ExcedenteAgua1T = 0;
        let MontoFactura = 0;
        if(MetrosCubAgua <= 50) 
            {
                MontoFactura = (50 * 350);
            } 
        if(MetrosCubAgua > 50 && MetrosCubAgua <= 70)
            {
                ExcedenteAgua1T = MetrosCubAgua - 50;
                MontoFactura = (50 * 350) + (ExcedenteAgua1T * 555.20);
            }
                
        if(MetrosCubAgua > 70)
            {
                ExcedenteAgua1T = MetrosCubAgua - 70;
                MontoFactura = (50 * 350) + (20 * 555.20) + (ExcedenteAgua1T * 1552.20);
          
            } 
        return MontoFactura;

    };
/* Arrows Function Ejerciocio 24 */
/* Arrows Function Ejerciocio 24 */
export const fncalcularTasaSubsuelo = (TotalFactura)=>{
        return TotalFactura * (3/100)
};    

/* Arrows Function Ejerciocio 25 */
/* Arrows Function Ejerciocio 25 */
export const fncalcularTasaENRE = (TotalFactura)=>{
        return TotalFactura * (1.2/100)
};    



/* Arrows Function Ejerciocio 26 */
/* Arrows Function Ejerciocio 26 */
export const fnCalcularDosis = (NivelGlucosa,PesoPaciente,TipoDiabetes)=>{
    let Dosis = 0;
    if(TipoDiabetes === 1){
        if(NivelGlucosa > 180){
            Dosis = (PesoPaciente * (50/100)) + (NivelGlucosa * (50/100));
        }
        else{
            Dosis = 0; //DEVUELVO 0 (CERO) PORQUE AL TENER MENOS DE 185 Y MAS DE 120 DE NIVEL DE GLUCOSA NO SE NECESITA INSULINA - SE REGULA CON OTRA MEDICACION
        }
            
    }
    else{
        if(NivelGlucosa > 180){
            Dosis = (PesoPaciente * (20/100)) + (NivelGlucosa * (50/100));            
        }
        else{
            Dosis = 0; //DEVUELVO 0 (CERO) PORQUE AL TENER MENOS DE 185 Y MAS DE 120 DE NIVEL DE GLUCOSA NO SE NECESITA INSULINA - SE REGULA CON OTRA MEDICACION
        }
    }

    return Dosis
};


/* Arrows Function Ejerciocio 27 */
/* Arrows Function Ejerciocio 27 */
export const fnCuentaVocales = (cadena)=>{
    let tamañocadena = cadena.length;
    let CantVocales = 0;
    
    console.log(tamañocadena);
    console.log(cadena);

    for( let i = 0; i < tamañocadena; i++ )
    {
        let caracterleido = cadena.charAt(i);
            if(/[AEIOU]/.test(caracterleido.toUpperCase()))
            {
                CantVocales = CantVocales+1 
            }
    };

    return CantVocales 
};

/* Arrows Function Ejerciocio 28 */
/* Arrows Function Ejerciocio 28 */
export const fnCuentaConsonantes = (cadena)=>{
    let tamañocadena = cadena.length;
    let CantConsonantes = 0;
    
    console.log(tamañocadena);
    console.log(cadena);

    for( let i = 0; i < tamañocadena; i++ )
    {
        let caracterleido = cadena.charAt(i);
            if(!/[AEIOU]/.test(caracterleido.toUpperCase()))
            {
                CantConsonantes = CantConsonantes+1
            }
    };
    return CantConsonantes 
};

/* Arrows Function Ejerciocio 29 */
/* Arrows Function Ejerciocio 29 */
export const fnCuentaLetrasS = (cadena)=>{
    let tamañocadena = cadena.length;

    let CantLetrasS = 0;
    
    console.log(tamañocadena);
    console.log(cadena);


    for( let i = 0; i < tamañocadena; i++ )
    {
        let caracterleido = cadena.charAt(i);
        if(caracterleido === 's' || caracterleido === 'S')
            {
                CantLetrasS = CantLetrasS+1;
            }
    };
    if(CantLetrasS >=2)
        {
            return true;
        }
    else
        {
            return false;
        }    
};

/* Arrows Function Ejerciocio 30 */
/* Arrows Function Ejerciocio 30 */
export const fnCuentaEspacios = (cadena)=>{
    let tamañocadena = cadena.length;

    let CantEspacios = 0;
    
    console.log(tamañocadena);
    console.log(cadena);


    for( let i = 0; i < tamañocadena; i++ )
    {
        let caracterleido = cadena.charAt(i);
        if(caracterleido === ' ')
            {
                CantEspacios = CantEspacios+1
            }
  
    };
    if(CantEspacios >=3)
        {
            return true;
        }
    else
        {
            return false;
        }    
    };

 
/* Arrows Function Ejerciocio 31 */
/* Arrows Function Ejerciocio 31 */
export const fnCuantaNrosCadena = (cadena)=>{
    let tamañocadena = cadena.length;

    let CadenaSinNros = true;
    
    console.log(tamañocadena);
    console.log(cadena);

    for( let i = 0; i < tamañocadena; i++ )
    {
        let caracterleido = cadena.charAt(i);
        if(caracterleido  === ' ') {
           CadenaSinNros = true;
        }
        else{
            console.log(Number(caracterleido));
            if(Number(caracterleido) > 0 || Number(caracterleido) < 9 ){
                console.log(`Es un nro`);
                return false;
                break;
            }
        }    
    }
        return true        
    };

