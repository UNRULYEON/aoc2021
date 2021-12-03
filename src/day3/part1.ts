import { readFileSync } from 'fs'

const txt = readFileSync(`${__dirname}/input.txt`, 'utf8')
const input = txt.split('\n')

let gammaBinary = ''
let epsilonBinary = ''

const getCommonBit = (index: number) => {
  let zero = 0
  let one = 0

  input.map(binary => {
    const bit: number = Number(binary[index])

    if (bit === 0) {
      zero += 1
    } else {
      one += 1
    }
  })

  return {
    common: one < zero ? 0 : 1,
    notCommon: one < zero ? 1 : 0
  }
}

input[0].split('').map((_, index) => {
  const { common, notCommon } = getCommonBit(index)

  gammaBinary += `${common}`
  epsilonBinary += `${notCommon}`
})

const gamma = parseInt(gammaBinary, 2)
const epsilon = parseInt(epsilonBinary, 2)

console.log(gamma * epsilon)