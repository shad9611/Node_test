// Escriba un algoritmo que tome un valor en decimal y devuelva su equivalente
// en numeración romana.

const { read, readNumber, print } = require('../helpers')

const decimalToRomanRec = (decimal, romanNumbers, result = '') => {
  if (decimal > 0) {
    const currentSymbol = romanNumbers.find( num => decimal >= num.decimal)
    const count = Math.floor(decimal / currentSymbol.decimal)
    result += currentSymbol.roman.repeat(count)
    decimal %= currentSymbol.decimal
    return decimalToRomanRec(decimal, romanNumbers, result)
  }
  return result
}

const decimalToRoman = decimal => {
  if (isNaN(decimal) || decimal < 1 || decimal > 999) {
    print("Ingresa solo decimales en el rango de 1 a 999")
    return
  }

  const romanNumbers = [
    { decimal: 1000, roman: 'M' },
    { decimal: 900, roman: 'CM' },
    { decimal: 500, roman: 'D' },
    { decimal: 400, roman: 'CD' },
    { decimal: 100, roman: 'C' },
    { decimal: 90, roman: 'XC' },
    { decimal: 50, roman: 'L' },
    { decimal: 40, roman: 'XL' },
    { decimal: 10, roman: 'X' },
    { decimal: 9, roman: 'IX' },
    { decimal: 5, roman: 'V' },
    { decimal: 4, roman: 'IV' },
    { decimal: 1, roman: 'I' }
  ]
  
  return decimalToRomanRec(decimal, romanNumbers)
}

const main = async () => {
  const input = await read("Ingresa un número decimal: ")
  const decimalInput = Number(input)
  if (isNaN(decimalInput) || decimalInput % 1 !== 0) {
    print("Ingresa solo números enteros.")
      return
    }
    const romanEquivalent = decimalToRoman(decimalInput)
    if (romanEquivalent !== undefined)
      print(`El equivalente romano de ${input} es: ${romanEquivalent}`)
}

module.exports = main
