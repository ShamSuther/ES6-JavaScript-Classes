//Ecmascript6 ES5
let node = {
    type: "companey",
    name: "iskillers",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end : {
            endline : 400,
            endcolumn : 455
        },
    },
    range: [100, 5],
};
console.log("Node ES5 >>",node.range[0]);
//Ecmascript6 ES6
let {name,
    type,
    loc:{
        start:{
            line,
            column},
            end:{
                endline,
                endcolumn}
            },
            range:[
                value1,
                value2
            ]
        } = node;
console.log("Node ES6 >>",value2);
console.log("Node ES6 >>",value1);
console.log("Node ES6 >>",endcolumn);
console.log("Node ES6 >>",endline);
console.log("Node ES6 >>",name);
console.log("Node ES6 >>",type);

//types to create an object
var obj1 = {//#1
}
obj1.namer = "namer";
console.log("method1",obj1);
var obj2 = new Object();//#2
obj2.namer2 = "iskillers";
obj2.namer3 = "name";
console.log("method2",obj2);

//set tag
let set = new Set();
set.add("sham sunder");
set.add(5);
set.add("iskillers");
console.log(set.size);//set size
console.log(set)
//for-each loop
let set1 = new Set([1,2,"iskillers"]);
console.log(set1)
set1.forEach(function (value, key, checkPro){
    console.log("Set function Value >>",value);
    console.log("Set function key >>",key);
    console.log("Set function checkPro >>", checkPro === set1);
});
// in set the value doesn't repeat in same format
let set2 = new Set([1,2,"iskillers",2,1]);
let ary = [...set2];
console.log(set2);
console.log(ary);