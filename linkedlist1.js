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
a.next = b;
b.next = c;
c.next = d;
// Print linkedlist with while loop
const printLinkedListWhile = (head) => {
    let current = head;
    let vals = []
    while(current!==null){
        // console.log(current.val)
        vals.push(current.val)
        current = current.next
    }
    return vals
}
console.log(printLinkedListWhile(a));

// Print linkedList with recursive function
const printLinkedListRecursive = (head) => {
    if(head === null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next)
}
// printLinkedListRecursive(a);