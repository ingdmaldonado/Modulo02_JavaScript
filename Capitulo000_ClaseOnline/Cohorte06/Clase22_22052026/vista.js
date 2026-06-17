
/* esta es la forma correcta de
hacer renderización dinamica

    1ro) map

    map => map(fnCallBack) esa función callBack es de transformación
    
    map => convertir cada pais en un <li></li>
 
 
    2do) forEach => los voy incrustando en el contenedor
    que corresponda.

 */


/* Al proceso de conversion de paises
en items que se deben incrustar en la
lista ordenada que yo quiera, lo voy
a encapsular dentro de una función.
la idea es separar toda la generación
del item en una función */

export const fnGenerarItems = (paises)=>{

      const listaPaisesEnItems = paises.map((pais)=>{

            /* 1ro) hago destructuring del pais
            sacando los atributos que me interesan */

            const {nombre,capital} = pais;

            /* 2do) voy a construir un item */
            const item = document.createElement("li");

            /* 3ro) Le asigno el nombre del Pais */
            item.textContent = `${nombre} - ${capital}`;

            // este es el return de la función callBack
            return item;
        }); 

    // aqui estoy haciendo un return de todos los items juntos 
    return listaPaisesEnItems;

};

/* la funcion renderizar items, recibe una coleccion
de items o elementos HTML que ya estan listos para
ser incorporados al DOM. el único trabajo que tiene
es recorrer esos items e incrustarlos en el contenedor
que corresponda. 
    el primer parametro es un vector
    el segundo parametro es el contenedor donde debe meterlos
*/

export const fnRenderizarItems = (paisesItems,contenedor) =>{
    contenedor.innerHTML = "";
    paisesItems.forEach(item => contenedor.appendChild(item));
}