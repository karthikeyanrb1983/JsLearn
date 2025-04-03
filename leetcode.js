/** @format */

// /** @format */
// var removeDuplicates = function (nums) {
//   let numsObj = new Set(nums);
//   console.log(numsObj);
//   return [...numsObj];
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// var majorityElement = function (nums) {
//   let max = 0;
//   let obj = {};
//   let maj = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] in obj) {
//       obj[nums[i]] = obj[nums[i]] + 1;
//       if (obj[nums[i]] > max) {
//         max = obj[nums[i]];
//         maj = nums[i];
//       }
//     } else {
//       obj[nums[i]] = 0;
//     }
//   }
//   return maj;
// };

// console.log(
//   majorityElement([1, 2, 3, 2, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1])
// );

// var rotate = function (nums, k) {
//   nums = [
//     ...nums.slice(nums.length - k, nums.length),
//     ...nums.slice(0, nums.length - k),
//   ];
//   console.log(nums);
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   let min = Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     if (min > prices[i]) {
//       console.log("dd", prices[i]);
//       min = prices[i];
//     } else if (prices[i] - min > maxProfit) {
//       maxProfit = prices[i] - min;
//     }
//   }
//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var divideArray = function (nums) {
//   // console.log(nums.length % 2);
//   if (nums.length % 2 != 0) return false;
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in obj) {
//       obj[nums[i]] += 1;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }
//   for (key in obj) {
//     console.log(obj[key]);
//     if (obj[key] % 2 != 0) return false;
//   }
//   return true;
// };

// console.log(divideArray([3, 2, 3, 2, 2, 2]));

// var isValid = function (s) {
//   let stack = [];
//   let mapping = { ")": "(", "}": "{", "]": "[" };
//   for (char of s) {
//     if (char in mapping) {
//       let topElement = stack.length > 0 ? stack.pop() : "#";
//       console.log("tele", topElement);
//       if (mapping[char] !== topElement) {
//         return false;
//       }
//     } else {
//       stack.push(char);
//       console.log(`char ${char} and ${stack}`);
//     }
//   }
//   return stack.length == 0;
// };

// console.log(isValid("([])"));

// var plusOne = function (digits) {
//   // let flag = false;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i] += 1;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.unshift(1);
//   return digits;
// };

// console.log(plusOne([1, 9]));

// var trailingZeroes = function (n) {
//   if (n == 0) return 0;
//   let val = 1;
//   for (let i = n; i >= 1; i--) {
//     val *= i;
//   }
//   console.log(val);
//   val = val.toString();
//   console.log(val);
//   let tz = 0;
//   for (let i = val.length - 1; i >= 0; i--) {
//     if (val[i] != 0) return tz;
//     tz++;
//   }
//   return tz;
// };

// console.log(trailingZeroes(5));

var rob = function (nums) {
  let evenValue = 0;
  let oddValue = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0 || i % 2 == 0) {
      evenValue += nums[i];
    } else {
      oddValue += nums[i];
    }
  }
  console.log(evenValue, oddValue);
  if (evenValue > oddValue) return evenValue;
  return oddValue;
};

console.log(rob([1, 2, 3, 1]));
