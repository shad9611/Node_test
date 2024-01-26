// Escriba un algoritmo que al ingresar un string, determine si es un palindrómo

const { read, readNumber, print } = require('../helpers')

const palindrome = str =>{
  if(str.length === 0 || str.length === 1){
    print("la palabra es palindromo")
    return
  }
  if(str[0] != str[str.length - 1]){
    print("la palabra no es un palindromo")
    return
  }
  palindrome(str.slice(1, -1))
}

const main = async () => {
  const letter = await read("Ingresa una palabra")
  palindrome(letter)
}

module.exports = main
