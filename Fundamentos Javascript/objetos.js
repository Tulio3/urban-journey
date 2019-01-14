var tulio = {
  nombre: "Tulio",
  edad: 20
}

var juan = {
  nombre: "Juan",
  edad: 18
}

function f(persona){
  var { nombre } = persona;
  var { edad } = persona;
  console.log("Mi nombre es " + nombre + " y tengo " + edad + " años");

}


f(tulio);
f(juan);
