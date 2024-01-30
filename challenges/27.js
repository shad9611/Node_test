// Escriba un algoritmo que tome un texto del usuario y devuelva un array de
// strings, tal que ninguno de sus elementos pase de los 140 caracteres.
// Ninguna palabra debe quedar truncada.

const { read, readNumber, print } = require('../helpers')

const splitTextRecursive = (words, currentLine = '', result = []) => {
  if (words.length === 0) {
    if (currentLine.length > 0) {
      result.push(currentLine)
    }
    return result
  }
  const word = words.shift()
  if (currentLine.length + word.length + 1 <= 140) {
    currentLine += (currentLine.length > 0 ? ' ' : '') + word
  } else {
    result.push(currentLine)
    currentLine = word
  }
  return splitTextRecursive(words, currentLine, result)
}

const splitText = (text) => {
  const words = text.split(' ')
  return splitTextRecursive(words)
}

const main = async () => {
  const userText = await read("Ingresa un texto: ")
  const lines = splitText(userText)

  print("Texto dividido en líneas de máximo 140 caracteres:")
  lines.forEach((line) => print(line))
}

module.exports = main
