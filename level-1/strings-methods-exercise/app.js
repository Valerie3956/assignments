
// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.


// capilizeAndLowercase("HelLo") // => "HELLOhello"

function capitalizeAndLowercase(a){
    let uppercase = a.toUpperCase()
    let lowercase = uppercase.toLowerCase()
    console.log(uppercase.concat(lowercase))   
}

capitalizeAndLowercase("HelLo")
// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// > Hint: You'll need to use Math.floor().
// >
function findMiddleIndex(a){
let length = a.length
let middleIndex = Math.floor(length/2)
console.log(middleIndex)
}

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5


// 
// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

function returnFirstHalf(a){
    let length = a.length
    let middleIndex = Math.floor(length/2)
    firstHalf = a.slice(0, middleIndex)
    console.log(firstHalf)
}

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// > Hint: If your string length is odd, use Math.floor() to round down.

function capitalizeAndLowercase2(a){
    let length = a.length
    let middleIndex = Math.floor(length/2)
    let firstHalf = a.slice(0, middleIndex).toUpperCase()
    let secondHalf = a.slice(middleIndex).toLowerCase()
    let result = firstHalf.concat(secondHalf)
    console.log(result)
}

capitalizeAndLowercase2("Hello") // => "HEllo"
capitalizeAndLowercase2("Hello World") // => "HELLO world"

// ### **Optional Code Challenge**

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// > 

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

function capitalize(a){
    let sentenceArr = []
    let array = a.split(" ")
    for ( let i = 0; i < array.length; i++){
        let letters = array[i].split("")
        let capital = letters[0].toUpperCase()
        let restOfWord = array[i].slice(1)
        let word = capital.concat(restOfWord)
        sentenceArr.push(word)
    // let sentence = word.join(" ")
   
    // console.log(sentence)
}
sentence = sentenceArr.join(" ")
console.log(sentence) 
}

capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"