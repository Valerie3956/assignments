var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

//Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

function sortedOfAge(arr){return arr.sort((a,b ) => a.lastName.localeCompare(b.lastName))
    .reduce(function(final, person){
        if (person.age >= 18){final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)}
        return final
    }, [])
}
    
 
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
//  # **Extra Credit**

// - Create another array of one or more individuals and add it to the original array.
var morePeopleArray = [
    {
        firstName: "Rick",
        lastName: "Smith",
        age: 33
    },
    {
        firstName: "Valerie",
        lastName: "Smith",
        age: 33
    },
    {
        firstName: "Roy",
        lastName: "Smith",
        age: 3
    },
    {
        firstName: "Claire",
        lastName: "Smith",
        age: 3
    }
]

function addArrays(arr){
arr.map(person => peopleArray.push(person))
return peopleArray
}

console.log(addArrays(morePeopleArray))

// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.

function newArray(arr){ return arr.filter(x => x.lastName[(x.lastName.length)-1] === "y" ||x.lastName[(x.lastName.length)-1] === "a")}
    
    console.log(newArray(peopleArray))

// - Remove the second individual from the array.

function removeSecond(arr){return arr.filter(x => arr.indexOf(x) !== 1) }

console.log(removeSecond(peopleArray))

// - Return the array in reverse order.

function upsideDown(arr){return arr.reverse()}

console.log(upsideDown(peopleArray))

