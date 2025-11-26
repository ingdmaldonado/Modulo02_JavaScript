

//FUNCIÓN EJERCICIO 13
    export const precioDeVenta = (precioCosto,margen)=>
        {
            //aquí calculo el porcentaje de ganancia
            let calculo = (precioCosto * margen) / 100;

            //aquí le sumo el porcentaje de ganancia
            let precioFinal = precioCosto + calculo;

            //aquí devuelvo el valor
            return precioFinal;
        }


//FUNCIÓN EJERCICIO 14
    export const promedioDeTres = (nota1,nota2,nota3)=>
    {
        return (nota1 + nota2 + nota3) / 3;
    }

//FUNCIÓN EJERCICIO 15

    export const devolverCalificacion = (nota)=>{

        let resultado = 0;

        if((nota > 0) && (nota < 4))
        {
            resultado = `Desaprobado`;
        }
        else if((nota => 4) && (nota < 7))
            {
                resultado = `Aprobado`;
            }
            else if((nota => 7) && (nota <= 9))
            {
                resultado = `Muy bueno`;
            }
            else if(nota === 10)
            {
                resultado = `Excelente`;
            }

        return resultado;

    }

//FUNCIÓN EJERCICIO 16
    export const calcularSobreTasa = (importeBase, tipoBebida)=>{
        let tasa = 0;

        switch (tipoBebida)
        {
            case 1:
                tasa = 5;   // 5 ‰
                break;
            case 2:
                tasa = 1;   // 1 ‰
                break;
            case 3:
                tasa = 7;   // 7 ‰
                break;
            case 4:
                tasa = 2;   // 2 ‰
                break;
            case 5:
                tasa = 15;  // 15 ‰
                break;
            default:
                tasa = 1;   // cualquier otra bebida
                break;
        }

        // el impuesto es (importeBase * tasa) / 1000
        return (importeBase * tasa) / 1000;
    }



//FUNCIÓN EJERCICIO 17
export const calcularImporteAgua = (consumo)=>{

    let m3 = 0; 

    // Aquí aplico el mínimo obligatorio
    if(consumo < 50)
    {
        m3 = 50;
    }
    else
    {
        m3 = consumo;
    }

    let importe = 0;

    const bloque1 = 50;
    const valor1 = 350;

    const bloque2 = 20;
    const valor2 = 555.20;

    const valor3 = 1552.20;

    if(m3 <= 50)
    {
        importe = bloque1 * valor1;
    } 
    else if(m3 <= 70)
    {
        const consumoSegundoBloque = m3 - 50;
        importe = (bloque1 * valor1) + (consumoSegundoBloque * valor2);
    } 
    else
    {
        const excedente = m3 - 70;
        importe = (bloque1 * valor1) + (bloque2 * valor2) + (excedente * valor3);
    }

    return importe;
}

//FUNCIÓN EJERCICIO 18
export const calcularTasaSubsuelo = (importeBase)=>{

    return (importeBase * 3) / 100;

}


//FUNCIÓN EJERCICIO 19
export const calcularTasaEnre = (importBase)=>{

    return (importBase * 1.2) / 100;

}


//FUNCIÓN EJERCICIO 20
export const calcularDosisInsulina = (glucosa, peso, tipo)=>{

    let dosis = 0;

    // porcentaje según tipo
    const porcentajePeso = tipo === 1 ? 0.50 : 0.20;

    // componente por peso
    dosis += peso * porcentajePeso;

    // componente por glucosa (solo si > 180)
    if (glucosa > 180) {
        dosis += glucosa * 0.50;
    }

    return dosis;
}

/**Profe, con respecto al ejercicio 20, me apoyé en IA para pedirle que me muestre una forma más sintética de realizar la aplicación, ya que recordé que habíamos realizado este ejercicio anteriormente y al revisarlo el código se me había hecho muy extenso.
 * Entonces aprendí que el operador += sirve para sumar valores a la vriable y guardarlos automáticamente.
*/



//FUNCIÓN EJERCICIO 21
export const contarVocales = (cadena)=>{

    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++)
    {
        let char = cadena[i];
        
        // recorro la lista de vocales
        for (let j = 0; j < vocales.length; j++)
        {
            if (char === vocales[j])
            {
                contador += 1;
                break; // si ya encontró que es vocal, sale del for
            }
        }
    }
    
    return contador;
}


//FUNCIÓN EJERCICIO 22

export const contarConsonantes = (cadena)=>{

  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    const char = cadena[i];

    // Verifico si es letra
    const esMayus = char >= "A" && char <= "Z";
    const esMinus = char >= "a" && char <= "z";

    if (esMayus || esMinus) {
      // Verifico si NO es vocal
      let esVocal = false;

      if (
        char === "a" || char === "A" ||
        char === "e" || char === "E" ||
        char === "i" || char === "I" ||
        char === "o" || char === "O" ||
        char === "u" || char === "U"
      ) {
        esVocal = true;
      }

      if (!esVocal) {
        contador++;
      }
    }
  }

  return contador;
}


//FUNCIÓN EJERCICIO 23
export const tieneDosS = (palabra)=>{

    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let char = palabra[i];

        if (char === 's' || char === 'S') {
            contador += 1;
        }

        if (contador >= 2) {
            return true;
        }
    }

    return false;
}


//FUNCIÓN EJERCICIO 24
    export const AnalizarEspacios = (texto)=>{

    let contadorDeEspacios = 0;

    let salida = false;

        for(let i = 0; i < texto.length; i++)
        {
            let caracter = texto[i];

            if(caracter === ' ')
            {
                contadorDeEspacios = contadorDeEspacios + 1;

                if(contadorDeEspacios === 3)
                {
                    salida = true;
                    break;
                }
            }

            console.log(`caracter ${i} - ${caracter}`);
        }

        console.log(`La cadena ingresada tiene ${contadorDeEspacios} espacios`);

        return salida;

    }

    //FUNCIÓN EJERCICIO 25

    export const noContieneNumeros = (cadena)=>{

  for (let i = 0; i < cadena.length; i++)
    {
        const char = cadena[i];

        // Verifico si está entre '0' y '9'
        if (char >= '0' && char <= '9')
        {
            return false; // si encuentra un número, se corta
        }
    }

  return true;
}
