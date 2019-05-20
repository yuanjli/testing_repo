/*

Input: "a "
Expected: 1

*/





var lengthOfLastWord = function (s) {
    var newstr = s.split(' ');
    console.log(newstr);
    while (newstr[newstr.length - 1].length == 0) {
        newstr.pop();
        if (newstr.length < 1) {
            return 0;
        }
    }
    var len = newstr[newstr.length - 1].length;
    return len;
};

// var mystr = 'hello world'
var mystr = 'a     '
console.log(lengthOfLastWord(mystr));

