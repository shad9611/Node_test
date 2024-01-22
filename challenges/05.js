// Cree un algoritmo que calcule los primeros 100 números de la serie de
// Fibonacci

const { read, readNumber, print } = require('../helpers')

  const Fibonacci = (length, current = 0, next = 1, result = []) => {
    return length === 0
      ? result
      : Fibonacci(length - 1, next, current + next, [...result, current])
  }
const main = async () => {
  const result = Fibonacci(100)
    print(`Los primeros 100 números de Fibonacci son: `)
      result.forEach((number) => {
      print(number)
    })
}
module.exports = main