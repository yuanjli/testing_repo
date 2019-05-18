// Two Sum 
// Given an array of integers, 
// return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.


var twoSum = function(nums, target) {
    var solution = [];
    for (i=0; i<=nums.length; i++){
        for (j=1; j<=nums.length; j++){
            if (nums[i] + nums[j] == target && i != j){
                solution.push(i, j);
                return solution;
            } 
         } 
     }
    
};

/* 
Example:  
    nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

console.log(twoSum([2, 7, 11, 15], 9));