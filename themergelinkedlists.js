class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
a.next = b;
b.next = c;
const m = new Node(1);
const n = new Node(2);
m.next = n;
n.next = c;
const merge = (headA,headB) => {
    // console.log("first:",headA.next.val);
    // console.log(headA == headB)

    let current1 = headA;
    let current2 = headB;
    while(current1!==current2 && current1 && current2){
        current1 = current1.next;
        current2 = current2.next;
    }
    if(current1.next === null){
        console.log(headA.next.val)}
    else{
        console.log(current1.val)

    }
    
}
merge(a,m)