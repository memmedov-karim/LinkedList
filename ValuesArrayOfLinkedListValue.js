class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const FindSumOfLinkedListVal = (head) => {
    let current = head;
    let values = [];
    while(current !==null){
        values.push(current.val)
        current = current.next
    }
    return values
}
console.log(FindSumOfLinkedListVal(a))