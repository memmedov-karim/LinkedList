class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(9);
const b = new Node(9);
const c = new Node(9);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);
const g = new Node(9);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
const m = new Node(9);
const n = new Node(9);
const k = new Node(9);
const o = new Node(9);
m.next = n;
n.next = k;
k.next = o;
function adding(num1, num2) {
    let big, small;
    if (num1.length >= num2.length) {
      big = num1;
      small = num2;
    } else {
      big = num2;
      small = num1;
    }
    let carry = 0;
    big = big.split("").reverse().join("");
    small = small.split("").reverse().join("");
    small += "0".repeat(big.length - small.length);
    let x = big.length;
    let res = "";
    for (let i = 0; i < x; i++) {
      if (Number(big[i]) + Number(small[i]) + carry >= 10) {
        if (i !== x - 1) {
          res += (Number(big[i]) + Number(small[i]) + carry) % 10;
          carry = 1;
        } else {
          res += (Number(big[i]) + Number(small[i]) + carry).toString().split("").reverse().join("");
        }
      } else {
        if (i !== x - 1) {
          res += (Number(big[i]) + Number(small[i]) + carry);
          carry = 0;
        } else {
          res += (Number(big[i]) + Number(small[i]) + carry).toString().split("").reverse().join("");
        }
      }
    }
    return res.split("").reverse().join("");
}
const reverseString = (string) => {
    let returned = "";
    for(let i=string.length-1;i>-1;i--){
        returned+=string[i]
    }
    return returned
}
const creatNodeFromString = (nodeName,string) => {
    let dummy = new nodeName(parseInt(string[0]));
    let dummyHead = dummy;
    for(let i=1;i<string.length;i++){
        dummyHead.next = new nodeName(parseInt(string[i]));
        dummyHead = dummyHead.next;
    }
    return dummy;
}
// console.log(creatNodeFromString(Node,"1000000000000000000000000000001"))
const summ = (l1,l2) => {
    let current1 = l1;
    let current2 = l2;
    let first = "";
    let second = "";
    while(current1 && current2){
        first+=current1.val;
        second+=current2.val;
        current1 = current1.next;
        current2 = current2.next;
    }
    while(current1) {
        first+=current1.val;
        current1 = current1.next;
    };
    while(current2) {
        second+=current2.val;
        current2 = current2.next;
    }
    let res = reverseString(adding(reverseString(first)+reverseString(second)));
    // console.log(res)
    return creatNodeFromString(Node,res);
}
// console.log(summ(a,m));
// console.log(summ(a,m));
// console.log(adding("1000000000000000000000000000001","464"));
console.log("123".reversed())