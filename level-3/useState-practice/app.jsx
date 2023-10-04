// 1. Pass in a new color of your choosing in place of the old one. 
    
//     Hint: we don’t care what the previous color was.

const [color, setColor] = useState("pink")

setColor("new color")


// Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.


const [color, setColor] = useState("pink")
const isPink = true
setColor( oldColor => oldColor === "pink"? "blue":"pink"
)


// Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

// const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ])

// const newPerson = {
//     firstName: "Valerie",
//     lastName: "Smith"
// }
// setPeople(oldArr => [...oldArr, newPerson])

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => {
	return [
     ...prevPeople, 
     {
        firstName: "Jane", 
        lastName: "Doe"
     }
  ]
})

    // Change the following state-setting functions to use an implicit return

    const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"])

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState => ({count: prevState.count + 1}))

// Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})

setPerson(oldPerson => return {
    ...oldPerson,
    age: 30
})

// What’s wrong with the following state update?
const [colors, setColors] = useState(["pink", "blue"])

setColors("green")

//it replaces an array with a string