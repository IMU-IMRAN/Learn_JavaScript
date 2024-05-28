 //Memory- Two type
 // 1) stack(Primitive), 2) Heap(Non-Primitive)

 let myYoutudeName= "Imranxz"
 let anotherName = myYoutudeName
 anotherName ="Imuuuu"
 console.log(anotherName);
 console.log(myYoutudeName);

 let userOne = {
    email : "sk@gmail.com",
    upi:"user@ybl"
 }

let userTwo = userOne
userTwo.email="imu@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);