const name= "Imran"
const repoCount =50
console.log(name+ repoCount +"value")

//mordern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Imran-xz')

//covert gameName to array
console.log(gameName.split('-'));

//some string methods
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

//substring
const newString = gameName.substring(0,4)  //subString mai negetive value nahi de sakte
console.log(newString);

//slice
const anotherName = gameName.slice(-8,4) //slice mai negetive value de sakte h
console.log(anotherName);

//trim
const newStringOne ="     imrannn    "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https//www.imran.com"
console.log(url.replace('com','xz'));
console.log(url.includes('com'));
