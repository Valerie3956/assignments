function extractInitials(names) {
    
    return names.map(name => {
        
        //split names
        const splitName = name.split(' ')

        //get the first letter of each word
        const initials = splitName.map(word => word[0]).join("")

        return initials
    })

};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


function filterByProperty(objects, propertyName, propertyValue) {

    return objects.filter(person => person[propertyName] === propertyValue)

}

const people = [
    { name: 'Alice', age: 30, country: 'USA' },
    { name: 'Bob', age: 25, country: 'Canada' },
    { name: 'Charlie', age: 35, country: 'USA' },
    { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', "USA");
console.log(filteredByCountry);