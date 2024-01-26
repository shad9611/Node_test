// Escriba un algoritmo que tome del usuario un número que represente un ángulo
// en radianes y devuelva el equivalente en grados.

const { read, readNumber, print } = require('../helpers')

const calRadians = n => n * (180 / Math.PI)

const main = async () => {
  const n = await read("Ingresa un angulo:")
  const angle = calRadians(parseFloat(n))
  print(`El Angulo ingresado es equivalente a ${angle.toFixed(2)} grados`)
}

module.exports = main
