

/**************************************************************/
/*** CLASE SUMA DE DOS NUMEROS  *******************************/
/**************************************************************/

/* con la palabra reservada class le indicamos
que vamos a construir una clase y luego el
nombre de la clase */

class SumaDeDos
{
    // los atributos de la clase 
    Numero1 = 0; 
    Numero2 = 0;
    Resultado = 0; // un atributo de la clase 

    /* metodo constructor de la clase permite
    inicializar los atributos de la clase */
    constructor(p1,p2)
    {
        this.Numero1 = p1;
        this.Numero2 = p2;
        this.Sumar();
    }

    /* Getters y Setters */

    // método que me permitirá retornar el Numero1 //
    getNumero1()
    {
        return this.Numero1;
    }

    // método que me permitirá retornar el Numero2 //
    getNumero2()
    {
        return this.Numero2;
    }

    // método que me permitirá modificar el Numero1 //
    setNumero1(parametro)
    {
        this.Numero1 = parametro; // actualizo el atributo y por ende actualizo el resultado */
        this.Sumar(); // al cambiar el valor 
    }

    // método que me permitirá modificar el Numero2 //
    setNumero2(parametro)
    {
        this.Numero2 = parametro; // actualizo el atributo y por ende tengo que actualizar el resultado */
        this.Sumar();
    }

    Sumar()
    {
        this.Resultado = this.Numero1 + this.Numero2;
    }

    getResultado()
    {
        this.Sumar();
        return this.Resultado;
    }
}

/***************************************************************/
/*** CLASE SUMA DE TRES NUMEROS  *******************************/
/***************************************************************/

/* defino una clase y le digo que herede todos los atributos
y métodos de la clase SumaDeDos */

class SumaDeTres extends SumaDeDos
{
    Numero3 = 0;

    /* creo el constructor de la clase SumaDeTres */
    constructor(p1,p2,p3)
    {
        super(p1,p2);// invoco al constructor de la clase nativa
        this.Numero3 = p3; // registro el parametro 3
        this.Sumar(); // invoco al método suma para actualizar el resultado
    }

    // método que permite obtener el Numero3
    getNumero3()
    {
        return this.Numero3;
    }

    //método que permite actualizar el atributo Numero3 //
    setNumero3(parametro)
    {
        this.Numero3 = parametro;
    }

    // sobrescribí el método suma de la clase nativa
    Sumar()
    {
        this.Resultado = this.Numero1 + this.Numero2 + this.Numero3;
    }

    // sobrescribí el método suma de la clase nativa 
    getResultado()
    {
        this.Sumar();
        return this.Resultado;
    }

}

/*******************************************************************************/
/* Esto ocurriría en el PROGRAMA PRINCIPAL                                     */
/*******************************************************************************/

window.onload = function()
{

    // creamos = instanciamos un objeto a partir de la clase SumaDeDos //

    let objeto1 = new SumaDeDos(10,20);
    console.log(objeto1.getResultado());

    let objeto2 = new SumaDeDos(22,34);
    console.log(objeto2.getResultado());

    objeto2.setNumero1(115);
    console.log(objeto2.getResultado());


    /* creamos = instanciamos un objeto a partir de la clase SumaDeTres */

    let objeto3 = new SumaDeTres(10,20,30);
    console.log(objeto3.getResultado());

    /* cambiamos los atributos del objeto3 */

    objeto3.setNumero1(25);
    objeto3.setNumero2(25);
    objeto3.setNumero3(25);

    console.log(objeto3.getResultado());

    
}



/*********************************************************************************************************/
/*** CLASE DE EJEMPLO QUE TIENE ATRIBUTOS PÚBLICOS, PRIVADOS Y ESTATICOS   *******************************/
/*********************************************************************************************************/


class RegresionLineal
{
    /* este es un atributo estático. estará en la clase
    únicamente y no es necesario instanciar el objeto para
    acceder a su valor */

    static VersionClase = "Version Calculadora de Regresion Lineal";

    /* este es un atributo privado, eso significa que desde
    a fuera de la clase no puede ser accedido, únicamente por
    métodos de la misma clase */

    #AtributoResultado = 0;

    /* valores que se almacenaran en este atributo público para
    poder calcular la regresión lineal */

    valoresParaCalculoRegresion = [];

    /* el Constructor únicamente puede instanciar los valores
    privados y públicos. PERO NUNCA LOS ESTÁTICOS !!!. */

    constructor(p1,p2)
    {
        this.#AtributoResultado = 0;
        this.valoresParaCalculoRegresion = p2;
    }

    /* para acceder a una clase atributo estático
    se debe realizar a través de un método estático también*/

    static getVersionClase()
    {
        return Compleja.VersionClase;
    }

    // aquí continuaría el resto de la implementación //

}