// Escriba un algoritmo que capture del usuario un color en formato HEX y
// devuelva su equivalente en RGB.
//
// Ejemplo:
//   #F2F3AE -> (242, 243, 174)

const { read, readNumber, print } = require('../helpers')

const convertHexToRgb = hex => {
  hex = hex.replace(/^#/, '')

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return [r, g, b]
}

const main = async () => {
  const hex = await read("Ingresa un color en Hexadecimal")
  const color = convertHexToRgb(hex)
  print(`El color Rgb para ${hex} es: (${color.join(", ")})`)
}

module.exports = main
