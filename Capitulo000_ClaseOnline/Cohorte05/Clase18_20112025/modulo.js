


export const lecturaMedidores = [40,55,70,87,22,20,70]; 

export const sueldosOctubre = [2200,3500,1800,4700,2400];

export const calcularImporteBaseAgua = (mtsCubicos) => {
    
    let importeBloque1 = 0;
    let importeBloque2 = 0;
    let importeBloque3 = 0;

    let importeBase = 0;


    if(mtsCubicos >= 0 && mtsCubicos <= 50)//bloque 1
    {
        importeBloque1 = 50 * 350.00; //Aqui es independiente la cantidad consumida, siempre cobrara 50mts de base a $350
    }

    if(mtsCubicos > 50 && mtsCubicos <= 70)
    {
        importeBloque1 = 50 * 350.00; // debemos agregar el importe uno a este if ya que al no cumplir la condicion 1 salta a la 2 omitiendo el primer monto

        importeBloque2 = (mtsCubicos - 50) * 555.20; //(mtsCubicos - 50) se refiere a que si se ingresan 68mts Cubicos tiene 50mts del bloque 1 (a $350) y 10mts del bloque 2 que esos 10mts Cubicos se cobran en otro precio ($555.2).
    }

    if(mtsCubicos > 70)
    {
        importeBloque1 = 50 * 350.00;
        importeBloque2 = 20 * 555.2;//ahora ingresamos bloque 1 y 2 con bloque 2 en 20mts y 50mts Cubicos y esto se sumaria al bloque 3

        importeBloque3 = (mtsCubicos - 70) * 1552.20;//(mtsCubicos - 70)se refiere a que si se ingresan 99mts Cubicos -70 quedarian 29mts * 1552.2 y esto se sumaria a los anteriores 2
    };

    importeBase = importeBloque1 + importeBloque2 + importeBloque3;

    return importeBase;
};