class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class MyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index){
        let current = this.head;
        if(index<0 || index>this.length) return -1;
        if(current.next === null){
            return current.val
        }
        
        let count = 0;
        while(index>0){
            index--;
            current = current.next
        }
        return current.val
    }
    addAtHead(val){
        this.length++;
        let node = new Node(val);
        let current = this.head;
        node.next = current;
        this.head = node;
    }
    addAtTail(val){
        this.length++;
        let node = new Node(val);
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = node;
        this.tail = node;
    }
    addAtIndex(index,val){
        let node = new Node(val);
        if(index<0 || index>this.length) return;
        if(index === this.length){
            this.addAtTail(val);
            this.tail = node;
            return
        }
        this.length++;
        
        let current = this.head;
        let prev;
        let count = 0;
        while(count!==index-1){
            count++;
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    }
    deleteAtIndex(index){
        if(index<0 || index>this.length) return
        this.length--;
        let prev;
        let current = this.head;
        let count = 0;
        while(count<index && current){
            count++;
            prev = current;
            current = current.next;
        }
        prev.next = current.next
        this.tail = prev
    }
    
    
}
let obj = new MyLinkedList();

obj.addAtHead(2);
obj.addAtTail(4);
obj.addAtIndex(2,8)
obj.deleteAtIndex(1);
obj.deleteAtIndex(1)
console.log("Length:",obj.length);
console.log("Node:",obj.head);
console.log("Tail:",obj.tail);
console.log(obj.get(1))
// console.log("Nth index:",obj.get(1));