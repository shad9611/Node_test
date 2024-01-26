// Escriba un algoritmo que tome dos strings del usuario y determine si ambos
// strings son anagramas el uno del otro.

const { read, readNumber, print } = require('../helpers')

const esAnagrama = ( str1 , str2 ) =>{
  const palabra1 = str1.toLowerCase().split("").sort().join("")
  const palabra2 = str2.toLowerCase().split("").sort().join("")
  return palabra1 === palabra2
  
}

const main = async () => {
  const str1 =  await read("Ingresa la primera palabra")
  const str2 = await read("Ingresa la segunda palabra")
  const result = esAnagrama(str1, str2)
  if(result)
    print("la palabra es un anagrama")
  else
    print("la palabra no es un anagrama")
}

module.exports = main