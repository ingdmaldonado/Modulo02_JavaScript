

/*

--------------------------------------------------------------
1) EQUIPOS QUE SE ENCARGAN DE CONSTRUIR
LAS CLASES. 

2) PERSONAS QUE COMPRAN O ADQUIEREN ESAS CLASES PARA CONSTRUIR
SUS OBJETOS, APLICAN ESOS OBJETOS PARA RESOLVER TEMAS DE LA VIDA REAL.

3) HACEMOS UN ESQUEMA HIBRIDO. DONDE PROGRAMADORES
A PARTIR DE CLASES EXISTENTES, LAS MODIFICAN (HERENCIA)
Y CREAN A PARTIR 

---------------------------------------------------------------------

ESTRUCTURAS DE DATOS:

	- variables => let
	- constantes => const
	- vectores => vector = [];
	- objetos literales => {nombre:"daniel",domicilio:"nodo tecnologico catamarca"};
	- vectores de objetos literales
    - const vectorPersonas 

    
    - clases y los objetos.


*/


const vectorDePersonas = 
    [
        {
            codigo: 1,
            nombre:"JUAN PEREZ",
            hijos:["DANIEL","PEDRO","ANTONELLA ROMERO"]
        },
        {
            codigo: 2,
            nombre: "RODRIGUEZ ENZO RUPERTO",
            hijos:["ISABEL"]
        }
    ]


/* media aritmética */
class Promedio
{
    /* atributos de la clase */
    numero1;
    numero2;
    numero3;

    /* el constructor es una función ó metodo
    de la clase. que es miembro de la clase 
    y que permite inicializar los atributos
    de la clase  y si o si necesita la palabra this */

    constructor(p1,p2,p3)
    {
        this.numero1 = p1;
        this.numero2 = p2;
        this.numero3 = p3;

    }

    devolverPromedio()
    {
        return (this.numero1 + this.numero2 + this.numero3)/3;
    }

}



window.addEventListener("load",()=>
    {

        /* 
        
        
        */

        let objetoDePromedio = new Promedio(10,20,30);


        let objetoDePromedioDeKilos = new Promedio(12.45,13.20,14.12);
        console.log(objetoDePromedioDeKilos.devolverPromedio());

        let objetoDePromedioDeAltura = new Promedio(40,33,22);
        console.log(objetoDePromedioDeAltura.devolverPromedio());

        





        /* aqui estoy mostrando el vector de personas */
        console.log(vectorDePersonas);

        vectorDePersonas.forEach(padre => 
            {
                console.log("este es un padre: ",padre," y a continuación vienen sus hijos");// mostrando el elemento cabecera

                /* aqui estaria recorriendo los hijos */
                padre.hijos.forEach(hijoindividual => 
                    {
                        console.log("este es un hijo ",hijoindividual);
                    })

            })







        const idBtnGenerar = document.querySelector("#idBtnGenerar");
        const idCaja1 = document.querySelector("#idCaja1");

        console.log(idBtnGenerar);

        idBtnGenerar.addEventListener("click",()=>
            {

                for(let i = 1; i < 10; i++)
                {
                    let botonDinamico = document.createElement("input");

                    botonDinamico.type = "button";
                    botonDinamico.value = `Soy un boton ${i}`;

                    idCaja1.appendChild(botonDinamico);



                }


            })

    })