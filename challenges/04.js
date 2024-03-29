// Escriba un algoritmo que calcule el factorial de un número ingresado por el
// usuario.

const { read, readNumber, print } = require('../helpers')

const factorial = n => n === 0 || n === 1 ?   1 :  n * factorial(n - 1)

const getUserInput = async () => {
  return await readNumber('Ingrese un número: ')
}

const printResult = result => print (result)

const main = async () => {
  const n = await getUserInput()
  const result = factorial(n)
  printResult (result)
}

module.exports = main