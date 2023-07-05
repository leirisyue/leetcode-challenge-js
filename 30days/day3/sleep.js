/*
Given a positive integer millis, 
write an asynchronous function that sleeps for millis milliseconds. 
It can resolve any value.

** Example 1:
   Input: millis = 100
   Output: 100
   Explanation: 
      It should return a promise that resolves after 100ms.
      let t = Date.now();
      sleep(100).then(() => {
      console.log(Date.now() - t); // 100
      });

** Example 2:
   Input: millis = 200
   Output: 200
   Explanation: It should return a promise that resolves after 200ms.

Constraints:
   1 <= millis <= 1000
*/

//---------------------------------------------------------------
const promise = new Promise(callback)
promise
   .then(()=> console.log('success'))
   .catch(()=> console.log('error'))
   .finally(()=>console.log('Promise completed'))

function callback(resolve,reject){
   // resolve()
}

//---------------------------------------------------------------
async function hello(){
   return 'hello'
}
console.log(hello()) // Promise {'hello'} 

hello().then((response)=> console.log(response)) // hello

async function helper(){
   const response = await hello()
   console.log(response)
}
helper() // hello

//---------------------------------------------------------------
// solution problem
async function sleep(millis){
   function callback(resolve,reject){
      setTimeout(resolve,millis)
   }
   return new Promise(callback)
}
