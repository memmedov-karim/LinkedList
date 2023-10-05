class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const removeElementWithIndex = (head,index) => {
    let current = head;
    let prev;
    while(index>0){
        index--;
        prev = current;
        current = current.next;
    }
    prev.next = current.next;
    return head
}
console.log(removeElementWithIndex(a,2));
