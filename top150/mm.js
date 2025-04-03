/** @format */

// /**
//  * @format
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */

// var canConstruct = function (ransomNote, magazine) {
//   //   ransomNote.split("").forEach((ele, i) => {
//   //     console.log(i, ele, magazine[i], ele != magazine[i]);
//   //     if (ele != magazine[i]) return false;
//   //   });

//   //   return true;
//   //   let rev = ransomNote.split("").reverse().join("");
//   //   console.log(rev);

//   //   if (magazine.includes(ransomNote)) return true;
//   //   if (magazine.includes(rev)) return true;
//   //   return false;

//   for (let i = 0; i < magazine.length; i++) {
//     console.log(magazine[i]);
//     console.log(ransomNote.includes(magazine[i]));
//     if (!ransomNote.includes(magazine[i])) return false;
//   }
//   return true;
// };

// console.log(canConstruct("aa", "ab"));

// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;

var removeElement = function (nums, val) {
  nums = nums.filter((ele) => ele != val);
  //   nums.sort((a,b)=>a-b)
  console.log(nums);
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
