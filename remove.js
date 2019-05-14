// remove element from an array in-place.
mynums = [0,1,2,2,3,0,4,2];
myval = 2;

var removeElement = function(nums, val) {
    var len = nums.length;
    var i = 0 ;
    while ( i < len) {
        if (nums[i] == val){
            nums.splice(i,1);
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






