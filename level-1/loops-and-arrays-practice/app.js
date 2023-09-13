//Loop through the following array and count how many "computers" there are. Log the final count:

let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let computerAmt = []
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer") {
        computerAmt.push(officeItems[i])
    } else {}
}
console.log(computerAmt.length)


// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

 for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    }
 }
  
 for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is too young to see Mad Max. Don't let her in!")
                } else {
                 console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is too young to see Mad Max. Don't let him in!")
                }
   } else {
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. She's good to go!")
                } else {
             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. He's good to go!")
                }
   }
}


//### **Optional Bonus challenge**

//

let light = [9, 3, 4, 2]
sum = 0
for (var i = 0; i < light.length; i++){
    sum += light[i]
}

if (sum%2 === 1) {console.log("The light is on!")}
else {console.log("The light os off!")}