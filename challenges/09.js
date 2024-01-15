// Escriba un algoritmo que tome del usuario un número, el cual represente el
// número de segundos que un objeto se ha mantenido en caida libre en el
// planeta tierra en el vacio perfecto. El algoritmo debe devolver la
// distancia recorrida en metros de dicho objeto

const { read, readNumber, print } = require('../helpers')


const calc =(time) =>{
  const g = 9.81
  const distance = 0.5 * g *Math.pow(time, 2) // Formula: distancia=  1/2gt^2
  return distance
}
const main = async () => {
  const time = await readNumber("Ingrese el tiempo en segundos que el objeto estuvo en caída libre:")
  const distance = calc(time)

  print(`La distancia recorrida por el objeto en caída libre es: ${distance.toFixed(2)} metros`)
}

module.exports = main
