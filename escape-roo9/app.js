const readline = require("readline-sync");

const name = readline.question("What is your name? ");

// const choice = readline.question(`Hi ${name}! It looks like you're stuck in this room. You need to find a way out! Would you like to
// [1] Find the Key
// [2] Put your hand in the hole
// [3] Open the door
// `)

// if (choice === "1") {
//     const secondChoice = readline.question(`Great job! Now what?
//     [1] Put your hand in the hole
//     [2] Open the door
//     `)
//         if(secondChoice === "1") {console.log(`WHAT'S WRONG WITH YOU, WHY WOULD YOU PUT YOUR HAND IN THE HOLE????????????`)} 
//         else if (secondChoice === "2"){console.log(`Great job ${name}, you got out!`)}
// } else if (choice === "2") {
//     console.log(`WHAT'S WRONG WITH YOU, WHY WOULD YOU PUT YOUR HAND IN THE HOLE????????????`)
// } else if (choice === "3") {
//     const anotherChoice = readline.question(`I wish it were that simple... Now what?
//     [1] Find the Key
//     [2] Put your hand in the hole
//     `
//     )
//         if (anotherChoice === "1") {const secondChoice = readline.question(`Great job! Now what?
//         [1] Put your hand in the hole
//         [2] Open the door
//         `)
//             if(secondChoice === "1") {console.log(`WHAT'S WRONG WITH YOU, WHY WOULD YOU PUT YOUR HAND IN THE HOLE????????????`)} 
//             else if (secondChoice === "2"){console.log(`Great job ${name}, you got out!`)}}
//         else if (anotherChoice === "2") {console.log(`WHAT'S WRONG WITH YOU, WHY WOULD YOU PUT YOUR HAND IN THE HOLE????????????`)}
// }

let doorIsLocked = true
let keyIsFound = false

while (doorIsLocked = true) {let answer = readline.question(`It looks like you're still stuck in this room, ${name} would you like to
[1] Find the key
[2] Put your hand in the hole
[3] Open the door
`)





switch(answer){ 
    case "1": 
        console.log(`You found a Key!`)
        keyIsFound = true
        console.log(keyIsFound)
        break;

    case "2":
        console.log(`WHAT'S WRONG WITH YOU, WHY WOULD YOU PUT YOUR HAND IN THE HOLE????????????`)
        return
        break;

    case "3":
        
         if (keyIsFound === false) {
            console.log(`The door is locked`)
            console.log(keyIsFound)}
            else if (keyIsFound === true) {
                console.log(`You did it!`)
                console.log(keyIsFound)
                return
            }
        break;

}
}
