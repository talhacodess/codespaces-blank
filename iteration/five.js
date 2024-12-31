const myNum = [1,2,3,4,5,6,7,8,9,10]
// const myNewNum = myNum.filter((num)=> {
//    return num>3

// })
// console.log(myNewNum);

const newNums = []
myNum.forEach((num)=>{
   if(num>3){
      newNums.push(num)
   }
})
console.log(newNums)