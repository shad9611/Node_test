const isInt = value => {
  const parsedValue = parseInt(value)
  return !isNaN(parsedValue)
}

const readInput = () => {
  return new Promise((resolve, reject) => {
    process.stdin.setEncoding('utf-8')
    const onData = data => {
      process.stdin.removeListener('data', onData)
      process.stdin.removeListener('error', onError)
      resolve(data.trim())
    }
    const onError = err => {
      process.stdin.removeListener('data', onData)
      process.stdin.removeListener('error', onError)
      reject(err)
    }

    process.stdin.once('data', onData)
    process.stdin.once('error', onError)
  })
}

const isValidInput = value => {
  if (!isInt(value)) return false
  return parseInt(value)
}

const read = async label => {
  print(label)
  return await readInput()
}

const readNumber = async label => {
  print(label)
  const number = await readInput()
  if (!isValidInput(number)) return await readNumber(label)
  return parseInt(number)
}

const print = console.log

module.exports = {
  isInt,
  read,
  readNumber,
  print
}
