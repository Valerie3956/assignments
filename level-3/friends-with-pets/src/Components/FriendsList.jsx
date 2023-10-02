import Friends from "./Friends"
import Pet from "./Pets"
import data from "./data.jsx"

export default function FriendsList() {

    const friends = data.map(item => {
        console.log(item.pets)
        let pets = item.pets.map(pet => {
            return (
                <Pet
                    petName={pet.name}
                    petBreed={pet.breed}
                />
            )
        })
        return (
            <div >
                <Friends
                    name={item.name}
                    age={item.age}
                />
                <div className = "all--pets">
                {pets}
                </div>
            </div>

        )
    })

    return (
        <div className = "friends">
            {friends}
        </div>
    )
}