/* 
Say you have an array for which the ith element is 
the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [2,1,2,1,0,1,2]
Output: 2
*/


var maxProfit = function(prices) {
    //var currentProfit = prices[1] - prices[0];
    var maxP = 0
    var buyIndex = 0
    var sellIndex = 0
    
    for (var i=1; i<= prices.length; i++){
        //currentProfit = prices[i] - prices[buyIndex];

        if (prices[i] - prices[buyIndex] < 0){
            buyIndex = i;
            
        }else if (prices[i] - prices[buyIndex] > maxP) { 
            sellIndex = i;
            maxP = prices[i] - prices[buyIndex];

        }
    }
    console.log(sellIndex);
    console.log(buyIndex);
    return maxP;
};

console.log(maxProfit([2,1,2,1,0,1,2]));

