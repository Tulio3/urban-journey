var tulio =  {
  nombre: "Tulio",
  edad: 20
}

var juan = {
  nombre: "Juan",
  edad: 5
}

const MAYORIA_DE_EDAD =18


function esMayorDeEdad({edad}){
  if(edad >= MAYORIA_DE_EDAD){
    return true
  }else {
    return false
  }
}

const esMenorDeEdad = persona => !esMayorDeEdad(persona)

const permitirAcceso = persona => {
  if(esMenorDeEdad(persona)){
    console.log("Acceso Denegado")
  }
}
