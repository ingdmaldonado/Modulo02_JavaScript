import { fnrequestAPI } from "../api.js";

export const fnRecuperarUniversidades = async (pais) => {

    const URLAmericas = "https://restcountries.com/v3.1/region/americas";
    const URLEurope = "https://restcountries.com/v3.1/region/europe";

    switch (pais) {

        case 1:
            {
                const datos = await fnrequestAPI(URLAmericas);
                return datos;
            }
        case 2:
            {
                const datos = await fnrequestAPI(URLEurope);
                return datos;
            }
        default:
            {
                const datos = await fnrequestAPI(URLAmericas);
                return datos;
            }
    }
}