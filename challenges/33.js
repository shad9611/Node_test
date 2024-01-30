// Imprima todos los números que no son primos entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0)
      return false
  }
  return num > 1
}

const loopNonPrimes = (n = 1) => n < 101 ? (isPrime(n) ? loopNonPrimes(n + 1) : [n, ...loopNonPrimes(n + 2)]) : []

const main = async () => print(loopNonPrimes())

module.exports = main
