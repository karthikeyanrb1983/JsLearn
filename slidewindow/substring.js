function longestSubstring(s) {
    let start = 0; // The start index of the sliding window
    let charMap = {}; // To store the most recent index of each character
    let maxLength = 0; // To store the length of the longest substring found
    let longestSubstr = ""; // To store the longest substring itself

    // Loop through each character in the string using the 'end' pointer
    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];
        debugger; // This will cause the debugger to pause here

        // If the character has been seen and is inside the current window (start to end)
        if (currentChar in charMap && charMap[currentChar] >= start) {
         
            // Move the start of the window right after the last occurrence of the current character
            start = charMap[currentChar] + 1;
            debugger;
        }

        // Update the last index of the current character
        charMap[currentChar] = end;

        // If we find a new maximum length, update the result
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstr = s.slice(start, end + 1); // Get the current longest substring
        }
        console.log('longestSubstr',longestSubstr)
    }

    return longestSubstr;
}

// Example usage:
let input = 'abcdebaffabcdeh';
console.log(longestSubstring(input)); // Output: "abcdeh"
