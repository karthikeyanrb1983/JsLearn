/** @format */
// Move All Zero moved to Last

let zArr = [0, 0, 5, 0, 6, 0];
// output = [2,5,6,0,0,0]
function moveZeroLast(arr) {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] != 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
    }
  }
  //   return arr;
}
// moveZeroLast(zArr);
// console.log(zArr);

// Max container water
// formula area = min(arr[l], arr[r]) * (r - l);
let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxContainWater(arr) {
  let left = 0;
  let maxContainer = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    maxContainer = Math.max(maxContainer, area);
    if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxContainer;
}

console.log(maxContainWater(arr));

// Two Sum - Input Array sorted

// let arr = [2, 7, 11, 15];
// let target = 18;

// function twoSumCheck(arr, target) {
//     for (let i = 0; i < arr.length; i++) {

//   }
// }
