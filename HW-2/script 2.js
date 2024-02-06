// let i = 997; 
// while (i >= 9999) { 
//     i=i+3
//     console.log(i);
// }


// let i = -1;
// count = 0;
// while (true) {
//     i=i+2;
//     count++
//     if (count >= 55) {
//         break
//     }
// console.log(i)
// }
// console.log(`Count: ${count}`)


// let i = 90;
// while (true) {
//     i=i-5
//     console.log(i)
//         if (i<=0){
//             break
//     }
// }

let i = 2;
count = 0;
while (i<=10000000) {
    
    document.write(`<h2>Loop ${i}</h2>`);
    i=i+i;
    count++;
    if (count >= 20){
        break
    }
}
console.log(`Loop ${count}`)
