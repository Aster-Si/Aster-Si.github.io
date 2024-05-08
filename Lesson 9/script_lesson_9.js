// function NuM(num) {
//     let nu = Number(num)
//     console.log(nu);
// }


// NuM(0x11)
// NuM(0x111)
// NuM(0x101)
// NuM(0x011)
// NuM(0x0011)

// let n = 8;
// n--
// console.log(n)

// let num = 17999.97
// console.log(num.toLocaleString('de-De', {style: 'currency', currency: 'EUR'}));
// console.log(num.toLocaleString('us-Us', {style: 'currency', currency: 'USD'}));
// console.log(num.toLocaleString('ua-Ua', {style: 'currency', currency: 'UAH'}));



// Завдання №1
// Напишіть функцію getArea(number), яка обчислює площу круга. Для визначення площі використовуйте Math. 
// В залежності від того що передали в функцію має виводити наступні повідомлення:

// Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть радіус!




// function getArea(number) {
//     if (number == '' || number === undefined || number == ' ') {
//         return "Будь ласка, введіть радіус!";
//     } else if (isNaN(number)) {
//         return "Повинно бути числове значення.";
//     } else {
//         const radius = parseFloat(number);
//         const area = Math.PI * Math.pow(radius, 2);
//         return `Площа дорівнює ${area} квадратних одиниць.`;
//     }
// }

// const radius = prompt('Введіть число радіусу кола, я порахую площу кола!');
// const result = getArea(radius);
// alert(result);



// Завдання №2.

// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. 
// Для визначення кореня використовуйте Math. В залежності від того 
// що передали в функцію має виводити наступні повідомлення:

// Якщо передане число повертати - Квадратний корінь з стільки то 
// дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!

function getSqrt(number) {
    if (number === undefined) {
        return "Будь ласка, введіть число!";
    } else if (isNaN(number)) {
        return "Повинно бути числове значення.";
    } else if (number < 0) {
        return "Введіть додатнє число.";
    } else {
        const sqrt = Math.sqrt(number);
        return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
    }
}

// Приклади викликів функції
console.log(getSqrt(16));  // Квадратний корінь з 16 дорівнює 4.
console.log(getSqrt('string'));  // Повинно бути числове значення.
console.log(getSqrt(-1));  // Введіть додатнє число.
console.log(getSqrt());  // Будь ласка, введіть число!
console.log(getSqrt(4));  // Квадратний корінь з 16 дорівнює 4.

