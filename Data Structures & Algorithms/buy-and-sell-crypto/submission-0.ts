class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++){

            let currentPrice =prices[i];
            if (currentPrice < minPrice){
                minPrice = currentPrice;
            }
            else{
                maxProfit = Math.max(maxProfit, currentPrice - minPrice);
            }



        }

        return maxProfit;

    }
}
