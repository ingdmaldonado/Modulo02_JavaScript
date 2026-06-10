import { unificarCohortes} from './modelo2.js';


const btnUnificar = document.querySelector('#btnUnificar');
const resultadoPre = document.querySelector('#resultado');


btnUnificar.addEventListener('click', () => {
   
    const todosLosAlumnos = unificarCohortes();
    
   
    console.log("Vector resultante de todas las cohortes:", todosLosAlumnos);

   
});