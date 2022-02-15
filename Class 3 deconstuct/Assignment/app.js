//in Object
const hexCode = {
    color : "pink",
    code : {
        hex : "#FFC0CB",
        id : 1,
        lightpinkColor : {
            lightpinkName : "lightpink",
            lightpinkHex : "#B0171F",
            lightpinkId : 2
        },
    },
}
//ES5
console.log("ES5>>",hexCode.color);
console.log("ES5>>",hexCode.code);
console.log("ES5>>",hexCode.code.hex);
console.log("ES5>>",hexCode.code.id);
console.log("ES5>>",hexCode.code.lightpinkColor);
console.log("ES5>>",hexCode.code.lightpinkColor.lightpinkName);
console.log("ES5>>",hexCode.code.lightpinkColor.lightpinkHex);
console.log("ES5>>",hexCode.code.lightpinkColor.lightpinkId);
//ES6
let {color,
    code:{hex,
        id,
        lightpinkColor:{lightpinkName,
            lightpinkHex,
            lightpinkId}
        }
    } = hexCode;
console.log("ES6>>",color);
console.log("ES6>>",hex);
console.log("ES6>>",id);
console.log("ES6>>",lightpinkName);
console.log("ES6>>",lightpinkHex);
console.log("ES6>>",lightpinkId);
//in Array
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
  ];
  //es5
  console.log("ES5>>",countryList);
  console.log("ES5>>",countryList[0]);
  console.log("ES5>>",countryList[1]);
  console.log("ES5>>",countryList[2]);
  console.log("ES5>>",countryList[3]);
  console.log("ES5>>",countryList[4]);
  console.log("ES5>>",countryList[5]);
  console.log("ES5>>",countryList[6]);
  console.log("ES5>>",countryList[7]);
  console.log("ES5>>",countryList[8]);
  //es6
  let [Afg,Ala,Alg,AS,And,Ang,Anu,Ant,ANB] = countryList;
  console.log("ES6>>",ANB)
  console.log("ES6>>",Afg)
  console.log("ES6>>",And)
  console.log("ES6>>",Ang)
  console.log("ES6>>",Alg)
  console.log("ES6>>",Ala)
  console.log("ES6>>",Anu)


