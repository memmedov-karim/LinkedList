class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(3);
const b = new Node(7);
const c = new Node(8);
const d = new Node(9);
a.next = b;
b.next = c;
c.next = d;

const sumOfLinkedListValues = (head) => {
    let current = head;
    let sum = 0;
    while(current !== null){
        sum+=current.val
        current = current.next;
    }
    return sum;
}
console.log(sumOfLinkedListValues(a))