class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(3);
const b = new Node(2);
const c = new Node(0);
const d = new Node(-4);
a.next = b;
b.next = c;
c.next = d;
var hasCycle = function(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        if (slow === fast) return true;
        console.log(slow.val,fast.val)
        slow = slow.next;
        fast = fast.next.next;
    } 
    return false;
};
console.log(hasCycle(a));