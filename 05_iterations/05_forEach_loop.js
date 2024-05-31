const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach loop
//1-way
coding.forEach(function(item){
    //   console.log(item);
})

//2-way-using arrow function
coding.forEach((item)=>{
   // console.log(item);
})

//3-way-(using function)

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

//4-way
coding.forEach((item,index,arr)=>{
    // console.log(item, index, arr);
})

//multiple object in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})