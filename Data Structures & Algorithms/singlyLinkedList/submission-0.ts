class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let curr = this.head;
    let i = 0;

    while (curr !== null) {
      if (i === index) {
        return curr.val;
      }

      curr = curr.next;
      i++;
    }

    return -1;
  }

  insertHead(val: number): void {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertTail(val: number): void {
    const newNode = new ListNode(val);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  remove(index: number): boolean {
    if (this.head === null) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      return true;
    }

    let curr = this.head;
    let i = 0;

    while (curr.next !== null) {
      if (i + 1 === index) {
        curr.next = curr.next.next;
        return true;
      }

      curr = curr.next;
      i++;
    }

    return false;
  }

  getValues(): number[] {
    const values: number[] = [];
    let curr = this.head;

    while (curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }

    return values;
  }
}