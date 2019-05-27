/*
Move Zeroes

Given an array nums, write a function to move all 0's to the end 
of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.


*/



var moveZeroes = function(nums) {
    var nonzero = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[nonzero] = nums[i];
            nonzero += 1;
        }
    }
    for (var j = nonzero; j < nums.length; j++) {
        nums[j] = 0
    }
    return nums;
};

var myinput = [0,1,0,3,12];
console.log(moveZeroes(myinput));