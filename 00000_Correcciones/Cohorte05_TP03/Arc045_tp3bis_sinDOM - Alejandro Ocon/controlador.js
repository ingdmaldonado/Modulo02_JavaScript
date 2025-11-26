
import {fnPrecioVenta, fnPromedioNotas, fnCondicionSegunNotas, versionModulo, fnImpuestoBebidas, fncalcularImporteAgua, fnAguasCatamarca, fnEnre, fnInsulina, fnContadorVocales,fnContadorDeLetraEse, fnContadorEspaciosEnBlanco, fnBuscadorDeNumeros } from "./modulo.js";

{
    
//EJERCICIO 13
//Creo las variables que van a servir para la 
{ 
    let importeCompra = 0;
    let margenDeGanancia = 0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`));
    margenDeGanancia = Number(prompt(`Ingrese el margen de ganacia en porcentaje (10; 20; 45;....)`));

//Invoco la funcion que toma los valores ingresados por el prompt
    let precioVenta = fnPrecioVenta(importeCompra, margenDeGanancia);

    console.log(`EL importe ingresado es $${importeCompra}, el margen de ganancia es ${margenDeGanancia}% el precio de venta es $${precioVenta}`)
}
//EJERCICIO 14
{
    let calificacion1 = 0;
    let calificacion2= 0;
    let calificacion3 = 0; 

    calificacion1 = Number(prompt("Ingrese la primer nota"));
    calificacion2 = Number (prompt("ingrese la segunda nota"));
    calificacion3= Number (prompt("ingrese la tercer nota"));

    let promedio= fnPromedioNotas(calificacion1, calificacion2, calificacion3);
    console.log(`El promedio de la calificaciones es ${promedio}`);
}
//EJERCICIO 15
{
    let calificacion = 0;

    calificacion = Number(prompt("Ingrese un numero"));
    console.log(calificacion);

    let resultadoTp = fnCondicionSegunNotas(calificacion);
    console.log(resultadoTp)

}


//EJERCICIO 16
{
    let deseaContinuar = "S";

    let precioBaseBebida = 0;
    let tipoBebida = 0;
    let acumulador = 0;
    let cantidad = 0;

    while (deseaContinuar.toUpperCase ()=== "S")
        {
            tipoBebida = Number(prompt("Ingrese el tipo de bebida. 1=Agua en envases plásticos. 2=Agua en envases retornables. 3=Gaseosas Azucaradas en envases plásticos. 4=Azucaradas en envases retornables. 5=Bebidas Energéticas. 6= Otras"));
            precioBaseBebida = Number(prompt("Ingrese el precio de la bebida"));

            let resultado = fnImpuestoBebidas (precioBaseBebida, tipoBebida);//variable que invoca a la función

            acumulador  = resultado + acumulador//aca se acumula el la salida de la función
            cantidad = cantidad + 1;
        
            deseaContinuar= prompt ("Desea continuar s/n?")
            
        }
        console.log (`Se cargaron ${cantidad} de productos y se recaudo un total de  $${acumulador}`);

}

    

    

//EJERCICIO 17
{
    let ingresoLectura =0;
        
        ingresoLectura = Number(prompt("Ingrese el consumo de agua medido"));
            if (ingresoLectura<0)
            {
                let validacion = console.log ("INGRESE UN VALOR VÁLIDO")
            }
            else
            {    
                let valorDeFacturacion = fncalcularImporteAgua (ingresoLectura);
                
                console.log (`Se ingreso la lectura de ${ingresoLectura} y se debe abonar ${valorDeFacturacion.toFixed(2)}`);
            }

}


    //EJERCICIO 18

{
        let importeBaseFactura = Number (prompt(`Ingrese el importe de la factura de agua`));

        if(importeBaseFactura<= 0)
        {
            console.log(`INGRESE UN VALOR MAYOR A CER0`)
        }
        else
        {
            let tasaSubuelo = fnAguasCatamarca(importeBaseFactura);
            let totalAPagar = importeBaseFactura + tasaSubuelo;
            console.log( `Se ingreso el valor de la factura ${importeBaseFactura} y se cobra la tasa de ${tasaSubuelo}. Se debe pagar el total de ${totalAPagar}`)
            
        }

        
}


 //EJERCICIO 19

{
    let importeBaseFactura = Number (prompt(`Ingrese el importe de la factura de agua`));

    if(importeBaseFactura<= 0)
    {
        console.log(`INGRESE UN VALOR MAYOR A CER0`)
    }
    else
    {
        let tasaFiscalizacion = fnEnre(importeBaseFactura);
        let totalAPagar = importeBaseFactura + tasaFiscalizacion;
        console.log( `Se ingreso el valor de la factura ${importeBaseFactura} y se cobra la tasa de ${tasaFiscalizacion}. Se debe pagar el total de ${totalAPagar}`)
        
    }

    
} 

//EJERCICIO 20

{
    let pesoPaciente = 0;
    let nivelGlucemia = 0;
    let tipoDiabete = 0;

    pesoPaciente = Number(prompt("Ingrese el peso del paciente"));
    nivelGlucemia = Number(prompt("Ingrese el nivel de glucemia"));
    tipoDiabete =Number(prompt("Ingrese el tipo de diabetes (1 ó 2"));

    let dosisRecomendada = 0;//Variable creada para capturar el return de la función
    dosisRecomendada = fnInsulina(nivelGlucemia, pesoPaciente, tipoDiabete);
    console.log (`Se ingreso un peso de ${pesoPaciente}kg, El nivel de Glucemia es ${nivelGlucemia} y un tipo de diabete ${tipoDiabete}, la dosis es ${dosisRecomendada}`)
}
    
//EJERCICIO 21

{

let textoIngresado = "";
textoIngresado = prompt("Ingrese una palabra")


let contadorDeVocales = fnContadorVocales(textoIngresado);
console.log(`La palabra ${textoIngresado} tienen ${contadorDeVocales} vocales`)


}
//EJERCICIO 22
{
    let textoIngresado = "";
    textoIngresado = prompt("Ingrese una palabra")


    let contadorDeVocales = fnContadorVocales(textoIngresado);
    console.log(`La palabra ${textoIngresado} tienen ${textoIngresado.length - contadorDeVocales} Consonantes`)
}

//EJERCICIO 23

{
    let textoIngresado = "";
    textoIngresado = prompt("Ingrese una palabra");
    let contadorEse = fnContadorDeLetraEse(textoIngresado);

    console.log(`${contadorEse}`);

}

//EJERCICIO 24

{
    let textoIngresado = "";

    textoIngresado = prompt("Ingrese un texto");

    let contadorEspacios = fnContadorEspaciosEnBlanco(textoIngresado);

    console.log (`La frase "${textoIngresado}" is ${contadorEspacios} `);
}

//EJERCICIO 25

{
    let textoIngresado = "";

    textoIngresado = prompt("Ingrese un texto");

    let contadorNumero = fnBuscadorDeNumeros(textoIngresado);
    let respuesta = "";
    
    if (contadorNumero===true)
        {
            respuesta =  "no tiene un numero"
        }
    else
        {
            respuesta = "Tiene un numero"
        }

    console.log (`La frase "${textoIngresado}" es ${contadorNumero} porque ${respuesta}`);
}

}//NO BORRAR