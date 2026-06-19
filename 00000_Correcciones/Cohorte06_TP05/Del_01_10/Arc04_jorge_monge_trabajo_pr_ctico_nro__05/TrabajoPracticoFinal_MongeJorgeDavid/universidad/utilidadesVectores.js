// universidad/utilidadesVectores.js

export const manejarVectoresLocalStorage = () => {
    console.log("--- PUNTO 05: MANEJO DE VECTORES ---");
    
    // Recuperamos el vector simplificado del LocalStorage
    const datosLocal = localStorage.getItem("universidadesSimplificadas");
    if (!datosLocal) return;

    const universidades = JSON.parse(datosLocal);

    // INCISO G (Primer Filtro): Nombres largos (más de 35 caracteres)
    const nombresLargos = universidades.filter(uni => uni.nombre.length > 35);
    console.log("Inciso G (Nombres > 35 caracteres):", nombresLargos);
    localStorage.setItem("universidadesNombresLargos", JSON.stringify(nombresLargos));

    // INCISO G (Segundo Filtro - Mixto): Que tengan dominio argentino o nombre corto (< 20 caracteres)
    const filtroMixto = universidades.filter(uni => {
        const largoNombre = uni.nombre.length;
        const esDominioArg = uni.dominio.endsWith(".edu.ar");
        return esDominioArg || largoNombre < 20;
    });
    
    console.log("Inciso G (Filtro Mixto: .edu.ar ó nombre corto):", filtroMixto);
    localStorage.setItem("universidadesFiltroMixto", JSON.stringify(filtroMixto));
};