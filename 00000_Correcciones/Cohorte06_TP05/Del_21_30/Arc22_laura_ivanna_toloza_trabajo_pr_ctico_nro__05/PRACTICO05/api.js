export const fnRequestAPI = async (URL) =>{
    let request = "";
    let datos = "";

    try{
        request = await fetch(URL);
        if(!request.ok)
        {
            throw new Error("Se produjo un error en el intento de recuperar datos")

        }
        datos = await request.json();
        return datos
    } catch (error) {
        console.log(error);

    }
}
