/*  
Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice 
in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/


var containsDuplicate = function(nums) {
    var position = 0
    var count = {}
    while (position < nums.length) {
        if (count[nums[position]] == undefined) {
            count[nums[position]] = 1
        } else if (count[nums[position]] == 1) {
            return true
        }
        position ++ 
    }
    return false
};

var myarr = [1]
console.log(containsDuplicate(myarr));