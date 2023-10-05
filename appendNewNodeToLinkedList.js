class Node{
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
const append = (head,data) => {
    const newNode = new Node(data);
    if(head === null) head = newNode;
    let current = head;
    while(current.next){
        current = current.next;
    }
    current.next = newNode;
}
const appendFirst = (head,data) => {
    const newNode = new Node(data);
    if(head === null) head = newNode;
    let current = head;
    head = newNode;
    newNode.next = current;
    return head
}
console.log(appendFirst(a,"d"));
