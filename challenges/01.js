// Escriba un algoritmo que al recibir un par de valores a y b representando los
// catetos de un triángulo rectangulo, devuelva el valor de la hipotenusa.

const { read, readNumber, print } = require('../helpers')

const CalHypotenuse = (n1 , n2)=>{
  const aPow = Math.pow(n1, 2)
  const bPow = Math.pow(n2, 2)
  const hypotenuse = Math.sqrt(aPow + bPow)
  return hypotenuse
}

const main = async () => {
  const n1 = await readNumber('Ingrese el valor del cateto A: ')
  const n2 = await readNumber('Ingrese el valor del cateto B: ')
  const result = CalHypotenuse(n1 , n2)
  print(`El valor de la hipotenusa es: ${result}`)
}

module.exports = main