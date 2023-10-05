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
const a = new Node1();
// const b = new Node1(2);
// const c = new Node1(2);
// const d = new Node1(3);
// a.next = b;
// b.next = c;
// c.next = d;
const m = new Node2();
// const n = new Node2(4);
// const k = new Node2(5);
// m.next = n;
// n.next = k;
function mergeSortedArrays(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
      } else {
        result.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      result.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      result.push(array2[j]);
      j++;
    }
    return result;
  }
const mergeList = (list1,list2) => {
    let current1 = list1;
    let current2 = list2;
    let ar1 = [];
    let ar2 = [];
    while(current1 && current2){
        ar1.push(current1.val);
        ar2.push(current2.val)
        current1 = current1.next;
        current2 = current2.next;
    }
    if(current1) ar1.push(current1.val);
    if(current2) ar2.push(current2.val);
    let resar = mergeSortedArrays(ar1,ar2);
    let NodeFirst = new Node1(resar[0]);
    let dummyHead = NodeFirst;

    for(let i = 1; i < resar.length; i++){
      dummyHead.next = new Node1(resar[i]);
      dummyHead = dummyHead.next;
    }
    return NodeFirst

}
console.log(mergeList(a,m));