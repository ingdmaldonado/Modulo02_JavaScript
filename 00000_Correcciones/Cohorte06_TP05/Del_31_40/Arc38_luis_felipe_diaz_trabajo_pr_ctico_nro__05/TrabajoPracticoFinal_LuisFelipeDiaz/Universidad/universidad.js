import { obtenerUniversidades } from './universidadModelo.js';
import { renderizarTabla } from './universidadVista.js';

const inicializarApp = async () => {
    const universidadesArg = await obtenerUniversidades('Argentina');
    console.log("PUNTO 01 - Resultado de la API:", universidadesArg);

    renderizarTabla(universidadesArg);

    console.log("\n PUNTO 02: DESTRUCTURING ");
    const muestra = universidadesArg.slice(0, 5);

    console.log("Inciso A (Normal):");
    muestra.forEach(uni => {
        const { name, country, domains } = uni;
        console.log(`Nombre: ${name} | País: ${country} | Dominio: ${domains[0]}`);
    });

    console.log("\nInciso B (Con Alias):");
    muestra.forEach(uni => {
        const { name: nombreUni, 'state-province': provincia } = uni;
        console.log(`Nombre: ${nombreUni} | Provincia: ${provincia || 'N/A'}`);
    });

    console.log("\nInciso C (En parámetros):");
    muestra.forEach(({ name, country }) => {
        console.log(`Nombre: ${name} | País: ${country}`);
    });

    console.log("\nInciso D (Destructuring de Arrays para la Web):");
    muestra.forEach(uni => {
        const { name, web_pages: [primeraWeb = 'Sin sitio web'] = [] } = uni;
        console.log(`Nombre: ${name} | Web: ${primeraWeb}`);
    });


    console.log("\n PUNTO 03: SPREAD OPERATOR ");
    
   
    const universidadesChile = await obtenerUniversidades('Chile');
    const combinadas = [...universidadesArg, ...universidadesChile];
    console.log(`Inciso E -> Universidades combinadas (Arg + Chi): ${combinadas.length} en total.`);

    const vectorSimplificado = universidadesArg.map(uni => {
        const { name, 'state-province': prov, web_pages: [web = ''] = [] } = uni;
        
        const obj = { nombre: name, provincia: prov || 'Desconocida', sitio: web };
        return { ...obj }; 
    });

    localStorage.setItem('universidades', JSON.stringify(vectorSimplificado));
    console.log("Inciso F -> Vector simplificado guardado en localStorage:", vectorSimplificado);


    console.log("\n PUNTO 05: MANEJO DE VECTORES ");
    const datosGuardados = JSON.parse(localStorage.getItem('universidades')) || [];

   
    const nacionales = datosGuardados.filter(uni => uni.nombre.includes('Nacional'));
    localStorage.setItem('uni_nacionales', JSON.stringify(nacionales));
    console.log("Inciso G (1) -> Universidades Nacionales:", nacionales);

    
    const filtroEspecifico = datosGuardados.filter(uni => 
        uni.nombre.includes('Catamarca') || uni.nombre.includes('Tecnológica')
    );
    localStorage.setItem('uni_especificas', JSON.stringify(filtroEspecifico));
    console.log("Inciso G (2) -> Universidades Catamarqueñas o Tecnológicas:", filtroEspecifico);
};


inicializarApp();