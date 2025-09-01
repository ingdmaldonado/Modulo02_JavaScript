
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

*/

export const fnCalcularImporteTotal = (base,tipo)=>
    {
        let alicuota = 0;

        /* switch => variables discretas */

        switch(tipo)
        {
            case 1: /* productos en general */
                {
                    alicuota = 21;
                    break;
                }
            case 2: /* servicios publicos */
                {
                    alicuota = 27;
                    break;
                }
            case 3: /* productos de tecnologia */
                {
                    alicuota = 10.5;
                    break;
                }
            case 4: /* productos agricolas */
                {
                    alicuota = 5;
                    break;
                }
            case 5: /* exentos */
                {
                    alicuota = 0;
                    break;
                }
            default: /* default */
                {
                    alicuota = 0;
                    break;
                }
        }

        // aqui calculo el IVA = IMPUESTO AL VALOR AGREGADO //
        let IVA = (base * alicuota)/100;

        // calculo el total a pagar base + IVA //
        let total = base + IVA;

        // return del importe total //
        return total;
    }

export const versionSistema = "V1.10072025";