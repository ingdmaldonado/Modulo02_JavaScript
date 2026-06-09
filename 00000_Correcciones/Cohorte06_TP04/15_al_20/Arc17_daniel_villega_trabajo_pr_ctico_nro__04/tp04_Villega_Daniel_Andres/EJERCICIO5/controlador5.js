
import { 
    obtenerTodosLosAlumnos, 
    buscarAlumnoPorDni, 
    obtenerAprobados, 
    aFormatoJSON 
} from './modelo5.js';


const cohortes = {
    c01: [ { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 }, { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }, { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 }, { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 } ],
    c02: [ { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }, { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 }, { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 } ],
    c03: [ { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }, { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 }, { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 }, { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 }, { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 } ],
    c04: [ { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }, { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 }, { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 }, { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 }, { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 }, { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 } ]
};


const totalAlumnos = obtenerTodosLosAlumnos(cohortes.c01, cohortes.c02, cohortes.c03, cohortes.c04);


const btnBuscar = document.getElementById('btn-buscar');
const inputDni = document.getElementById('input-dni');
const resultadoBusqueda = document.getElementById('resultado-busqueda');


btnBuscar.addEventListener('click', () => {
    const dniIngresado = inputDni.value.trim();
    const alumnoEncontrado = buscarAlumnoPorDni(totalAlumnos, dniIngresado);

    if (alumnoEncontrado) {

        const { nombre, apellido, nota_final } = alumnoEncontrado;
        resultadoBusqueda.innerHTML = `Alumno encontrado: ${nombre} ${apellido} | Nota Final: ${nota_final}`;
    } else {
        resultadoBusqueda.innerHTML = "Alumno no encontrado. Verifique el DNI.";
    }
});


const alumnosAprobados = obtenerAprobados(totalAlumnos);
console.log("Alumnos Aprobados (JSON):", aFormatoJSON(alumnosAprobados));