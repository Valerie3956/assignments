const express = require('express')
const app = express()

const disneyDining = [
    {"name": "Be Our Guest Restaurant","cuisine": "French","price_point": "$$$","location": "Magic Kingdom"
    },
    {"name": "Le Cellier Steakhouse","cuisine": "Steakhouse","price_point": "$$$","location": "Epcot"
    },
    {"name": "Cinderella's Royal Table","cuisine": "American","price_point": "$$$","location": "Magic Kingdom"
    },
    {"name": "California Grill","cuisine": "American, Sushi","price_point": "$$$","location": "Disney's Contemporary Resort"
    },
    {"name": "Tiffins Restaurant","cuisine": "African, Asian, Latin","price_point": "$$$","location": "Disney's Animal Kingdom"
    },
    {"name": "Narcoossee's","cuisine": "Seafood, American","price_point": "$$$","location": "Disney's Grand Floridian Resort & Spa"
    },
    {"name": "The Plaza Restaurant","cuisine": "American","price_point": "$$","location": "Magic Kingdom"
    },
    {"name": "Biergarten Restaurant","cuisine": "German","price_point": "$$","location": "Epcot"
    }
]


app.use(express.json())

app.use("/dining", (req, res, next) => {
    req.body = {acceptsDDP : "yes"}
    // console.log(req.body)
    next()
})

app.get("/dining", (req, res) => {
     res.send(disneyDining)
     console.log(req)
})

app.listen(1971, () => console.log("The most magical server on earth!"))