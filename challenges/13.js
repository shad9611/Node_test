// Escriba un algoritmo que capture del usuario un string que represente un
// número romano entre el 1 y el 1000, y devuelva su equivalente en decimal.

const { read, readNumber, print } = require('../helpers')

const romanNumbers = [
  { symbol: 'I', value: 1 },
  { symbol: 'V', value: 5 },
  { symbol: 'X', value: 10 },
  { symbol: 'L', value: 50 },
  { symbol: 'C', value: 100 },
  { symbol: 'D', value: 500 },
  { symbol: 'M', value: 1000 }
]

const findRomanNumber = symbol => romanNumbers.find(num => num.symbol === symbol)

const romanToDecimalRec = (roman, result = 0, i = 0) => {
  if (i < roman.length) {
    const currentSymbol = findRomanNumber(roman[i])

    if (!currentSymbol) {
      print("Símbolo no válido")
      return
    }

    const nextSymbol = findRomanNumber(roman[i + 1])

    if (nextSymbol && nextSymbol.value > currentSymbol.value)
      result -= currentSymbol.value
    else
      result += currentSymbol.value

    return romanToDecimalRec(roman, result, i + 1)
  }

  return result
}

const romanToDecimal = (roman) => {
  roman = roman.toUpperCase()
  return romanToDecimalRec(roman)
}

const main = async () => {
  const input = await read("Ingresa un número romano: ")
  const decimalEquivalent = romanToDecimal(input)

  if (decimalEquivalent !== undefined)
    print(`El equivalente decimal de ${input.toUpperCase()} es: ${decimalEquivalent}`)
}

module.exports = main