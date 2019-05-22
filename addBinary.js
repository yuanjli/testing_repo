/* 




*/


var addBinary = function (a, b) {
    var alen = a.length - 1;
    var blen = b.length - 1;
    var carry = 0;
    var output = '';

    while (alen >= 0 || blen >= 0) {
        console.log('alen ', alen, 'blen ', blen);
        console.log('the first number', Number(a[alen]));

        var adigit = Number(a[alen]) || 0;
        var bdigit = Number(b[blen]) || 0;

        var outnumber = (carry + adigit + bdigit) % 2;
        console.log(outnumber);
        carry = Math.floor((carry + adigit + bdigit) / 2);
        console.log(carry);
        output = outnumber + output;
        alen--
        blen--
    }
    if (carry != 0) output = carry + output;
    return output;
};

var one = '11';
var two = '1';
console.log(addBinary(one, two));