class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// 5 2 13 3 8
const a = new Node(5);
const b = new Node(2);
const c = new Node(13);
const d = new Node(3);
const e = new Node(8);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
function check(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      while (result.length > 0 && result[result.length - 1] < arr[i]) {
        result.pop();
      }
      result.push(arr[i]);
    }
  
    return result;
}
  
console.log(check([5,2,13,3,8]))
const removeNode = (head) => {
    if(head ===null || head.next===null) return head;
    let values = [];
    let current = head;
    while(current){
        values.push(current.val);
        current = current.next;
    }
    let newAr = check(values);
    
    let dummy = new Node(newAr[0]);
    let dummyHead = dummy;
    for(let i=1;i<newAr.length;i++){
        dummyHead.next = new Node(newAr[i]);
        dummyHead = dummyHead.next;
    }
    return dummy;
}
removeNode(a);
