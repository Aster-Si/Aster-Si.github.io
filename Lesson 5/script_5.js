// while (true) {
//     let season = +prompt("Введіть число місяця")

//     switch (season){
//         case 1:
//         case 2:
//         case 12:
//             alert('Це зима')
//             break;
//         case 3:
//         case 4:
//         case 5:
//             alert('Це весна')
//             break;
//         case 6:
//         case 7:
//         case 8:
//             alert('Це літо')
//             break;
//         case 9:
//         case 10:
//         case 11:
//             alert('Це осінь')
//             break;

//         default:
//             alert('Це неможливо')
//             break;
//     }
// }

// let number = prompt("Введіть число");
// function checkPrimeNumber(number) {
//     let isPrime = true;

//     if (number === 1) {
//         console.log("Число №1 не є ні простим, ні складеним числом");
//     } else if (number > 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(number + " Це просте число");
//         } else {
//             console.log(number + " Це не просте число");
//         }
//     } else {
//         console.log("Будь ласка, введіть додатне ціле число, більше 1");
//     }
// }


// checkPrimeNumber(number) 


function max() {
    let maxNumber = arguments[0]; // Припускаємо, що перший аргумент найбільший
    
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > maxNumber) {
            maxNumber = arguments[i]; // Оновлюємо максимальне значення
        }
    }
    
    return maxNumber;
}

console.log(max(5, -2)); 
console.log(max(5, -2, 30, 6)); 

