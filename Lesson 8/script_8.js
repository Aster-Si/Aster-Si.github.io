// let word = prompt('Введіть слово');
// let Split_Word = word.charAt(0).toUpperCase() + word.slice(1);

// alert(Split_Word);

// let string = prompt("Введіть слово");
// alert(string[0].toUpperCase() + string.slice(1).toLowerCase());

// let word = prompt ('Write your name')
// let first = word[0].toUpperCase()
// for (i=1; i<word.length; i++) {
//     first += word[i].toLowerCase()
//     console.log (word[i]);
// }
// alert(first);

// Завдвння №1

// let string_n = prompt ("Введіть текст з пробілами, а я порахую пробіли")
// let caunt = 0;
// for (let i=0; i<string_n.length; i++) {
//     if (string_n[i] == " ") {
//         caunt += 1;
//     }
// } 

// alert(`У вас ${caunt} пробілів :)`)

// Завдання №2

// let email = prompt ('Введіть email')
// function validateEmail(email) {
//     var atIndex = email.indexOf('@');
//     if (atIndex > 0 && atIndex < email.length - 1) {
//       alert ('Email введено правильно');
//     } else {
//       alert ('Email введено неправильно');
//     }
//   }
//   validateEmail(email)


// Завдання №3

//   let mail = prompt ('Ведіть текст з кількістю HTML, я їх порахую')
//   let count = 0;
//   let dubler = 'HTML';
//   for (let i=0; i<mail.length; i++) {
// if (mail.slice(i, i + dubler.length) == dubler){
//   count += 1;
// }
//   }
//   alert(`У вас ${count} згадувань слова ${dubler}`)


  // Завдання №3

  function domen(url) {
    let start = url.indexOf('//');
    if (start !== -1) {
      url = url.slice(start + 2);
    }
    let end = url.indexOf('/');
    if (end !== -1) {
      url = url.slice(0, end);
    }
    return url;
  }
  

  let name_domen = domen("https://www.google.com");
  let name_dome = domen("http://www.w3schools.com");
  console.log(name_domen);
  console.log(name_dome);
