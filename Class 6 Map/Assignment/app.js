//example 1
let obj = {
    userName: "iSkillers",
    address: "Mithi, Tharparkar",
    courses: {
    webDevelopmentCourse: 'Web Development',
    appDevelopmentCourse: 'App Development',
    wordpressCourse: 'App Development',
    graphicCourse: "Graphic Designing",
    duration: {
    webDevelopmentDuration: "6 Months",
    appDevelopmentDuration: "3 Months",
    wordpressDuration: "3 Months",
    graphicDuration: "3 Months",
    }
    },
    batch: [01, 02, 03, 04, 05]
    }
console.log(obj);
//destructure
let {userName,
    address,
    courses:{
        webDevelopmentCourse,
        appDevelopmentCourse,
        wordpressCourse,
        graphicCourse,
        duration:{
            webDevelopmentDuration,
            appDevelopmentDuration,
            wordpressDuration,
            graphicDuration
        }
    },
    batch:[b1,b2,b3,b4,b5]
} = obj;

//row1
var batch1 = document.getElementById("batch");
var username1 =  document.getElementsByClassName("user");
var address1 =  document.getElementsByClassName("uaddress");
var course1 =  document.getElementById("course");
var due = document.getElementById("duration");
//r1 innerhtml
batch1.innerHTML = "0"+b1;
username1[0].innerHTML = userName;
address1[0].innerHTML = address;
course1.innerHTML = webDevelopmentCourse;
due.innerHTML = webDevelopmentDuration;

//row2
var batch2 = document.getElementById("bbatch");
var course2 =  document.getElementById("course1");
var duration2 =  document.getElementById("duration1");
//r1 innerhtml
batch2.innerHTML = "0"+b2;
username1[1].innerHTML = userName;
address1[1].innerHTML = address;
course2.innerHTML = appDevelopmentCourse;
duration2.innerHTML = appDevelopmentDuration;

//row3
var batch3 = document.getElementById("bbatch1");
var course3 =  document.getElementById("course2");
var duration3 =  document.getElementById("duration2");
//r3 innerhtml
batch3.innerHTML = "0"+b3;
username1[2].innerHTML = userName;
address1[2].innerHTML = address;
course3.innerHTML = wordpressCourse;
duration3.innerHTML = wordpressDuration;

//row4
var batch4 = document.getElementById("bbatch2");
var course4 =  document.getElementById("course3");
var duration4 =  document.getElementById("duration3");
//r4 innerhtml
batch4.innerHTML = "0"+b4;
username1[3].innerHTML = userName;
address1[3].innerHTML = address;
course4.innerHTML = graphicCourse;
duration4.innerHTML = graphicDuration;

//example 2
var table = document.getElementById("trmain");
var tabHeadtr = document.createElement("tr");
table.appendChild(tabHeadtr);
//value heading
var tabHeadtd = document.createElement("th");
tabHeadtr.appendChild(tabHeadtd);
var ThTxt = document.createTextNode("Value");
tabHeadtd.appendChild(ThTxt);
//key heading
var tabHeadtd1 = document.createElement("th");
tabHeadtr.appendChild(tabHeadtd1);
var ThTxt1 = document.createTextNode("key");
tabHeadtd1.appendChild(ThTxt1);
//key heading
var tabHeadtd2 = document.createElement("th");
tabHeadtr.appendChild(tabHeadtd2);
var ThTxt2 = document.createTextNode("CheckPro");
tabHeadtd2.appendChild(ThTxt2);

let set = new Set(["batch 01", 0132132132, "iSkillers", "Mithi, Tharparkar", "batch 01"]);
console.log(set);
set.forEach(function(value,key,checkPro){
    var tr1 = document.createElement("tr");
    table.appendChild(tr1);
    //value
    var td1 = document.createElement("td");
    tr1.appendChild
    var td1txt = document.createTextNode(value);
    td1.appendChild(td1txt);
    tr1.appendChild(td1);
    //key
    var td2 = document.createElement("td");
    tr1.appendChild(td2);
    var td2txt = document.createTextNode(key);
    td2.appendChild(td2txt);
    tr1.appendChild(td2);
    //key
    var td3 = document.createElement("td");
    tr1.appendChild(td3);
    var td3txt = document.createTextNode(checkPro === set);
    td3.appendChild(td3txt);
    tr1.appendChild(td3);
})

//example 3
var map = new Map();
map.set("name", "iSkillers Academy");
map.set("email", "info@iskillers.com");
map.set("url", "www.iskillers.com");
map.set("address", "Mithi Tharparkar");
console.log(map);
console.log("Map Size>>",map.size);

var name5 = document.getElementById("name44");
var email5 = document.getElementById("email44");
var url55 = document.getElementById("url44");
var add55 = document.getElementById("add44");

name5.innerHTML = map.get("name");
email5.innerHTML = map.get("email");
url55.innerHTML = map.get("url");
add55.innerHTML = map.get("address");

function delAdd(){
    add55.innerHTML = map.delete("address");
    console.log("Map Size>>",map.size);
}
function ClearAll(){
    name5.innerHTML = map.clear("name");
    email5.innerHTML = map.clear("email");
    url55.innerHTML = map.clear("url");
    add55.innerHTML = map.clear("address");
    console.log("Map Size>>",map.size);
}
