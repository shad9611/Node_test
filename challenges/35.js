// Escriba un algoritmo que imprima en pantalla
// los números del 1 al 100 pero reemplazando
// todos los múltiplos de 3 por la palabra "bizz"
// y todos los múltiplos de 5 por la palabra "buzz".
// Si un número es múltiplo de 3 y de 5, debera
// imprimir en su lugar, la palabra "bizzbuzz".

const { read, readNumber, print } = require('../helpers')

const loopNumber = (n = 1) => n < 101 ? [n, ...loopNumber(n + 1)] : []

const rules = [
  { divisor: 3, output: "bizz" },
  { divisor: 5, output: "buzz" },
]

const bizzbuzz = (n) => {
  const result = rules.reduce((acc, rule) => {
    if (n % rule.divisor === 0) {
      acc += rule.output
    }
    return acc
  }, "")

  return result || n.toString()
}

const main = async () => {
  const numbers = loopNumber()
  numbers.forEach((number) => {
    const result = bizzbuzz(number)
    console.log(result)
  })
}

module.exports = main
