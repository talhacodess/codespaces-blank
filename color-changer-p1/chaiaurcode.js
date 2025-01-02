let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "#fff";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#fff";
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "#000";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#000";
        }
    })
    
})
