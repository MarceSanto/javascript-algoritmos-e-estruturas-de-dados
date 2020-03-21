//Exercício decimal para binário

// function dec2bin(decNumber) {
//   let restStack = []
//   let rest = ''
//   let binaryString = ''

//   while (decNumber > 0) {
//     rest = Math.floor(decNumber % 2)
//     restStack.push(rest)
//     decNumber = Math.floor(decNumber / 2)
//   }

//   while (restStack.length > 0) {
//     binaryString += restStack.pop().toString()
//   }

//   return binaryString
// }

// console.log(dec2bin(23))

// Exercício conversão de base

function baseConverte(decNumber, base) {
  let restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()]
  }

  return baseString
}

console.log(baseConverte(123, 16))
