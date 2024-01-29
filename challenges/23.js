// Escriba un algoritmo que tome un texto del usuario y un número n, y devuelva
// el texto original pero repitiendo cada vocal n veces
//
// Ejemplo:
//   para el texto = "Todos los cretenses mienten" y n = 5
//   el resultado será:
//     "Tooooodooooos looooos creeeeeteeeeeneeeees miiiiieeeeenteeeeen"

const { read, readNumber, print } = require('../helpers')

const multiplyVowels = (word, n, index = 0, result = '') => {
  if(index === word.length){
    return result
  }
  const currentChar = word.charAt(index)
  if ('aeiouAEIOU'.includes(currentChar)) {
    result += currentChar.repeat(n)
  }else{
    result += currentChar
  }
  return multiplyVowels(word, n, index + 1, result)
}

const main = async () => {
  const word = await read("Ingresa un texto")
  const n =  await readNumber("Por cuanto se tienen que multiplicar: ")
  const modifiedWord = multiplyVowels(word, n)
  print(`El texto "${word}" con vocales multiplicadas es: "${modifiedWord}"`)
}

module.exports = main