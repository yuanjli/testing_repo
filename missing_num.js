/*
Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity?
*/

/*
// This solution takes too long, because nums.includes runs 1 loop
var missingNumber = function(nums) {
    var len = nums.length; 
    while (len>=0) {
        if (! nums.includes(len)) {
            return len
        }
        len -- 
    }
};
*/

// this answer takes constant extra time and space
var missingNumber = function(nums) {
    var len = nums.length; 
    var arr = new Array(len+1).fill(-1);
    //console.log(arr)
    for (var i =0; i < arr.length; i++) {
        arr[nums[i]] = nums[i];
    }
    for (var j=0; j<arr.length; j++) {
        if (arr[j] == -1) {
            return j
        }
    }
};

var myinput = [9,6,4,2,3,5,7,0,1]
console.log('hello,world');
console.log(missingNumber(myinput));
