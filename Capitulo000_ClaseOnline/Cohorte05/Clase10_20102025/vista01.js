/* 
4) CÁLCULO DEL IVA

Realizar una aplicación que permita calcular a partir de un importe base el impuesto IVA correspondiente según las siguientes especificaciones. A partir del importe base y del tipo de artículo a facturar será su impuesto correspondiente según el siguiente esquema.
Tipo 1: 21%: Es el alícuota general aplicable a la mayoría de los bienes y servicios.
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

/* MOMENTO1 => definiendo la función 

    lo que va dentro de los (parametros ...)

*/

function calcularIVA (importeBase,tipoProducto)
{
    let impuestoIVA = 0;

    switch(tipoProducto)
    {
        case 1: // alicuota general 21%
            {
                impuestoIVA = (importeBase * 21)/100;
                break;
            }

        case 2: // alicuota 27% servicios publicos
            {
                impuestoIVA = (importeBase * 27)/100;
                break;
            }

        case 3: // alicuota 10.5% productos tecnológicos.
            {
                impuestoIVA = (importeBase * 10.5)/100;
                break;
            }

        case 4: // alicuota del 5% - productos agricolas
            {
                impuestoIVA = (importeBase * 5)/100;
                break;
                
            }

        case 5: // exentos
            {
                impuestoIVA = 0
                break;

            }

        default:
            {
                impuestoIVA = 0
                break;
            }
    }

    return impuestoIVA;

}


{
    // programa principal //

    console.log(`aplicación corriendo`);

    /* MOMENTO 2 => hago la INVOCACIÓN DE LA FUNCIÓN */

    console.log(calcularIVA(10000,1));

    console.log(calcularIVA(10000,2));

    /* OTRAS FORMAS DE INVOCARLA 1 */

    let resultado1 = calcularIVA(145000,2);

    console.log(resultado1);

    /* OTRAS FORMAS DE INVOCARLA 2 */

    let importeBASEEE = 275000;

    let tipoDeProductooo = 3;

    let resultado3 = calcularIVA(importeBASEEE,tipoDeProductooo);

    console.log(resultado3);


    /* - VARANTE FEDE - */

    let continua = "SI";

    let imporBASE = 0;
    let tipoPRODUCTO = 0;
    let resultadoIVA = 0;

    while(continua ==='SI')
    {
        imporBASE = Number(prompt(`Sr. Indique el Importe Base`));
        tipoPRODUCTO = Number(prompt(`Sr. Indique el Tipo de Producto (1,2,3,4,5)`));

        resultadoIVA = calcularIVA(imporBASE,tipoPRODUCTO);

        console.log(`Base: ${imporBASE} y tipo ${tipoPRODUCTO} el IVA es ${resultadoIVA}`);

        continua = prompt("Sr. Desea continuar (SI/NO) ? ");
    }


}