// Escriba un algoritmo que al recibir un par de valores a y b representando los
// catetos de un triángulo rectangulo, devuelva el valor de la hipotenusa.

const { read, readNumber, print } = require('../helpers')

const main = async () => {
  const n1 = await readNumber('Ingrese el valor del cateto A: ')
  const n2 = await readNumber('Ingrese el valor del cateto B: ')
  const aPow = Math.pow(n1, 2)
  const bPow = Math.pow(n2, 2)
  const hypotenuse = Math.sqrt(aPow + bPow)
  print(`El valor de la hipotenusa es: ${hypotenuse}`)
}
module.exports = main