// Escriba un algoritmo que al recibir un valor númerico, devuelva si es
// múltiplo de 3 y 5

const { read, readNumber, print } = require('../helpers')

const isMultiple = n => {
  const res = n % 3 === 0 && n % 5 ===0
  return res
}
const main = async () => {
  const n = await readNumber('Ingrese un número: ')
  if (isMultiple(n))
    print(`El número '${n}' es múltiplo de 3 y de 5.`)
  else
    print(`El número '${n}' no es múltiplo de 3 y de 5.`)
}
module.exports = main
