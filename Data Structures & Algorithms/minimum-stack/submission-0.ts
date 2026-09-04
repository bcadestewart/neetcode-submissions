class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if(this.minStack.length == 0){
            this.minStack.push(val);
        }
        else{
            const lastIndex = this.minStack.length -1;          //find last index
            const currentMin = this.minStack[lastIndex];        //get the current min
                                                                //compare it with the new
            this.minStack.push(Math.min(val, currentMin));      //store the smaller one
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        const lastIndex = this.stack.length -1;
        const topItem = this.stack[lastIndex];
        return topItem;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        const lastIndex = this.minStack.length-1;
        const currentMin = this.minStack[lastIndex];

        return currentMin;
    }
}
