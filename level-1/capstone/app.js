const readline = require("readline-sync");
const input = require("readline-sync")
const name = input.question("What is your name? ");
console.log(`Twin Pines Mall, September 12, 1985, a DeLorean appears from out of nowhere and screeches to a halt. The door opens and Marty McFly approaches, a little confused \n "Doc?" \n "I'm afraid not Marty... You can call me ${name}" \n "I don't understand... where's Doc?" \n "He decided to stay in 2023... we don't have flying cars or hoverboards unfortunately, but he was quite fascinated with these smartphones we have. Although he's still trying to wrap his head around NFT's, along with the rest of us..." \n "NF... what?" \n "My thoughts exactly... Get in Marty, we're going to travel back... to the future!"`)


let hp = 100
let speed = 0
let inventory = []
let enemyhp = 50
let randomEnemy = ""


while(hp > 0){ if (speed < 88) {
    drive()} else {
        timeTravel()
        break
    }
}

function drive(){
    const drive = input.keyIn(`[d] to drive [p] to print\n`, {limit: "dp"})
    if (drive === "d"){
        if (Math.floor(Math.random() * 3) === 0){
        enemy()}} 
    else if (drive === "p"){
        print()
    }
}

function enemy(){ let enemies = ["Biff Tannen", "Mr Strickland", "a breach of the space-time continuum!!!"]
            const randomEnemyIndex = Math.floor(Math.random() * enemies.length);
            randomEnemy = enemies[randomEnemyIndex]
            console.log(`You've encountered ${randomEnemy}`)
        choice()}

function run(){
    if (Math.random() < 0.5 ){
            speed = (speed + 10)
            console.log(`You got away, and you picked up some speed!`)
         } else {
            console.log(`You couldn't get away`)
             fight()}
}

function fight (){
        enemyhp = (enemyhp - (Math.floor(Math.random() * (20 - 10) + 10)))
        console.log(`You attacked ${randomEnemy}`)
        if (enemyhp > 0){
        enemyAttack()} else {
            enemyDie()
        }
}


function enemyAttack(){
        console.log(`${randomEnemy} fought back`)
        hp = (hp - (Math.floor(Math.random() * (10 - 5) + 5)))   
        if (hp > 0) {
            fight()} else {
            die()
        }
}

function die(){
    console.log(`The DeLorean got destroyed... You're stuck in 1985`)
    hp = 0
    print()
}

function timeTravel (){
    console.log(` Congratulations ${name}, you've reached 88mph and successfully made it back to 2023!`)
    print()
}

function enemyDie(){
    console.log(`You defeated ${randomEnemy}`)
    enemyhp = 50
    hp = (hp + 10)
    speed = (speed + 15)
    let items = ["sports almanac", "hoverboard", "piece of the Flux Capacitor"]
    const itemsIndex = Math.floor(Math.random() * items.length);
    inventory.push(items[itemsIndex])
    console.log(`You found a ${items[itemsIndex]}`)
}


function choice(){
   const choice = input.keyIn(`Do you want to [a]ttack or [r]un?\n`, {limit: "ar"})
   if (choice === "a"){
    fight()
   } else if (choice === "r") {
    run()
   }
}

function print(){
    let inventoryList = inventory.reduce(function (value, value2) {
    return (
        value[value2] ? ++value[value2] :(value[value2] = 1),
        value
    )
}, {} )
    console.log(`     hp: ${hp} \n     speed:${speed}`);
    console.log("     inventory:");
    for (let item in inventoryList) {
        console.log(`${item}: ${inventoryList[item]}`);
    }
}



