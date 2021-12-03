import { readFileSync } from 'fs'

const txt = readFileSync(`${__dirname}/input.txt`, 'utf8')
const input = txt.split('\n')

let oxygenFilter = ''
let oxygenBinaries = [...input]

let c02Filter = ''
let c02Binaries = [...input]


input[0].split('').map((_, index) => {
  if (oxygenBinaries.length === 1 && c02Binaries.length === 1) return

  if (oxygenBinaries.length !== 1) {
    let zeros = 0
    let ones = 0

    oxygenBinaries.filter(binary => binary.startsWith(oxygenFilter)).map(binary => {
      const bit: number = Number(binary[index])

      bit === 0 ? zeros += 1 : ones += 1
    })

    if (zeros === ones || zeros < ones) {
      oxygenFilter += 1
    } else {
      // 0 is more common than 1
      oxygenFilter += 0
    }

    oxygenBinaries = [...oxygenBinaries.filter(binary => binary.startsWith(oxygenFilter))]
  }
  
  if (c02Binaries.length !== 1) {
    let zeros = 0
    let ones = 0

    c02Binaries.filter(binary => binary.startsWith(c02Filter)).map(binary => {
      const bit: number = Number(binary[index])
  
      bit === 0 ? zeros += 1 : ones += 1
    })

    if (zeros === ones || zeros < ones) {
      c02Filter += 0
    } else {
      c02Filter += 1
    }

    c02Binaries = [...c02Binaries.filter(binary => binary.startsWith(c02Filter))]
  }
})

console.log(parseInt(oxygenBinaries[0], 2) * parseInt(c02Binaries[0], 2))
