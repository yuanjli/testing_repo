var countAndSay = function(n) {
    if (n < 2) {
        return '' + n;
    }
    
    let result = '11';
    for (let i = 2; i < n; i++) {
        console.log("first loop");
        let currentNumber = result[0];
        let counter = 0;
        let nextResult = '';
        
        for (let j = 0; j <= result.length; j++) {
            console.log("second loop");
            console.log(result[j]);
            if (result[j] === currentNumber) {
                counter++;
            } else {
                nextResult += counter + currentNumber;
                currentNumber = result[j];
                counter = 1;
            }
        }
        console.log(nextResult);
        result = nextResult;
    }
    
    return result;
};

console.log(countAndSay(4));

// needs to revisit!!!!!!!!!!!!!!!!!!!!!!