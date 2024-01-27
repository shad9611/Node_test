// imprima los números del 1 al 100

const { read, readNumber, print } = require('../helpers')

const loop = (n = 1) => n < 101 ? [n, ...loop(n + 1)] : []

const main = async () => print (loop())

module.exports = main
