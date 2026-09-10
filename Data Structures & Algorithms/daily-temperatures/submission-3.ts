class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = new Array(temperatures.length).fill(0);
        const stack: number[] = []; // Stack stores the indices of temperatures

        for (let i = 0; i < temperatures.length; i++) {
            // While stack is not empty 
            // AND current temperature is greater than the temperature at the index at the top of the stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()!;
                result[prevIndex] = i - prevIndex; // Calculate days waited
            }
            stack.push(i); // Push current index onto the stack
        }

        return result;
    }
}