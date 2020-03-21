// let avgTemp = []

// avgTemp[0] = 31.9
// avgTemp[1] = 35.3
// avgTemp[2] = 42
// avgTemp[3] = 38
// avgTemp[4] = 25.5

// console.log(avgTemp.length)

// let daysOfWeek = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Sartuday',
// ]

//daysOfWeek.map(day => console.log(day))

// for (let i = 0; i < daysOfWeek.length; i++) {
//   console.log(daysOfWeek[i])
// }

// let fibonacci = [0, 1, 1]

// for (let i = 3; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }

// // console.log(fibonacci)

// for (let i = 3; i < fibonacci.length; i++) {
//   console.log(fibonacci[i])
// }

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers[numbers.length] = 10
// numbers[numbers.length] = 11

// // Add no fim do Array
// numbers.push(12, 13)

// // Add no Inicio do Array
// numbers.unshift(-1)

// // Remove no fim do Array
// numbers.pop()

// // Remove no inicio do Array
// numbers.shift()

// aparti do (x) elemento retire (n) elementos
// numbers.splice(3, 1)

// console.log(numbers)

// Arrays bidimensionais

// let avgTempWeek = []
// let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
// let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

// avgTempWeek[0] = avgTempWeek1
// avgTempWeek[1] = avgTempWeek2

// for (let i = 0; i < avgTempWeek.length; i++) {
//   for (let j = 0; j < avgTempWeek[i].length; j++) {
//     console.log(avgTempWeek[i][j])
//   }
// }

// Arrays Tridimensionais

let month = []

let firstWeeks = []
let lastWeeks = []

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]
let avgTempWeek3 = [13, 45.2, 29, 22, 24, 21.1, 23]
let avgTempWeek4 = [19, 39, 31, 24, 15, 27, 33.8]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

for (let i = 0; i < month.length; i++) {
  for (let j = 0; j < month[i].length; j++) {
    for (let l = 0; l < month[i][j].length; l++) {
      console.log(month[i][j][l])
    }
  }
}
