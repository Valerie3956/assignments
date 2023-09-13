var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception(people, alphabet){
    
    let bigArray = []
    for (var i = 0; i < people.length; i++) {
        bigArray.push(people[i])
        for (var j = 0; j < alphabet.length; j++){
           bigArray.push(alphabet[j])
            
        }
    }
   return bigArray
}


console.log(forception(people, alphabet))

