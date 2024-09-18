

    class OperacionesBasicas
    {
        /* atributos de la clase, les anteponga la palabra let */

        numero1 = 0;
        numero2 = 0;

        /* no fue necesario que anteponga la palabra function
        ni tampoco expresarla como una arrow function */

        constructor(p1,p2)
        {
            this.numero1 = p1;
            this.numero2 = p2;
        }

        mostrarDatos()
        {
            console.log(this.numero1);
            console.log(this.numero2);
        }

        getSuma()
        {
            return (this.numero1 + this.numero2) * 1.10;
        }

        getResta()
        {
            return this.numero1 - this.numero2;
        }

        getMultiplicacion()
        {
            return this.numero1 * this.numero2;
        }
    }



window.addEventListener("load",()=>
    {
        console.log("aplicación corriendo");

        /* voy a mostrar ahora desde el programa principal
        como nace un objeto de esa clase */

        /* el nacimiento de los objetos los llamamos instanciación */


        /* aqui la instanciamos y nacio el objeto1 */
        let objeto1 = new OperacionesBasicas(10,20);
        objeto1.mostrarDatos();

        let suma1 = objeto1.getSuma();
        console.log(suma1);

        let resta1 = objeto1.getResta();
        console.log(resta1);

        /* aqui la instanciamos y nació el objeto 2 */
        let objeto2 = new OperacionesBasicas(20,50);
      

        let suma2 = objeto2.getSuma();
        let resta2 = objeto2.getResta();

        console.log(suma2);


        /* CLASES ME PERMITEN 
        
            - Encapsular logica compleja en un bloque de codigos, una clase

            - Englobar metodos que son especificos de la problematica
            que estamos manejando.



        */





    })