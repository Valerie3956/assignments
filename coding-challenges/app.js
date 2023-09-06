
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