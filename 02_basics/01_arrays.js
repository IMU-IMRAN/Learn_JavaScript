//array

const myArr = [1,2,3,4]
const myArr2 = new Array(1,2,3,4,5,6)

// //array methods
// myArr.push(6)  //add element
// myArr.push(7)
// myArr.pop()     //remove the last elemnt 

myArr.unshift(9)  // add item in the start
myArr.shift()     // remove the first item

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() //join covert our array into string
// console.log(myArr);
// console.log(newArr);

//slice, splice
console.log("A",myArr)

//slice
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)

//splice
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr)


