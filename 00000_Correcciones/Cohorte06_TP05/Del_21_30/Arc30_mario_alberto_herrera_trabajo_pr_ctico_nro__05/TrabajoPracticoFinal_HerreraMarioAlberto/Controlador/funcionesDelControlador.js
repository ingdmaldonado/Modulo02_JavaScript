import { obtenerDatosDeEndpoint } from "../Modelo/funcionesDelModelo.js";
import { renderizarTabla } from "../Vista/funcionesDeLaVista.js";

const ejecutarFlujoMVC = async () => {
    const url = "https://restcountries.com/v3.1/region/americas";
    const datos = await obtenerDatosDeEndpoint(url);

   
    const simplificados = datos.map(pais => {
        const { name: { common: nombre }, capital, population: poblacion, flags: { png: bandera } } = pais;
        return { nombre, capital: capital ? capital[0] : "N/A", poblacion, bandera };
    });

   
    localStorage.setItem("paises_data", JSON.stringify(simplificados));

   
    const masDe20M = simplificados.filter(p => p.poblacion > 20000000);
    localStorage.setItem("filtro_mas_20m", JSON.stringify(masDe20M));

    const rangoEspecial = simplificados.filter(p => 
        (p.poblacion >= 0 && p.poblacion <= 5000000) || 
        (p.poblacion > 30000000 && p.poblacion < 60000000)
    );
    localStorage.setItem("filtro_rango_especial", JSON.stringify(rangoEspecial));

    renderizarTabla(simplificados);
};

ejecutarFlujoMVC();