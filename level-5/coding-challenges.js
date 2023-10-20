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