/*
Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring 
without repeating characters.

input: " "
expected output: 1 


input: "dvdf"
expected output: 3

"abcabcbb" 
3
"bbbbb"
1
"pwwkew"
3

*/

var lengthOfLongestSubstring = function(s) {
    var result = 0;
    var count = 0;
    var subs = s.substring(0, 0);
    for (var i=0; i<s.length; i++){
        if (subs.indexOf(s[i]) > -1) {
            subs = subs.substring(subs.indexOf(s[i])+1) + s[i];
            //console.log(subs);
            count = subs.length;
        }else {
            count += 1;
            subs += s[i];
        }
        result = Math.max(count, result);
    }
    return result;
};

var mystr = "abcabcbb";
console.log(lengthOfLongestSubstring(mystr));