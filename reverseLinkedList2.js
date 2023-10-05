class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const m = new Node(9);
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const findElementsIndex1toIndex2 = (head,index1,index2) => {
    let values = [];
    let current = head;
    let count = 0;
    let left_val = [];
    let right_val = [];
    if(current.next === null) return [current.val];
    while(count<index2){
        count++;
        if(count<index1){
            left_val.push(current.val)
        }
        if(count>=index1 && count<=index2){
            values.push(current.val);
        }
        current = current.next;
    }
    let cr = current;
    while(cr){
        right_val.push(cr.val);
        cr = cr.next;

    }
    let midle = [];
    for(let i=values.length-1;i>-1;i--){
        midle.push(values[i])
    }
    left_val.push(...midle);
    left_val.push(...right_val)
    let dummy = new Node(left_val[0]);
    let dummyHead = dummy;
    for(let i = 1; i < left_val.length; i++){
        dummyHead.next = new Node(left_val[i]);
        dummyHead = dummyHead.next;
      }
    return dummy;
    
    // console.log("left:",left_val);
    // console.log("midle:",midle);
    
    // console.log("right:",right_val)
}
console.log(findElementsIndex1toIndex2(a,2,4))
