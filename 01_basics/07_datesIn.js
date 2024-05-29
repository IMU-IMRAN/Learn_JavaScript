//Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//To declare a specific date
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate2 = new Date(2023, 0, 23,5,3)
// console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-24")
// console.log(myCreatedDate3.toLocaleString());

//TimeStamp
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime())
//covert to second
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleDateString('default',{
    weekday: "long",
})

