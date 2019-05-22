/* 
 Plus One

 Given a non-empty array of digits representing a non-negative integer, 
 plus one to the integer.

The digits are stored such that the most significant digit is at the head 
of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, 
except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

input: [9]
output: [1, 0]

 */

var plusOne = function(digits) {
    var len = digits.length -1;
    digits[len] = digits[len] + 1;
    while (len>=0) {
        if (digits[len] == 10) {
            digits[len] = 0;
            if (len == 0) {
                digits.unshift(1);
            } else {
            digits[len-1] = digits[len-1] +1;
            }
        }
        len --;
    }
    return digits;
};

var myArr = [9];
console.log(plusOne(myArr));