// to check the maximum and minimum value in following variables
var a = 200/100;
var b = 199;
console.log("MINIMUM",Math.min(a,b));
console.log("MAXIMUM",Math.max(a, b));
//in array
var arry = [99,98.5,788];
console.log("Maximum ARRY",Math.max(...arry));
console.log("Minimum ARRY",Math.min(...arry));

//function with operator 
function Add(name,a,b,c){//es5 ecmascript 5
    console.log(name+" "+a+" "+b+" "+c)
}
Add("sham",10,50,90);
//
function Add2(name,...arrry){//es6 ecmascript 6: Rest Operator is used at the start of the parameter
    console.log(arguments);
    let sum = 0;
    for(var i = 0; i < arrry.length; i++){//es5
        sum += arrry[i]
    }
    console.log(sum);
}
Add2("shams",10,30,20);
// Spread Operator
var Arry2 = ["sham",10,20,25];
console.log(...Arry2)//spread operator

//add arrays
var Arry3 = [10,50,80,90];

var Arry5 = [110,150];

console.log("direct",Arry3);
console.log("with spread operator",...Arry3)
console.log("with Arry form",[...Arry3])

// var Arry4 = Arry3; in ES5
var Arry4 = [...Arry3];
console.log(Arry4)

//add multiple arrays in ES5 Ecmascript 5 
var arry6 = Arry3.concat(Arry5);
console.log("Arry6 ES5 -->>>",arry6);
//add multiple arrays in ES6 Ecmascript 6 
var arry7 = [...Arry3,...Arry5];
console.log("Arry7 ES6 -->>>",arry7);

//object with operator
var obj1 = {
    name1: "sham"
}
var obj2 = {
    lastname: "sunder"
}
var obj3 = {...obj1,...obj2};
console.log("object with operator",obj3)