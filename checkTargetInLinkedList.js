class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node("c");
const b = new Node("b");
const c = new Node("m");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
const checkTargetis = (head,target) => {
    if(head === null) return false;
    if(head.val === target) return true;
    let current = head;
    let checker = false;
    while(current !== null){
        if(current.val === target){
            checker = true
        }
        current = current.next; 
    }
    return checker
}
console.log(checkTargetis(a,"c"));