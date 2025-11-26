//EJERCICIO 13
export const fnPrecioVenta =(importe, margen)=>
    {
        let precioVenta = importe + (importe * margen /100)
        return precioVenta
    }

//EJERCICIO 14
export const fnPromedioNotas =(nota1, nota2, nota3) =>
    {
       let calificacion = 0;
       calificacion = (nota1+nota2+nota3)/3;
       return calificacion; 
    }

//EJERCICIO 15    
export const fnCondicionSegunNotas =(nota)=>
    {
        let condicion = "";
        
        if ((nota <0)||(nota>10))
            {
                condicion = "Ingrese un valor entre 0 y 10"
            }

        else
            {
            if ((nota >=0)&&(nota<=4))
                {
                    condicion = `Desaprobado`;
                }
            else
                {
                    if ((nota >4) && (nota <=7))
                        {
                           condicion ="Aprobado" 
                        }
                    else
                        {
                            if ((nota > 7)&& (nota <= 9))
                                {
                                   condicion = `Muy bueno` 
                                }
                            else 
                                {
                                    if (nota = 10)
                                        {
                                            condicion = `Excelente`;
                                        }
                                }
                                        
                        }
                }
            }
        return condicion

    }
//EJERCICIO 16
export const fnImpuestoBebidas = (base, tipo)=>    
  {
    let subtotalImpuesto= 0; //variable que saca los porcentajes 
    let acumuladorImpuesto = 0; //variable que acumula

     //Se elije el tipo de bebiba (1 al 6) y se carga el precio. En base a estas 2 variables se calcula la alicuota y la salida el el porcentaje
    {
        switch(tipo)
            {
            case 1://Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
                {  
                    subtotalImpuesto = base * 5/1000
                    break;
                }
            case 2://Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
                {   subtotalImpuesto = base * 1/1000
                    break;
                }
            case 3://Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
                {   subtotalImpuesto = base * 7/1000
                    break;
                }   
            case 4://Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
                {   subtotalImpuesto = base * 2/1000
                    break;
                }  
            case 5://Bebidas Energéticas = 15 ‰ (quince por mil)
                {   subtotalImpuesto = base * 15/1000
                    break;
                }     
                         
            case 6://Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
                {   subtotalImpuesto = base * 1/1000
                    break;
                }  
            default:
                {
                    console.log (`ELIJA UNA OPCIÓN CORRECTA`)
                    break;
                };
            }
        console.log( `Eligio la opcion ${tipo} y el precio $${base} y el impuesto $${subtotalImpuesto}`)
       
    }
   
    return subtotalImpuesto
  }  
//EJERCICIO 17
  export const fncalcularImporteAgua = (consumo)=>
    {
        let consumoACobrar= 0;
        //Variables para ser actualizadas (precio por m3)
        let tarifaBase = 350;
        let tarifaNivelDos = 555.2;
        let tarifaNivelTres= 1552.2;

        //Variables para ser actualizadas (Rangos tarifarios)
        let limiteNivelDos = 50
        let limiteNivelTres = 70;

        if ((consumo>=0)&&(consumo<=50))
            {
                consumoACobrar = tarifaBase*limiteNivelDos; 
            }
        else 
            {
               if ((consumo > 50) && (consumo <= 70))
                {
                    consumoACobrar = tarifaBase*limiteNivelDos + (consumo - limiteNivelDos)* tarifaNivelDos
                }
                else
                {
                    if(consumo > 70)
                    {
                        consumoACobrar = tarifaBase*limiteNivelDos + tarifaNivelDos*(limiteNivelTres-limiteNivelDos) + (consumo - limiteNivelTres)* tarifaNivelTres
                    }
                    
                }
            }


            return consumoACobrar
    }
//EJERCICIO 18
export const fnAguasCatamarca = (base)=>
    {   
        let valorSubsuelo = 0;   
        valorSubsuelo = base * 3/100;
       
        return valorSubsuelo;
    }
//EJERCICIO 19
export const fnEnre = (base)=>
        {   
            let valorFiscalización = 0;   
            valorFiscalización = base * 1.2/100;
           
            return valorFiscalización;
        }
   
//EJERCICIO 20
export const fnInsulina = (glucosa, peso, tipo)=>
{
    let dosis = 0;
    
    switch (tipo)//Se evalua el tipo de diabetes para dar la dosis correspondiente. En casa caso esta la lógica
    {
        case 1:
            {
                dosis = glucosa > 180 ? (peso *50/100 + glucosa * 50/100): peso *50/100 ;//La condición >180 es para realizar un calculo diferencial
                console.log ("caso 1")
                
                break;
            };
        case 2:
            {   console.log ("caso 2")
                dosis = glucosa > 180 ? (peso *20/100 + glucosa * 50/100): peso *50/100 ;//La condición >180 es para realizar un calculo diferencial
                break;

            }
        default:
            {   dosis = "Ingrese un tipo de diabete correcto"
                break;

            }
    }
    return dosis

}
//EJERCICIO 21 y 22
export const fnContadorVocales = (cadenaDeTexto)=>
{

    let cantidadDeLetras = 0;
for (let i=0; i< cadenaDeTexto.length; i = i +1)
    {
        let caracterExtraido = cadenaDeTexto.charAt(i)
        if (caracterExtraido ==="a"|| caracterExtraido==="A"||caracterExtraido==="e"||caracterExtraido ==="E"||caracterExtraido === "i"|| caracterExtraido==="I"||caracterExtraido==="o"||caracterExtraido==="O"||caracterExtraido==="u"||caracterExtraido==="U")
        {
            cantidadDeLetras = cantidadDeLetras +1;
        }
       
    }
    
    return cantidadDeLetras
}
//EJERCICIO 23
export const fnContadorDeLetraEse = (cadenaDeTexto)=>
    {
        let contador = 0;
        let salidaS = "";
        
        for (let i=0; i< cadenaDeTexto.length; i = i +1)
        {
            let caracterExtraido = cadenaDeTexto.charAt(i)
            if (caracterExtraido==="s"||caracterExtraido==="S")
            {
                contador = contador + 1;
                   
            }
            salidaS= contador >=2 ? `La palabra tiene al menos 2 letras "S"`: `La palabra no tiene o tiene menos de 2 letras "S"`
        }
        return salidaS
    }

//EJERCICIO 24
export const fnContadorEspaciosEnBlanco = (cadena)=>
{
    
    let contadorEspacios = 0;
    let variableBooleana = false ;

    for (let i = 0; i < cadena.length; i = i + 1) 
    {
        if (cadena[i] === ' ') 
            {
            contadorEspacios = contadorEspacios + 1;
            console.log (`${contadorEspacios} espacio vacio en la posicion ${i}`);

          
            };
            if (contadorEspacios === 3)  
                {
                    variableBooleana = true;
                    break;
                }
            
                    
    }

    return variableBooleana; 
}
//EJERCICIO 25
export const fnBuscadorDeNumeros=(cadena)=>
    {
        let variableBooleana = true;
        let caracterExtraido = "";

        for (let i = 0; i < cadena.length; i = i + 1)//iteracion para que recorra la frase
        {
            caracterExtraido = cadena.charAt(i)//se extrae cada letra y se la guarda para analizarla
           

            if ((caracterExtraido >= "0")&&(caracterExtraido<= "9" ))//Se usa el condicional de la letra extraida
            {
                variableBooleana = false;
                break;
            }
            
        }
        
    return variableBooleana

    }
export const versionModulo ="19.11.2025"

