import {cohorte01, cohorte02, cohorte03, cohorte04} from "./datos.js";

window.onload = ()=>{

    /* punto 1  */
    const fnRecorreCohorte =(cohorte)=>{
    cohorte.forEach(alumno =>{
        
        const {apellido,nombre} = alumno;
        console.log(`Apellido: ${apellido} - Nombre: ${nombre}`);

    })
    };
    const idCohorte1 = document.querySelector (`#idCohorte1`)

    idCohorte1.onclick = ()=>{
        console.log(`cohorte 01`);
        fnRecorreCohorte(cohorte01);
    };
    
    const idCohorte2 = document.querySelector (`#idCohorte2`)

    idCohorte2.onclick = ()=>{
        console.log(`cohorte 02`);
        fnRecorreCohorte(cohorte02);
    };

    const idCohorte3 = document.querySelector (`#idCohorte3`)

    idCohorte3.onclick = ()=>{
        console.log(`cohorte 03`);
        fnRecorreCohorte(cohorte03);
    };

    const idCohorte4 = document.querySelector (`#idCohorte4`)
    
    idCohorte4.onclick = ()=>{
        console.log(`cohorte 04`);
        fnRecorreCohorte(cohorte04);
    };
    
    /* punto 2 */

    const todasLasCohortes=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];

    const idTodasLasCohortes = document.querySelector(`#idTodasLasCohortes`);

    const fnTodasLasCohortes =(cohortes)=>{
        cohortes.forEach(alumnos =>{
            const {apellido,nombre,nota_final} = alumnos;
            console.log(`apellido: ${apellido} - nombre: ${nombre} - nota final: ${nota_final} `)
        })
    }

    idTodasLasCohortes.onclick = ()=>{
        fnTodasLasCohortes(todasLasCohortes)
    };

    /* punto 3 */

    const alumnosAprobados = todasLasCohortes.filter (alumno => alumno.nota_final>5 );
    const alumnosDesaprobados = todasLasCohortes.filter (alumno => alumno.nota_final <=5);

    btnAprobados.onclick =() =>{
        fnTodasLasCohortes(alumnosAprobados)
    }
    
    btnDesaprobados.onclick =() =>{
        fnTodasLasCohortes(alumnosDesaprobados)
    }

    /* punto 4 */
    
    const ordenPorNota = (todasLasCohortes)=>{
        const copia =[...todasLasCohortes];
        copia.sort((a,b)=> a.nota_final - b.nota_final) 
        return(copia)

    }
    btnOrdenNotas.onclick =() =>{
        const orenadas = ordenPorNota(todasLasCohortes)
        fnTodasLasCohortes(orenadas);
    }


    /* punto 5 */

    const inputDNI = document.querySelector("#buscarPorDNI");
    const btnBuscarDNI = document.querySelector("#btnBuscarDNI")
    btnBuscarDNI.onclick = () =>{
        const dniIngresado = Number(inputDNI.value);
        
        const alumno = todasLasCohortes.find(
            a => Number(a.dni) === dniIngresado
        );
        if (alumno){
            const {apellido, nombre, nota_final, dni} = alumno;
            console.log(`Dni: ${dni} - Apellido: ${apellido} - Nombre: ${nombre} - Nota Final: ${nota_final}`)
        }
    }
    
    /* punto 6 */

    const contarAprobadosIf = (lista) => {
        return lista.reduce((contador, alumno) => {
            if (alumno.nota_final > 5) {
                return contador + 1;
            }else {
                return contador;
            }
        }, 0);
    };

    btnAprobadosIf.onclick = () => {
        const cantidad = contarAprobadosIf(todasLasCohortes);
        console.log(cantidad);
    };

    const contarAprobadosTernario = (lista) => {
        return lista.reduce(
            (contador, alumno) => alumno.nota_final > 5 ? contador + 1 : contador
        , 0);
    };

    btnAprobadosTernario.onclick = () => {
        const cantidad = contarAprobadosTernario(todasLasCohortes);
        console.log(cantidad);
    };
}
