let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr
                .map((num)=> num +10)
                .map((num)=> num *2)
                .filter((num)=> num >=24)
console.log(newArr);
