/*
Implement int sqrt(int x).

Compute and return the square root of x, 
where x is guaranteed to be a non-negative integer.

Since the return type is an integer, 
the decimal digits are truncated and only the integer part of 
the result is returned.
 */




var mySqrt = function(x) {
    var left = 1;
    var right = x;
    var ans = 0; 
    if(x==0){
        return 0;
    }
    while (left <= right) {
        var mid = left + (right-left) /2;
        var div = x / mid;
        if (mid == div){
            return mid;
        }
        else if(mid < div){
            ans = mid
            left = mid + 1
        } 
        else {
            right = mid -1;
        }
    }
    return ans
};