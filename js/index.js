// Iteration 1: Names and Input

let hacker1 = 'simon'

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'michele'

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops

let driverNameAsLetters = ''

for (let i = 0; i <= hacker1.length-1; i++){
    (driverNameAsLetters = driverNameAsLetters + hacker1[i] + ' ')
}
console.log(driverNameAsLetters.toUpperCase())

let navNameReversed = ''

for (let i = hacker2.length -1; i >= 0; i--) { 
    navNameReversed += hacker2[i];
}
 console.log(navNameReversed)


if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker2 > hacker1){
  console.log(`The driver's name goes first.`)
} else {console.log(`What?! You both have the same name?`)}

// Bonus 1

const lorumIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est ligula, venenatis eget tristique in, pellentesque at lacus. Aliquam non arcu feugiat, eleifend orci varius, egestas nunc. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut feugiat laoreet bibendum. Nunc pellentesque convallis augue, at elementum purus molestie eu. Proin vitae massa at urna cursus congue at vitae velit. Aliquam pharetra arcu ac ullamcorper sodales. Donec lectus urna, dignissim ut felis quis, maximus aliquam nisl. Proin vestibulum sodales lorem. Suspendisse in tortor ullamcorper arcu varius consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vestibulum eleifend enim. Nulla accumsan mauris id sapien elementum, in placerat magna vestibulum. Donec ullamcorper dictum nunc. Donec nec rutrum ipsum, eu sollicitudin lacus. Morbi hendrerit lectus sed elit posuere ullamcorper. Proin a nunc eget nisi mattis dictum. Donec malesuada neque in consequat varius. Quisque interdum id enim posuere varius. Fusce rutrum accumsan est ac rhoncus. Pellentesque mattis id tellus vel pellentesque. Fusce pharetra tempor euismod. Donec a commodo ex. Vestibulum a mollis odio. Praesent varius, nibh et venenatis egestas, quam enim elementum diam, vitae pretium turpis lacus at libero. Proin nec lorem pretium, laoreet orci sit amet, tempus ex. Cras accumsan ligula in purus molestie venenatis. Morbi accumsan erat vitae arcu pulvinar dapibus.'


let words = lorumIpsum.split(' ').length;
console.log(words)

let et = lorumIpsum.split(' et ').length;
console.log(et)

// Bonus 2 

let phraseToCheck = 'Amor, Roma'
let justLetters = phraseToCheck.replace(/[^a-z]/gi, '');

let phraseReversed = ''

for (let i = justLetters.length -1; i >= 0; i--) { 
    phraseReversed += justLetters[i];
}
// console.log(phraseReversed)

if (justLetters.lowerCase == phraseReversed.lowerCase){
  console.log(`It is a Palindrome!`)
} else {
  console.log(`Not a Palindrome`)
}
//console.log(justLetters)