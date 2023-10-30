/**
 * @description - remove all instances of given character from a string
 * @difficulty - 3/5
 * 
 * @param {String} str
 * @param {String} char
 * @returns {String}
 * 
 * @example - removeChar('abc', 'a') // --> 'bc'
 * @example - removeChar('aaaa', 'a') // --> ''
 */

const removeChar = (str, char) => {
//loop through string

const emptyArray = []

for (let i = 0; i < str.length; i++){
    if (str[i] !== char){
        emptyArray.push(str[i])
    }
}

const result = emptyArray.join("")

return result
// if character === char then do nothing
//if character !== char then push char to empty array
//join characters in array and return that 
}

module.exports = removeChar;