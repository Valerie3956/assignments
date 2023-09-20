class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = 0
        this.statusChoice = ["Powered Up", "Big", "Small", "Dead"]
        this.statusIndex = 2
        this.status = this.statusChoice[this.statusIndex]
        this.hasStar = false
    }
    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){
        if (this.hasStar === true){
            console.log(`Your Star protected you`)
            this.hasStar = false
        }
        else {
        this.statusIndex++
        this.status = this.statusChoice[this.statusIndex]}
        endGame()
    }

    gotPowerUp(){
        if (this.statusIndex === 0) {
            this.hasStar = true
            console.log("Ycd.ou get a star!")
        } else {
        this.statusIndex--
        this.status = this.statusChoice[this.statusIndex]}
    }

    addCoin(){
        this.totalCoins++
    }

    print(){
        console.log(`Name: ${this.name} \n Total Coins: ${this.totalCoins} \n Status: ${this.status}`)
        if (this.hasStar === true) console.log(`You Have a Star!`)
    }

    die(){
        console.log(`YOU DIED \n Your final score was ${this.totalCoins}`)
        clearInterval()
    }

}

const player = new Player()

player.setName("Mario")

function endGame(){
if (player.statusIndex === 3){
    player.die()
    clearInterval(intervalID)
}}

const intervalID = setInterval(function random(){
    let roll = Math.floor(Math.random() * 3)
    if (roll === 0){
        player.gotHit()
        player.print()
    } else if (roll === 1){
        player.gotPowerUp()
        player.print()
    } else if (roll === 2){
        player.addCoin()
        player.print()
    }
}, 1500)

