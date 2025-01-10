const promiseOne = new Promise(function(resolve,reject){
     //do an asyn task
    //DB calls,crpthography,network
    setTimeout(()=>{
        console.log('Asyn Task is completed');
        resolve()

    },1000)
   
    
})
promiseOne.then(function(){
    console.log('Promise Confirmed');
    
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Asyn second Promise Completed");
        resolve()
        

    },1000)
}).then(()=>{
    console.log('2 promis')
    return
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('3rd Promise Completed')
        resolve({username: 'Talha Bashir', url:'talhacodes.com'})
    })
}).then((data)=>{

    console.log(data)

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: 'Talha Bashir', website:'talhacodes.com'})
        }else{
            reject('ERROR: Js Went Wrong')
        }
    },1000)
}).then((data)=>{
    console.log(data)
    return data.username
}).then((username)=>{
    console.log(username);
    

}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log('The Promise either is resolve or rejected'))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: 'Talha Bashir', site:'talhacodes.com'})
        }else{
            reject('ERROR: Js Went Wrong 5')
        }

    },1000)
});
async function consumePromiseFive(){
    try {

        let response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error)
        
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json()
//         console.log(typeof data +' hello');
        
//     } catch (error) {
//         console.log('E:',error)
//     }
    
    
// }
// getAllUsers()

fetch('https://api.github.com/users/talhacodess')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))