/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.


Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/

var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0
    };
    for (var i=0; i<haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            var subhaystack = haystack.substring(i, i+needle.length);
            if (subhaystack == needle){ 
                return i;
            }            
        }
    }
    return -1;
}


