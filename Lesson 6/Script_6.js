


// Завдання №1
// const fib = (num) => {
//     let a = 1;
//     let b = 0;
//     let temp;
  
//     while (num > 0) {
//       temp = a;
//       a = a + b;
//       b = temp;
//       console.log(b);
//       num--;
      
//     }
//   }
  
//   fib(prompt('Введи чичло для послідовності Фібаначі'))
 


// Завдання №1 (удосконалене)
// const fib = (num) => {
//   let a = 1
//   let b = 0
//   let temp;
//   let text = ' ';

//   while (num > 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     text += '"' + b + '"' + ' '
    
//     num--;

//   }
//   console.log(text)
// }
// fib(prompt('Число :)'))




// Завдання №2 (1)

// const calculateGeometricProgressionSumByLoop = function(n, q) {
//   let sum = 0;
//   let current = 1;
//   for (let i = 0; i < n; i++) {
//     sum += current;
//     current *= q;
//     console.log(current/q)
//   }
//   console.log('Sum: '+sum)
//   return sum;
// };

// calculateGeometricProgressionSumByLoop(5, 2)

// Функція приймає два аргументи: кількість чисел прогресії і її знаменник.
//  Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5, а знаменник – 2 
// (тому що кожне наступне число прогресії домножується на 2). 
// Результат, який має повернути функція для даної прогресії 31.

// Завдання №2 (2)

// const calculateGeometricProgressionSumByFormula = function(n, q) {
//   const b1 = 1;
//   console.log (b1 * (1 - Math.pow(q, n)) / (1 - q));
// };

// calculateGeometricProgressionSumByFormula(4, 3)



// let funGeoPro = (a, n) => {
//   let num = 0
//   let corent = 1
//   for (let i=0; i < a; i++) {
//   num += corent*=n
//   console.log(corent/n)
//   }
// }

// funGeoPro(4,2)





  // Завдання №3
let start = prompt('Ведіть початкове число');
let end = prompt('Введіть остаточне число');
const simpleNumber = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result.join(', '));
};

const isPrime = (num) => {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
};

simpleNumber(start, end)








