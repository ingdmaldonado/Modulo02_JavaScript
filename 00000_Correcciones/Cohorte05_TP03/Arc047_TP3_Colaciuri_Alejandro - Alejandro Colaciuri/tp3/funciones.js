/* 
ejercicio 13
realizar un arrow funtion que reciba dos parametros de entrada 
el parametro 2 drts rl importe de compra  de un producto
el segundo sera el margen de ganancia que se aplicara sobre ese producto, la funcion debe retornar el precio de vent
que sera igual a aplicarle el % de margen de ganancia
la funcion debe retornar el precio de venta (sin impuestos) 
nota: debe devolver un numero
*/

export const retornaPrecioVenta = (importeCompra,margenGanancia)=>
{
    let precioVenta=importeCompra+(importeCompra*margenGanancia/100);

    return precioVenta.toFixed(2);
}

/* Ejercicio Nro. 14:
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número */
export const promedioDeTres = (nota1,nota2,nota3) =>
{
    return (nota1+nota2+nota3)/3;
}

/* 
    Ejercicio Nro. 15:
*/

export const evaluacionNotaPromedio =(nota)=>
{
    let resultado="";

    if(nota ==''){
        return resultado= `Debe completar el campo.`;
    }

    let notaLocal=Number(nota);
    if(notaLocal>=0 && notaLocal<=10){
        if(notaLocal>=0 && notaLocal<=4){
            return resultado=`Desaprobado`;
        }
        else if(notaLocal>4 && notaLocal<=7){
            return resultado=`Aprobado`;
        }
        else if(notaLocal>7 && notaLocal<=9){
            return resultado=`Muy Bueno`;
        }
        else if(notaLocal==10){
            return resultado=`Exelente`;
        }
    }
    else{
    return resultado =`Error Rango invalido / ingrese (0-10)`;}
}

    //ejercicio 16

    export const calcularImpuesto =(importe, TipoBebidaValue)=>
    {
        let operacion="";
        let resultado=0;
        if(importe ==''){
            return resultado= `Debe completar el campo.`;}
        if(importe<=0){
            return resultado= `Debe ingresar un importe mayor a 0`;
        }
        
        switch (TipoBebidaValue) {
            case 1:
                operacion=importe * (5/1000);
                resultado=`IVA: ${operacion}`;
                break;
            case 2:
                operacion=importe * (1/1000);
                resultado=`IVA: ${operacion}`;
                break;
            case 3:
                operacion=importe * (7/1000);
                resultado=`IVA: ${operacion}`;
                break;
            case 4:
                operacion=importe * (2/1000);
                resultado=`IVA: ${operacion}`;
                break;
            case 5:
                operacion=importe * (15/1000);
                resultado=`IVA: ${operacion}`;
                break;
            case 6:
                operacion=importe * (1/1000);
                resultado=`IVA: ${operacion}`;
                break;
            default:
                break;
        }
        return resultado;
    }

    //ejercicio 17
    export const calcularImporteAgua = (MCubicosLeidos)=>{
        let resultado=0;

        const costoBloque1 = 350;
        const costoBloque2 = 555.20;
        const costoBloque3 = 1552.20;
        
        if(MCubicosLeidos==""){
            return resultado=`Debe completar el campo.`;
        }

        if(MCubicosLeidos<0){
            return resultado= `Debe ingresar un valor mayor a 0`;
        }

        MCubicosLeidos=Number(MCubicosLeidos);

        if(MCubicosLeidos<=50){
            resultado = 50 * costoBloque1;
            return resultado;
        }
        else if(MCubicosLeidos<=70){
            resultado = 50 * costoBloque1 + (MCubicosLeidos-50) * costoBloque2;
            return resultado;
        }
        else if(MCubicosLeidos>70){
            resultado = 50 * costoBloque1 + 20 * costoBloque2 + (MCubicosLeidos-70)*costoBloque3; 
            return resultado;
        }
    }

    //ejercicio 18
    export const calcularTasaSubsuelo =(importeBase)=>
    {   
        let resultado="";
        if(importeBase==""){
            return resultado=`Debe completar el campo.`;
        }

        if(importeBase<0){
            return resultado= `Debe ingresar un valor mayor a 0`;
        }

        let tasaSubsuelo=(importeBase*3)/100;
        return tasaSubsuelo;
    }

    //ejercicio 19
    export const calcularTasaEnre = (importe)=>
    {
        let resultado="";
        if(importe==""){
            return resultado=`Debe completar el campo.`;
        }
        if(importe<0){
            return resultado=`Debe ingresar un valor mayor a 0`;
        }
        const tasa = 1.2;
        resultado=(importe * tasa) /100;
        return resultado;
    }

    //ejercicio 20
    export const calcularDosisInsulina = (glucosa, peso, tipo)=>
    {
        //validacion
        if(glucosa=="" || peso==""){
            let mensaje="";
            return mensaje=`Debe completar todos los campos.`;
        }
        if(glucosa<=0 || peso<=0){
            let mensaje="";
            return mensaje=`Debe ingresar valores mayores a 0`;
        }


        if(tipo==true && glucosa>180){
            //tipo1
            let calculo= (peso*50/100)+(glucosa*50/100)
            return calculo;
        }
        if(tipo==false && glucosa>180){
            //tipo2
            let calculo=(peso*20/100)+(glucosa*20/100);
            return calculo;
        }
    }

    //ejercicio 21

    export const contarVocales =(texto)=>{
        let vocales=0;
        let mensaje="";
        if(texto==""){
            return mensaje=`Debe completar el campo.`;
        }

        for (let index = 0; index < texto.length; index++) {
            let textoMinuscula=texto.toLowerCase();
            switch (textoMinuscula[index]) {
                case 'a':
                    vocales++;
                    break;
                case 'e':
                    vocales++;
                    break;
                case 'i':
                    vocales++;
                    break;
                case 'o':
                    vocales++;
                    break;
                case 'u':
                    vocales++;
                    break;
                default:
                    break;
            }
            
        }
        return vocales;
    }

    //ejercicio 22

    export const contarConsonantes =(texto)=>{
        let vocales=0;
        let mensaje="";
        if(texto==""){
            return mensaje=`Debe completar el campo.`;
        }

        for (let index = 0; index < texto.length; index++) {
            let textoMinuscula=texto.toLowerCase();
            if(textoMinuscula[index]!='a' && 
                textoMinuscula[index]!='e' &&
                textoMinuscula[index]!='i' && 
                textoMinuscula[index]!='o' && 
                textoMinuscula[index]!='u' &&
                textoMinuscula[index]!=' ')
                {
                    vocales++;
                }
        }
        return vocales;
    }
    //ejercicio 23

    export const buscarLetra_S =(texto)=>{
        let letra_S=0;
        let mensaje="";
        if(texto==""){
            return mensaje=`Debe completar el campo.`;
        }

        for (let index = 0; index < texto.length; index++) {
            let textoMinuscula=texto.toLowerCase();
            if(textoMinuscula[index]=='s'){
                letra_S++;
            }
        }
        let resultado=(letra_S>=2)?true: false;
        return resultado;
    }
    
    //ejercicio 24
    export const buscarEspacios =(texto)=>{
        let espacios=0;
        let resultado=0;
        let mensaje="";
        if(texto==""){
            return mensaje=`Debe completar el campo.`;
        }

        for (let index = 0; index < texto.length; index++) {

            if(texto[index]==' '){
                espacios++;
                if(espacios===3){
                    break;
                }
            }
        }
        resultado=(espacios>=3)?true: false;
        return resultado;        
    }

        //ejercicio 25
        export const buscarNumeros =(texto)=>{
        let numeroEncontrado="";
        let resultado="";
        let mensaje="";
        if(texto==""){
            return mensaje=`Debe completar el campo.`;
        }
        for (let index = 0; index < texto.length; index++) {
            if(texto[index]>=0 && texto[index]<=9){
                numeroEncontrado=true;
                break;
            }
        }
        resultado=(numeroEncontrado==true)?false: true;
        return resultado;        
    }