// Escribe un algoritmo que al recibir el text de un usuario, devuelva el
// número de palabras y el número de caracters en ese texto.

const { read, readNumber, print } = require('../helpers')

const countWordsAndCharacters = (text) => {
  const trimmedText = text.trim()
  const words = trimmedText.split(/\s+/).filter((word) => word.length > 0)
  const numWords = words.length
  const numCharacters = trimmedText.length
  return { numWords, numCharacters }
}

const main = async () => {
  const userText = await read("Ingresa texto:")
  const result = countWordsAndCharacters(userText)
  print("Número de palabras:", result.numWords)
  print("Número de caracteres:", result.numCharacters)
}


module.exports = main
