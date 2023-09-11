let fizzbuzz = []

function write () {
    for (let i = 1; i <= 100; i++)
    if ([i]%3 === 0) {
        if ([i]%5 === 0) {
            fizzbuzz.push("FizzBuzz")
            } else {
            fizzbuzz.push("Fizz")}}
    else if ([i]%5 === 0) {
        fizzbuzz.push("Buzz")
    } else {
        fizzbuzz.push(i)
    }
}

write()
let solution = fizzbuzz.join("")
console.log(solution)

// let count = fizzbuzz.reduce(function (value, value2) {
//     return (
//         value[value2] ? ++value[value2] :(value[value2] = 1),
//         value
//     );
// }, {});
 
// console.log(count);