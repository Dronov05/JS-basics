'use strict'

//***  1 Переменные



// const firstName = 'Maxim'
// const lastName = 'Dronov'
// let age = 32

//***  2 Мутирование

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const sum = prompt('Введите число')
// alert('Вы ввели число: ' + sum)


//*** 3 Операторы

// const currentYear = 2023
// const birthYear = 1991

// const age = currentYear - birthYear
// console.log(age)

// let a = 10
// let b = 5
// let c = a + b
// console.log(c)
// c += a
// console.log(c)


//*** 4 Типы данных

// const isProgrammer = true
// const name = 'Max'
// const age = 32
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)


//*** 5 Приоритет операторов
// const fullAge = 32
// const birthYear = 1991
// const currentYear = 2023

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)



//*** 6 Условные операторы

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находится в разработке')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = false

// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово!')
// }

//* Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')


// const num1 = 42
// const num2 = '42'
// console.log(num1 == num2)
// console.log(num1 === num2) //Рекомендуется использовать тройное равно ===


//*** 7 Булевая логика



//*** 8 Функции

// function calculateAge(year) {
//    return 2023 - year
// }

// const myAge = calculateAge(1991)
// console.log(myAge);

// function logInfoAbout(name, year) {
//    const age = calculateAge(year)
//    if (age > 0) {
//       console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
//    } else {
//       console.log('Год указан неверно!')
//    }

// }


// logInfoAbout('Максим', 1991)
// logInfoAbout('Илона', 1995)
// logInfoAbout('Илона', 2024)

// 1:28:57

function pow(x, n) {
   let pow = x ** n
   console.log(pow);
   return pow
}

let x = prompt('x?', '')
let n = prompt('n?', '')
if (n < 1) {
   alert(`Степень ${n} не поддерживается, используйте натурально число`)
} else {
   alert(pow(x, n))
}
'10'
   - 1
1
2
6
'9px'
'$45'
2
NaN
' -9 5'
   - 14
1
NaN
   - 2




