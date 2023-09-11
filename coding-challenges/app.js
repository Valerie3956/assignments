
// const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// function book(title, author, year){
// getDetails(){
//     return title + author + year
// }
// }

// console.log(book1.getDetails())

function Book(title, author, year) {
    this.bookTitle = title
    this.bookAuthor = author
    this.bookYear = year
    this.getDetails = function(){
        return "Title: " + this.bookTitle + ", Author: " + this.bookAuthor + ", Year: " + this.bookYear
        }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// function getDetails(){
// Book.title + "," + Book.author + "," + Book.year
// }

console.log(book1.getDetails())
console.log(book2.getDetails())

// Write a function called findEvenNumbersthat takes in an array of numbers and returns a new array containing only the even numbers from the input array. Can you implement this function using arrays and loops? Remember to consider the condition for determining even numbers.  Use the below code to test your solution.

// function findEvenNumbers(arr) {
//     // Your code here
//     }

// % === 1 odd


// let input = [ ]

function findEvenNumbers(arr){//arr is a parameter, arr is a placeholder
    const evenNumbers = []
    for (i = 0; i < arr.length; i++){
        const num = arr[i]
        if (num % 2 === 0) {
        evenNumbers.push(num)

    }
}
return evenNumbers
}
console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10] this array is our argument, it is being passed in as the value for the parameter
console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]

//Vocabulary
//1. method
//2. argument
//3. parameter
//4. if statement
//5. for loops(loop)
//6. index
//7. .push(method) - definition here

function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}


var jeep = new Car("Jeep", "Cherokee", 1995)
console.log(jeep)


// RICK ARRAY CHALLENGE

function separateArrays (arr) {
    let numbers = []
    let strings = []
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number") {
            numbers.push(arr[i])
        }
        else {strings.push(arr[i])}
    }
    console.log(numbers)
    console.log(strings)
}

separateArrays([1, "Val", "Rick", 23, 15, "Roy", "Claire"])

//SECOND ARRAY CHALLENGE

function combineArrays (...arr) {
let combinedArr = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        combinedArr.push(arr[i][j])
    }
}
console.log(combinedArr)

}

combineArrays([1, 2, 3, 4, 5],[6, 7, 8, 9, 10], [11, 12, 13, 14, 15])

//THIRD ARRAY CHALLENGE

function combineArrays (...arr) {
    let combinedArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            combinedArr.push(arr[i][j])
        }
    }
    function removeDuplicates(combinedArr){
        return combinedArr.filter((item, index) => combinedArr.indexOf(item) === index)
    }
    console.log(removeDuplicates(combinedArr))
    
    }
    
    combineArrays([1, 2, 3, 4, 5],[6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [20, 20, 21, 21, 22, 22])

    //PROBLEM SOLVING PRACTICE

// Write a function that takes an array of numbers and returns the largest (without using Math.max())



function largest(arr) {
    arr.sort(function (a , b) {return b -a})
    console.log(arr[0])
}


// test data
console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

//Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings(arr, query){
   let filteredArray =  arr.filter((element) => element.includes(query))
   return filteredArray
}

// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    if (num1%num2 === 0) {return true} 
    else {return false}
}


// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
