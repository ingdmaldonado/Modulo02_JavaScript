
window.onload = function()
{
    console.log("aplicación renderizada");

    const idBtnMostrarLasCookies = document.querySelector("#idBtnMostrarLasCookies");

    const idBtnCrearUnaCookie = document.querySelector("#idBtnCrearUnaCookie");

    const idNombreCookie = document.querySelector("#idNombreCookie");
    const idValorCookie = document.querySelector("#idValorCookie");


    const idBtnRecorrerLasCookies = document.querySelector("#idBtnRecorrerLasCookies");


    idBtnMostrarLasCookies.addEventListener("click",()=>{

        console.log("mostrando la cookie");
        console.log(document.cookie);
    })

    idBtnCrearUnaCookie.addEventListener("click",()=>
        {
        
            let NombreCookie = idNombreCookie.value;
            let ValorCookie = idValorCookie.value;

            if(NombreCookie !='')
                {
                    if(ValorCookie !='')
                    {
                    
                        let cookieParaRegistrar = `${NombreCookie} = ${ValorCookie}`;

                        /* parametros de entrada de la funcion fnRegistrarCookie
                            booleanRegistraCookie,nombreCookie,valorCookie,numberDiasValidez,booleanAccesibleEnTodoElDominio,nombreDominio,booleanSoloConexionesSeguras,booleanSoloHTTP,booleanSeguridadOrigenCruzado
                        */

                        fnRegistrarCookie(true,NombreCookie,ValorCookie,1/24,true,"",false,false,false);

                        alert("cokie registrada !!!");

                    }
                    else
                    {
                        alert("por favor indique el valor que tendrá la cookie");
                    }
                }
            else
            {
                alert("por favor indique el nombre que tendrá la cookie");
            }

    })

    idBtnRecorrerLasCookies.addEventListener("click",()=>{
        
    
        /* (1ro) Obtengo de la propiedad cookie del documento todos los pares clave valor que se establecieron */
        const StringCompleto = document.cookie;

        /* (2do) Los muestro por consola */
        console.log(StringCompleto);

        /* (3ro) Voy a separar todos esos "pares de clave=valor" que se guardaron en un solo String */
        const CookiesSeparadas = StringCompleto.split(";");
        console.log("Todos los Clave Valor Separados:= ",CookiesSeparadas);

        /* (4to) Voy a recorrer ese Vector de "SubCadenas" que tienen el formato "clave=valor" */
        CookiesSeparadas.forEach((element)=>
            {
                /* aqui se estaría mostrando el par clave=valor que registré en la cookie todo junto*/
                console.log("elemento: ",element);

                /* aquí los estoy separando, el nombre de la cookie por un lado, el valor de la cookie por otro*/
                const ClaveValor = element.split("=");
                console.log("ClaveValor",ClaveValor);

                const NombreClave = ClaveValor[0];
                const ValorClave = ClaveValor[1];

                console.log("Nombre de la cookie:= ",NombreClave);
                console.log("Valor de la Cookie:= ",ValorClave);
           
            })

    })

}

/*********************************************************************************/
/******************  FUNCIONES PARA COOKIES                   ********************/
/*********************************************************************************/

const fnRegistrarCookie = (booleanRegistraCookie,nombreCookie,valorCookie,numberDiasValidez,booleanAccesibleEnTodoElDominio,nombreDominio,booleanSoloConexionesSeguras,booleanSoloHTTP,booleanSeguridadOrigenCruzado)=>
    {

        /*  
            Explicación de los Atributos
            clave=valor: ejemplo usuario = dmaradona;
            path=/: La cookie es accesible en todo el dominio.
            expires=Fri, 31 Dec 2024 12:00:00 UTC: La cookie expira el 31 de diciembre de 2024.
            domain=example.com: La cookie es accesible en el dominio example.com y sus subdominios.
            Secure: La cookie solo se envía a través de conexiones seguras (HTTPS).
            HttpOnly: La cookie no es accesible a través de JavaScript (solo desde el servidor).
            SameSite=Strict: La cookie no se envía en solicitudes de origen cruzado, ayudando a prevenir 
        */


        let CadenaCookie = `${nombreCookie}=${valorCookie}${CookieTiempoDeExpiracion(numberDiasValidez)}${CookieAccesibleTodoDominio(booleanAccesibleEnTodoElDominio)}${CookieDominioValido(nombreDominio)}${CookieParaConexionesSeguras(booleanSoloConexionesSeguras)}${CookieSoloHTTP(booleanSoloHTTP)}${CookieConSameSite(booleanSeguridadOrigenCruzado)}`;

        if(booleanRegistraCookie)
        {
            document.cookie = CadenaCookie;
        }
        console.log(CadenaCookie);
    }


    /* Esta función devolvera el tiempo de expiración de la cookie en horas */
    const CookieTiempoDeExpiracion = (numberDias)=>
        {

            if(numberDias > 0)
            {
                // Calcula la duración en segundos
                const duracionEnSegundos = numberDias * 24 * 3600;
                // Retorna la cadena max-age con el valor calculado
                return `;max-age=${duracionEnSegundos}`;
            }
            return '';         
        }



    /*  Esta función devolverá en caso de aceptar la ruta válida para la cookie 
        Ruta válida para la cookie.
        path=/: La cookie es accesible en todo el dominio.
    */

    const CookieAccesibleTodoDominio = (booleanAcepta)=>
        {
            if(booleanAcepta)
            {
                return  ";path=/";
            }
            return "";
        }

    /* Esta función devolverá en caso pasarle como parametro un dominio, ejemplo
    infobae.com, clarin.com la palabra domain=infobae.com 
    domain=example.com: La cookie es accesible en el dominio example.com y sus subdominios.
    */

    const CookieDominioValido = (NombreDominio)=>
    {

        console.log(NombreDominio);
        console.log(NombreDominio.length);

        if(NombreDominio.length !=0)
        {
            return `;domain=${NombreDominio}`;
        }
        return "";
    }

    /* Esta función en caso de pasarle como parametro true devolverá la palabra
    secure
    Secure: La cookie solo se envía a través de conexiones seguras (HTTPS).
    */

    const CookieParaConexionesSeguras = (booleanAcepta)=>
        {
            if(booleanAcepta)
                {
                    return  ";Secure";
                }
                return "";
        }

    /* Esta función en caso de pasarle como parametro true devolvera la palabra
    HttpOnly: La cookie no es accesible a través de JavaScript (solo desde el servidor).*/

    const CookieSoloHTTP = (booleanAcepta)=>
    {
        if(booleanAcepta)
            {
                return  ";HttpOnly";
            }
            return "";
    }

    /* Esta función en caso de pasarle como parametro true devolverá la palabra 
    "SameSite=Strict"; La cookie no se envía en solicitudes de origen cruzado, ayudando a prevenir 
    */

    const CookieConSameSite = (booleanAcepta)=>
        {
            if(booleanAcepta)
                {
                    return  ";SameSite=Strict";
                }
                return "";
        }