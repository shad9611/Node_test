// Imprima todos los números primos que hay entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const loop = (n = 1) => n < 101 ? [n, ...loop(n + 2)] : []

const main = async () => print (loop())

module.exports = main
