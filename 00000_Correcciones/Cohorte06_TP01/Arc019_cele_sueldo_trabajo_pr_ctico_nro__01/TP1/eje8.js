{
  
  let edad=Number(prompt(`ingrese la edad`))
  if(edad<=12){
  console.log("es un niño")

  }
  else{
    if(edad<=17){
        console.log(`es un adolecente `)
    }
    else{
        if(edad<=64){
            console.log(`es un adulto`)
        }
        else {
            console.log(`es un  adulto mayor `)
        }
    }

  }

}