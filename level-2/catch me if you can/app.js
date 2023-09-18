// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    if (typeof x !== "number" || typeof y !== "number"){ throw `ummmm... that's not a number dude!`}
    return x + y;
  }
try{
    console.log(sum("two", 3))}
catch(err){
    console.log(err)}
  




// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username !== "sam" || password !== "123abc"){throw `nice try, you're not accessing this account`}
  else { console.log (`login successful!`)}
}
try{
    login("sam", "123abc")}
catch(err){
    console.log(err)
}

