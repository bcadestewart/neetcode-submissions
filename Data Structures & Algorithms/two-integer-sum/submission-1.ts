class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // twoSum takes an array of numbers called nums
    // and a single number named target.
    // gives back an array of numbers.

    twoSum(nums: number[], target: number): number[] {
        const numberToIndex = new Map<number, number>
        
        for (let index = 0; index < nums.length; index++) {

            const number = nums[index];        // 1. grab the number at this position
            const needed = target - number;    // 2. the partner that would complete it
            if (numberToIndex.has(needed)) {   // 3. has that partner walked by already?
                return [numberToIndex.get(needed)!, index];   // its saved spot + ours
            }
            numberToIndex.set(number, index);  // 4. no partner yet — file this one, keep walking

        }
    
    return [];   // keeps the promise; never actually reached

    }

}
