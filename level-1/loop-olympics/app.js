// 1. Write a for loop that prints to the console the numbers 0 through 9.
console.log("PRELIMINARY 1")

for (var i = 0; i < 10; i++){
console.log(i)
}


// 2. Write a for loop that prints to the console 9 through 0.
console.log("PRELIMINARY 2")

for (var i = 9; i > 0; i--){
console.log(i)
}
// 3. Write a for loop that prints these fruits to the console.`**
console.log("PRELIMINARY 3")

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//1. Write a for loop that will push the numbers 0 through 9 to an array.
console.log("BRONZE 1")

let array = []
for (var i = 0; i < 10; i++){
    array.push(i)
    }

console.log(array)

//2. Write a for loop that prints to the console only even numbers 0 through 100.
console.log("BRONZE 2")

for (var i = 0; i <= 100; i++){
    if (i%2 === 0){
        console.log(i)
    } else {}
    }

//3. Write a for loop that will push every other fruit to an array.
console.log("BRONZE 3")

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let fruitArr = []

for (var i = 0; i < fruits.length; i++){
    if (i%2 === 1){
        fruitArr.push(fruits[i])
    } else {}
}

console.log(fruitArr)



const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  
// 1. Write a loop that will print out all the names of the people of the people array
console.log("SILVER 1")
let names = []

for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
}
console.log(names)

// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
console.log("SILVER 2")

let occupations = []

for (var i = 0; i < peopleArray.length; i++){
    occupations.push(peopleArray[i].occupation)
}
console.log(occupations)

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
console.log("SILVER 3")

let namesSilver = []
let occupationsSilver = []

for (var i = 0; i < peopleArray.length; i++){
    if (i%2 === 0) {
        namesSilver.push(peopleArray[i].name)
    } else {
        occupationsSilver.push(peopleArray[i].occupation)
    }
}

console.log(namesSilver)
console.log(occupationsSilver)



// 1. Create an array that mimics a grid like the following using nested `for` loops:

// ```jsx
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

console.log("GOLD 1")

let gold1Arr = []

for ( var i = 0; i < 3; i++){ 
    gold1Arr.push([])
    for ( var j = 0; j < 3; j++){
        gold1Arr[i].push(0)}
    }


console.log(gold1Arr)
// 2.Create an array that mimics a grid like the following using nested `for` loops:

// ```jsx
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

console.log("GOLD 2")

let gold2Arr = []
for (var i = 0; i < 3; i++){
    gold2Arr.push([])
    for (var j = 0; j < 3; j++){
        gold2Arr[i].push(i)
    }
}

console.log(gold2Arr)

// 3.Create an array that mimics a grid like the following using nested `for` loops:

// ```jsx
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

console.log("GOLD 3")


let gold3Arr = []
for (var i = 0; i < 3; i++){
    gold3Arr.push([])
    for (var j = 0; j < 3; j++){
        gold3Arr[i].push(j)
    }
}

console.log(gold3Arr)

// 1. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.

console.log("GOLD 4")



let gold4Arr = []
for (var i = 0; i < 3; i++){
    gold4Arr.push([])
    for (var j = 0; j < 3; j++){
        gold4Arr[i].push("x")
    }
}

console.log(gold4Arr)