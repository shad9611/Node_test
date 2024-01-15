// Escriba un algoritmo que tome un valor en decimal y devuelva su equivalente
// en numeración romana.

const { read, readNumber, print } = require('../helpers')

const decimalToRoman = (decimal) => {
  if (isNaN(decimal) || decimal < 1 || decimal > 999) {
    console.log("Ingresa solo decimales en el rango de 1 a 999")
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
  let result = ''
  for (let i = 0; i < romanNumbers.length; i++) {
    const count = Math.floor(decimal / romanNumbers[i].decimal)
    result += romanNumbers[i].roman.repeat(count)
    decimal %= romanNumbers[i].decimal
  }
  return result
}
const main = async () => {
  try {
    const input = await read("Ingresa un número decimal: ")
    const romanEquivalent = decimalToRoman(input)
    if (romanEquivalent !== undefined) {
      console.log(`El equivalente romano de ${input} es: ${romanEquivalent}`)
    }
  } catch (error) {
    console.error("Error al leer la entrada:", error)
  }
}

module.exports = main
