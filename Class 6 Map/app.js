var map = new Map();
console.log(map);
// to add the value in a map use .set
map.set("name","sham");
map.set("cell","03333333")
map.set("email","info@sham.com")
console.log(map);
//to delete a value of map
map.delete("name");
console.log(map);
//to "get" the value of map
console.log("get the value >>>",map.get("email"));
//to check the value in the map
console.log("check the value in map >>>",map.has("cell"));
//to "clear" the value of map
map.clear();
console.log(map);


//key
var am = new Map();
key1 = {};
key2 = {};
am.set(key1,"sham");
am.set(key2,"keee");
console.log(am);
console.log("key1 =>",am.get(key1));
console.log("key2 =>",am.get(key2));


//universal variable
function abc(){
    b = "0 fucks given";
    a = 10
}
abc();
console.log("universal",a);
console.log("universal",b);
