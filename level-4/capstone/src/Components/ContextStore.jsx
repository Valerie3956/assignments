

// const [recipes, setRecipes] = React.useState([])
// const apiKey = "ZvKjTgk9lvUztpHQ02BiBQ==HdkAm2ooG4zqbGJU"

// React.useEffect(() => {
  
//   let query = "beef wellington"
//   axios.get('https://api.api-ninjas.com/v1/recipe?query=' + query, { 
//     headers: { "X-Api-Key": apiKey}, 
//     contentType : "application/json"})
//         .then(response => setRecipes(response.data.map(x => {
//           return{
//             title: x.title,
//             ingredients: x.ingredients,
//             instructions: x.instructions,
//             servings: x.servings
//           }
//         }))
//         )
//         .catch(err => console.log(err))
//     console.log("useEffect ran")
//   }, [])
  
//   console.log(recipes)