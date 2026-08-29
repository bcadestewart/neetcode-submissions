class DynamicArray {

items:number[];     //shelf with numbered slots
size:number;        //how many slots are in use
capacity:number;    //how many slots exist

    constructor(capacity: number) {

        this.items = new Array(capacity);
        this.size=0;
        this.capacity = capacity;

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {

        return this.items[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.items[i]=n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this. size == this.capacity)
        {
            this.resize();
        }
        this.items[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastItem = this.items[this.size-1]
        this.size--;

        return lastItem;

    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newItems = Array(this.capacity);
        for(let i =0; i < this.size; i++)
        {
            newItems[i] = this.items[i];
        }
        this.items = newItems;

    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }

}
