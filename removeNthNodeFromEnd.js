class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(1);

const reverse = (head) => {
    let prev = null;
    let current = head;
    while(current !== null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev
}
const Len = (head) => {
    let current = head;
    let count = 0;
    while(current){
        count+=1;
        current = current.next;

    }
    return count
}
console.log(Len(a));
const removeLastNode = (head) => {
    if (!head || !head.next) {
      return null;
    }
  
    let current = head;
    while (current.next && current.next.next) {
      current = current.next;
    }
  
    current.next = null;
  
    return head;
  }
  
  
console.log(removeLastNode(a))
  
const removeNthfromEnd = (head,n) => {
    if(n>Len(head)){
        return head
    }
    if(n ===1){
        return removeLastNode(head);
    }
    if(Len(head) ===2){
        if(n===1){
            head.next = null;
            return head
        }
    }
    let reversed = reverse(head);
    let current = reversed;
    let prev;
    while(n>1 && current.next && prev){
        n--;
        prev = current;
        current = current.next;
    }
    // console.log(prev.next,current.next)
    prev.next = current.next

    return reverse(reversed);
}
// console.log(removeNthfromEnd(a,1));