// Escriba un algoritmo que tome como input del usuario un mesaje
// e imprima en pantalla el mismo mensaje encriptado con el cifrado ROT13:
// https://en.wikipedia.org/wiki/ROT13

const { read, readNumber, print } = require('../helpers')

const encryptROT13 = (message) => {
  return message.replace(/[a-zA-Z]/g, (c) => {
    const offset = c <= 'Z' ? 65 : 97
    return String.fromCharCode((c.charCodeAt(0) - offset + 13) % 26 + offset)
  })
}

const main = async () => {
    const message = await read("Ingresa texto")
    const encryptedMessage = encryptROT13(message)
      print(`el mensaje encriptado es ${encryptedMessage}`)
}

module.exports = main
