/*
Single Number

Given a non-empty array of integers, 
every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4

*/


var singleNumber = function(nums) {
    var singles = {}
    var position = 0
    while (position < nums.length) {
        if (singles[nums[position]] == undefined ) {
            singles[nums[position]] = nums[position];
            console.log("first time", singles)
        } else {
            delete singles[nums[position]];
            console.log("second time", singles)
        }
        position ++
    }
    var arr = Object.keys(singles)
    return arr[0]
    
};

var input = [2,2,1]
console.log(singleNumber(input));