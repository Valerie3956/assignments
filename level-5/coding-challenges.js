function extractUniqueCharacters(strings) {
    const joinedStrings = strings.join("")
    const characters = []
    for (i = 0; i < joinedStrings.length; i++) {
        if (characters.includes(joinedStrings[i])) {
            continue
        } else {
            characters.push(joinedStrings[i])
        }
    }
    return characters
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

function sortByProperty(objects, propertyName) {



 return objects.sort((a, b) => {if (isNaN(a[propertyName])){
return a[propertyName].localeCompare(b[propertyName])
  } else {
    return a[propertyName]-b[propertyName]
  }
})
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
  {name: 'Aaron', age: 5}
];

const sortedByAge = sortByProperty(people, 'name');
console.log(sortedByAge);

// Challenge: Write a program that generates a multiplication table for a given number.The table should display the multiplication of the given number with numbers from 1 to 10.
function generateMultiplicationTable(number) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const multipliedNums = numbers.map(num => {
    return(num * number)
  })

  for (let i = 0; i < numbers.length; i++){
    const result = `${number} * ${numbers[i]} = ${multipliedNums[i]}`
    console.log(result)
  }
//  return `${number} * ${numbers[0]} = ${multipliedNums[0]}`

  //map over array and multiply number by each number
  // return something like `${number} * ${numbers[i]} = ${result}`
}

// Test the function with different numbers
// generateMultiplicationTable(5);
// Expected Outcome: 
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
generateMultiplicationTable(7);
generateMultiplicationTable(3);