/*
     Maximum Subarray
     Given an integer array nums, find the contiguous subarray 
     (containing at least one number) 
     which has the largest sum and return its sum.
*/

//var myarray = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    var currentSum = nums[0];
    var largestSum = nums[0];
    for (var i = 1; i< nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        largestSum = Math.max(currentSum, largestSum);
    }
    return largestSum;
};




