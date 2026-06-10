
export const fnGenerarRenglonTabla = (CohorteSeleccionada)=>{
    const TablaCohorte = CohorteSeleccionada.map((alumnosC)=>{
        const {nombre,apellido} = alumnosC;
        const renglon = document.createElement("li");
        renglon.textContent = `${nombre} - ${apellido}`;
            return renglon;
    });
    return TablaCohorte;
};

export const fnGenerarRenglonTabla1 = (CohorteSeleccionada)=>{
    const TablaCohorte = CohorteSeleccionada.map((alumnosC)=>{
        const {nombre,apellido,nota_final} = alumnosC;
        const renglon = document.createElement("li");
        renglon.textContent = `${nombre} - ${apellido} - ${nota_final}`;
            return renglon;
    });
    return TablaCohorte;
};

export const fnInsrtaRenglonTabla =(RenglonCohorte,ContenedorTabla)=>{

    ContenedorTabla.innerHTML ="";
    RenglonCohorte.forEach(renglon => ContenedorTabla.appendChild(renglon));

};