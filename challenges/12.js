// Imprimir la tabla de valores de la función seno para cada valor entre los
// 0° y 359°
//
// Ejemplo:
// 0° = 0.0
// 1° = 0.01745240643728351
// 2° = 0.03489949670250097
// 3° = 0.052335956242943835
// 4° = 0.0697564737441253
// ...

const { read, readNumber, print } = require('../helpers')

const printSin = (i, grades) => {
  if (i <= grades) {
    const radians = i * (Math.PI / 180)
    const sin = Math.sin(radians)
    print(`${i}\t${sin}`)
    printSin(i + 1, grades)
  }
}

const tableSeno = (grades) => printSin(0, grades)

const main = async () => {
  const grades = 359
  const table = tableSeno(grades)
}

module.exports = main