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
const e = new Node(1);
const f = new Node(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const removeNodes = (head,value) => {
    if(head === null) return null;
    let values = [];
    let current = head;
    while(current){
        values.push(current.val);
        current = current.next;
    }
    let newd = [];
    for(let i of values){
        if(i!==value){
            newd.push(i)
        }
    }
    if(newd.length === 0){
        return null;
    }
    let dummy = new Node(newd[0]);
    let dummyHead = dummy;
    for(let i=1;i<newd.length;i++){
        dummyHead.next = new Node(newd[i]);
        dummyHead = dummyHead.next;
    }
    return dummy;

}
console.log(removeNodes(a,1))