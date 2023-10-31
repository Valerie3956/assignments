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

const filteredByCountry = filterByProperty(people, 'age', 28);
console.log(filteredByCountry);


// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.

function createTable(rows, columns) {

    const table = []
    
    for (let i = 0; i < rows; i++){
        const row = []
      
        for( j = 0; j < columns; j++){
            row.push(i*j)
        }
        table.push(row)
    }
    return table

}

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);

// function createTable(rows, columns) {
//     const table = [];
  
//     for (let i = 0; i < rows; i++) {
//       const row = [];
//       for (let j = 0; j < columns; j++) {
//         row.push(i * j);
//       }
//       table.push(row);
//     }
  
//     return table;
//   }
//   const table1 = createTable(3, 4);
//   console.log(table1);
  
//   const table2 = createTable(5, 5);
//   console.log(table2);