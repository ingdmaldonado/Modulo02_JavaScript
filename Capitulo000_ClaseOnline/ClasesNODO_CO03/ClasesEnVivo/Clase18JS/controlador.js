

/* TEMA 1: funciones CallBack */

const cuadrado = (numero)=>
    {
        return numero * numero;
    }

/* solamente cuando recibe un solo parametro 
puedo obviar o quitar los () de los parametros
cuando estoy definiendo la función.

si tiene una sola sentencia puedo obviar los {} del
cuerpo de la función

    podes quitar los ()
    podes quitar las {}
    podes quitar la palabra return 

*/

const cubo = numero => numero * numero * numero;

/* funciones CallBack o en castellano
podriamos decir funciones que reciben
como parametro otra función y la invocan a dentro */

    /* cuadrado => numero
        cubo =>  numero
    */

const fnLlamadora = (fn,numero)=>
{
    let resultado = fn(numero);
    return resultado;
}

window.addEventListener("load",()=>
    {
        console.log("andando");

        /* ejemplo de invocación de función */
        let resultadoCuadrado = cuadrado(5);
        console.log(resultadoCuadrado);

        let resultadoCubo = cubo(5);
        console.log(resultadoCubo);

        /* voy a mostrar como llamar o ejecutar
        una funcion llamadora */

        // aqui llamo a una función que ya estaba definida y se llamaba cuadrado
        let resultado1 = fnLlamadora(cuadrado,5);
        console.log(resultado1);

        // aqui llamo a una función cubo que ya estaba definida y se llamaba cubo
        let resultado2 = fnLlamadora(cubo,5);
        console.log(resultado2);

        // aqui hare la invocación de una función que todavía, no esta definida.

        let resultadoY = fnLlamadora((y)=>{ return 3*y + 1},2);
        console.log(resultadoY);

        let resultadoX = fnLlamadora((x)=>{return x * 2 + 6},6);
        console.log(resultadoX);

        /* que esta funcion recibira como parametro
        el sueldo de una persona y calculara el 11%
        de aportes jubilatorios */

        /* la arrow funcion
            no lleva ()
            no lleva {}
            no lleva el return 
        */

        let resultadoZ = fnLlamadora(sueldo => (sueldo * 11)/100,1000000)
        console.log(resultadoZ);

        /* los PROGRAMADORES DE JS, a partir del 2015
        en adelante. crearon un monton de funciones
        o metodos que se llaman callBack, para que
        nosotros, los PROGRAMADORES SIMPLES Y MORTALES
        los usemos. 

        */

        const vectorDeNotas = [7,8,10,10,9,2];

        console.log(vectorDeNotas.length);

        console.log(vectorDeNotas);

        /* Recorrido Tradicional - ciclo for 
        porque conozco con anticipación el largo
        del vector. la cantidad de elementos */

        /* Sirve, mientras no manipulo, elimino
        elementos del vector que implican
        un cambio en el largo del vector */

        for(let indice = 0; indice < vectorDeNotas.length;indice++)
        {
            // recorriendo elemento a elemento
            console.log("indice: ",indice);
            console.log("nota",vectorDeNotas[indice]);
        }

        /* for each => para cada elemento del vector
        hace algo, lo que vos quieras. perooooo

        eso que vos queres hacer, tiene que ser
        una función. 
        */


        vectorDeNotas.forEach((elemento,indice)=>
            {

                console.log(`El valor que esta en la posicion ${indice} es ${elemento}`);

            })

        /* a partir de ahora, en adelante
        vamos a usar funciones callBack
        que son provistas por el STANDARD DE JAVASCRIPT
        entonces, tenemos que comprender
        como es la creación e invocación de esas funciones
        MADRES => FUNCIONES DE NIVEL SUPERIOR 
        */

        /*
            definicion y concepto de funciones CallBack
            particularidades de las arrow function
            recorrido de vectores => for ó while
            recorrido de vectores con forEach => es una funcion callBack
        */

        const sueldosEnero = [455000,600000,700000,250000,380000];

        /* forma 1: con una arrow funcion completa.
        tiene ()
        tiene {}
        */

        sueldosEnero.forEach((elemento,indice)=>
            {
                // recorriendo los elementos del vector mostrando los sueldos
                console.log(elemento);
            })
        
        /* forma 2: con una arrow function resumida
        
        () => cuando es un solo parametro
        {} => cuando una sola instrucción en el cuerpo de la función

        */

        console.log("--------------");

        sueldosEnero.forEach(elemento=>console.log(elemento));

        console.log("--------------");

        sueldosEnero.forEach(sueldo => console.log(sueldo));

        console.log("--------------");

        sueldosEnero.forEach(sueldo => console.log(sueldo * 1.25));

        console.log("--------------");

        sueldosEnero.forEach(sueldo => console.log(sueldo * 1.20));

        /* es que existen funciones CallBack
        creadas por el STANDARD DE JAVASCRIPT
        y no son promesas. 
        son CallBack 
        
            forEach(recibe aqui una arro funcion(obligatorio,opcional))

        */

        
        let a = 200; // aqui creo una variable y le pongo un valor
        let b = a; // creo otra variable que sera igual ala primera

        console.log(a,b);

        b = 300;

        console.log(a,b);


        /* Es a partir de los sueldos de
        Enero me estoy creando un vector
        con los sueldos que tendran los
        empleados en febrero */


        const sueldoFebrero = sueldosEnero;

        console.log(sueldosEnero,sueldoFebrero);

        /* en febrero se agregaron dos empleados
        nuevos.  Carlos Eduardo. le vamos
        a poner 9000000 
  
            10000000 => Gabriel.
        */

        sueldoFebrero.push(9000000,10000000);

        console.log(sueldosEnero,sueldoFebrero);

        /* como hago para crear un vector
        a partir de otro, sin generar 
        esa especie de copia identica. 
        */

        /* Spread Operator => operador de propagación */

        const sueldoFebreroIndependiente = [...sueldosEnero];

        sueldoFebreroIndependiente.push(9000000);
        sueldoFebreroIndependiente.push(10000000);

        console.log("----------------");

        console.log(sueldosEnero,sueldoFebreroIndependiente);

        /*

        1 => funciones CallBack
        2 => repasamos las particularidades de las arrow function
            ()
            {}
            return 
        3 => recorrido clasico de vectores con ciclo for y while
            que si en el recorrido estoy agregando o quitando
            elementos del vector.

            el largo del vector estaría cambiando durante el recorrido.

        4 => el STANDARD DE JAVASCRIPT 
            me provee de metodos y funciones que son CallBack => nativas.

                forEach => recorrido
                map => transformación
                reduce => totalizar valores
                filter => filtrar datos
                find => encontrar datos

                por deducción el resto de los metodos

        */

    })