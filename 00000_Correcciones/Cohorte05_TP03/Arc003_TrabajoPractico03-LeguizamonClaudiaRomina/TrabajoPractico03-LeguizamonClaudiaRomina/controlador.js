import {precioDeVenta} from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import {mensajeNota} from "./funciones.js";
import {funcionSobreTasa} from "./funciones.js";
import {importeAgua} from "./funciones.js";
import {tasaSubsuelo} from "./funciones.js";
import {tasaFiscalizacion} from "./funciones.js";
import {dosisInsulina} from "./funciones.js";
import {cantidadDeVocales} from "./funciones.js";
import {cantidadDeConsonantes} from "./funciones.js";
import {cantidadDeS} from "./funciones.js";
import {EspaciosBlancos} from "./funciones.js";
import {contieneNumeros} from "./funciones.js";

window.onload = ()=>{
let numeroDeEjercicio=Number(prompt("Ingrese el ejercicio que quiere realizar. Elija entre los numeros del 13 al 25."));
switch (numeroDeEjercicio)
{
    case 13:
        {
           /* Ejemplo Invocación Ejercicio Nro. 13 */
           let precioDeCosto=Number(prompt("Ingrese el precio de costo."));
           let Margen=Number(prompt("Ingrese el margen de ganancia"));
           if ((precioDeCosto<0) || (Margen<0))
           {
            alert("A ingresado uno de los valores como un numero negativo");
           } 
           else
           {
               let resultado1 = precioDeVenta(precioDeCosto,Margen).toFixed(2);
               alert(resultado1); 
           }
           
           break;
        }
    case 14:
        {
         /* Ejemplo Invocación Ejercicio Nro. 14 */
           let nota1=Number(prompt("Ingrese la nota numero 1"));
           let nota2=Number(prompt("Ingrese la nota numero 2"));
           let nota3=Number(prompt("Ingrese la nota numero 1"));
            if ((0<nota1)&&(nota1<=10) && (0<nota2)&&(nota2<=10) && (0<nota3)&&(nota3<=10))
           {
            let resultado2 = promedioDeTres(nota1,nota2,nota3).toFixed(2);
            alert(resultado2);
           } 
           else
           {
               alert("Ud ha ingresado una de las notas con un valor incorrecto que no se encuentra entre 0 y 10 "); 
           }
         
          break;
        }
    case 15:
        {
         /*Ejemplo invocacion Ejercicio N° 15*/
         let notaAlumno=Number(prompt("Ingrese el valor de la nota. Recuerde ingresar un valor entre 0 y 10."));
         let notaMensaje= mensajeNota(notaAlumno);
         alert(notaMensaje);
         break;
        }   
    case 16:
        {
         /*Ejemplo invocacion Ejercicio N° 16*/
         let tipoDeBebida=Number(prompt("Ingrese el tipo de bebida. Recuerde ingresar un valor entre 1 y 6."));
         let importeBase=Number(prompt("Ingrese el importe sobre el cual se calculara la tasa"));
        if((1<=tipoDeBebida) && (tipoDeBebida<=6))
         { 
           if (Math.sign(importeBase) >= 0)
           {
           let sobreTasa= funcionSobreTasa(tipoDeBebida,importeBase );
           alert(sobreTasa);
           } 
           else 
           {
            alert("el importe ingresado es negativo");
           }
         }
         else
         {
              alert("El tipo de bebida es incorrecto.");
         }
         break;
        }     
     case 17:
        {
         /*Ejemplo invocacion Ejercicio N° 17*/
         let metrosCubicos=Number(prompt("Ingrese los metros cubicos leidos"));
         let importeFinal= importeAgua(metrosCubicos);
         if (importeFinal !==0)
         {
           let importeConDosDecimales = importeFinal.toFixed(2);
           alert(importeConDosDecimales);
         }
         else
         {
          alert("los metros cubicos ingresados es incorrecto.");  
         }   
    
         break;
        }    
     case 18:
        {
         /*Ejemplo invocacion Ejercicio N° 18*/
         let importeBase=Number(prompt("Ingrese el importe Base"));
         if (importeBase>0)
         {
             let tasa= tasaSubsuelo(importeBase);
             alert(tasa.toFixed(2));
         }   
         else
         {
           alert("El importe base no es un valor correcto.");  
         }   
         break;
        }  
        
       case 19:
        {
         /*Ejemplo invocacion Ejercicio N° 19*/
         let importeBase=Number(prompt("Ingrese el importe Base"));
         if (importeBase>0)
         {
             let tasa= tasaFiscalizacion(importeBase);
             alert(tasa.toFixed(2));
         }   
         else
         {
           alert("El importe base no es un valor correcto.");  
         }   
         break;
        } 

        case 20:
        {
         /*Ejemplo invocacion Ejercicio N° 20*/
         let nivelDeGlucosa=Number(prompt("Ingrese el Nivel de Glucosa"));
         let pesoCorporal=Number(prompt("Ingrese el Peso Corporal"));
         let tipoDiabetes=Number(prompt("Ingrese el Tipo de Diabetes"));
         if ((tipoDiabetes===1)||(tipoDiabetes===2))
         {
             if (pesoCorporal>0)
             {
                if (nivelDeGlucosa>0)
                {
                 let dosisDeInsulina=dosisInsulina(tipoDiabetes,pesoCorporal,nivelDeGlucosa);   
                 alert(dosisDeInsulina.toFixed(2));
                }
                else
                {
                    alert("Ingrese un valor valido de nivel de glucosa.");  
                }    
             }
             else
             {
               alert("Ingrese un valor valido del peso corporal.");   
             }
         }   
         else
         {
           alert("El tipo de Diabetes no es correcto.");  
         }   
         break;
        }  
        
        case 21:
        {
         /*Ejemplo invocacion Ejercicio N° 21*/
         let cadenaDeTexto=prompt("Ingrese la cadena de texto a analizar");
         let cantidadVocales= cantidadDeVocales(cadenaDeTexto);
         alert(cantidadVocales);
         break;
        }  
         case 22:
        {
         /*Ejemplo invocacion Ejercicio N° 22*/
         let cadenaDeTexto=prompt("Ingrese la cadena de texto a analizar");
         let cantidadConsonantes= cantidadDeConsonantes(cadenaDeTexto);
         alert(cantidadConsonantes);
         break;
        } 
        case 23:
        {
         /*Ejemplo invocacion Ejercicio N° 23*/
         let cadenaTexto=prompt("Ingrese la palabra de texto a analizar");
         let esUnaFrase=0;
         for (let i=0; i<cadenaTexto.length;i=i+1)
         {
             if (cadenaTexto.charAt(i)===' ' )
            {
             esUnaFrase=1;
             break;
            }
         }     
         if (esUnaFrase===0)
         {
            let cantidadS= cantidadDeS(cadenaTexto);
            
            if (cantidadS)
            {
                alert("La palabra contiene al menos 2 s."); 
            
            }
            else
            {
              alert("La palabra no contiene mas de 1 s.");
            }

         }
         else
         {
             alert("Debe ingresar una palabra no una frase.");
         }
         
         break;
        } 
         case 24:
        {
         /*Ejemplo invocacion Ejercicio N° 24*/
         let cadenaTexto=prompt("Ingrese la cadena de texto a analizar");
         let  Espacios= EspaciosBlancos(cadenaTexto);
            
            if (Espacios)
            {
              alert("La cadena de texto contiene al menos 3 espacios blancos."); 
            
            }
            else
            {
              alert("La cadena de texto no contiene mas de 2 Espacios Blancos.");
            }
         
         break;
        } 
         case 25:
        {
         /*Ejemplo invocacion Ejercicio N° 25*/
         let cadenaTexto=prompt("Ingrese la cadena de texto a analizar");
         let  hayNumeros= contieneNumeros(cadenaTexto);
            
            if (hayNumeros)
            {
                alert("La cadena de texto no contiene numeros."); 
            
            }
            else
            {
              alert("La cadena de texto contiene numeros.");
            }
         
         break;
        } 
        default:
          {
            alert("Ud a ingresado un numero de ejerccio que no corresponde al presente practico");
          }
}

    
   

    







}