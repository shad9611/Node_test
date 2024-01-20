// Escriba un algoritmo que calcule la distancia entre los puntos A y B

const { print, readNumber } = require('../helpers')

const main = async () => {
  const point1 = await readPoint("Ingrese el Primer punto")
  const point2 = await readPoint("Ingrese el Segundo punto")
  const x1 = point1[0];
  const y1 = point1[1];
  const x2 = point2[0];
  const y2 = point2[1];
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  print(`La distancia es: ${distance.toFixed(2)}`)
}
const readPoint = async (message) => {
  const x = await readNumber(`${message} X: `)
  const y = await readNumber(`${message} Y: `)
  return [x, y];
}
module.exports = main