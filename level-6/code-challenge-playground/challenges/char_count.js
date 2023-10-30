/**
 * @description - calculate the number of times a given character appears in a given string
 * @difficulty - 2/5
 * 
 * @param {String} str
 * @param {String} char
 * @returns {Number}
 * 
 * @example - charCount('abc', 'z') // --> 0
 * @example - charCount('aaaa', 'a') // --> 4
 */

const charCount = (str, char) => {
    
let result = 0

for (let i = 0 ; i < str.length; i++){
    if (str[i] === char){
        result++
    }
}

return result

//loop through the string
// if char === char push to empty array
//return empty array.length

}

module.exports = charCount;