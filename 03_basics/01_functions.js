function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
// addTwoNumbers(2,2)

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result :", result); 

// example
function login(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(login("imran"));

//example
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

//example
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
// handleObject({
//     username: "dinesh",
//     prices: 1
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));