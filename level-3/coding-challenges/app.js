// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.


//array.sort, but with a conditional statement that excludes values that are equal to -1

// function solution(arr) {
//     return arr.sort((a, b) => {
//         if (a !== -1 && b !== -1) { 
//             return a - b 
//         } else {
//             return 0
//         }
//     })
// }

// function solution(arr){return arr.sort( (a, b) => a - b)} WORKS BUT DOESN'T EXCLUDE -1

// function solution(arr){return arr.sort((a, b) => {if (a !== -1 || b !== -1){a - b}})} WHY DOESN'T IT EVEN WOTK WITH THE ARRAY THAT DOESN'T HAVE A -1 VALUE...


// 1- take non -1 values out of array and replace with a placeholder
// 2- sort the array of non -1 values
// 3- replace the placeholders with the newly sorted values

function solution(arr) {
    const arrToSort = []

    const placeholder = arr.map(x => {
        if (x !== -1) {
            arrToSort.push(x)
            return null
        } else {
            return x
        }
    }
    )
    arrToSort.sort((a, b) => a - b)
    return placeholder.map(val => {
        if (val === null) {
            const x = arrToSort.shift()
            return x
        } else {
            return val
        }
    })

}


// function solution(arr) {
  
//     if(arr.includes(-1)){
//         const filtered = arr.filter(item => item !== -1)
//         filtered.sort((a, b) => a - b)
//         for(let i = 0; i < arr.length; i++){
//             if (arr[i] !== -1){
//                 arr[i] = filtered[0]
//                 filtered.splice(0, 1)
//             }
//         }
//     } else arr.sort((a, b) => a - b)
    
  
//     return arr
    
//   }

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))



// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const input = 'Hello, World!';

function countVowels(word) {
    let letters = word.toLowerCase().split("")

    return letters.reduce(function (final, val) {
        if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
            final++
        }
        return final
    }, 0)
}

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const characters = str.toLowerCase().split('');
//     let count = 0;
  
//     for (let i = 0; i < characters.length; i++) {
//       if (vowels.includes(characters[i])) {
//         count++;
//       }
//     }
  
//     return count;
//   }

console.log(countVowels(input)); // Output: 3


// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
 // for loop that adds val[i] with the next one

 const solution = []
 for (i = 0; i < numbers.length; i++){
     for (j = i + 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target){
            solution.push(numbers[i], numbers[j])
        }
     }
 }
return solution
 // if sum === target value push both into empty array
 // else return empty array
}

console.log(findSumOfTwo([3, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]