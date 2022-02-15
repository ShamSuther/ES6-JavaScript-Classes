//first use the class
class UserData {
    constructor() {
        console.log("constructor function");
    }
    userName() {
        console.log("iskilles mithi thar")
    }

    userEmail() {
        console.log("info@iskillers.com")
    }

   static userAddrss(){
        console.log("Mithi Thar")
    }

}
var user1 = new UserData();//first constructer will load
user1.userName();//you have to call the prototypes
user1.userEmail();//you have to call the prototypes
UserData.userAddrss();
//in static you have to call the static with the class name

///class with data//
class userData2 {
    constructor(name, mobnum, email){
        this.username1 = name,
        this.userNom = mobnum,
        this.userMail = email
    }
    showData(){
        console.log("your name is "+this.username1
        +" and your mobile number is "+this.userNom
        +" your email is "+this.userMail)
    }
}
var a = new userData2("iskillers","033222888","info@gmail.com");
var b = new userData2("Sham Sunder","0333333","sham@gmail.com");
var c = new userData2("nothing no","02222222222","nothing@gmail.com");
var d = new userData2("oh no","02222323232","ohno@gmail.com");
a.showData();
b.showData();
c.showData();
d.showData();