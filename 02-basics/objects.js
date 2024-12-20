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

console.log(jsUser["isLoggedIn"]);
console.log(jsUser["full name"]);
console.log(jsUser["email"]);

jsUser.email = "talha@google.com"
console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "talha@microsoft.com"
console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Greeting")

}
console.log(jsUser.greeting());
jsUser.greetingNew = function(){
    console.log(`Hello My name is ${this.name} and my full name is ${this["full name"]} i'm ${this.age} Years Old`)
}
console.log(jsUser.greetingNew());
