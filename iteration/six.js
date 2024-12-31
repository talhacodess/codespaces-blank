const books = [
    {title:"Book One",genre:"Fiction",publish:1981,edition:2001},
    {title:"Book Two",genre:"non-Fiction",publish:2030,edition:2002},
    {title:"Book Three",genre:"Science",publish:2020,edition:2006},
    {title:"Book Four",genre:"Computer Science",publish:2025,edition:2010},
    {title:"Book Five",genre:"Arabic",publish:2030,edition:2009},
    {title:"Book Six",genre:"Chemistry",publish:2031,edition:2008},
    {title:"Book Seven",genre:"Chemistry",publish:2050,edition:2005},
    {title:"Book Eight",genre:"Fiction",publish:2036,edition:2007},
    {title:"Book nine",genre:"Non-Fiction",publish:2030,edition:2007},
    {title:"Book ten",genre:"Urdu",publish:1981,edition:2004},
    {title:"Book eleven",genre:"Non-Fiction",publish:1981,edition:2004},
    {title:"Book Twelve",genre:"Urdu",publish:1990,edition:2005},
    {title:"Book Thirteen",genre:"Math",publish:1995,edition:2005},
    {title:"Book Fourteen",genre:"English",publish:1998,edition:2005},
]
// userBooks = books.filter((bk)=>{
    
//    return bk.publish >2020
// })
// console.log(userBooks);
userBooks = [] 
books.forEach((bk)=>{
    if (bk.genre === "English" && bk.edition > 2000) {
     userBooks.push(bk)
        
    }
})
console.log(userBooks);
