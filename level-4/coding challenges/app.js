// Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.

//ALL THIS STUFF DIDN'T WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// map through the array of words, then map through each word, if one of the letters is not equal to the letters of the target, move on to the next word. if all the letters are the same, push the word in a new array.

//check word length
// const filteredByCount =  arr.filter(word => (word.length === targetArr.length))

// return filteredByCount.filter(word => {
//   for (let i = 0; i < word.length; i++){
//         for (let j = 0; j < targetArr.length; j++){
//           if (word[i] !== targetArr[j]){continue} 
//           else {

//             }
//         }
// }

// }

// )


//find index of sorted words that match

// const filteredAnagrams = sortedWordsArr.reduce((final, val) => {
  //   if(val === targetArr){
    //     final.push(val)
    //   }
    //   return final
    // }, [])
    
    // sortedWordsArr.map(word => {
      //   if(word === targetArr){
        //     indexArray.push(indexOf(word))
        //   }
        // })
        
// To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, all anagrams are same. I GOOGLED THIS I'M NOT THAT SMART!!!!!!!!!!

function filterAnagrams(arr, target) {
  // split the target into an array of  letters and sort them into alphabetical order

    const targetArr = target.split("").sort().join("")
    // console.log(targetArr)

return arr.filter(word => {
  let sortedWord = word.split("").sort().join("")
return targetArr === sortedWord

})
// console.log(sortedWordsArr)



// let result = []

// for (let i = 0; i < sortedWordsArr.length; i++){
//   if(sortedWordsArr[i] === targetArr){
//     result.push(words[i])
//   } else {}
// }

// return result


}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world', 'claire', 'lliste'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

// AAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!! IT'S DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//on to the next one

// ## **Sort by Multiple Criteria**

// Write a function called **`sortByMultipleCriteria`** that takes an array of objects representing people, each with a **`name`** (string) and **`age`** (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.

function sortByMultipleCriteria(people) {

  return people.sort((a, b) => a.name.localeCompare(b.name))
  .sort((a, b) => a.age - b.age)

}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
{name: 'Roy', age: 3},
{name: 'Claire', age: 3}
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'David', age: 25 },
//  { name: 'Bob', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
  // map through the array and calculate the price (price * quantity)
  // return a new object {name: name, totalPrice: totalPrice}
  
return products.map(product => {
  const totalPrice = product.price * product.quantity
  return {
    name: product.name,
    totalPrice
  }
})

}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]