/** @format */

// /** @format */

// // function memoize(fn) {
// //   const cache = new Map(); // A map to store the cached results of function calls

// //   return function (...args) {
// //     const key = JSON.stringify(args); // Convert arguments into a string to use as the cache key

// //     // Check if the result for the current arguments already exists in the cache
// //     if (cache.has(key)) {
// //       return cache.get(key); // If cached, return the result from the cache
// //     }

// //     // If not cached, call the original function with the arguments
// //     const result = fn(...args);

// //     // Store the result in the cache using the arguments as the key
// //     cache.set(key, result);

// //     // Return the computed result
// //     return result;
// //   };
// // }

const cache = {};

function memoize(fn, cache) {
  //   const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    console.log("cache info:", JSON.stringify(cache));
    if (key in cache) {
      console.log("cache");
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    console.log("cal");
    return result;
  };
}

let count = 0;
const add = (a, b) => {
  count++;
  return a + b;
};

const mul = (a, b) => {
  count++;
  return a * b;
};

const memoizedAdd = memoize(add, cache);
const memoizedMul = memoize(mul, cache);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(3, 3));
console.log(memoizedMul(10, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(3, 3));
console.log(memoizedMul(10, 3));
console.log("------------\n", count);
