
/* spread operator */

const Vector1 = 
    [
        {
            apellido:"MALDONADO",
            nombres:"ENRIQUE DANIEL",
            club:"CABJ"
        },
        {
            apellido:"ENZO",
            nombres:"RAMOS",
            club:"CARP"
        }
    ]


    
const Vector2 = 
[
    {
        apellido:"NATALIA",
        nombres:"RODRIGUEZ",
        club:"CABJ",
        domicilio:"AV. ALEM 8882"
    },
    {
        apellido:"MARIA",
        nombres:"CARDOSO",
        club:"CABC",
        sitioWeb:"www.mariasoydeboca.com"
    }
]

    const fnValidarDato = (datoDeEntrada)=>
        {
            if(datoDeEntrada.length > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }


    /* rest operator => operador de agrupacion o resto */
    const fnValidarDatosDeEntrada = (...datos)=>
        {
            datos.forEach((element,indice)=>
                {
                    if(element.length > 0)
                    {
                        console.log(element,true);
                    }
                    else
                    {
                        console.log(element,false);
                    }
                })

        }


window.addEventListener("load",()=>
    {

        /* LA UNICA FORMA DE UNIR
        DOS VECTORES es con Spread Operator.

        unir vectores, unir objetos y atributos */

        console.log(Vector1);
        console.log(Vector2);

        // spread operator con vectores //
        const vector3 = [...Vector1,...Vector2];

        // esto no va //
        const Vector3 = Vector2;
        console.log(vector3);

        // spread operator con objetos //

        let objeto1 = 
        {
            cuit:"232401039",
            nombres:"MALDONADO ENRIQUE DANIEL"
        }

        let objeto2 = 
        {
            cuit:"232401039",
            condicionFiscal:"MONOTRIBUTISTA",
            actividadPrincipal:"DESARROLLO DE SOFTWARE",
            comidasQueMeDebenMisAlumnosDelNodo:["ASADO","EMPANADAS ARABES","PIZZAS CASERAS A LA PARRILLA"],
        }

        let objeto3 = {
            ...objeto1,
            ...objeto2,
        }

        console.log(objeto1);
        console.log(objeto2);
        console.log(objeto3);
       
        /* 
            Destructuring => es descomponer
            un objeto o vector en partes mas
            pequeñas y legibles.  
        */

        const {cuit,condicionFiscal,actividadPrincipal} = objeto2;

        console.log(objeto2);
        console.log(cuit);
        console.log(condicionFiscal);
        console.log(actividadPrincipal);

        /*
            JSON => JavaScript Objet Notation

            html5
            css
            javaScript
        */

        let objetoConvertidoAJSON = JSON.stringify(objeto2);

        console.log(objeto2);
        console.log(objetoConvertidoAJSON);

        let deJSONaObjeto = JSON.parse(objetoConvertidoAJSON);

        console.log(deJSONaObjeto);


        /* objeto a JSON => JSON.stringfy

            JSON a objeto => JSON.parse
            */

        /* spread operator */

        /* rest operator */

        console.log(fnValidarDato(""));

        console.log(fnValidarDato("DANIEL"));

        let nombre = "DANIEL";
        let apellido = "MALDONADO";
        let domicilio = "BARRIO PARQUE LA GRUTA"

        console.log(fnValidarDato(nombre));
        console.log(fnValidarDato(apellido));
        console.log(fnValidarDato(domicilio));

        console.log("---------------------");

        fnValidarDatosDeEntrada(nombre,apellido,domicilio,"CUATRO","SOY DE BOCA","","        ");


        



    })