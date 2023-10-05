class Node1{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Node2{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node1("a");
const b = new Node1("b");
const c = new Node1("c");
const d = new Node1("d");
a.next = b;
b.next = c;
c.next = d;
const m = new Node2("m");
const n = new Node2("n");
const k = new Node2("k");
m.next = n;
n.next = k;
const zipperList = (head1,head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    while(current1 && current2){
        if(count%0 === 0){
            tail.next = current2;
            current2 = current2.next;
        }
        else{
            tail.next = current1;
            current1 = current1.next;
        }
        tail=tail.next
        count+=1;
        if(current1) tail.next = current1;
        if(current2) tail.next = current2;
    }
    return head1
}
console.log(zipperList(a,m))