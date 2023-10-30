/**
 * @description - determine whether given string has valid placement of brackets
 * @difficulty - 4/5
 * 
 * @param {String} str
 * @returns {Boolean}
 * 
 * @example - validBrackets('[[[') // --> false
 * @example - validBrackets('[]') // --> true
 * @example - validBrackets('[[][]][]') // --> true
 */

const validBrackets = (str) => {
//for every opening bracket there needs to be a closing bracket
//there may not be a closing bracker that occurs before an opening bracket
//loop through string
//every time I find an opening bracket increment a counter by one
//every time I run into a closing bracket I'm going to decrement it by one
//final result should be zero if not return false value
//always be checking to make sure value isn't < 0

let counter = 0

for (let i = 0; i < str.length; i++){
    if (str[i] === "["){
        counter++
    } else if (str[i] === "]"){
        counter--
        if (counter < 0){
            return false
        }
    }
}

return counter === 0
}

module.exports = validBrackets;