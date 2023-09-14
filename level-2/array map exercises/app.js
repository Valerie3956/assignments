//1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    return arr.map(num => num*2)
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  

//2) Take an array of numbers and make them strings

  function stringItUp(arr){
    return arr.map(num => `${num}`)
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
//3) Capitalize the first letter of each name and make the rest of the characters lowercase

// function capitalizeNames(arr){
//     let firstLetter = arr.map(fLetter => fLetter.slice(0, 1))
//     let capitalLetter = firstLetter.map(letter => letter.toUpperCase())
//     let restOfName = arr.map(rest => rest.slice(1))
//     let lowercaseLetter = restOfName.map(letter => letter.toLowerCase())
//     let name = capitalLetter[1]+lowercaseLetter[1]
//     console.log(capitalLetter)
//     console.log(lowercaseLetter)
//     console.log(`${capitalLetter}${lowercaseLetter}`)
//     console.log(name)
//   }
  
function capitalizeNames(arr){
    let nameConvention = x => x[0].toUpperCase() + x.slice(1).toLowerCase()
    let caps = arr.map(nameConvention)
    return caps;
}

  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  //4) Make an array of strings of the names

  function namesOnly(arr){
  let name = arr.map(person => person.name)
  return name
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
