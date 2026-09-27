// const promiseone= new Promise(function(resolve,reject){
//     // Do an async task
//     // DB Calls,cryptography,network
//     setTimeout(function(){
//         console.log("Async task is completed")
//         resolve()
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("async task 2 is completed")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise 2 is completed")
// })

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Harshit Tiwari",email:"user@chaiaurcode.com"})
//     },1000)
// })
 
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour= new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Harshit Tiwari",email:"user@chaiaurcode.com"})
//         } 
//         else{
//             reject('Something Went Wrong')
//         }  
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((Error)=>{
//     console.log(Error)
// }).finally(()=>{console.log('The Promise is Either Resolved or Rejected')})

// 


// 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
     return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})