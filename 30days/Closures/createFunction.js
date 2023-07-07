/*
** Write a function createHelloWorld. It should return a new function that always returns "Hello World".
** Example 1:
      Input: args = []
      Output: "Hello World"
      Explanation:
            const f = createHelloWorld();
            f(); // "Hello World"
      The function returned by createHelloWorld should always return "Hello World".
** Example 2:
      Input: args = [{},null,42]
      Output: "Hello World"
      Explanation:
            const f = createHelloWorld();
            f({}, null, 42); // "Hello World"
      Any arguments could be passed to the function but it should still always return "Hello World".
Constraints: 
      0 <= args.length <= 10
*/


/**
* @return {function}
*/

// const createHelloWorld = function(){
//       return function(...args){
//             return "Hello World"
//       }
// }


const createHelloWorld = function(){
      return function(...args){
            return "Hello World"
      }()
}

const a = createHelloWorld()


/*
###### Basic Syntax
___________________________________________________
|      function f(a, b) {
|            const sum = a + b;
|            return sum;
|      }
|__________________________________________________

###### Anonymous Function
___________________________________________________
|      var f = function(a, b) {
|            const sum = a + b;
|            return sum;
|      }
|__________________________________________________

###### Immediately Invoked Function Expression (IIFE)
___________________________________________________
|      const result = (function(a, b) {
|            const sum = a + b;
|            return sum;
|      })(3, 4);
|__________________________________________________

###### Functions Within Functions
___________________________________________________
|      function createFunction() {
|            function f(a, b) {
|                  const sum = a + b;
|                  return sum;
|            }
|            return f;
|      }
|      const f = createFunction();
|__________________________________________________

Function Hoisting
___________________________________________________
|      function createFunction() {
|            return f;
|            function f(a, b) {
|                  const sum = a + b;
|                  return sum;
|            }
|      }
|     const f = createFunction();
|__________________________________________________

###### Closures
___________________________________________________
|      function createAdder(a) {
|            function f(b) {
|                  const sum = a + b;
|                  return sum;
|            }
|            return f;
|      }
|      const f = createAdder(3);
|__________________________________________________

###### Basic Syntax
___________________________________________________
|      const f = (a, b) => {
|            const sum = a + b;
|            return sum;
|      };
|__________________________________________________

###### Omit Return
___________________________________________________
|     const f = (a, b) => a + b;
|__________________________________________________

*/