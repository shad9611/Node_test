// Imprima todos los números pares que hay entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const loop = (n = 2) => n < 101 ? [n, ...loop(n + 2)] : []

const main = async () =>  print(loop())

module.exports = main
