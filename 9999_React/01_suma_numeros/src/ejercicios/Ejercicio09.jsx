import { useState } from "react";

const carreras = [
    { carreraId: 1, nombre: "Desarrollo de Software" },
    { carreraId: 2, nombre: "Contabilidad" },
    { carreraId: 3, nombre: "Enfermería" }
];

const anios = [
    { anioId: 1, nombre: "1er Año" },
    { anioId: 2, nombre: "2do Año" },
    { anioId: 3, nombre: "3er Año" }
];

const turnos = [
    { turnoId: 1, nombre: "Mañana" },
    { turnoId: 2, nombre: "Tarde" },
    { turnoId: 3, nombre: "Noche" }
];

const Ejercicio09 = ()=>{

  const [CarreraElegida,SetCarreraElegida] = useState(0);  
  const [CarreraCompleta,SetCarreraCompleta] = useState(0);
  const [AnioElegido,setAnioElegido] = useState(0);
  const [AnioCompleto,setAnioCompleto] = useState(0);
  const [TurnoElegido,setTurnoElegido] = useState(0);
  const [TurnoCompleto,setTurnoCompleto] = useState(0);

  return (<>
    <h2>INSCRIPCIÓN DE ALUMNOS CICLO LECTIVO - 2026</h2>
    <h3>(01) - INDIQUE LA CARRERA </h3>
    <select onChange={
        (e)=>{
          let carreraId = Number(e.target.value);
          SetCarreraElegida(carreraId);
          SetCarreraCompleta(carreras.find(carrera => carrera.carreraId === carreraId));
        }
        }>
      {carreras.map((carrera)=>{return <option key={carrera.carreraId} value={carrera.carreraId}>{carrera.nombre}</option>})}
    </select>
    <h4>Carrera Seleccionada: {CarreraElegida}</h4>
    <h4>Carrera Completa: {JSON.stringify(CarreraCompleta)}</h4>
    <h3>(02) - INDIQUE EL AÑO EN EL QUE SE INSCRIBIRÁ</h3>
    <select onChange={(e)=>{
        setAnioElegido(Number(e.target.value));
        setAnioCompleto(anios.find(anio => anio.anioId === Number(e.target.value)));
        }}>
      {anios.map(({anioId,nombre})=>{return <option key={anioId} value={anioId}>{nombre}</option>})}
    </select>
    <h4>Año Seleccionado:{AnioElegido}</h4>
    <h4>Año Completo: {JSON.stringify(AnioCompleto)}</h4>
    <h3>(03) - INDIQUE EL TURNO EN EL QUE SE INSCRIBIRÁ</h3>
    <select onChange={(e)=>{
        const opcionElegida = Number(e.target.value);
        setTurnoElegido(opcionElegida);
        setTurnoCompleto(turnos.find(turno => turno.turnoId === opcionElegida));
        }}>
      {turnos.map((turno)=><option key={turno.turnoId} value={turno.turnoId}>{turno.nombre}</option>)}
    </select>
    <h3>Turno Elegido: {TurnoElegido}</h3>
    <h3>Turno Completo: {JSON.stringify(TurnoCompleto)}</h3>
  </>);
};

export default Ejercicio09;