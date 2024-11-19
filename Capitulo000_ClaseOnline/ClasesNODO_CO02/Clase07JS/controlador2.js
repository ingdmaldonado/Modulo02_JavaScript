
/*

Realizar una función que reciba como parámetro de entrada el
importe de una factura, el tipo de artículo que se 
está facturando y devuelva el importe 
de la misma con el IVA incluido sabiendo que:

Tipo 1: 21%: Es la alícuota general aplicable a 
la mayoría de los bienes y servicios.

Tipo 2: 27%: Se aplica a ciertos servicios públicos 
como energía eléctrica y gas natural

Tipo 3: 10.5%: Se aplica a bienes y servicios específicos
	incluyendo:
		Venta de ciertos alimentos básicos (frutas, verduras, carnes, etc.).
		Prestación de servicios médicos y paramédicos.
		Obras de construcción de viviendas sociales.
		Venta de ciertos medicamentos.
		Productos tecnológicos.

Tipo 4: 5%: Aplica a ciertos productos 
agrícolas y ganaderos, como frutas, 
hortalizas y carnes en algunos casos específicos.

Tipo 5: 0% Exentos

*/

function devolverImporteConIVAIncluido(tipoProducto,importeBase,anioVigencia)
{
    console.log(`Tipo Producto: ${tipoProducto} Importe Base: ${importeBase}`);

    let importeConIVA = 0;

    if(tipoProducto === 1)// alicuota general al 21%
    {
        if(anioVigencia >= 2024)
        {
            importeConIVA = (importeBase* 21/100) + importeBase;
        }
        else
        {
            importeConIVA = (importeBase* 18.5/100) + importeBase;
        }
    }
    if(tipoProducto === 2)// alicuota 27% servicios. energía y gas natural
    {
        importeConIVA = (importeBase* 27/100) + importeBase;
    }
    if(tipoProducto === 3)// alicuota 10.5%, tecnología
    {
        importeConIVA = (importeBase* 10.5/100) + importeBase;
    }
    if(tipoProducto === 4)// 5% - Agrilas y Ganadería
    {
        importeConIVA = (importeBase* 5/100) + importeBase;
    }
    if(tipoProducto === 5) // 5% Exentos. 
    {
        importeConIVA =   importeBase;
    }

    return importeConIVA;

}


/* programa principal */
{
    console.log("andando");

    let resultado1 = devolverImporteConIVAIncluido(1,10000,2023);
    console.log(resultado1);

    let resultado1X = devolverImporteConIVAIncluido(1,10000,2024);
    console.log(resultado1X);

    /* */

    let resultado2 = devolverImporteConIVAIncluido(2,10000);
    console.log(resultado2);

    let resultado3 = devolverImporteConIVAIncluido(3,10000);
    console.log(resultado3);

    let resultado4 = devolverImporteConIVAIncluido(4,10000);
    console.log(resultado4);

    let resultado5 = devolverImporteConIVAIncluido(5,10000);
    console.log(resultado5);
}