/*
Valid Palindrome
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

*/

var isPalindrome = function(s) {
    var news = s.replace(/[^a-z0-9]/gi,'');
    news = news.toLowerCase();
    console.log(news);
    var len = news.length;
    if (len%2 === 1){
        var left = Math.floor(len/2) -1;
        var right = Math.ceil(len/2);
    } else {
        var left = len/2 -1;
        var right = len/2;
    }
    while (left >=0) {
        if (news[left] != news[right]) {
            return false;
        }
        left --;
        right ++;
    }
    return true;
};

var mystr ="A man, a plan, a canal: Panama";
console.log(isPalindrome(mystr));

