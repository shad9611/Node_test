// imprima los números del 1 al 100

const { read, readNumber, print } = require('../helpers')

const number = n => {
  if( n < 101 ){
    return [n, ...number(n + 1)]
  }
  return []
}
const main = async () => {
  const result = number(1)
  result.forEach(num => {
    print(`${num}`)
  })
}

module.exports = main
