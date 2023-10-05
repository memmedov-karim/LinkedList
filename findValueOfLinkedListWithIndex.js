class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
a = new Node("a");
b = new Node("b");
c = new Node("c");
d = new Node("d");
e = new Node("e");
f = new Node("f");
g = new Node("g");
h = new Node("h");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
const findValueWithIndex = (head,index) => {
    let current = head;
    let indexes = 0;
    while(current !== null){
        if(indexes === index){
            return current.val
        }
        indexes++;
        current = current.next
    }
}
console.log(findValueWithIndex(a,6))