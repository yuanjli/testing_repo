/*
 Reverse String:
 Write a function that reverses a string. 
 The input string is given as an array of characters char[].

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

var reverseString = function(s) {
    var current = '';
    var len = s.length - 1;
    for (var i = 0; i< ((s.length - 1)/2); i++) {
        current = s[i];
        s[i] = s[len];
        s[len] = current;
        len --;
    }
    return s;
};


var myinput = ["h","e","l","l","o"];
console.log(reverseString(myinput));