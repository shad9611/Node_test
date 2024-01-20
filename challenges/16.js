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
function devolverCambio1(valor, denominacion) {
  let numIter = 1 + denominacion.length;
  let cambio = denominacion.map(() => 0);
  let valorCambio = 0;

  while (valorCambio < valor) {
      numIter++;

      let j = 0;

      // Ajustar la lógica para considerar denominacion de $10, $5, $2 y $1
      if (valorCambio + 100 <= valor) {
          j = denominacion.indexOf(100);
      } else if (valorCambio + 5 <= valor) {
          j = denominacion.indexOf(5);
      } else if (valorCambio + 1 <= valor) {
          j = denominacion.indexOf(1);
      } else {
          // Si ninguna de las denominacion anteriores es válida, selecciona la más grande
          for (j = 0; j < denominacion.length; j++) {
              numIter++;
              if (valorCambio + denominacion[j] <= valor) break;
          }
      }

      cambio[j]++;
      valorCambio += denominacion[j];
  }

  return cambio;
}

const main = async () => {
  const venta = parseFloat(await readNumber("El total a pagar es: "));
  const cash = parseFloat(await readNumber("Paga con: "));
  const total = cash - venta;

  print(`El total a pagar es: ${venta} y vas a pagar con: ${cash}.`);
  print(`Tu cambio es: ${total}`);

  // Utilizar devolverCambio1 con tus denominacion
  const denominacion = [100, 20, 10, 5, 2, 1]; // Billetes y denominacion
  const cambio = devolverCambio1(total, denominacion);

  for (let i = 0; i < denominacion.length; i++) {
      if (cambio[i] > 0) {
          const tipo = denominacion[i] >= 10 ? 'billete' : 'moneda';
          print(`${cambio[i]} ${tipo}${cambio[i] > 1 ? 's' : ''} de $${denominacion[i]}`);
      }
  }
};

module.exports = main
