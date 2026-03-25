

/* 

Ejercicio propuesto Nro. 12:
Realizar una función que reciba como parámetro de entrada el importe de una factura, el tipo de artículo que se está facturando y devuelva el importe de la misma con el IVA incluido sabiendo que:
Tipo 1: 21%: Es la alícuota general aplicable a la mayoría de los bienes y servicios.
Tipo 2: 27%: Se aplica a ciertos servicios públicos como energía eléctrica y gas natural
Tipo 3: 10.5%: Se aplica a bienes y servicios específicos
	incluyendo:
		Venta de ciertos alimentos básicos (frutas, verduras, carnes, etc.).
		Prestación de servicios médicos y paramédicos.
		Obras de construcción de viviendas sociales.
		Venta de ciertos medicamentos.
		Productos tecnológicos.
Tipo 4: 5%: Aplica a ciertos productos agrícolas y ganaderos, como frutas, 
	hortalizas y carnes en algunos casos específicos.
Tipo 5: 0% Exentos

importe de una factura y devuelva su valor con el IVA incluido.
Nota: expresar las funciones de forma tradicional y como arrow functions


*/

/* Esta función recibe como parametro dos valores.
el primero 
    importeBase => Importe Base a Facturar
    tipoDeProducto => 1,2,3,4,5
*/

export function DevolverImporteFinal (importeBase,tipoDeProducto)
{
    let importeFinal = 0; // este es el importe final que voy a devolver
    switch(tipoDeProducto)
    {
        case 1: // 21%
            {
                importeFinal = importeBase + (importeBase * 21)/100;
                break;
            }
        case 2: // 27%
            {
                importeFinal = importeBase + (importeBase * 27)/100;
                break;
            }

        case 3:// 10.5
            {
                importeFinal = importeBase + (importeBase * 10.5)/100;
                break;
            }

        case 4: // 5%
            {
                importeFinal = importeBase + (importeBase * 5)/100;
                break;

            }

        case 5:
            {
                importeFinal = importeBase;
                break;
            }

        default:
            {
                importeFinal = importeBase;
                break;
            }
    }

    return (importeFinal);

}

/* 

Clasificación del IMC
La Organización Mundial de la Salud (OMS) clasifica el IMC en las siguientes categorías:

    IMC = Peso (kg) / (altura * altura) mts

Bajo peso: IMC menor de 18.5
Peso normal: IMC entre 18.5 y 24.9
Sobrepeso: IMC entre 25 y 29.9
Obesidad grado I: IMC entre 30 y 34.9
Obesidad grado II: IMC entre 35 y 39.9
Obesidad grado III (Obesidad mórbida): IMC de 40 o más
	La función debe recibir como parámetros la altura (en metros) y el peso (en kilogramos) y calcular el IMC, devolverlo y además mostrar los carteles de (bajo peso, peso normal, sobre peso, etc) según el cálculo.
Nota: expresar las funciones de forma tradicional y como arrow function.
*/

export function DevolverIMC (AlturaEnMetros,PesoEnKilogramos)
{
    if((AlturaEnMetros > 0)&&(PesoEnKilogramos >0))
    {
        let IMC = PesoEnKilogramos / (AlturaEnMetros * AlturaEnMetros);
        return IMC;
    }

    return -1;
}