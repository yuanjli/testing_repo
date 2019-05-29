/*
Longest Palindrome

Given a string which consists of lowercase or uppercase letters, 
find the length of the longest palindromes that can be built with those letters.
This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
Input:
"abccccdd"
Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var output = 0;
    var pairs = {}
    for (var i = 0; i < s.length; i++) {
        (pairs[s[i]] == undefined) ? pairs[s[i]] = 1 : pairs[s[i]] += 1;
    }
    console.log(Object.keys(pairs).length);
    console.log(pairs);
    for (var j in pairs) {
        output += Math.floor(pairs[j]/2) * 2;
        if (output % 2 == 0 && pairs[j] % 2 == 1) {
            output += 1
        }
    }
    return output;
};

//console.log('A' === 'a');
console.log(longestPalindrome("abccccdd"));
