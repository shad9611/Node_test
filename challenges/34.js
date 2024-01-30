// Imprima los primeros 100 números primos

const { read, readNumber, print } = require('../helpers')

const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
      return false
  }
  return num > 1
}

const FirstNPrimes = (n) => {
  const primes = []
  let currentNumber = 2

  while (primes.length < n) {
    if (isPrime(currentNumber))
      primes.push(currentNumber)
    currentNumber++
  }

  return primes
}

const main = async () => {
  const first100Primes = FirstNPrimes(100)
  print("Los primeros 100 números primos son:")
  print(first100Primes.join(", "))
}

module.exports = main
