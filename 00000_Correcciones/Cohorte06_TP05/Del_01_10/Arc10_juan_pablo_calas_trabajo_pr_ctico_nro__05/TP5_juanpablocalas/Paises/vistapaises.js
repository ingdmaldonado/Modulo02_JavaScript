export const fnCreaFilaTablaPaises=(Paises)=>{
    const FilasPaises = Paises.map((Pais)=>{
//        const {flags:{png:bandera},altSpellings:[ ,NombrePais, ],capital,population:poblacion,area:superficie,maps:{googleMaps: mapa}} = Pais
        const {flags:{png:bandera},name:{common:NombrePais},capital,population:poblacion,area:superficie,maps:{googleMaps: mapa}} = Pais        

        const BanderaPais = bandera;
        const MapaPais = mapa;
       
        const filas = document.createElement("tr");

        const celdaBandera = document.createElement("td");
        const ImagenBandera = document.createElement("img");
        ImagenBandera.src = BanderaPais;
        ImagenBandera.width = 50;
        celdaBandera.appendChild(ImagenBandera);

        const celdaPais = document.createElement("td");
        celdaPais.textContent = NombrePais;
        const celdaPoblacion = document.createElement("td");
        celdaPoblacion.textContent = poblacion.toLocaleString("es-ES");
        const celdaCapital = document.createElement("td");
        celdaCapital.textContent = capital;
        const celdaSuperficie = document.createElement("td");
        celdaSuperficie.textContent = superficie.toLocaleString("es-ES");

        const celdaMapa = document.createElement("td");
        const linkMapa = document.createElement("a");
        linkMapa.href = MapaPais;
        linkMapa.target = "_blank";
        linkMapa.textContent = MapaPais;
        celdaMapa.appendChild(linkMapa);        

        filas.appendChild(celdaBandera);
        filas.appendChild(celdaPais);
        filas.appendChild(celdaPoblacion);
        filas.appendChild(celdaCapital);
        filas.appendChild(celdaSuperficie);
        filas.appendChild(celdaMapa);

        return filas;

    });

    return FilasPaises;
};

export const fnInsertFilaTabla=(FilasDevueltas,CuerpoTabla)=>{
    CuerpoTabla.innerHTML ="";
    FilasDevueltas.forEach(FilaDev => CuerpoTabla.appendChild(FilaDev));
};