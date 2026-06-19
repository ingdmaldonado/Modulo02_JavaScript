export const fnRequestApi= async (URL)=>{
    let request="";
    let datos="";
    try {
        request=await fetch(URL);
        if(!request.ok){
            throw new Error("Se produjo un error");
            
            
        }
         datos= await request.json();
            return datos;
        
    } catch (error) {
        throw new Error(`Se produjo un error ${error.message}`);
        
        
    }
}


