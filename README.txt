Completa los desafíos que están en la carpeta ./challenges/

Ejecuta el programa con el comando:

node app.js

Las funciones read() y readNumber() deben ejecutarse con la palabra await para
funcionar correctamente, además, la función en la que se usen debe inciar con
la palabra async:

const func = async () => {
  const text = await read('Ingresa un mensaje: ')
  const number = await readNumber('Ingresa un número: ')
}
