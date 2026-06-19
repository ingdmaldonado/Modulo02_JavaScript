//este archivo de modelo se encarga de realizar procesos a los datos para devolverlos al controlador
//trabaja de manera similiar a los métodos de una clase en POO, ya sean métodos de objeto, clase o accesores

//codigo realizado durante clases

//idealmente, las url deberían estar en un array para mayor escalabilidad
const URLArgentina = `http://universities.hipolabs.com/search?country=Argentina`;
const URLBrasil = `http://universities.hipolabs.com/search?country=Brazil`;

//no capturar excepción, así la captura el try catch del controlador
export const recuperarUniversidades = async (pais) => {
    let datos = "";
    
    switch (pais) {
        case 1:
            datos = await requestApi(URLArgentina);
            break;
        case 2:
            datos = await requestApi(URLBrasil);
            break;
        default:
            throw new Error("País no encontrado");
    }

    return datos;
}

const requestApi = async (direccionURL) => {
    let respuesta = "";
    let datos = "";

    try {
        respuesta = await fetch(direccionURL);
        if(!respuesta.ok){
            throw new Error("Se produjo un error al intentar obtener los datos");
        }
        datos = await respuesta.json();
        return datos;

    } catch (error) {
        throw new Error(`Error en modelo.js. Se produjo un error ${error.message}`);
    }
    
}

//codigo realizado para optimizar modularidad y escalabilidad

const paises = {
    Argentina : `http://universities.hipolabs.com/search?country=Argentina`,
    Brasil : `http://universities.hipolabs.com/search?country=Brazil`,
    Peru : `http://universities.hipolabs.com/search?country=Peru`,
    Colombia : `http://universities.hipolabs.com/search?country=Colombia`,
    Chile : `http://universities.hipolabs.com/search?country=Chile`,
    Uruguay : `http://universities.hipolabs.com/search?country=Uruguay`,
    Paraguay : `http://universities.hipolabs.com/search?country=Paraguay`
}

export const recuperarUniversidadesOptimizado = async (pais) => {
    let datos = await requestApi(paises[pais]);
    return datos;
}

//devuelve las claves de la colección
export const recuperarPaisesOptimizado = () => {
    return Object.keys(paises)
}


//funciones del estado de la app
//según chatGPT, es correcto que vayan en el modelo debido a que se almacenan los datos de sesión

const estadoApp = {
    selector : ""
}

export const guardarEstadoApp = () => {
    estadoApp.selector = selectorPais.value;
    let datosJSON = JSON.stringify(estadoApp);
    localStorage.setItem("estadoApp", datosJSON);
}

export const recuperarEstadoApp = () => {
    let datosJSON = localStorage.getItem("estadoApp");
    let datosMemoria = JSON.parse(datosJSON);

    if(datosMemoria){
        estadoApp.selector = datosMemoria.selector
        selectorPais.value = datosMemoria.selector
    }
}