export const fnRequestAPI = async (URL) =>{

    let request = "";
    let datos = "";
//    console.log(URL);
    try {
        request = await fetch(URL);
//       console.log(request);        
        if(!request.ok)
            {
                throw new Error("Hubo un Error");
            }
        datos = await request.json();

//        console.log(datos);

        return datos;

//        console.log(request);
    } catch (error) {
        
    }
}

