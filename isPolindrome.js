class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(1);
a.next = b;
b.next = c;
c.next = d;
const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;
    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev
}

const isPolindrome = (head) => {
    let help = head;
    let reversed_current = reverseLinkedList(help);
    let current = head
    // console.log(reversed_current)
    // console.log(current)
    while(current && reversed_current){
        // if(current.val !== reversed_current.val){
        //     return false
        // }
        console.log(current.val,reversed_current.val)
        current = current.next;
        reversed_current = reversed_current.next
    }
    // return true
}
isPolindrome(a);
// console.log(isPolindrome(a))