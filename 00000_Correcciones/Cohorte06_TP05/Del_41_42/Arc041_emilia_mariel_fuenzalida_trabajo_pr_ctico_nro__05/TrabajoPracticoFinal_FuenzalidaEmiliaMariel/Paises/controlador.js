import { fnRecuperarUniversidades } from "./paismodelo.js";
import { fnUniversidadToView, fnUniversidadesToView, fnrender } from "./paisvista.js";

window.onload = () => {

    const idRecuperarUni = document.querySelector("#idRecuperarUni");
    const idSeleccionPais = document.querySelector("#idSeleccionPais");
    const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

    idRecuperarUni.onclick = async () => {

        const paisSeleccionado = number(idSeleccionPais.value);
        console.log (paisSeleccionado);

        const datos = await fnRecuperarUniversidades(paisSeleccionado);

        console.log(datos);
        console.log(datos[0]);

        // Inciso A
        datos.forEach(pais => {
            const { name, capital, population, flags } = pais;
            console.log(name.common, capital, population, flags.png);
        });

        // Inciso B
        datos.forEach(pais => {
            const { name: { common: nombre }, population: habitantes } = pais;
            console.log(nombre, habitantes);
        });

        // Inciso C
        datos.forEach(({ name: { common }, population }) => {
            console.log(common, population);
        });

        // Inciso D
        datos.forEach(pais => {
            const { name, capital = ["Sin Capital"] } = pais;
            const [primeraCapital] = capital;
            console.log(name.common, primeraCapital);
        });

        // Punto 3 - Inciso E y F
        const URLAmericas = "https://restcountries.com/v3.1/region/americas";
        const URLEurope = "https://restcountries.com/v3.1/region/europe";
        const datosAmericas = await fnRecuperarUniversidades(1);
        const datosEurope = await fnRecuperarUniversidades(2);

        const regionesCombinadas = [...datosAmericas, ...datosEurope];
        console.log(regionesCombinadas.length);

        const unPais = datos[0];
        const { name: { common: nomSimp }, capital: capSimp, population: pobSimp, flags: flgSimp } = unPais;
        
        const objetoSimplificado = {
            nombre: nomSimp,
            capital: capSimp ? capSimp[0] : "No tiene",
            poblacion: pobSimp,
            bandera: flgSimp.png
        };
        console.log(objetoSimplificado);

        // Punto 5 - Inciso G
        const vectorSimplificado = datos.map(p => ({
            nombre: p.name.common,
            capital: p.capital ? p.capital[0] : "No tiene",
            poblacion: p.population,
            bandera: p.flags.png
        }));
        localStorage.setItem("vectorPaisesSimplificado", JSON.stringify(vectorSimplificado));

        const vectorDesdeLocal = JSON.parse(localStorage.getItem("vectorPaisesSimplificado"));

        const masDe20Millones = vectorDesdeLocal.filter(pais => pais.poblacion > 20000000);
        localStorage.setItem("paisesMas20Millones", JSON.stringify(masDe20Millones));
        console.log(masDe20Millones);

        const rangoPoblacionMixta = vectorDesdeLocal.filter(pais => 
            (pais.poblacion >= 0 && pais.poblacion <= 5000000) || 
            (pais.poblacion > 30000000 && pais.poblacion < 60000000)
        );
        localStorage.setItem("paisesFiltroMixto", JSON.stringify(rangoPoblacionMixta));
        console.log(rangoPoblacionMixta);

        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        const filas = fnUniversidadesToView(datos);
        console.log(filas);

        fnrender(filas, idCuerpoTabla);
    };
}