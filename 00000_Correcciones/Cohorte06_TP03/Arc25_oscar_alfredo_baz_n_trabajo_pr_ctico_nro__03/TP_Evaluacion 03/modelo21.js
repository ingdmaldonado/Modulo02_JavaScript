/*Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro devuelva un texto que diga los siguientes mensajes.
•
Si la nota <= 4 debe devolver “Desaprobado”
•
Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
•
Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
•
Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto */

export const fnCalculaPromedio = (nota1, nota2, nota3)=>{

    let auxiliar = (nota1 + nota2 + nota3)/3;
    return auxiliar;
}


export const fnVeredicto = (prom) => {


    if (prom <= 4){
        return "Desaprobado"
    }
    else if (prom <= 7){
        return "Aprobado"
    }
    else if (prom <=9){
        return "Muy Bueno"
    }
    else if (prom === 10){
        return "Excelente"
    }
    else {
        return "error"
    }
}