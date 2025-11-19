// EJERCICIO 13

export const calculoPrecioVenta = (importeDeCompra,margenDeGanancia)=>
    {
        let precioDeVenta = 0;

        precioDeVenta = importeDeCompra + (importeDeCompra * margenDeGanancia/100);

        return precioDeVenta
    } 



// EJERCICIO 14

export const promedioNotas = (primeraNota,segundaNota,tercerNota)=>
    {
        let promedio = 0;

        promedio = (primeraNota + segundaNota + tercerNota)/3;

        return promedio
    }



// EJERCICIO 15

export const resultadoExamen = (nota)=>
    {
        let condicion = "";
        if(nota <= 4)
        {
            condicion = "Desaprobado"
        }
        else
        {
            if((nota > 4)&&(nota <= 7))
            {
                condicion = "Aprobado"
            }
            else
            {
                if((nota > 7)&&(nota <= 9))
                {
                    condicion = "Muy Bueno"
                }
                else
                {
                    if(nota === 10)
                    {
                        condicion = "Excelente"
                    }
                }
            }
        }

        return condicion
    }



// EJERCICIO 16

export const calculoSobreTasa = (tipoBebida,importeBebida)=>
    {
        let impuesto = 0; 

        switch(tipoBebida)
        {
            case 1: // Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
                {
                    impuesto = (importeBebida * 5)/1000;
                    break;
                }

            case 2: // Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
                {
                    impuesto = (importeBebida * 1)/1000;
                    break;
                }

            case 3: // Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
                {
                    impuesto = (importeBebida * 7)/1000;
                    break;
                }

            case 4: // Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
                {
                    impuesto = (importeBebida * 2)/1000;
                    break;
                }

            case 5: // Bebidas Energéticas = 15 ‰ (quince por mil)
                {
                    impuesto = (importeBebida * 15)/1000;
                    break;
                }

            case 6: // Cualquier otra bebida no clasificada = 1 ‰ (uno por mil)
                {
                    impuesto = (importeBebida * 1)/1000;
                    break;
                }

            default:
                {
                    impuesto = 0;
                    break;
                }
        }

        return impuesto
    }


// EJERCICIO 17

export const calcularImporteAgua = (metrosCubicosConsumidos)=>
    {
        let importeFinal = 0;

        if(metrosCubicosConsumidos < 50)
            {
                metrosCubicosConsumidos = 50;
            }

        for(let i = 1; i <= metrosCubicosConsumidos; i++)
        {
            let metrosActuales = i;
            
            if(metrosActuales <= 50)
            {
                importeFinal = importeFinal + 350.00;
            }
            else
            {
                if((metrosActuales > 50)&&(metrosActuales <= 70))
                {
                    importeFinal = importeFinal + 555.20;
                }
                else
                {
                    if(metrosActuales > 70)
                    {
                        importeFinal = importeFinal + 1552.20;
                    }
                }
            }
        }

        return importeFinal
    }


// EJERCICIO 18

export const calculoTasaSubsuelo = (importeBase)=>
    {
        return (importeBase * 3)/100
    }


// EJERCICIO 19

export const calculoTasaFiscalizacion = (importeBase)=>
    {
        return (importeBase * 1.2)/100
    }


// EJERCICIO 20

export const dosisDeInsulina = (glucosaEnSangre,pesoCorporal,tipoDiabetes)=>
    {
        let dosis = 0;

        switch(tipoDiabetes)
        {
            case 1:
                {
                    if(glucosaEnSangre <= 180)
                    {
                        dosis = (pesoCorporal * 50)/100;
                    }
                    else
                    {
                        dosis = (pesoCorporal * 50)/100 + (glucosaEnSangre * 50)/100;
                    }
                    break;
                }

            case 2:
                {
                    if(glucosaEnSangre <= 180)
                    {
                        dosis = (pesoCorporal * 20)/100;
                    }
                    else
                    {
                        dosis = (pesoCorporal * 20)/100 + (glucosaEnSangre * 50)/100;
                    }
                    break;
                }

            default:
                {
                    dosis = -1;
                    break;
                }
        }

        return dosis
    }


// EJERCICIO 21

export const vocales = (texto1)=>
    {
        let cantidadVocales = 0;

        for(let i = 0; i < texto1.length; i++)
        {
            let caracter = texto1[i];

            if((caracter.toUpperCase() === "A")||(caracter.toUpperCase() === "E")||(caracter.toUpperCase() === "I")||(caracter.toUpperCase() === "O")||(caracter.toUpperCase() === "U"))
            {
                cantidadVocales++;
            }
        }

        return cantidadVocales
    }


// EJERCICIO 22

export const consonantes = (texto2)=>
    {
        let cantidadConsonantes = 0;

        for(let i = 0; i < texto2.length; i++)
        {
            let caracter = texto2[i];
            
            if((caracter.toUpperCase() === "A")||(caracter.toUpperCase() === "E")||(caracter.toUpperCase() === "I")||(caracter.toUpperCase() === "O")||(caracter.toUpperCase() === "U")||(caracter.toUpperCase() === " "))
            {
                cantidadConsonantes = cantidadConsonantes;
            }
            else
            {
                cantidadConsonantes++;
            }
        }

        return cantidadConsonantes
    }


// EJERCICIO 23

export const cantidadDeS = (palabra)=>
    {   
        let contador = 0;
        let letrasS = 0;

        for(let i = 0; i < palabra.length; i++)
        {
            if(palabra[i].toUpperCase() === "S")
            {
                contador++;
            }
        }

        if(contador >= 2)
        {
            letrasS = true;
        }
        else
        {
            letrasS = false;
        }

        return letrasS
    }


// EJERCICIO 24 

export const contadorDeEspacios = (texto3)=>
    {
        let contadorEspacio = 0;
        let cantidadEspacios = false

        for(let i = 0; i < texto3.length; i++)
        {
            if(texto3[i] === " ")
            {
                contadorEspacio++;
            }

            if(contadorEspacio === 3)
            {
                cantidadEspacios = true;
                break;
            }
        }

        return cantidadEspacios
    }


// EJERCICIO 25

export const cadenaSinNumeros = (texto4)=>
    {
        let cadenaDeTexto = true;

        for(let i = 0; i < texto4.length; i++)
        {
            if((texto4[i] === "1")||(texto4[i] === "2")||(texto4[i] === "3")||(texto4[i] === "4")||(texto4[i] === "5")||(texto4[i] === "6")||(texto4[i] === "7")||(texto4[i] === "8")||(texto4[i] === "9")||(texto4[i] === "0"))
            {
                cadenaDeTexto = false;
                break;
            } 
        }

        return cadenaDeTexto
    }