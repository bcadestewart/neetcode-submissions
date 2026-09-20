/* 
class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    head: ListNode;
    constructor(){
        this.head=null;
    }
}
*/


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null)
    {
        const next: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev as ListNode;
        

    }
}
