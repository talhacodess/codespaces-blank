//immediately invoked Function expression

(function chai(){

    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB CONNECTED ${name}`)
    

})("Talha")
