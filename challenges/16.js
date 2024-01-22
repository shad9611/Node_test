// Escriba un algoritmo que capture del usuario, un valor númerico que
// represente el total de una venta y otro valor númerico que represente la
// cantidad en efectivo con que se desea cubrir ese costo. Debe devolver el
// cambio en moneda nacional priorizando la mayor denominación posible.
// Solo cubra el caso de valores enteros.
//
// Ejemplo:
//   para total = 394 y efectivo = 500, deberá imprimir:
//
// 1 billete de $100
// 1 moneda de $5
// 1 moneda de $1

const { read, readNumber, print } = require('../helpers')

const wxG = {
    redondear: (valor, decimales) => {
        const factor = Math.pow(10, decimales)
      return Math.round(valor * factor) / factor
    }
}
const devolverCambioRec = (valor, denominacion, cambio =
        Array(denominacion.length)
        .fill(0), valorCambio = 0,
        j = 0, numIter = 1) => {
    if (valorCambio < valor) {
        numIter++
    if (valorCambio + denominacion[j] <= valor) {
        cambio[j]++
        valorCambio += denominacion[j]
    } else {
        j++
        while (j < denominacion.length && valorCambio + denominacion[j] > valor) {
            numIter++
            j++
        }
        return devolverCambioRec(valor, denominacion, cambio, valorCambio, j, numIter)
    }
    return devolverCambioRec(valor, denominacion, cambio, valorCambio, j, numIter)
    }
    return { cambio, numIter }
}
const devolverCambio = (valor, denominacion) => {
    const resultado = devolverCambioRec(valor, denominacion)
    return resultado.cambio
}
const imprimirCambioRec = (cambio, denominacion, i = 0) => {
    if (i < denominacion.length) {
        if (cambio[i] > 0) {
            const tipo = denominacion[i] >= 10 ? 'billete' : 'moneda'
                print(`${cambio[i]} ${tipo}${cambio[i] > 1 ? 's' : ''} de $${denominacion[i]}`)
    }
    imprimirCambioRec(cambio, denominacion, i + 1)
    }
}
const main = async () => {
    const venta = parseFloat(await readNumber("El total a pagar es: "))
    const cash = parseFloat(await readNumber("Paga con: "))
    const total = wxG.redondear(cash - venta, 2)
    print(`El total a pagar es: ${venta} y vas a pagar con: ${cash}.`)
    print(`Tu cambio es: ${total}`)
    const denominacion = [500, 200, 100, 20, 10, 5, 2, 1]
    const cambio = devolverCambio(total, denominacion)
    imprimirCambioRec(cambio, denominacion)
}
module.exports = main
