// Завдання №1

// Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.

// const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].

// function arrCopy(arr) {
//     return JSON.parse(JSON.stringify(arr));
//    }
   
//    const arr1 = arrCopy([1, 2, 3]); // Запише в змінну масив [1, 2, 3].
//    const arr2 = arrCopy([1, 2, 3, [10, 20]]); // Запише в змінну масив [1, 2, 3, [10, 20]].



// Завдання №2

// function arrToString(arr) {
//     return arr.map(String);
//    }
   
//    const arr1 = arrToString([1, 2, 3]); // arr1 will be ['1', '2', '3']
//    const arr2 = arrToString([10, 200, 3333]); // arr2 will be ['10', '200', '3333']



// Завдання №3

function getLength(arr) {
    let lengths = arr.map(item => item.length);
    return lengths;
  }
  
  const arr1 = getLength(['Ivan','Pavlo','Ira']); // Запише в змінну масив [4,5,3]
  const arr2 = getLength(['Oleksiy','Andriana']); // Запише в змінну масив [7,8]
