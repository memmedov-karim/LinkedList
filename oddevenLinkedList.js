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
const e = new Node(6);
const f = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const generateList = (head) => {
    if(head === null) return null;
    if(head.next===null) return head;
    let vals = [];
    let current = head;
    while(current){
        vals.push(current.val);
        current = current.next;
    }
    let even = [];
    let odd = [];
    for(let i=0;i<vals.length;i++){
        if(i%2==0){
            even.push(vals[i])
        }
        else{
            odd.push(vals[i])
        }
    }
    even.push(...odd);
    let dummy = new Node(even[0]);
    let dummyHead = dummy;
    for(let i=1;i<even.length;i++){
        dummyHead.next = new Node(even[i]);
        dummyHead = dummyHead.next;
    }
    return dummy

    
}
console.log(generateList(a));
