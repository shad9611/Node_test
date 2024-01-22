// Escribe un algoritmo que al recibir el text de un usuario, devuelva el
// número de palabras y el número de caracters en ese texto.

const { read, readNumber, print } = require('../helpers')

const countWordsAndCharacters  = (text) => {
    const trimmedText  = text.trim()
    const words = trimmedText .split(/\s+/).filter((word) => word.length > 0)
    const numWords = words.length
    const numCharacters = trimmedText.length
  return { numWords, numCharacters }
}
const main = async () => {
    const userText =  await read("ingresa texto:")
    const result = countWordsAndCharacters (userText)
      print("Numbers of words:", result.numWords)
      print("Number of characters:", result.numCharacters)
}

module.exports = main
