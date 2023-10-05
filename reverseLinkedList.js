class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
const print = (head) => {
    let prev = null;
    let current = head;
    while(current !== null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev
}
console.log(print(a));