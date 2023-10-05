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
const insertToIndex = (head,data,position) => {
    const inserttionNode = new Node(data);
    let current = head;
    let count = 0;
    let prev;
    while(count<position && current.next){
        count++;
        prev = current;
        current = current.next;
    }
    inserttionNode.next = current;
    prev.next = inserttionNode;
    current.next = prev;
    return head;
}
console.log(insertToIndex(a,8,2));