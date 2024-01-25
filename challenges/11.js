// Escriba un algoritmo que tome del usuario un número que represente un ángulo
// en grados y devuelva el equivalente en radianes.

const { read, readNumber, print } = require('../helpers')

const calGrades = n => n * (Math.PI / 180)

const main = async () => {
  const n = await read("Ingresa un angulo:")
  const grade = calGrades(parseFloat(n))
  print(`El Angulo ingresado es equivalente a ${grade.toFixed(4)} radianes`)
}

module.exports = main
