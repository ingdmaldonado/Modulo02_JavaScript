import {fnRecuperarPaises} from '../Modelo/funcionesDelModelo.js';


export const fnObtenerPaises = async (continente) =>{

    let datos = "";   

    datos = await fnRecuperarPaises(continente);

    console.log(datos);

    return datos;

};

export const fnPunto02IncisoA = (Paises) =>{

   
    console.log("Dentro - fnPunto02IncisoA ");

    Paises.data.objects.forEach((pais)=>{
        
       const {names,capitals,population,flag} = pais;
    
    console.log(names.common,capitals[0]?.name || "Sin capital",population,flag.url_svg);
        
});   

};

export const fnPunto02IncisoB = (Paises) =>{

   
    console.log("Dentro - fnPunto02IncisoB ");

    Paises.data.objects.forEach((pais)=>{
        
    const { names: { common: nombre }, capitals: [{ name: capital }], population: poblacion, flag: { url_svg: bandera } } = pais;
    console.log(nombre,capital,poblacion,bandera);
        
});   

};

export const fnPunto02IncisoC = (Paises) =>{

   
    console.log("Dentro - fnPunto02IncisoC ");

    Paises.data.objects.forEach(({names,capitals,population,flag})=>{
    
    console.log(names.common,capitals[0]?.name || "Sin capital",population,flag.url_svg );
        
});   

};

export const fnPunto03IncisoE = (Paises1,Paises2) =>{

    console.log("Dentro - fnPunto03IncisoE ");
    const region1 = Paises1.data.objects;
    const region2 = Paises2.data.objects;

    const combinarRegiones = [...region1, ...region2];
    
    console.log(`Total de paises combinados: ${combinarRegiones.length}`);          

};

export const fnPunto03IncisoF = (Paises) =>{

    console.log("Dentro - fnPunto03IncisoF ");

    const vectorPaises = Paises.data.objects;


    const paisesSimplificados = vectorPaises.map((pais) => {
        
        const { names: { common: nombre }, capitals: capitales, population: poblacion, flag: { url_png: bandera }} = pais;

        const capital = capitales[0]?.name;

        return {
            nombre,
            capital,
            poblacion,
            bandera
        };
    });

    
    console.log(`Objeto simplicaficado --->`, paisesSimplificados );

    localStorage.setItem('paisesSimplificados', JSON.stringify(paisesSimplificados));    

    console.log(`Pais Guardado en el LocalStorage: ${localStorage.getItem(`paisesSimplificados`)}`);          

};


export const fnPunto05IncisoG = () =>{

    console.log("Dentro - fnPunto05IncisoG ");

    const paisesDelStorage = localStorage.getItem('paisesSimplificados'); // obtengo todos los pasises del storage

    const vectorPaises = JSON.parse(paisesDelStorage); // convierto en un vector para poder aplicar filter

    const paisesConMenos20Millones = vectorPaises.filter(pais => pais.poblacion <= 20000000);
    localStorage.setItem('paisesConMenos20Millones', JSON.stringify(paisesConMenos20Millones));

    console.log(vectorPaises);

    const paisesConMas20Millones = vectorPaises.filter(pais => pais.poblacion > 20000000);
    localStorage.setItem('paisesConMas20Millones', JSON.stringify(paisesConMas20Millones));                

};


/** Funcion que crea una fila para la tabla */
export const fnPaisToView = (pais) =>{

   console.log("Dentro de fnPaisToView  ");

   /** (1ro) destructuring en el cuerpo */    
    const { names: { common: nombre }, capitals: capitales = [],population: poblacion,flag: { url_svg: bandera } } = pais;

    /** (2ro) destructuring al vector que contiene las capitales */
    const [capitalOficial,...resto] = capitales;

    /** (3ro) Muestro las constantes donde tengo la información por consola */
    //console.log(nombre,capitalOficial,poblacion,bandera);

    /** (4to) Crear una fila de una tabla con datos obtenidos */
    /**
     *  <tr>
                <td>Argentina</td>
                <td>Buenos Aires</td>
                <td>52.000.000</td>
                <td><img id="idBandera" src="#" alt="nombre del pais"></td>
        </tr>       
    */
   const filaTabla = document.createElement("tr");

   const celdaFila1 = document.createElement("td");
   celdaFila1.textContent = nombre;


   console.log("Capital Oficial =>",capitalOficial);

   const celdaFila2 = document.createElement("td");
   celdaFila2.textContent = capitalOficial.name;

   const celdaFila3 = document.createElement("td");
   celdaFila3.textContent = poblacion;

   const ImgBandera = document.createElement("img");
   ImgBandera.src = bandera;
   ImgBandera.alt = nombre;

   const celdaFila4 = document.createElement("td");
   celdaFila4.appendChild(ImgBandera);
   
   filaTabla.appendChild(celdaFila1);
   filaTabla.appendChild(celdaFila2);
   filaTabla.appendChild(celdaFila3);
   filaTabla.appendChild(celdaFila4);

   return filaTabla;
};

/** El objetivo de esta funcion de tomar paises de un vector y convertirlas en filas */
export const fnPaisToViews = (Paises) =>{

    let todosPaises = Paises.data.objects;

    //console.log(todosPaises);

    const Views = todosPaises.map(pais => fnPaisToView(pais));

   return Views;

};

/** El objetivo de esta funcion es insertar las Views en el DOM */
export const fnRenderPais = (Views, contenedor)=>{

    contenedor.innerHTML = "";
    Views.forEach(view => contenedor.appendChild(view));

};
