

/* 

https://restcountries.com/v3.1/region/africa 
https://restcountries.com/v3.1/region/americas
https://restcountries.com/v3.1/region/asia
https://restcountries.com/v3.1/region/europe
https://restcountries.com/v3.1/region/oceania

*/


export const fnRecuperarPaises = async (endPoint)=>{

    let datos = "";
    try {
        
        let response = await fetch(endPoint);

        datos = await response.json();

        //console.log(datos);


    } catch (error) {
        console.log(error);
    }

    return datos;

};