// Dado un valor ingresado por el usuario que represente un número de segundos
// imprima su equivalente en horas, minutos y segundos.

const { read, readNumber, print } = require('../helpers')

const convertSeconds = seconds => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  return { hours, minutes, seconds: remainingSeconds }
}

const main = async () => {
  const userSeconds = await readNumber("Enter a number of seconds:")
  if (!isNaN(userSeconds)) {
    const result = convertSeconds(userSeconds)
    print(`${userSeconds} seconds is equivalent to:`)
    print(`Hours: ${result.hours}`)
    print(`Minutes: ${result.minutes}`)
    print(`Seconds: ${result.seconds}`)
  } else
    print("Por favor, ingresa un número válido de segundos.")
}

module.exports = main
