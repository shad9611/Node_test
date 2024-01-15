// Escriba un algoritmo que devuelva el valor en hexadecimal del valor en
// decimal ingresado por el usuario.

const { read, readNumber, print } = require('../helpers')

const hexadecimal = (num)=>{
    return num.toString(16)
}
const main = async () => {
  const input = await readNumber("ingresa un numero")
  const result = hexadecimal(input)
  print(`El numero hexadecimal de ${input} es: ${result}`)
}
module.exports = main
