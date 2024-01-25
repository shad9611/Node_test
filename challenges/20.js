// Escriba un algoritmo que pida al usuario el año, mes y día de nacimiento y
// calcule la edad actual de la persona.
// Si la persona tiene menos de 1 año de vida, imprima la edad en número de días

const { read, readNumber, print } = require('../helpers')

const calculateAge = (birthYear, birthMonth, birthDay) => {
  const today = new Date()
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay)
  const ageInMilliseconds = today - birthDate
  const ageInYears = new Date(ageInMilliseconds).getFullYear() - 1970
  return ageInYears
}

const calculateAgeInDays = (birthYear, birthMonth, birthDay) => {
  const today = new Date()
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay)
  const ageInMilliseconds = today - birthDate
  const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24)
  return ageInDays
}

const main = async () => {
  try {
    const birthYear = await readNumber("Ingresa año de nacimiento: ")
    const birthMonth = await readNumber("Ingresa mes de nacimiento: ")
    const birthDay = await readNumber("Ingresa día de nacimiento: ")
    const age = calculateAge(birthYear, birthMonth, birthDay)
    if (age < 1) {
      const ageInDays = calculateAgeInDays(birthYear, birthMonth, birthDay)
      print(`La edad actual es menos de 1 año y equivale a aproximadamente ${Math.round(ageInDays)} días.`)
    } else {
      print(`La edad actual es: ${age} años.`)
    }
  } catch (error) {
    console.error("Error al leer la entrada:", error)
  }
}

module.exports = main
