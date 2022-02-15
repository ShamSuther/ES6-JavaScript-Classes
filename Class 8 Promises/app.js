//method of writing promises
var pro = new Promise((resolve, reject) => {

}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

var b = new Promise(() =>{})
//user data true and false
var userData = "hello my self sham";
var myData = new Promise((resolve, reject) => {
    if(userData === "hello my self sham"){//userData === true
        resolve("successful!!")
    } else{
        reject("error!")
    }
})

console.log(myData);

var myData = (userData) => {
    return new Promise((resolve, reject) => {
    if(userData){//userData === true
    resolve("success!")
    } else {
        reject("error!")
    }
})
}
var a = myData(true);
console.log(myData(true))

setTimeout(() => {
    console.log("setTimout function")}
    ,5000)
//pending
var myData = (userData) => {
    return new Promise((resolve, reject) => {
        console.log("pending...");
        setTimeout(() => {
            if(userData){//userdata === true
                resolve("successfully")
            } else{
                reject("error 2.0")
            }
        },3000);//,
    })
}

let successful = (result) => {
    console.log(result)
}
let reject = (error) => {
    console.log(error)
}
//get the code in different lines
myData(true).then(successful);
myData(false).catch(reject);
//get the code in same line
myData(true).then(successful).catch(reject);

myData(false).then((result)=>{
    console.log(result)
    }).catch((error)=>{
        console.log(error)
        });