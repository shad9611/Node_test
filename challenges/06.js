// Escriba un algoritmo que capture del usuario la altura en centimetros y el
// peso en kilogramos de una persona y devuelva su indice de masa corporal.

const { read, readNumber, print } = require('../helpers')


const main = async () => {
  const cm = await readNumber("Ingrese su altura:")
  const altura = cm / 100
  const kg = await readNumber("Ingresa tu peso:")
  const imc = (kg / Math.pow(altura,2))
    print(`Tu IMC es: ${imc.toFixed(2)}`)
}

module.exports = main
