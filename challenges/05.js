// Cree un algoritmo que calcule los primeros 100 números de la serie de
// Fibonacci

const { read, readNumber, print } = require('../helpers')

const Fibonacci = (length, current = 0, next = 1, result = [], count = 2) => {
  return count > length
    ? result
    : Fibonacci (length - 1, next, current + next, [...result, current], count + 1)
}

const main = async () => {
  const result = Fibonacci(100)
  print(`Los primeros 100 números de Fibonacci son: ${result}`)
  
}

module.exports = main