// Imprima todos los números primos que hay entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0)
        return false
    }
    return num > 1
  }
  
  const loop = (n = 1) => n < 101 ? (isPrime(n) ? [n, ...loop(n + 2)] : loop(n + 2)) : []
  
const main = async () => print (loop())

module.exports = main
