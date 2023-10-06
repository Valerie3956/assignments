var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

cipher(input, shift)

function cipher(input, shift){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let encrypted = []
for (let i = 0; i < input.length; i++){
    if (alphabet.includes(input[i]) === false){
        encrypted.push(input[i])
    } else if ((alphabet.indexOf(input[i]) + shift) < 26) {
        encrypted.push(alphabet[(alphabet.indexOf(input[i]) + shift)])
    } else {
        encrypted.push(alphabet[(alphabet.indexOf(input[i]) + (shift - 26))])
    }
}
console.log(encrypted.join(""))
}