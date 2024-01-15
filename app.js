const { readNumber, print } = require('./helpers')
const getChallenges = require('./challenges')

const challenges = getChallenges()

const getChallenge = number => challenges[number - 1]

const main = async () => {
  const number = await readNumber('Elige un desafio entre el 1 y el 60:')
  const challenge = getChallenge(number)
  print('=============================================================')
  print(challenge.description)
  print('=============================================================')
  await challenge.program()
  print()
  print()
  return main()
}

print('Presiona <Ctrl + C> para salir')
main()
