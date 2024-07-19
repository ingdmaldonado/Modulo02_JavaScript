

/* Este es el ejemplo de una función de orden superior,
es decir una función que recibe como parametro otras
funciones y las ejecuta en su cuerpo */

const fn_funcion1 = ()=>
    {
        console.log(`Soy la funcion 1`);
    }

const fn_funcion2 = ()=>
    {
        console.log(`Soy la funcion 2`);
    }

/* fnLlamadora es una función de orden superior */
function fnLlamadora (fun1,fun2)
{
    fun1();

    fun2();

}


/* EJEMPLO DE INVOCACIÓN DE FUNCIONES */
{

    fnLlamadora(fn_funcion1,fn_funcion2)
    {

    }

    /* una función anónima, como su nombre lo indica, es una función
    que no tiene nombre, que se declara y se pasa generalmente como 
    parametro de otra función. que pueda declararse y utilizarse
    al mismo momento es una enorme ventaja, de organización, 
    de claridad en el código y de flexibilidad */

    fnLlamadora(()=>{

        console.log("soy el ejemplo de una función anonima 1");

    },
    ()=>{

        console.log("soy el ejemplo de una función anonima 2");
    });


}