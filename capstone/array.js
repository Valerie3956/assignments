const array = ["hoverboard", "sports almanac", "piece of flux capacitor", "sports almanac", "piece of flux capacitor", "sports almanac", "piece of flux capacitor", "hoverboard", "sports almanac", "hoverboard", "sports almanac", "hoverboard", "sports almanac"]

let arrayList = array.reduce(function (value, value2) {
    return (
        value[value2] ? ++value[value2] :(value[value2] = 1),
        value
    )
}, {})

console.log(arrayList)