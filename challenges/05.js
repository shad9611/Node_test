// Cree un algoritmo que calcule los primeros 100 números de la serie de
// Fibonacci

const { read, readNumber, print } = require('../helpers')

const main = async () => {
  const calculateFibonacci = () => {
    const Numbers = [0, 1]
  
    for (let i = 2; i < 100; i++) {
      const nextFibonacci = Numbers[i - 1] + Numbers[i - 2]
      Numbers.push(nextFibonacci)
    }
  
    return Numbers
  }
  
  const result = calculateFibonacci()
  print(`Los primeros 100 números de Fibonacci son: ${result.join(', ')}`)

 /*Para que los arroje uno abajo de otro seria de esta manera
 
 const result = calculateFibonacci()
  result.forEach((number) => {
    print(number)
  })
}*/
}

module.exports = main
