/** @format */

function longSubstr(s) {
  let start = 0;
  let maxLength = 0;
  let curChar = "";
  let charMap = {};
  let str = "";

  for (let end = 0; end < s.length; end++) {
    curChar = s[end];
    if (curChar in charMap) {
      start = charMap[curChar] + 1;
    }
    charMap[curChar] = end;
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      str = s.slice(start, end + 1);
    }
  }
  return { maxLength, str };
}

console.log(longSubstr("aabcdefad"));
