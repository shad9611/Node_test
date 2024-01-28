// Escriba un algoritmo que capture del usuario un color en formato RGB y
// devuelva su equivalente en HEX.
//
// Ejemplo:
//   (60, 136, 126) -> #3C887E

const { read, readNumber, print } = require('../helpers')

const convertRgbToHex = rgb => {
  const bra = rgb.indexOf("(" ) + 1
  const ket = rgb.indexOf(")")
  const str = rgb.substring(bra, ket)
  const numberColor = str.split(',').map((str) => parseFloat(str.trim()))
  if(numberColor.length === 3){
    const hex = numberColor.map((value) => {
      const valueHex = value.toString(16)
      return valueHex.length === 1 ?  "0" + valueHex : valueHex
    })
    return hex.join("")
  }else
    return ""
}

const main = async () => {
  const rgb = await read("Ingresa un color en Rgb")
  const color = convertRgbToHex(rgb)
  print(`El color Rgb para ${rgb} es: #${color.toUpperCase()}`)
}

module.exports = main
