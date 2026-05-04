export const cadenaText = texto =>{
  let contador =0;
  

 for(let i = 0; i < texto.length; i++ ){

     let letra = texto.charAt(i);

        if (
            letra === "b" || letra === "c" || letra === "d" || letra === "f" || letra === "g" || letra === "h" || letra === "j" || letra === "k" ||
            letra === "B" || letra === "C" || letra === "D" || letra === "F" || letra === "G" || letra === "H" || letra === "J" || letra === "K" ||

            letra === "l" ||  letra ==="m" ||  letra === "p" || letra === "q" || letra === "r" || letra === "s" ||
            letra === "L" ||  letra ==="M" ||  letra === "P" || letra === "Q" || letra === "R" || letra === "S" ||

            letra === "t" || letra === "v" || letra === "w" || letra === "x" || letra === "y" || letra === "z" || letra === "ñ" ||
            letra === "T" || letra === "V" || letra === "W" || letra === "X" || letra === "Y" || letra === "Z" || letra === "Ñ"
        ) {
            contador++;
        }

     
       
}
     return contador;
}
