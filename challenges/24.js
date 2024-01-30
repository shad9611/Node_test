// Escribe un algoritmo que determine si en un texto ingresado por el usuario
// cada uno de sus caracteres aparece solo una vez
//
// Ejemplo:
//   para el texto "murciélago" deberá indicar que el texto tiene caracteres únicos
//   para el texto "sótano" deberá indicar que la letra "o" está repetida

const { read, readNumber, print } = require('../helpers')

const countChar = (text) =>{
  const characters = new Set()
  for (let char of text) {
    if (/^[a-zA-Z]$/.test(char)){
      const lowerChar = char.toLowerCase()
      if (characters.has(lowerChar)) {
        return lowerChar
      }
      characters.add(lowerChar)
    }
  }
  return null
}

const main = async () => {
  const text = await read("Ingresa un texto: ")
  const repeatedChar = countChar(text)

  if (repeatedChar) {
    print(`La letra '${repeatedChar}' está repetida en el texto.`)
  } else {
    print("El texto tiene caracteres únicos.")
  }
}

module.exports = main
