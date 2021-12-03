import { readFileSync } from 'fs'

const txt = readFileSync(`${__dirname}/input.txt`, 'utf8')
const input = txt.split('\n')

let x = 0
let y = 0
let aim = 0

type CommandEnum = 'forward' | 'down' | 'up'

input.map(commandAndUnit => {
  const [ command, unit ] = commandAndUnit.split(' ') as [CommandEnum, number]

  const parsedInput = Number(unit)

  switch(command) {
    case 'forward':
      x += parsedInput
      y += (parsedInput * aim)
      break;
    case 'up':
      aim -= parsedInput
      break;
    case 'down':
      aim += parsedInput
    default:
      break;
  }
})

console.log(x * y)