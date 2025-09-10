import { fnRecuperarDatosDeApi } from "../modelo/funcionesdelmodelo.js";

export const fnClickEnBotonRecuperarPaises = async (endPoint) => {
  console.log(`aqui tendría que recuperar los paises`);

  /* aqui la estoy "INVOCANDO" a la función
        y le voy a pasar como parametro la ruta
        al endPoint */

  let datos = await fnRecuperarDatosDeApi(
    "https://restcountries.com/v3.1/region/europe"
  );

  /* si una función definida. a dentro
       tiene procesos asíncronos que 
       deben esperar por su resolución.
       lo que quiere decir por propiedad transitiva
       es que toda la función debe esperar con await 
       */

  return datos;
};

/* =========================================================
   PUNTO 2 - DESTRUCTURING
   En este punto trabajamos distintas variantes de destructuring
   sobre el array de países obtenido de la API.
   ========================================================= */

/* =========================================================
   INCISO A — Destructuring dentro de la función callback
   Ejemplo didáctico previo:
   const paisEjemplo = {
       name: { common: "País Demo" },
       population: 123456,
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   const { name, capital = ["Sin dato"], population, flags } = paisEjemplo;
   console.log(name.common, capital[0], population, flags.png);
   ========================================================= */
export const incisoA = (paises) => {
  paises.forEach((pais) => {
    const { name, capital = ["Sin dato"], population, flags } = pais;
    console.log(
      `Nombre: ${name.common} | Capital: ${capital[0]} | Población: ${population} | Bandera: ${flags.png}`
    );
  });
};

/* =========================================================
   INCISO B — Destructuring con alias
   Ejemplo didáctico previo:
   const paisEjemplo = {
       name: { common: "País Alias" },
       capital: ["Capital Demo"],
       population: 999999,
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   const { name: nombre, capital: cap, population: poblacion, flags: bandera } = paisEjemplo;
   console.log(nombre.common, cap[0], poblacion, bandera.png);
   ========================================================= */
export const incisoB = (paises) => {
  paises.forEach((pais) => {
    const {
      name: nombre,
      capital = ["Sin dato"],
      population: poblacion,
      flags: bandera,
    } = pais;
    console.log(
      `Nombre: ${nombre.common} | Capital: ${capital[0]} | Población: ${poblacion} | Bandera: ${bandera.png}`
    );
  });
};

/* =========================================================
   INCISO C — Destructuring en parámetros de la función callback
   Ejemplo didáctico previo:
   const paisEjemplo = {
       name: { common: "País Param" },
       capital: ["Demo City"],
       population: 888888,
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   
   function mostrarPais({ name, capital, population, flags }) {
       console.log(name.common, capital[0], population, flags.png);
   }
   mostrarPais(paisEjemplo);
   ========================================================= */

export const incisoC = (paises) => {
  paises.forEach(({ name, capital = ["Sin dato"], population, flags }) => {
    console.log(
      `Nombre: ${name.common} | Capital: ${capital[0]} | Población: ${population} | Bandera: ${flags.png}`
    );
  });
};

/* =========================================================
   INCISO D — Destructuring de arrays (capital)
   Ejemplo didáctico previo:
   const paisEjemplo = {
       name: { common: "País Array" },
       capital: ["PrimeraCap", "SegundaCap"],
       population: 777777,
       flags: { png: "https://ejemplo.com/bandera.png" }
   };
   const { capital = [] } = paisEjemplo;
   const [primeraCapital = "Sin dato"] = capital;
   console.log(paisEjemplo.name.common, primeraCapital, paisEjemplo.population, paisEjemplo.flags.png);
   ========================================================= */
export const incisoD = (paises) => {
  paises.forEach(({ name, capital = [], population, flags }) => {
    const [primeraCapital = "Sin dato"] = capital;
    console.log(
      `Nombre: ${name.common} | Capital: ${primeraCapital} | Población: ${population} | Bandera: ${flags.png}`
    );
  });
};

/* =========================================================
   PUNTO 3 - SPREAD OPERATOR
   ========================================================= */

/* =========================================================
   INCISO E — Combinar regiones
   ========================================================= */
export const incisoE_Spread = (paisesAmerica, paisesEuropa) => {
  const paisesCombinados = [...paisesAmerica, ...paisesEuropa];
  console.log(`Total países combinados: ${paisesCombinados.length}`);
  console.log("Primer país:", paisesCombinados[0].name.common);
  console.log(
    "Último país:",
    paisesCombinados[paisesCombinados.length - 1].name.common
  );
  return paisesCombinados;
};

/* =========================================================
   INCISO F — Crear un objeto simplificado (con destructuring)
   ========================================================= */
export const incisoF_Spread = (pais) => {
  // Destructuring anidado para acceder directamente
  const {
    name: { common },
    capital = ["Sin dato"],
    population,
    flags,
  } = pais;

  // Construir un objeto más liviano
  const paisSimplificado = {
    name: common,
    capital: capital[0],
    population,
    bandera: flags.png,
  };

  console.log("País original:", pais);
  console.log("País simplificado:", paisSimplificado);

  return paisSimplificado;
};
