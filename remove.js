// ========================================
// remove element from an array in-place.
mynums = [0,1,2,2,3,0,4,2];
myval = 2;

var removeElement = function(nums, val) {
    var len = nums.length;
    var i = 0 ;
    while ( i < len) {
        if (nums[i] == val){
            //nums.splice(i,1);
            nums[i] = nums[len-1];
            console.log(nums);
            len -= 1;
        } else {
        i += 1;
        };
    };
    return len;
};
console.log(removeElement(mynums, myval));

// ========================================
// Remove Duplicates from Sorted Array.
nums2 = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    var i = 0;
    
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] === nums[j-1]) {
            i++;
            console.log(i, nums);
        } else {
            nums[j-i] = nums[j];
            console.log("second", i, nums);
        }
    }
    
    return nums.length - i;
};

console.log(removeDuplicates(nums2));

// ========================================



