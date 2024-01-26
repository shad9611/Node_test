// Escriba un algoritmo que tome del usuario el año, mes y día de un producto
// y determine sí la fecha de expiración ya se ha excedido.

const { read, readNumber, print } = require('../helpers')

const checkExpiration = (year, month, day) => {
  const today = new Date()
  const expirationDate = new Date(year, month - 1, day)
  return expirationDate < today
    ? "El producto ha caducado."
    : expirationDate.toDateString() === today.toDateString()
    ? "El producto caduca hoy."
    : "El producto aún no ha caducado."
}

const main = async () => {
  const expirationYear = await readNumber("Ingrese el año de caducidad: ")
  const expirationMonth = await readNumber("Ingrese el mes de caducidad: ")
  const expirationDay = await readNumber("Ingrese el día de caducidad: ")
  if (expirationYear !== null && expirationMonth !== null && expirationDay !== null){
    const result = checkExpiration(expirationYear, expirationMonth, expirationDay)
    print(result)
    }else
    print("Por favor, ingrese números válidos para la fecha de caducidad.")
}

module.exports = main
