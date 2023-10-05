class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const appendFirst = (head,data) => {
    const newNode = new Node(data);
    if(head === null) head = newNode;
    let current = head;
    head = newNode;
    newNode.next = current;
    return head
}
const appendWithIndex = (head,data,index) => {
    let newNode = new Node(data);
    if(index === 0) return appendFirst(head,data);
    let current = head;
    let prev
    while(index>0){
        index--;
        prev = current;
        current = current.next;
    }
    newNode.next = current;
    prev.next = newNode;
    return head;
}
console.log(appendWithIndex(a,"m",1))