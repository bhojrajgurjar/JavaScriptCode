

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             console.log("promise")
//             resolve({username:'Bhojraj',email:'bhojrajmca24@gmail.com'});
//         }
//         else{
//             reject("ERROR: something went wrong")
//         }
//     },1000)
// })

// async function promiseConsuming(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// promiseConsuming();


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:'Bhojraj',email:'bhojrajmca24@gmail.com'});
//         }
//         else{
//             reject("ERROR: something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     //console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('Promise is either got Resolved or Reject ')
// })



const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"Bhojraj",email:"bhojraj@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})


const promiseOne = new Promise(function(resolve, rejecr){
    //do Async task here
    console.log('hello');
    setTimeout(function(){
        console.log("Async task done ")
        resolve()
    },2000)
    console.log('Ram');
});

promiseOne.then(function (){
    console.log('Promise consumed')
})

async function fetching(){
     try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json()
           console.log(data);
     } catch (error) {
          console.log('Error: ' +error)
     }
  }
  
  fetching();
  