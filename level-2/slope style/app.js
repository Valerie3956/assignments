// green challenge

function collectAnimals(...animals) {
  return animals
}

;
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

//Use destructuring to use the property names as variables. Destructure the object in the parameter:

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));

// Use array destructuring to make this code ES6:

function returnFirst(items){
  const [firstItem] = items; 
  return firstItem
}

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const[firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))


//blue challenge

//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {
return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//black diamond

//Try to make the following function more ES6y:

function product(a, b, c, d, e) {
  let numbers = [a, b, c, d, e];
return numbers.reduce((acc, number) =>  acc * number, 1)

}


console.log(product(1, 2, 3, 4, 5))

//Make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, ...elements) {
  return [...elements, ...array]
}

console.log(unshift([6, 7, 8, 9, 10], 1, 2, 3, 4, 5))

//double black diamond challenge
//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

function populatePeople(names){
  return names.map(function(name){
      let[firstName, lastName] = name.split(" ")
      return {
          firstName,
          lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]