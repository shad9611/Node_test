// Escriba un algoritmo que tome del usuario el año, mes y día de un producto
// y determine sí la fecha de expiración ya se ha excedido.

const { read, readNumber, print } = require('../helpers')

const checkExpiration = (year, month, day) => {
  const today = new Date()
  const expirationDate = new Date(year, month - 1, day) // Meses en JavaScript van de 0 a 11

  return expirationDate < today
    ? "El producto ha caducado."
    : expirationDate.toDateString() === today.toDateString()
    ? "El producto caduca hoy."
    : "El producto aún no ha caducado."
}

const readNumberAsync = async (message) => {
  const userInput = await read(message)
  const number = parseFloat(userInput)
  return isNaN(number) ? null : number
}

const main = async () => {
  try {
    const expirationYear = await readNumberAsync("Ingrese el año de caducidad: ")
    const expirationMonth = await readNumberAsync("Ingrese el mes de caducidad: ")
    const expirationDay = await readNumberAsync("Ingrese el día de caducidad: ")

    if (expirationYear !== null && expirationMonth !== null && expirationDay !== null) {
      const result = checkExpiration(expirationYear, expirationMonth, expirationDay)
      print(result)
    } else {
      print("Por favor, ingrese números válidos para la fecha de caducidad.")
    }
  } catch (error) {
    console.error("Error al leer la entrada:", error)
  }
}
module.exports = main
