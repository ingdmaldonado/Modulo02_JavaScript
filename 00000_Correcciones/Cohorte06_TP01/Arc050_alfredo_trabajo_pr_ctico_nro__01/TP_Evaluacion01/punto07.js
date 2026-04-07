/*Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: Catálogo de Productos Codigo Descripción x unidad (cantidad >= 5) y (cantidad <=10) Cantidad >= 11
1
Dogui x 21 kil.
$ 38.000,00
$ 36.000,00
$ 34.000,00
2
Tiernitos x 21 kil
$ 31.000,00
$ 29.000,00
$ 27.000,00
3
Dogpro x 21 kil
$ 46.000,00
$ 44.000,00
$ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar. */

{

let alimento=0;
let bolsas=0;

alimento=Number(prompt(`Elija el alimento que desea comprar: 1-Dogui x 21 kil., 2-Tiernitos x 21 kil, 3-Dogpro x 21 kil`));

bolsas=Number(prompt(`Ingrese la cantidad de bolsas deseadas.`));

let precio=0;


if (alimento===1) /*1-Dogui x 21 kil. */

    if(bolsas>=11)/*>=11  la bolsa costaria 34 mil */
    {
        precio=34000;
    }
    else if (bolsas >=5 && bolsas<=10) /* Aqui pongo alimento<=10 pero no es necesario ya que se sobre entiende que abarca el rango hasta el 10 */
    {
        precio=36000;
    }
    else{
        precio=38000;
    }

if (alimento===2) /*1-Tiernitos x 21 kil */

    if(bolsas>=11)/*>=11  la bolsa costaria  */
    {
        precio=27000;
    }
    else if (bolsas >=5 && bolsas<=10) /* Aqui pongo alimento<=10 pero no es necesario ya que se sobre entiende que abarca el rango hasta el 10 */
    {
        precio=29000;
    }
    else{
        precio=31000;
    }

if (alimento===3) /*1-Dogpro x 21 kil */

    if(bolsas>=11)/*>=11  la bolsa costaria  */
    {
        precio=42000;
    }
    else if (bolsas >=5 && bolsas<=10) /* Aqui pongo alimento<=10 pero no es necesario ya que se sobre entiende que abarca el rango hasta el 10 */
    {
        precio=44000;
    }
    else{
        precio=46000;
    }   


totalPagar=0;

totalPagar=bolsas*precio;


console.log(`Uste compro: ${bolsas} bolsas de alimento. El total a pagar es: $${totalPagar}`);




}