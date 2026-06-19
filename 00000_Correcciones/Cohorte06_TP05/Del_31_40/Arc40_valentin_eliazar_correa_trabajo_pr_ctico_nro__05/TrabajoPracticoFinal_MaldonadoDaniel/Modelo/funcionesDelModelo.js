//              = ()=>{};
/*
El objeto de esta funcion es conectarme a un endPoint de una API
API => Conjunto de todos los endPoint que expone una empreza, organizacion, etc 
*/


    const fnrequestAPI = async (URL) =>{

        let request = "";
        let datos = "";

        try {
            request = await fetch(URL);

            if (!request.ok)
            {
                throw new Error ("Se produjo un error")
            }
            datos = await request.json();

            return datos;


        } catch (error) {
            throw new Error(`Errror en Api.js Se produjo un error${error.messege}`);
        }
    }

    const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
    const URLBrazil = `http://universities.hipolabs.com/search?country=Brazil`;

    export const fnRecuperarUniversidades  = async (pais)=>{

        let datos ="";

        switch(pais)
        {
            case 1:
            {
                datos = await fnrequestAPI(URLArgentina);
                break;
            }

            case 2:
            {
                datos = await fnrequestAPI(URLBrazil);
                break;
            }
            default:
        }
        return datos;

    };

    export const fnRecuperarUniversidadesCombinadas = async()=>{

    const universidadesArgentina = await fnrequestAPI(URLArgentina);
    const universidadesBrasil = await fnrequestAPI(URLBrazil);

    const universidadesCombinadas = [...universidadesArgentina,...universidadesBrasil];

    return universidadesCombinadas;

    }

    // disculpe si no cumple las espectativas, me veo superado en ciertas cosas