//objects Literals
let sym1 = Symbol("key-1") ;
const jsUser = {
    name : "Talha Bashir",
    [sym1] : "Keynew-1",
    email: "butttalha806@gmail.com",
    "full name" : "Talha Bashir Butt",
    age : 22,
    lastLoginDays : ["Monday","Saturday"],
    isLoggedIn: false
}

// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);

jsUser.email = "talha@google.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "talha@microsoft.com"
// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Greeting")

}
// console.log(jsUser.greeting());
jsUser.greetingNew = function(){
    console.log(`Hello My name is ${this.name} and my full name is ${this["full name"]} i'm ${this.age} Years Old`)
}
// console.log(jsUser.greetingNew());


// Part#2//

// const tindderUser = new Object()
const tindderUser = {}

tindderUser.id = "123cvb"
tindderUser.name = "Talha"
tindderUser.email = "talha@google.com"
tindderUser.userLoggedIn = false

// console.log(tindderUser);

let regularUser = {
    email : "talhabashir@google.com",
   fullName:{
    firstName: "Talha",
    lastName: "Bashir"

    }
}

// console.log(regularUser.fullName.firstName);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

console.log(obj3);
let users = [ {
    name: "Usman",
    email: "usman@gimal.com"
},
{
    name: "Usman",
    email: "usman@gimal.com"
},
{
    name: "Usman",
    email: "usman@gmail.com"
},
{
    name: "Usman",
    email: "usman@gimal.com"
},
{
    name: "Usman",
    email: "usman@gimal.com"
}
]

console.log(users[2].email);
console.log(tindderUser);

console.log(Object.keys(tindderUser))
console.log(Object.values(tindderUser))
console.log(Object.entries(tindderUser))
console.log(tindderUser.hasOwnProperty("userLoggedIn"))
