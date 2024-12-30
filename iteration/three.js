const arr = [1,2,3,4,5,6]

for (const j of arr) {
    // console.log(`${j} is variable`);
    
    
}

const greeting = "Hello World"
for (const greet of greeting ) {
   
    // console.log(`${greet} and ${greeting}`);
    
}

//maps
const map = new Map()
map.set("a","1")
map.set("b","2")
map.set("c","3")
map.set("d","4")
map.set("d","4")
// console.log(map)
for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`);
    
}
//object 
const myObject = {
    name: "Talha",
    age: 20

}

for (const f in myObject) {
    console.log(myObject);
    
    
}
