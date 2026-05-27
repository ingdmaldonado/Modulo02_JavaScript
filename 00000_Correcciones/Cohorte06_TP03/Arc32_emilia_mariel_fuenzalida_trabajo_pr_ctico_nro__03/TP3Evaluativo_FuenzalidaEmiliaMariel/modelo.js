/*Ejercicio 19°*/
export const fnCalculoPrecioVenta = (importeProducto, margenDeGanancia) =>{

    let auxiliar = 0;
    auxiliar = importeProducto + (importeProducto * margenDeGanancia)/100;
    return auxiliar;
};

/*Ejercicio 20°*/
export const fnCalcularNotas = (nota1, nota2, nota3)=>{

    let promedio = 0;
    promedio = (nota1 + nota2 + nota3)/3;
    return promedio 

};

/*Ejercicio 21°*/
export const fnEstadoAlumno= notaPromedio =>{

    let estadoAlumno = 0;

    if (notaPromedio <= 4 && notaPromedio > 0) return estadoAlumno = `Desaprobado`;
    if (notaPromedio > 4 && notaPromedio <= 7) return estadoAlumno = `Aprobado`;
    if (notaPromedio > 7 && notaPromedio <= 9) return estadoAlumno = `Muy bueno`;
    if (notaPromedio === 10) return estadoAlumno = `Excelente`;
    else return estadoAlumno = `¡Nota inválida!`;

};

/*Ejercicio 22°*/
export const fnSobreTasa = (tipoProducto, importeBase) => {

    let sobreTasa = 0;

    if (tipoProducto === 1)return (importeBase * 5) / 1000;
    if (tipoProducto === 2)return (importeBase * 1) / 1000;
    if (tipoProducto === 3)return (importeBase * 7) / 1000;
    if (tipoProducto === 4)return (importeBase * 2) / 1000;
    if (tipoProducto === 5)return (importeBase * 15) / 1000;
    if (tipoProducto === 6)return (importeBase * 1) / 1000;

    return 0;

};

/*Ejercicio 23°*/
export const fncalcularImporteAgua = metrosCubicos =>{

    let importeBase = 0; 

    if (metrosCubicos <= 50 && metrosCubicos >=0) return importeBase =  (metrosCubicos * 350);
    if (metrosCubicos >= 51 && metrosCubicos <= 70) return importeBase = (50 * 350) + ((metrosCubicos - 50) * 555.20);
    if (metrosCubicos >= 70) return importeBase = (50 * 350) + ( 20 * 555.20) + ((metrosCubicos - 70) *1552.00);
    else return importeBase = 0;

};

/* Ejercicio 24°*/
export const fnCalcularTasaSubsuelo =importeBase=>{

    let tasaSubsuelo = 0;
    tasaSubsuelo = (importeBase * 3)/100;
    return tasaSubsuelo;
};

/* Ejercicio 25°*/
export const fnTasaFiscalizacion = importeBase => {
    
    let tasafiscalizacion = importeBase * 0.012;

    return tasafiscalizacion;
};

/*Ejercicio 26°*/
export const fnDosisInsulina = (nivelGlucosa, peso, tipoDiabetes) => {

    let dosisInsulina = 0;

    if (tipoDiabetes === 1) {
        if (nivelGlucosa > 180) {

            dosisInsulina = (peso * 50/100) + (nivelGlucosa * 50/100);

        }
        else {
            dosisInsulina = (peso * 50/100);
        }
    }
    if (tipoDiabetes === 2) {
        if (nivelGlucosa > 180) {

            dosisInsulina = (peso * 20/100) + (nivelGlucosa * 50/100);

        }
        else {
            dosisInsulina = (peso * 20/100);
        }
    }

    return dosisInsulina;

};

/*Ejercicio 27°*/
export const fnCantidadVocales = cadenaTexto => {

    let cantidadVocales = 0;

    for (let i = 0; i < cadenaTexto.length; i++) {

        let caracter = cadenaTexto.charAt(i).toUpperCase();

        if ((caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U')) {

            cantidadVocales= cantidadVocales + 1;
        };

    }
    return cantidadVocales;
};

/*Ejercicio 28°*/
export const fnCantidadConsonantes = (cadenaDeTexto, cons) => {

    let cantConsonantes = 0;

    for (let i = 0; i < cadenaDeTexto.length; i++) {

        let caracterCons = cadenaDeTexto.charAt(i).toLowerCase();

        for (let j = 0; j < cons.length; j++) {
            if(caracterCons === cons.charAt(j)){
                cantConsonantes++;
            }
        }
    }
    return cantConsonantes;
};

/*Ejercicio 29° */
export const fnLetraS = palabra =>{
    let cantidadS = 0;

    for (let i = 0; i < palabra.length; i++){

        let caracterMin = palabra.charAt(i).toLowerCase();

        if (caracterMin === 's'){

            cantidadS ++;
        }
        if (cantidadS >= 2){
            return true;
        }
    }
    return false;
};

/*Ejercicio 30° */
export const fnVerificarEspaciosEnBlanco =cadenaDeTxt=>{

    let espaciosEnBlanco = 0;

    for (let i = 0; i < cadenaDeTxt.length; i++){

        let cadaCaracter = cadenaDeTxt.charAt(i);

        if (cadaCaracter === " ")
        {
            
            espaciosEnBlanco ++;
        }

        if (espaciosEnBlanco === 3){
            return true;
        }
    }
    return false;
};

/*Ejercicio 31° */
export const fnVerificarDigitos = cadenaNumerica =>{

    for (let i = 0; i < cadenaNumerica.length; i++){

        let caracter = cadenaNumerica.charAt(i);

        if (caracter >= '0' && caracter <= '9')
        {
            return true; 
        }
    }
    return false;
};




