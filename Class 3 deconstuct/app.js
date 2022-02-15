//ES5
var obj1 = {
    firstname : "iskillers",
    lastname : "academy",
    fullname : function(){
        console.log("ES5=",this.firstname, this.lastname);
    }
}
console.log("obj1 ES5",obj1.fullname());
//ES6
var obj2 = {
    firstname1 : "sham",
    lastname1 : "sunder",
    fullname1 (){
        console.log("ES6=",this.firstname1,this.lastname1);
    }
}
console.log("obj2 ES6",obj2.fullname1());
//ES5 in es5 we can not put space in var name
var obj3 = {
    //firstname : "iskillers mithi" //es5
    "first name": "iskilllllers"//ES6
}
//console.log(obj3.firstname);//ES5
console.log("Put Space:>",obj3["first name"])
console.log(obj3);
//adding new property to object
//es5
obj3.mob = "nothing much";
console.log(obj3.mob);
//es6
obj3["last name"] = "academyy";
console.log("adding new property>>",obj3["last name"]);

//getting value of object in console
var obj4 = {//es5
    firstname2 : "sham",
    lastname2 : "suther",
    address2 : "somewhere"
}
//es5
console.log("Getting Value ES5 =>",obj4);
console.log("Getting Value ES5 =>",obj4.firstname2);
console.log("Getting Value ES5 =>",obj4.lastname2);
console.log("Getting Value ES5 =>",obj4.address2);
//es6
let {firstname2,lastname2,address2} = obj4;
console.log("getting Value ES6 >>",firstname2);
console.log("getting Value ES6 >>",lastname2);
console.log("getting Value ES6 >>",address2);

let node = {
        type: "company",
        name: "iskillers",
        loc: {
            start: {
                line: 81,
                column: 811
            },
            end: {
                endline: 440,
                endcolumn: 450
            }
        }
    };
//es5
console.log(node.type)
console.log(node.type)
console.log(node.loc.start.line)
console.log(node.loc.start.column);
console.log(node.loc.end.endline)
console.log(node.loc.end.endcolumn)
//es6
// let {node,type,name,loc:{start:{line,column},end:{endline,endcolumn}}} = node;
//deconstruction in object
let {type,
    name,
    loc:{
        start:{
            line,
            column},
        end:{endline,
            endcolumn}
        }
} = node;
console.log(type);
console.log(name);
console.log("line",line);
console.log("column",column);
console.log("endline",endline);
console.log("endcolumn",endcolumn);

//deconstruction in array
let colors = [ "red", "green", "blue" ];
// let [firstColor,secondColor,thirdColor] = colors;
let [,,thirdColor] = colors;
console.log(colors[2])
// console.log(firstColor)
// console.log(secondColor)
console.log(thirdColor);

