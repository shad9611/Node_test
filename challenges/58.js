// Dado el siguiente array, imprimir en qué meses se ha superado
// la meta de los $6'000'000.00 y en que meses no.

const { read, readNumber, print } = require('../helpers')

const incomes = [
  { month: 'Enero',      income: 2988261 },
  { month: 'Febrero',    income: 5095426 },
  { month: 'Marzo',      income: 8950027 },
  { month: 'Abril',      income: 6670295 },
  { month: 'Mayo',       income: 6716647 },
  { month: 'Junio',      income: 8288384 },
  { month: 'Julio',      income: 3603023 },
  { month: 'Agosto',     income: 1120317 },
  { month: 'Septiembre', income: 6113357 },
  { month: 'Octubre',    income: 2329583 },
  { month: 'Noviembre',  income: 9023389 },
  { month: 'Diciembre',  income: 9813673 }
]

const main = async () => {
  print('Los meses que han superado la meta son: ')
  print('Los meses que no han superado la meta son: ')
}

module.exports = main
