// // Завдання №1

// // Створіть порожній об'єкт person.
// const person = {};

// // Додайте властивість firstName зі значенням Ivan.
// person.firstName = 'Ivan';

// // Додайте властивість secondName зі значенням Ivanov.
// person.secondName = 'Ivanov';

// // Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
// person.showData = function() {
//  console.log(this.firstName + ' ' + this.secondName);
// };

// // Скопіюйте об'єкт person в об'єкт newPerson.
// const newPerson = Object.assign({}, person);

// // Поміняйте в newPerson властивість firstName на Petro.
// newPerson.firstName = 'Petro';

// // Поміняйте в newPerson властивість secondName на Petriv.
// newPerson.secondName = 'Petriv';

// // Запустіть метод showData з person і newPerson, результат має бути наступним:
// person.showData(); // має повернути Ivan Ivanov
// newPerson.showData(); // має повернути Petro Petriv


// Завдання №2
// Створіть порожній об'єкт MyMath.
const MyMath = {};

// Створіть властивість 'a' зі значенням 5.
MyMath.a = 5;

// Створіть властивість 'b' зі значенням 2.
MyMath.b = 2;

// Створіть 4 методи які будуть робити наступне:

// a. sum – обчислює суму a+b та повертає значення console.log().
MyMath.sum = function() {
 console.log(this.a + ' + ' + this.b + ' = ' + (this.a + this.b));
};

// b. multiplication – обчислює множення a*b та повертає значення console.log().
MyMath.multiplication = function() {
 console.log(this.a + ' * ' + this.b + ' = ' + (this.a * this.b));
};

// c. division – обчислює ділення a/b та повертає значення console.log().
MyMath.division = function() {
 console.log(this.a + ' / ' + this.b + ' = ' + (this.a / this.b));
};

// d. subtraction – обчислює віднімання a-b та повертає значення console.log().
MyMath.subtraction = function() {
 console.log(this.a + ' - ' + this.b + ' = ' + (this.a - this.b));
};



// Запустіть кожен з цих методів, результат має бути наступним:
MyMath.sum(); // має повернути 5 + 2 = 7
MyMath.multiplication(); // має повернути 5 * 2 = 10
MyMath.division(); // має повернути 5 / 2 = 2.5
MyMath.subtraction(); // має повернути 5 - 2 = 3
